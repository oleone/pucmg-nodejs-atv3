import bcrypt from 'bcryptjs';
import * as uuid from 'uuid';

export class Account {
    id;
    fullName;
    wallets;
    password;
    salt;
    createdAt;
    updatedAt;
    deletedAt;

    constructor(data = {}) {
        Object.assign(this, data);
        this.id = uuid.v4();
        this.wallets = [];
        this.salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, this.salt);
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.deletedAt = null;
    }

    isPasswordValid(password) {
        return bcrypt.compare(password, this.password)
    }
}