import { Account } from '../models/account.js';

export class AccountService {

    /** @type { import("../respositories/account-repository").AccountRepository } */
    repository;

    constructor(_repository) {
        this.repository = _repository;
    }

    getAll = async () => {
        return await this.repository.getAll();
    }

    getById = async (id) => {
        return await this.repository.getById(id);
    }

    create = async (data) => {
        try {
            const account = new Account({
                fullName: data.fullName,
                email: data.email,
                password: data.password
            })

            return await this.repository.create(account);
        } catch (err) {
            throw err;
        }
    }

    update = async (id, data) => {
        try {
            const account = await this.repository.getById(id);

            // TODO: UPDATE THIS FIELDS WITH DATA

            return await this.repository.update(account);
        } catch (err) {
            throw err;
        }
    }

    delete = async (id) => {
        try {
            // TODO: A CONTA NÃO PODE SER DELETADA E SIM INATIVADA
        } catch (err) {
            throw err;
        }
    }
}