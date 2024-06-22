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
exports.listTeamMembers = exports.addUserToTeam = exports.deleteTeam = exports.updateTeam = exports.getTeam = exports.listTeams = exports.createTeam = void 0;
const team_1 = __importDefault(require("../models/team"));
const teamUser_1 = __importDefault(require("../models/teamUser"));
const user_1 = __importDefault(require("../models/user"));
const createTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const team = yield team_1.default.create({ name });
    res.status(201).send(team);
});
exports.createTeam = createTeam;
const listTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const teams = yield team_1.default.findAll();
    res.send(teams);
});
exports.listTeams = listTeams;
const getTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const team = yield team_1.default.findByPk(id);
    if (!team) {
        return res.status(404).send({ error: 'Team not found' });
    }
    res.send(team);
});
exports.getTeam = getTeam;
const updateTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    const team = yield team_1.default.findByPk(id);
    if (!team) {
        return res.status(404).send({ error: 'Team not found' });
    }
    team.name = name;
    yield team.save();
    res.send(team);
});
exports.updateTeam = updateTeam;
const deleteTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const team = yield team_1.default.findByPk(id);
    if (!team) {
        return res.status(404).send({ error: 'Team not found' });
    }
    yield team.destroy();
    res.status(204).send();
});
exports.deleteTeam = deleteTeam;
const addUserToTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { userId, role } = req.body;
    const team = yield team_1.default.findByPk(id);
    const user = yield user_1.default.findByPk(userId);
    if (!team || !user) {
        return res.status(404).send({ error: 'Team or user not found' });
    }
    const teamUser = yield teamUser_1.default.create({ teamId: id, userId, role });
    res.status(201).send(teamUser);
});
exports.addUserToTeam = addUserToTeam;
const listTeamMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const teamUsers = yield teamUser_1.default.findAll({ where: { teamId: id }, include: [user_1.default] });
    res.send(teamUsers);
});
exports.listTeamMembers = listTeamMembers;
