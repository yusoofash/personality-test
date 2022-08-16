import { NextFunction, Request, Response } from 'express';
import Choice from '../models/Choice';
import choiceService from '../services/choice.service';

const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload: Choice = req.body;
    const choice = await choiceService.create(payload);

    res.status(201).json({
      success: true,
      message: 'Created choice successfully',
      data: choice.get({ plain: true })
    });
  } catch (err) {
    next(err);
  }
};

const put = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    const payload: Choice = req.body;
    const choice = await choiceService.update(id, payload);

    res.status(200).json({
      success: true,
      message: 'Updated choice successfully',
      data: choice.get({ plain: true })
    });
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    const choice = await choiceService.getById(id);

    res.status(200).json({
      success: true,
      message: null,
      data: choice.get({ plain: true })
    });
  } catch (err) {
    next(err);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    await choiceService.deleteById(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const choices = await choiceService.getAll();

    res.json({
      success: true,
      message: null,
      data: choices.map((q) => q.get({ plain: true }))
    });
  } catch (err) {
    next(err);
  }
};

export default {
  post,
  put,
  getById,
  deleteById,
  getAll
};
