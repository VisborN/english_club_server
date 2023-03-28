const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

function myAge(str) {
  const arr = str.split('-');
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(+arr[0], +arr[1], +arr[2]); // Дата рождения
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); // ДР в текущем году
  let age;
  // Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear();
  // Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age -= 1;
  }
  return age;
}

router.post('/signup', async (req, res) => {
  const {
    fullName, nickname, age, email, password,
  } = req.body;
  console.log(req.body);
  if (fullName && email && password && nickname && age) {
    try {
      const childAge = myAge(age);
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          fullName, password: await bcrypt.hash(password, 7), nickname, age: childAge, points: 0, status: 10, photo: '',
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/counselor/signup', async (req, res) => {
  const {
    fullName, nickname, email, password,
  } = req.body;
  if (fullName && email && password && nickname) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          fullName, password: await bcrypt.hash(password, 7), nickname, status: 11, photo: '',
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/moder/signup', async (req, res) => {
  const {
    fullName, nickname, email, password,
  } = req.body;
  if (fullName && email && password && nickname) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          fullName, password: await bcrypt.hash(password, 7), nickname, status: 12, photo: '',
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/check', async (req, res) => {
  try {
    if (req.session.user) {
      const currUser = await User.findOne({ where: { id: req.session.user.id } });
      const sessionUser = JSON.parse(JSON.stringify(currUser));
      delete sessionUser.password;
      req.session.user = sessionUser;
      res.json(sessionUser);
    }
    res.sendStatus(401);
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid').sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.patch('/updateprofile/', async (req, res) => {
  try {
    await User.update(
      {
        fullName: req.body.fullName,
        age: req.body.age,
        nickname: req.body.nickname,
        email: req.body.email,
      },
      { where: { id: req.session.user.id } },
    );
    const one = await User.findOne({ where: { id: req.session.user.id } });
    const sessionUser = JSON.parse(JSON.stringify(one));
    delete sessionUser.password;
    req.session.user = sessionUser;
    return res.json(sessionUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = router;
