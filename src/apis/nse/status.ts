import express from 'express';
import axios from 'axios';
import { config } from '../../config';
import { constants } from '../../constants';

export const status = async (req: express.Request, res: express.Response) => {

    const path = `${config.nse.baseURL}${constants.api.status}`;

    try {
        const response = await axios.get(path);

        return res.send(response.data);
    }
    catch (err: unknown) {
        return res.status(500).send((err as Error).message);
    }
};
