const express = require('express');
const { Tasks, User, ChildTasks } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.findAll({
      include: [{ model: ChildTasks }, { model: User }],
    });
    tasks.forEach((el) => delete el.User.dataValues.password);
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.post('/search', async (req, res) => {
  const currTitle = req.body.search;
  try {
    const tasks = await Tasks.findAll({
      include: [{ model: ChildTasks }, { model: User }],
    });
    // eslint-disable-next-line max-len
    const currTasks = tasks.filter((el) => el.title.toLowerCase().includes(currTitle.toLowerCase()));
    res.json(currTasks);
  } catch (error) {
    console.log(error);
  }
});

router.get('/child/new/:id', async (req, res) => {
  try {
    const newTask = await ChildTasks.create({
      userId: req.session.user.id, taskId: req.params.id, stateId: 10,
    });
    res.json(newTask);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
