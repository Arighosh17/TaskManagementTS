"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const auth_1 = require("../middlewares/auth");
const teamController_1 = require("../controllers/teamController");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
// User routes
router.post('/users', userController_1.register);
router.post('/login', userController_1.login);
// Team routes
router.get('/teams', auth_1.authenticate, teamController_1.listTeams);
router.post('/teams', auth_1.authenticate, teamController_1.createTeam);
router.get('/teams/:id', auth_1.authenticate, teamController_1.getTeam);
router.put('/teams/:id', auth_1.authenticate, teamController_1.updateTeam);
router.delete('/teams/:id', auth_1.authenticate, teamController_1.deleteTeam);
router.post('/teams/:id/users', auth_1.authenticate, teamController_1.addUserToTeam);
router.get('/teams/:id/users', auth_1.authenticate, teamController_1.listTeamMembers);
// Task routes
router.get('/tasks', auth_1.authenticate, taskController_1.listTasks);
router.post('/tasks', auth_1.authenticate, taskController_1.createTask);
router.get('/tasks/:id', auth_1.authenticate, taskController_1.getTask);
router.put('/tasks/:id', auth_1.authenticate, taskController_1.updateTask);
router.delete('/tasks/:id', auth_1.authenticate, taskController_1.deleteTask);
exports.default = router;
