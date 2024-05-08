const express = require("express");
const {
  sendMessage,
  getMessagesBySender,
  getMessagesByReceiver,
  updateMessageReadStatus,
} = require("../Controllers/messagesController");

const router = express.Router();

router.post("/send", sendMessage);
router.get("/sender/:senderId", getMessagesBySender);
router.get("/receiver/:receiverId", getMessagesByReceiver);
router.put("/update/:messageId", updateMessageReadStatus);


module.exports = router;
