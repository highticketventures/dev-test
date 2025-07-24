import { body, param, validationResult, matchedData } from 'express-validator';
import passport from './../providers/Passport';
import Requests from './../models/Requests';
import express from 'express';

export const app = express.Router();


/**
 * GET /api/v1/requests
 * 
 */
app.get('/requests', [
    passport.authenticate('jwt', { session: false })
], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        return res.json(
            await Requests.findAll()
        );
    } catch (error) {
        return next(error);
    }
});


/**
 * GET /api/v1/requests/:requestsID
 * 
 */
app.get('/requests/:requestsID', [
    passport.authenticate('jwt', { session: false }),
    param('requestsID').exists().isUUID(),
], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        return res.json(
            await Requests.findByPk(req.params.requestsID, {
                rejectOnEmpty: true
            })
        );
    } catch (error) {
        return next(error);
    }
});


/**
 * POST /api/v1/requests
 * 
 * Create Requests
 */
app.post('/requests', [
    passport.authenticate('jwt', { session: false }),
    body('name').exists().isString(),
], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() });
        const data = matchedData(req);

        const create: any = {
            name: data.name,
        };

        const requests = await Requests.create(create);

        return res.json(requests);
    } catch (error) {
        return next(error);
    }
});


/**
 * POST /api/v1/requests/:requestsID
 * 
 * Update Requests
 */
app.post('/requests/:requestsID', [
    passport.authenticate('jwt', { session: false }),
    param('requestsID').exists().isUUID(),
    body('name').exists(),
], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.mapped() });
        const data = matchedData(req);

        await Requests.update(data, {
            where: {
                id: req.params.requestsID,
            }
        });

        return res.json(await Requests.findByPk(req.params.requestsID));
    } catch (error) {
        return next(error);
    }
});



/**
 * DELETE /api/v1/requests/:requestsID
 * 
 * Delete Requests
 */
app.delete('/requests/:requestsID', [
    passport.authenticate('jwt', { session: false }),
    param('requestsID').exists().isUUID(),
], async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        await Requests.destroy({
            where: {
                id: req.params.requestsID,
            }
        });

        return res.json({ id: req.params.requestsID });
    } catch (error) {
        return next(error);
    }
});
