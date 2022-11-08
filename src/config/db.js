import knex from 'knex';
import knexfile from './knexfile.mjs';
const env = process.env.NODE_ENV || 'development';

export default knex(knexfile[env]);
