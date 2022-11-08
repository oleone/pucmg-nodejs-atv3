import { Router } from 'express';
import { AccountController } from '../controllers/accounts-controller.js';
import { AccountService } from '../services/accounts-service.js';
import { AccountRepository } from '../repositories/account-repository.js';

export class AccountRouter {
    constructor() {
        const route = Router();

        const accountRepository = new AccountRepository();
        const accountService = new AccountService(accountRepository);

        /** @type import("../controllers/account-repository").AccountRepository */
        const controller = new AccountController(accountService);

        route.get('/', controller.getAll);
        route.post('/', controller.create);
        route.get('/:id', controller.getById);
        route.put('/:id', controller.update);
        route.delete('/:id', controller.delete);

        return route;
    }
}