import express from 'express';
import axios from 'axios';
import { config } from '../../../config';
import { constants } from '../../../constants';

export const indicesInfo = async (req: express.Request, res: express.Response) => {
    if (!req.query.index) {
        res.status(400).send('Index is missing');
    }

    const path = `${config.nse.baseURL}${constants.api.indices.info}${(req.query.index as string).toUpperCase()}`;

    console.log(path);

    try {
        const response = await axios.get(path);

        return res.send(response.data);
    }
    catch (err: unknown) {
        return res.status(500).send((err as Error).message);
    }
};
