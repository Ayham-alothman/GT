import mongoose, { connect } from "mongoose";
import bcrypt from "bcrypt";
import { AdminsToReg } from "../../interfase/allInterface";
import { AdminsModel } from "../schema/admin.schema";
import { UniversityModel } from "../schema/university.schema";

async function SignupForAdmins(data: AdminsToReg) {
  try {
    await connect("mongodb://localhost:27017/GT_User");
    const University = await UniversityModel.findById(data.forUniversity);
    if (University == null) {
      throw `this university not found`;
    }
    const hash = bcrypt.hashSync(data.password, 10);
    let newdata = {
      username: data.username,
      password: hash,
      forUniversity: new mongoose.Types.ObjectId(data.forUniversity),
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
