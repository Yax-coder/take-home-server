const Message = require("../Models/messageModel");

const sendMessage = async (req, res) => {
  try {
    const { content, receiver, message, isRead, sender, subject } = req.body;
    const newMessage = new Message({
      content,
      receiver,
      message,
      isRead,
      sender,
      subject,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getMessagesBySender = async (req, res) => {
  try {
    const senderId = req.params.senderId;
    const messages = await Message.find({ sender: senderId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessagesByReceiver = async (req, res) => {
  try {
    const receiverId = req.params.receiverId;
    const messages = await Message.find({ receiver: receiverId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateMessageReadStatus = async (req, res) => {
  const { messageId } = req.params;
  const { isRead } = req.body;

  try {
    const updatedMessage = await Message.findOneAndUpdate(
      { _id: messageId },
      { isRead },
      { new: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json(updatedMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  sendMessage,
  getMessagesBySender,
  getMessagesByReceiver,
  updateMessageReadStatus,
};
