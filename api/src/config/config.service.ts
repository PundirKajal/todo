import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

/* getTypeOrmConfig: TypeOrmModuleOptions    */
export const getTypeOrmConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  };
};
