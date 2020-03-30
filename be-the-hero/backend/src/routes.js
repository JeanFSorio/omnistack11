const express = require('express');
const { celebrate, Segments, Joi } = require ('celebrate');

const routes = express.Router();
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const CelebrateController = require ('./controllers/CelebrateController');



routes.post('/session', CelebrateController.sessionPost(), SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', CelebrateController.ongsPost(), OngController.create);



  routes.get('/incidents', CelebrateController.incidentsGet(), IncidentsController.index);
  
routes.post('/incidents', CelebrateController.incidentsPost(), IncidentsController.create);

routes.delete('/incidents/:id', CelebrateController.incidentsDelete(), IncidentsController.delete);


routes.get('/profile', CelebrateController.profileGet(), ProfileController.index);

module.exports = routes;