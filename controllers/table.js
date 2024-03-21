const Table = require('../models/table.js');

exports.getTableData = async (req, res) => {
    try {
        const data = await Table.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json(data);
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.postFormData = async (req, res) => {
    try {
        const { username, preferred_code_language, stdin, source_code } = req.body;
        await Table.create({
            username,
            preferred_code_language,
            stdin,
            source_code
        });
        res.json({ data: 'received' });
        } 
    catch (err) {
        console.error('Error while saving data', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
