"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.listTasks = exports.createTask = void 0;
const task_1 = __importDefault(require("../models/task"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, priority, userId, teamId } = req.body;
    const task = yield task_1.default.create({ title, description, status, priority, userId, teamId });
    res.status(201).send(task);
});
exports.createTask = createTask;
const listTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_1.default.findAll();
    res.send(tasks);
});
exports.listTasks = listTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_1.default.findByPk(id);
    if (!task) {
        return res.status(404).send({ error: 'Task not found' });
    }
    res.send(task);
});
exports.getTask = getTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, status, priority, userId, teamId } = req.body;
    const task = yield task_1.default.findByPk(id);
    if (!task) {
        return res.status(404).send({ error: 'Task not found' });
    }
    task.title = title;
    task.description = description;
    task.status = status;
    task.priority = priority;
    task.userId = userId;
    task.teamId = teamId;
    yield task.save();
    res.send(task);
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_1.default.findByPk(id);
    if (!task) {
        return res.status(404).send({ error: 'Task not found' });
    }
    yield task.destroy();
    res.status(204).send();
});
exports.deleteTask = deleteTask;
