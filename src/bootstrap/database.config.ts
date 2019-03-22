import * as dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
const config = {
  database: DB_NAME || 'DATABASE NAME',
  host: DB_HOST || 'DATABASE HOST',
  entities: ['src/**/*.entity{.ts,.js}'],
  port: 5432,
  username: DB_USERNAME || 'DATABASE USERNAME',
  password: DB_PASSWORD || 'DATABASE PASSWORD',
  synchronize: true,
};

export { config };
