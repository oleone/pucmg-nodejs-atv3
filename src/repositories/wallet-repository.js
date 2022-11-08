import db from '../config/db.js';
import { walletSerializer } from '../serializers/wallet.js';

export class WalletRepository {
    constructor() { }

    getAll = async () => {
        return await db('wallets')
            .select('*').then((res) => { return res })
            .catch(err => { throw err });
    }

    getById = async (id) => {
        return await db('wallets')
            .where({ id })
            .first()
            .returning('*')
            .then((res) => { return walletSerializer(res) })
            .catch(err => { throw err })
    }

    create = async (wallet) => {
        return await db('wallets')
            .insert(wallet)
            .returning('*')
            .then((res) => { return walletSerializer(res[0]) })
            .catch(err => { throw err })
    }

    update = async (id, wallet) => {
        return await db('wallets')
            .where({ id })
            .update(wallet)
            .returning('*')
            .then((res) => { return walletSerializer(res[0]) })
            .catch(err => { throw err })
    }

    remove = async (id) => {
        return await db('wallets')
            .where({ id })
            .del()
            .then((res) => { return walletSerializer(res) })
            .catch(err => { throw err })
    }
}