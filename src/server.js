import express from 'express';
import cors from 'cors';
import path from 'path';

import { AccountRouter } from './routers/accounts-router.js';
import { WalletRouter } from './routers/wallets-router.js';

export const startServer = (port) => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/', express.static(path.join(path.resolve(), '/src/public')));

    app.use('/api/accounts', new AccountRouter());
    app.use('/api/wallets', new WalletRouter());

    app.listen(port);
}