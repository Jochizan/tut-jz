const express = require('express');
const router = express.Router();

const {
  getAllBootcamps,
  createNewBootcamp,
  updateBootcampById,
  deleteBootcampById
} = require('../controllers/bootcampControllers');

// @route - /api/v1/bootcamps/
router.route('/').get(getAllBootcamps).post(createNewBootcamp);

// @route - /api/v1/bootcamps/someid
router.route('/:id').put(updateBootcampById).delete(deleteBootcampById);

module.exports = router;
