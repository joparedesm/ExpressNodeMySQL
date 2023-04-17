import { config } from 'dotenv';

config();

export default {
    testKey: process.env.TEST_KEY,
    db_password: process.env.DB_PASSWORD
};
