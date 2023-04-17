import { Router } from 'express';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee, patchEmployee } from '../controllers/employees.controller.js'
const router = Router();

router.get('/', getEmployees);

router.get('/:id', getEmployee);

router.post('/', createEmployee);

router.put('/:id', updateEmployee);

router.patch('/:id', patchEmployee);

router.delete('/:id', deleteEmployee);

export default router;