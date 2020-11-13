const express = require('express');

const router = express.Router();
const { celebrate } = require('celebrate');

const { Project } = require('./project.model');
const ProjectValidator = require('./project.validator');

router.get('/', async function (req, res) {
  const projects = await Project.find(req.query);
  return res.status(200).send(projects);
});

router.get('/:id', async function (req, res) {
  const project = await Project.findById(req.paramas.id);
  if (!project) {
    res.status(404).send({
      status: 404,
      message: 'Project not found',
      data: {},
      userMessage: 'El proyecto no existe',
    });
  }

  return res.status(200).send(project);
});

router.post('/', celebrate(ProjectValidator.Post), async function (req, res) {
  const project = new Project(req.body);
  await project.save();

  return res.status(201).send({
    status: 201,
    message: 'Project created.',
    data: {
      project,
    },
  });
});

router.put('/:id', async function (req, res) {
  const project = await Project.findById(req.params.id);

  if (!project) res.status(404).send({});

  project.type = req.body.type;

  await project.save();

  return res.status(200).send(project);
});

router.delete('/:id', async function (req, res) {
  const project = await Project.findById(req.params.id);

  if (!project) res.status(400).send({});

  await Project.findByIdAndUpdate(project._id, { $set: { status: false } });

  return res.status(200).send(project);
});

module.exports = router;
