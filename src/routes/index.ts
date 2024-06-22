import { Router } from 'express';
import { register, login } from '../controllers/userController';
import { authenticate } from '../middlewares/auth';
import { createTeam, listTeams, getTeam, updateTeam, deleteTeam, addUserToTeam, listTeamMembers } from '../controllers/teamController';
import { createTask, listTasks, getTask, updateTask, deleteTask } from '../controllers/taskController';

const router = Router();

// User routes
router.post('/users', register);
router.post('/login', login);

// Team routes
router.get('/teams', authenticate, listTeams);
router.post('/teams', authenticate, createTeam);
router.get('/teams/:id', authenticate, getTeam);
router.put('/teams/:id', authenticate, updateTeam);
router.delete('/teams/:id', authenticate, deleteTeam);
router.post('/teams/:id/users', authenticate, addUserToTeam);
router.get('/teams/:id/users', authenticate, listTeamMembers);

// Task routes
router.get('/tasks', authenticate, listTasks);
router.post('/tasks', authenticate, createTask);
router.get('/tasks/:id', authenticate, getTask);
router.put('/tasks/:id', authenticate, updateTask);
router.delete('/tasks/:id', authenticate, deleteTask);

export default router;
