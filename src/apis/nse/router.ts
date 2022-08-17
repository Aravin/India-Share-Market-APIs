import express from 'express';
import { status } from './status';
import { quote } from './equity/quote';
import { trade } from './equity/trade';
export const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    // logic
    next();
});

router.get('/status', (req, res) => {
    status(req, res);
});

router.get('/quote', (req, res) => {
    quote(req, res);
});

router.get('/trade', (req, res) => {
    trade(req, res);
});

router.all('/*', (req, res) => {
    res.status(404).send('Not Found');
});
