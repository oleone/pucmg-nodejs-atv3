export class WalletService {
    repository;

    constructor() { }

    getAll = async () => {
        return this.repository.getAll();
    }

    create = async (payload) => {
        return this.repository.create(payload);
    }
}