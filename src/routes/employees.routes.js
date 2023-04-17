import { Router } from 'express';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js'
const router = Router();

router.get('/', getEmployees);

router.post('/', createEmployee);

router.put('/', updateEmployee);

router.delete('/', deleteEmployee);

export default router;