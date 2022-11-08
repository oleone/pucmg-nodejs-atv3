export class AccountController {

    /** @type import("../services/accounts-service").AccountService */
    service;

    constructor(_service) {
        this.service = _service;
    }


    getAll = async (req, res) => {
        try {
            let account = await this.service.getAll();

            res.send(account).status(200);
        } catch (error) {
            res.send(error).status(500);
        }
    }

    create = async (req, res) => {
        try {
            let payload = req.body;

            if (!payload.fullName || !payload.email || !payload.password) {
                return res.status(400).json({
                    message: 'Payload is incorrect',
                    status: 400,
                })
            }

            let walletCreated = await this.service.create(payload);

            res.send(walletCreated).status(200);
        } catch (error) {
            res.send(error).status(500);
        }
    }

    getById = async (req, res) => {
        try {
            const id = req.param.id;

            if (!id) {
                res.status(403);
            }

            const account = await this.service.getById(id);
            res.send(account).status(200);
        } catch (error) {
            res.send(error).status(500);
        }
    }

    update = async (req, res) => {
        try {
            const payload = req.body;
            const id = req.param.id;

            const updated = await this.service.update(id, payload);
            res.send(updated).status(201);
        } catch (error) {
            res.send(error).status(500);
        }
    }

    delete = async (req, res) => {
        try {

        } catch (error) {

        }
    }
}