import { Router } from 'express';
import config from '../config.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Get employees! \n Dummy key: ' + config.testKey);
});

router.post('/', (req, res) => res.send('Create employee!'));

router.put('/', (req, res) => res.send('Update employee!'));

router.delete('/', (req, res) => res.send('Delete employee!'));

export default router;