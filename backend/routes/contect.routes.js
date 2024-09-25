const express = require("express");
const { createContact } = require("../controller/contact.controller");

const router = express.Router();

router.post("/contact", createContact);

module.exports = router;
