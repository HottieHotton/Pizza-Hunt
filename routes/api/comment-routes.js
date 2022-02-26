const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');

//Add Comment
router.route('/:pizzaId').post(addComment);

router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;