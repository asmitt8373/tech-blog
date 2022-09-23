const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//     secret: 'Super secret secret',
//     cookie: {}
// }
// sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
      sequelize.sync({force: false})
    });
//   });