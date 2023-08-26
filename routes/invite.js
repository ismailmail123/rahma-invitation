const inviteRoute = require( 'express').Router();
const InviteController = require('../controllers/InviteControllers');

inviteRoute.get('/', InviteController.get);
inviteRoute.get('/:id', InviteController.getId);
inviteRoute.post('/:id', InviteController.add);
inviteRoute.put('/:id', InviteController.update);
inviteRoute.delete('/:id', InviteController.delete);

module.exports = inviteRoute;