const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  editPassword,
  deleteUser,
  loginUser,
  registerUser,
  followUser,
  unfollowUser,
} = require("../controllers/userController");
const {
  uploadPost,
  getPostById,
  getAllPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/postController");
const {
  createConversation,
  getUserConversation,
  getConversationBetweenTwoUsers,
} = require("../controllers/conversationController");
const {
  sendMessage,
  getUserMessage,
} = require("../controllers/messageController");

//User Controller
router.get("/users/getAllUsers", getAllUsers);
router.post("/users/register", registerUser);
router.post("/users/login", loginUser);

//get user info by calling this with id as parameter
router.get("/users/getUser/:id", getUser);

//allow User to edit password.  (passing id as parameter)
router.put("/users/editPassword/:id", editPassword);
router.delete("/users/deleteUser", deleteUser);
router.put("/users/:id/follow", followUser);
router.put("/users/:id/unfollow", unfollowUser);

router.post("/posts/uploadPost", uploadPost);
router.get("/posts/getPostById/:id", getPostById);
router.get("/posts/getAllPost", getAllPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.put("/posts/:id/like", likePost);

//Conversation Controller
router.post("/conversations/createConversation", createConversation);
router.get("/conversations/getUserConversation/:id", getUserConversation);
router.get(
  "/conversations/getConversationBetweenTwoUsers/:firstUserId/:secondUserId",
  getConversationBetweenTwoUsers
);

//Message Controller
router.post("/messages/sendMessage", sendMessage);
router.get("/messages/:ConversationId", getUserMessage);

module.exports = router;
