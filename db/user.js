const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-users');

const User = conn.define('user', {
  name: STRING
});

const syncAndSeed = async () => {
  await conn.sync({force: true});
  await Promise.all([
    User.create({name: 'moe'}),
    User.create({name: 'larry'}),
    User.create({name: 'lucy'}),
  ]);
};

module.exports = {
  conn,
  User,
  syncAndSeed
}