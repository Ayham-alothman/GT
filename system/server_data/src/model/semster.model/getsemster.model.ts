import mongoose,{connect} from 'mongoose';
import { SemesterModel } from '../schema/Semster.Schema';
import { SemesterDepartmentModel } from '../schema/DepartmentSemster.Schema';
import { TimeSemesterModel } from '../schema/TimeSemster.Schema';
import { CourseSemesterModel } from '../schema/CourseSemster.Schema';
import { TableModel } from '../schema/Table.Schema';


async function GetSemstersModel(idUni:string) {

    try{
        await connect('mongodb://localhost:27017/GT_Data');
        const AllSemster=await SemesterModel.find({idUni:idUni});
        console.log(AllSemster);
        let AllSemstersWithinfo=[];

        for(let oneSemster of AllSemster){
           let Depart= await SemesterDepartmentModel.findOne({semester_id:oneSemster._id})
            .populate(`department_id`).exec();
           let Time =await TimeSemesterModel.findOne({semester_id:oneSemster._id});
           let Course=await CourseSemesterModel.find({semester_id:oneSemster._id})
           .populate(`teachers`).populate(`classroom`).populate(`course_id`);
           let Dfile=await TableModel.findOne({semester_id:oneSemster._id});
           
           AllSemstersWithinfo.push({
            idSmster:oneSemster._id,
            Date:oneSemster.date,
            Department:Depart,
            Time:Time?.time,
            Courses:Course,
            file:Dfile?.file
           })
        }
        
        return AllSemstersWithinfo;

    }
    catch(e){throw e}
    
}

export {GetSemstersModel}