const router = require('express').Router();

const userRoutes = require('./userController');
const discussionRoutes = require('./discussionController');

router.use('/users', userRoutes);
router.use('/posts', discussionRoutes);

module.exports = router;