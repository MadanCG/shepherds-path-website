const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');
const {validateToken} = require('../middleware/authMiddleware');
// Route to get all sheep
router.get('/', shopController.getSheep);

// Route to add a new sheep
router.post('/', shopController.addSheep);

// Route to update a sheep by ID
router.put('/:id', shopController.updateSheep);

// Route to delete a sheep by ID
router.delete('/:id', shopController.deleteSheep);

module.exports = router;
