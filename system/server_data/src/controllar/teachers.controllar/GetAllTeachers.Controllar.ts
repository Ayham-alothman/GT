import { Request, Response } from "express";
import { GetAllTeacherModel } from "../../model/teacher.model/GetAllTeachers.Model";

async function GetAllTeachersControlar(req: Request, res: Response) {
  try {
    let { idUni,idDepart } = req.body; console.log(idDepart);
    const AllTeachers =await GetAllTeacherModel(idDepart,idUni);
    res.status(200).json(AllTeachers);

  } catch (e: any) {
    console.log(e);
    if (e instanceof Error) {
      res.status(400).json(e.message);
    } else {
      res.status(400).json(e);
    }
  }
}

export { GetAllTeachersControlar };
