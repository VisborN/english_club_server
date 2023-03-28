const express = require('express');
const fileMiddleware = require('../middlewares/file');
const { User } = require('../db/models');

const router = express.Router();

router.post('/avatar', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    const imgAvatar = await User.update(
      { photo: req.file?.path },
      { where: { id: req.session.user.id } },
    );
    req.session.user = { ...req.session.user, photo: req.file?.path };
    res.json({ path: `${req.file.path}` });
    if (req.file) {
      res.json({ path: `${req.file.path}` });
    }
  } catch (error) {
    console.log('error');
  }
});

module.exports = router;
