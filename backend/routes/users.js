const router = require('express').Router();
const Users = require('../models/users');

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await Users.getById(id);
  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: 'User does not exist' });
  }
});

router.post('/', async (req, res) => {
  const { body: user } = req;

  // this is attached via the jwtCheck middleware
  const currentUserId = req.user.sub;

  const foundUser = await Users.find()
    .where({ auth0_id: currentUserId })
    .first();
  if (foundUser) {
    return res.status(200).json(foundUser);
  }

  user.auth0_id = currentUserId;

  const newUser = await Users.insert(user);

  return res.status(201).json(newUser);
});

module.exports = router;
