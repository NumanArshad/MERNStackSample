// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config=require("./config/db");
const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
const todoController = require("./controllers/todoController.js");
const QBankController = require("./controllers/QBankController.js");
const app = express();
const port = process.env.PORT || 3301;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app
    .route("/api/Accounts/SignIn",)
    .post(loginController.handleSignInAttempt)

  app
    .route("/api/Accounts/Register",)
    .post(registerController.handleRegister)

  app
    .route("/api/Accounts/getAll",)
    .get(loginController.getAllAccounts)
  app 
    .route("/api/Accounts/postAll",)
    .post(todoController.postAll)
  app
    .route("/api/Accounts/findAll",)
    .get(todoController.findAll)
  app
    .route("/api/Accounts/getOne/:userId",)
    .get(todoController.getOne)

  app
    .route("/api/Accounts/delOne/:userId",)
    .post(todoController.delOne)
  app
  .route("/api/Accounts/postQuestion",)
    .post(QBankController.saveQuestion)
  app
    .route("/api/Accounts/findQuestion",)
    .get(QBankController.findQuestion)
  app
    .route("/api/Accounts/getOne/:userId",)
    .get(QBankController.getQuestion)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
