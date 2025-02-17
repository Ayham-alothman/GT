import { Request, Response } from "express";
import { AddNewTeacherModel } from "../../model/teacher.model/AddTeacher.Model";

async function AddNewTeacherControlar(req: Request, res: Response) {
  try {
    let { nameTeacher,idDepart,idUni } = req.body;
    await AddNewTeacherModel(nameTeacher,idDepart,idUni)
    res.status(200).end();

  } catch (e: any) {
    console.log(e);
    if (e instanceof Error) {
      res.status(400).json(e.message);
    } else {
      res.status(400).json(e);
    }
  }
}

export { AddNewTeacherControlar };
