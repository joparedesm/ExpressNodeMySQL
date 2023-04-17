import config from '../config.js';

export const getEmployees = (req, res) => {
    res.send('Get employees! \n Dummy key: ' + config.testKey);
}

export const createEmployee = (req, res) => res.send('Create employee!')

export const updateEmployee = (req, res) => res.send('Update employee!')

export const deleteEmployee = (req, res) => res.send('Delete employee!')