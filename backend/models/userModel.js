// Model defines what type of data is user is going to have ...

const mongoose = require('mongoose'); // to create our "userMOdel"
const bcrypt = require('bcryptjs'); // to incrypt our --data

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        pic: {
            type: String,
            required: true,
            default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
        },
        isAdmin: { //just in case if we need
            type: Boolean,
            required: true,
            default: true,
        },
    },
    {
        timestamp: true,
    }
);

//--for encryping password--
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//--for decrypting password--
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
