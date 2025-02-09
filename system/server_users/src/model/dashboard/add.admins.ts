import mongoose, { connect } from "mongoose";
import bcrypt from "bcrypt";
import { AdminsModel } from "../schema/admin.schema";
import { UniversityModel } from "../schema/university.schema";

async function SignupForAdmins(username:string,password:string,forUniversity:string,permision:number) {
  try {
    await connect("mongodb://localhost:27017/GT_User");
    const University = await UniversityModel.findById(forUniversity);
    if (University == null) {
      throw `this university not found`;
    }
    const hash = bcrypt.hashSync(password, 10);
    let newdata = {
      username: username,
      password: hash,
      forUniversity: new mongoose.Types.ObjectId(forUniversity),
      permision:permision
    };
    const newAdmin = new AdminsModel(newdata);
    await newAdmin.save();
    return newAdmin._id.toString();
  } catch (e: any) {
    throw e;
  } finally {
    await mongoose.connection.close();
  }
}
export { SignupForAdmins };
