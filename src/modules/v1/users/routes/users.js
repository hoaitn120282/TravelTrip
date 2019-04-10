const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
const passportConfig = require("./config/passport");
console.log("test");
process.exit();
router.get("/login", userController.getLogin);
router.post("/login", userController.postLogin);
router.get("/logout", userController.logout);
router.get("/forgot", userController.getForgot);
router.post("/forgot", userController.postForgot);
router.get("/reset/:token", userController.getReset);
router.post("/reset/:token", userController.postReset);
router.get("/signup", userController.getSignup);
router.post("/signup", userController.postSignup);
router.get("/contact", contactController.getContact);
router.post("/contact", contactController.postContact);
router.get(
  "/account",
  passportConfig.isAuthenticated,
  userController.getAccount
);
router.post(
  "/account/profile",
  passportConfig.isAuthenticated,
  userController.postUpdateProfile
);
router.post(
  "/account/password",
  passportConfig.isAuthenticated,
  userController.postUpdatePassword
);
router.post(
  "/account/delete",
  passportConfig.isAuthenticated,
  userController.postDeleteAccount
);
router.get(
  "/account/unlink/:provider",
  passportConfig.isAuthenticated,
  userController.getOauthUnlink
);

module.exports = router;
