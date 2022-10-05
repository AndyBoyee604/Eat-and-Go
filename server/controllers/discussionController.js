const { Post } = require('../models')

module.exports = {
    async getDiscussions(req, res) {
        const discussions = await Post.findAll();

        if (!discussions) {
            return res.status(400).json({ message: 'No discussions found!' })
        }
        res.json(discussions);
    },
}