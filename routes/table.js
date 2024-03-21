const express = require('express');
const tableController = require('../controllers/table.js');

const router = express.Router();
router.use(express.json());

router.get('/tableView', tableController.getTableData);
router.post('/tableData', tableController.postFormData);

module.exports= router;