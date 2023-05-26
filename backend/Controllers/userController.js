const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel')
const generateToken = require('../Util/generateToken')

const { cloudinary } = require('../Config/cloudinaryConfig')
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    mobile,
    password,
    address,
    city,
    state,
    pin,
    District,
    country,
    profile
  } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('user Already Exists')
  }

  const image = await cloudinary.uploader.upload(profile, {
    folder: "LeEYE-T profile pic",
  });
  const user = await User.create({
    name,
    email,
    mobile,
    password,
    address,
    city,
    state,
    pin,
    District,
    country,
    profile: {
      public_id: image.public_id,
      url: image.secure_url
    },
  })
  if (user) {
    res.status(201).json({
      name,
      email,
      mobile,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Eror('Error Occured!')
  }
})

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid email or password!')
  }
})

const userDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user)
  res.json(user)
})

const editProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user)
  const Data = req.body

  if (user) {
    user.name = Data.name || user.name
    user.email = Data.email || user.email
    user.mobile = Data.mobile || user.mobile
    if (Data.password) {
      user.password = Data.password;
    }
    user.address = Data.addressName || user.address;
    user.city = Data.city || user.city;
    user.state = Data.state || user.state;
    user.pin = Data.pin || user.pin;
    user.District = Data.District || user.District;
    user.country = Data.country || user.country;
    if (Data.profile) {
      const image = await cloudinary.uploader.upload(Data.profile, {
        folder: "LeEYE-T profile pic",
      });

      user.profile = {
        public_id: image.public_id,
        url: image.secure_url,
      };
    }
    const updatedUser = await user.save();
    res.json(updatedUser)
  } else {
    res.status(404);
    throw new Error("User Not Found!");
  }
})


module.exports = {
  registerUser,
  login,
  userDetails,
  editProfile
}