import { Request, Response } from "express";
import { GetAllDepartModel } from "../../model/department.model/GetAllDepart.Model";

async function GetAllDepartControlar(req: Request, res: Response) {
  try {
    let { idUni } = req.body;
    const AllDepart=await GetAllDepartModel(idUni);
    res.status(200).json(AllDepart);

  } catch (e: any) {
    console.log(e);
    if (e instanceof Error) {
      res.status(400).json(e.message);
    } else {
      res.status(400).json(e);
    }
  }
}

export { GetAllDepartControlar };
