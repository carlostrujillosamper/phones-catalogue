const express = require('express');
const router  = express.Router();

const phoneList = require("../phones.json");

router.get('/phones', (req, res) => {
    res.status(200).json(phoneList)
});

module.exports = router;
