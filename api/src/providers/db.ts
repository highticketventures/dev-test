import { Sequelize } from 'sequelize-typescript';
import pg from 'pg';

if (process.env.NODE_ENV === 'test') {
    process.env.DB_USERNAME = 'postgres';
    process.env.DB_PASSWORD = 'supersecret';
    process.env.DB_DATABASE = 'test';
}

const sequelize = new Sequelize({
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    dialectModule: pg,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
sequelize.authenticate().then(() => (process.env.NODE_ENV !== 'test') ? console.log(`* DB Connected (${process.env.NODE_ENV})`) : null);

export default sequelize;
