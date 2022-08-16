import { NextFunction, Request, Response } from 'express';
import Question from '../models/Question';
import questionService from '../services/question.service';

const post = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const payload: Question = req.body;
    const question = await questionService.create(payload);

    res.status(201).json({
      success: true,
      message: 'Created question successfully',
      data: question.get({ plain: true })
    });
  } catch (err) {
    next(err);
  }
};

const put = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    const payload: Question = req.body;
    const question = await questionService.update(id, payload);

    res.status(200).json({
      status: true,
      message: 'Updated question successfully',
      data: question.get({ plain: true })
    });
  } catch (err) {
    next(err);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    const question = await questionService.getById(id);

    res.status(200).json({
      success: true,
      message: null,
      data: question.get({ plain: true })
    });
  } catch (err) {
    next(err);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    await questionService.deleteById(id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const questions = await questionService.getAll();

    res.json({
      success: true,
      message: null,
      data: questions.map((q) => q.get({ plain: true }))
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
