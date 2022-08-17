import express from 'express';
import { router } from './apis/nse/router';
const app = express();
const port = process.env.PORT || 3000;

app.use('/nse', router);

app.get('/', (req, res) => {
    res.send('Share Market API Service is running');
});

app.listen(port, () => {
    console.log(`Share Market API service listening on port ${port}`);
});

app.use((err: unknown, req: express.Request, res: express.Response) => {
    const error = err as Error;
    console.error(error.stack);
    res.status(500).send(error.message);
});
