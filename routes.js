const express = require('express')
const routes = express.Router();

const planets = [
    { name: "Mercury", color: "Gray"},
    { name: "Venus", color: "Yellow"},
    { name: "Earth", color: "Blue"},
    { name: "Mars", color: "Red"}
];

routes.get('/planets', (req, res) => {
    res.send(planets);
});

routes.get('/planets/:name', (req, res) => {
    const planet = planets.find(planet => planet.model === req.params.model);
    if (planet) {
        res.send(planet);
    } else {
        res.sendStatus(404).send('R.I.P Planet Pluto');
    }
});

routes.post('/planets', (req, res) => {
    const newPlanet = {
        name: req.body.name,
        color: req.body.color
    }
    planets.push(newPlanet);
    res.status(201).send(newPlanet)
});

routes.get('/planets-limited', (req, res) => {
    const filterPlanets = planets.slice(0, parseInt(req.query.limit));
    res.send(filterPlanets);
});

module.exports = routes;