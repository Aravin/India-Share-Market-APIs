import express from 'express';
import axios from 'axios';
import { config } from '../../../config';
import { constants } from '../../../constants';

export const quote = async (req: express.Request, res: express.Response) => {
    if (!req.query.symbol) {
        res.status(400).send('Symbol is missing');
    }

    const path = `${config.nse.baseURL}${constants.api.equity.quote}${req.query.symbol}`;

    try {
        const response = await axios.get(path);

        return res.send(response.data);
    }
    catch (err: unknown) {
        return res.status(500).send((err as Error).message);
    }
};
