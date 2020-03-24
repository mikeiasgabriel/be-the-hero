const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//Rotas para ongs
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

//Rotas para incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

//Rota para profile
routes.get('/profile', ProfileController.index);

//Rota para login
routes.post('/session', SessionController.create);

module.exports = routes;