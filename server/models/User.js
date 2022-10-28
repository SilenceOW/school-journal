import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import Status from "./Status.js";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: String,
        lastName: String,
        middleName: String,
        dateOfBirth: Date,
        phoneNumber: String,
        school: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'School',
            default: null
        },
        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
            default: null
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Role'
            }
        ],
        status: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Status'
        },
        isBanned: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
)

// Static methods

UserSchema.statics.signup = async function(username, email, password) {
    // validation
    if (!username || !email || !password) throw Error('Все поля должны быть заполнены')
    if (!validator.isEmail(email)) throw Error('Неккоректный e-mail')
    if (password.length < 8) throw Error('Пароль должен состоять как минимум из 8 символов')

    const isUsernameInUse = await this.findOne({ username });
    const isEmailInUse = await this.findOne({ email })
    if (isEmailInUse) throw Error('Данный e-mail уже используется');
    if (isUsernameInUse) throw Error('Данное имя пользователя уже используется')

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const status = await Status.findOne({ name: "User" });

    return await this.create({username, email, password: hash, status});
}

UserSchema.statics.login = async function(username, password) {
    if (!username || !password) throw Error('Все поля должны быть заполнены');

    let user = await this.findOne({ username });
    if (!user) user = await this.findOne({ email: username });
    if (!user) throw Error("Неверные данные");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw Error("Неверные данные");

    return user;
}

UserSchema.statics.getUserData = async function(_id) {
    if (!_id) throw Error("Bad request");
    return await this.findOne({ _id }, { _id: 0, password: 0 });
}

UserSchema.statics.updateUserData = async function(_id, data) {
    if (!(_id && data)) throw Error("Bad request");
    const user = this.findOne({ _id });
    if (!user) throw Error("Данного пользователя не существует");
    
}

export default mongoose.model('User', UserSchema);