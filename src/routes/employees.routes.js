import { Router } from 'express';
import config from '../config.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World! \n Dummy key: ' + config.testKey);
});

export default router;