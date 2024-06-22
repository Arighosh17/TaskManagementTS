import { Request, Response } from 'express';
import Team from '../models/team';
import TeamUser from '../models/teamUser';
import User from '../models/user';

export const createTeam = async (req: Request, res: Response) => {
  const { name } = req.body;
  const team = await Team.create({ name });
  res.status(201).send(team);
};

export const listTeams = async (req: Request, res: Response) => {
  const teams = await Team.findAll();
  res.send(teams);
};

export const getTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await Team.findByPk(id);
  if (!team) {
    return res.status(404).send({ error: 'Team not found' });
  }
  res.send(team);
};

export const updateTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const team = await Team.findByPk(id);
  if (!team) {
    return res.status(404).send({ error: 'Team not found' });
  }
  team.name = name;
  await team.save();
  res.send(team);
};

export const deleteTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await Team.findByPk(id);
  if (!team) {
    return res.status(404).send({ error: 'Team not found' });
  }
  await team.destroy();
  res.status(204).send();
};

export const addUserToTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, role } = req.body;
  const team = await Team.findByPk(id);
  const user = await User.findByPk(userId);
  
  if (!team || !user) {
    return res.status(404).send({ error: 'Team or user not found' });
  }
  
  const teamUser = await TeamUser.create({ teamId: id, userId, role });
  res.status(201).send(teamUser);
};

export const listTeamMembers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teamUsers = await TeamUser.findAll({ where: { teamId: id }, include: [User] });
  res.send(teamUsers);
};
