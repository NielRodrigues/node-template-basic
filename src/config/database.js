// eslint-disable-next-line import/no-import-module-exports, import/no-unresolved
import "dotnev/config";

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
