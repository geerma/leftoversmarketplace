const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

let Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation;
