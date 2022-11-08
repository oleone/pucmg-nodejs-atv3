import { Router } from 'express';
import { WalletController } from '../controllers/wallets-controller.js';
import { WalletService } from '../services/wallets-service.js';
import { WalletRepository } from '../repositories/account-repository.js';

export class WalletRouter {
    constructor() {
        const route = Router();

        const walletRepository = new WalletRepository();
        const accountService = new WalletService(walletRepository);

        /** @type import("../controllers/account-repository").WalletRepository */
        const controller = new WalletController(accountService);

        route.get('/', controller.getAll);
        route.post('/accounts/:accountId/wallets', controller.create);
        route.get('/:id', controller.getById);
        route.put('/:id', controller.update);
        route.delete('/:id', controller.delete);

        return route;
    }
}