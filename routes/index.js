const route = require('express').Router();

route.get('/', (req,res) => {
    res.json({
        message: "Home page"
    })
});

route.get('/invites', (req, res) => {
    res.json({
        message: "invite"
    })
})

module.exports = route;