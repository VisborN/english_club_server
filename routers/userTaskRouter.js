const express = require('express');
const { Tasks, ChildTasks, User } = require('../db/models');

const router = express.Router();

router.get('/counselor', async (req, res) => {
  try {
    const tasks = await Tasks.findAll({ where: { author: req.session.user.id } });
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.post('/new', async (req, res) => {
  const { title, body, points } = req.body;
  try {
    const oneTask = await Tasks.create({
      title, body, points, author: req.session.user.id,
    });
    res.json(oneTask);
  } catch (error) {
    console.log(error);
  }
});

router.get('/counselor/waiting', async (req, res) => {
  try {
    const tasks = await ChildTasks.findAll({
      where: { stateId: 7 },
      include: [{ model: User }, { model: Tasks, where: { author: req.session.user.id } }],
    });
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.post('/counselor/confirm/:id', async (req, res) => {
  try {
    const { userId, points } = req.body;
    const { id } = req.params;

    const currUser = await User.findOne({ where: { id: userId } });
    console.log(currUser.dataValues.points, 'preeeeeeeeeeeeeeeeeeeeeeev');
    currUser.dataValues.points += points;
    console.log(currUser.dataValues.points, 'nooooooooooooooooooooooowwwwwwwwwwwwwwwww');

    await User.update({
      points: currUser.dataValues.points,
    }, { where: { id: userId } });

    await ChildTasks.update({
      stateId: 8,
    }, { where: { id } });

    const tasks = await ChildTasks.findAll({
      where: { stateId: 7 },
      include: [{ model: User }, { model: Tasks, where: { author: req.session.user.id } }],
    });

    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.get('/counselor/notconfirm/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ChildTasks.update({
      stateId: 9,
    }, { where: { id } });
    const tasks = await ChildTasks.findAll({
      where: { stateId: 7 },
      include: [{ model: Tasks, where: { author: req.session.user.id } }],
    });
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.get('/del/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Tasks.destroy({
      where: { id },
    });

    const tasks = await Tasks.findAll({ where: { author: req.session.user.id } });
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.get('/child', async (req, res) => {
  try {
    const tasks = await ChildTasks.findAll(
      {
        where: { userId: req.session.user.id },
        include: [{ model: Tasks, include: [{ model: User }] }],
      },
    );
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.get('/child/waiting/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ChildTasks.update({
      stateId: 7,
    }, { where: { id } });
    const tasks = await ChildTasks.findAll(
      {
        where: { userId: req.session.user.id },
        include: [{ model: Tasks, include: [{ model: User }] }],
      },
    );
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

router.get('/child/cancel/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ChildTasks.update({
      stateId: 10,
    }, { where: { id } });
    const tasks = await ChildTasks.findAll(
      {
        where: { userId: req.session.user.id },
        include: [{ model: Tasks, include: [{ model: User }] }],
      },
    );
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
