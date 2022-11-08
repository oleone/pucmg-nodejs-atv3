import db from '../config/db.js';
import { accountSerializer } from '../serializers/account.js';

export class AccountRepository {
    constructor() { }

    getAll = async () => {
        return await db('accounts')
            .select('*').then((res) => { return res })
            .catch(err => { throw err });
    }

    getById = async (id) => {
        return await db('accounts')
            .where({ id })
            .first()
            .returning('*')
            .then((res) => { return accountSerializer(res) })
            .catch(err => { throw err })
    }

    create = async (account) => {
        return await db('accounts')
            .insert(account)
            .returning('*')
            .then((res) => { return accountSerializer(res[0]) })
            .catch(err => { throw err })
    }

    update = async (id, account) => {
        return await db('accounts')
            .where({ id })
            .update(account)
            .returning('*')
            .then((res) => { return accountSerializer(res[0]) })
            .catch(err => { throw err })
    }

    remove = async (id) => {
        return await db('accounts')
            .where({ id })
            .del()
            .then((res) => { return accountSerializer(res) })
            .catch(err => { throw err })
    }
}