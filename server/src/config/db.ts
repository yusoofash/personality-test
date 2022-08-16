import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:', {
  logging: process.env.NODE_ENV !== 'test'
});

export default sequelize;
