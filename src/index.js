import config from './config/index.js';
import { startServer } from "./server.js";

startServer(config.port);