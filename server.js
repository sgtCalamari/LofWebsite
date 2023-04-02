import express from 'express';
import cors from 'cors';
import path from 'path';
import handler from './handler.js'

const app = express();
app.use(cors());

/*
const routes = require('./routes');
app.use('/rooms', routes.rooms);
app.use('/devices', routes.devices);
*/

const appPath = path.join(__dirname, 'client', 'build');
app.use(express.static(appPath));
handler(app, appPath);

const port = process.env.PORT;
app.listen(port, () => {
  console.log('NodeJS Express server listening on http://localhost:' + port);
});