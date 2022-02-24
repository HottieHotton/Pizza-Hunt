const router = require('express').Router();
const { addComment , removeComment} = require('../../controllers/comment-controller');

//Add Comment
router.route('/:pizzaId').post(addComment);

//Delete Comment
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;