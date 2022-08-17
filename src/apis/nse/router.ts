import express from 'express';
import { status } from './status';
import { quote } from './equity/quote';
import { trade } from './equity/trade';
import { allIndices } from './indices/all';
import { indicesInfo } from './indices/info';
export const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    // logic
    next();
});

router.get('/status', (req, res) => {
    status(req, res);
});

// EQ
router.get('/eq/quote', (req, res) => {
    quote(req, res);
});

router.get('/eq/trade', (req, res) => {
    trade(req, res);
});

// INDEX
router.get('/indices/all', (req, res) => {
    allIndices(req, res);
});

router.get('/indices/info', (req, res) => {
    indicesInfo(req, res);
});

router.all('/*', (req, res) => {
    res.status(404).send('Not Found');
});
