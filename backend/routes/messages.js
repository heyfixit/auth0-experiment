const router = require('express').Router();
const Messages = require('../models/messages');

router.get('/', async (req, res) => {
  const messages = await Messages.get();

  if (messages) {
    return res.status(200).json(messages);
  }
});

router.post('/', async (req, res) => {
  const { body: newMessage } = req;

  newMessage.user_id = req.user.dbInfo.id;

  const createdMessage = await Messages.insert(newMessage);
  return res.status(200).json(createdMessage);
});

module.exports = router;
