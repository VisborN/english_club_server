const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
const FileStore = require('session-file-store')(session);
const userRouter = require('./routers/userRouter');
const userTaskRouter = require('./routers/userTaskRouter');
const taskRouter = require('./routers/taskRouter');
const uploadRouter = require('./routers/uploadRouter');

require('dotenv').config();

const app = express();
app.use(express.json({ extended: true }));
const PORT = process.env.PORT || 3001;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/user', userRouter);
app.use('/usertask', userTaskRouter);
app.use('/tasks', taskRouter);
app.use('/upload', uploadRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
