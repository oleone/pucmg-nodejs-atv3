import * as uuid from 'uuid';

export class Wallet {
    id;
    userId;
    balance;
    createdAt;
    updatedAt;
    deletedAt;

    constructor(data = {}) {
        Object.assign(this, data);
        id = uuid.v4();
    }
}