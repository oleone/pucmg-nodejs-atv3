export class WalletController {

    /** @type import('../services/wallets-service').WalletService */
    service;

    constructor() { }

    getAll = async (req, res) => {
        try {
            let wallets = await this.service.getAll();
            res.send(wallets).status(200);
        } catch (error) {
            res.send(error).status(500);
        }
    }

    create = async (req, res) => {
        try {
            let data = req.body;
            let created = await this.service.create(data);
            res.send(created).status(201);
        } catch (error) {
            res.send(error).status(500);
        }
    }

    update = async (req, res) => {
        // let updated
    }
}