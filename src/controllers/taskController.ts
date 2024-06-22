import { Request, Response } from 'express';
import Task from '../models/task';
import User from '../models/user';
import Team from '../models/team';

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status, priority, userId, teamId } = req.body;
  const task = await Task.create({ title, description, status, priority, userId, teamId });
  res.status(201).send(task);
};

export const listTasks = async (req: Request, res: Response) => {
  const tasks = await Task.findAll();
  res.send(tasks);
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) {
    return res.status(404).send({ error: 'Task not found' });
  }
  res.send(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status, priority, userId, teamId } = req.body;
  const task = await Task.findByPk(id);
  if (!task) {
    return res.status(404).send({ error: 'Task not found' });
  }
  task.title = title;
  task.description = description;
  task.status = status;
  task.priority = priority;
  task.userId = userId;
  task.teamId = teamId;
  await task.save();
  res.send(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task) {
    return res.status(404).send({ error: 'Task not found' });
  }
  await task.destroy();
  res.status(204).send();
};