import mongoose, { connect, Types } from 'mongoose';
import { TimeSemesterModel } from '../schema/TimeSemster.Schema';
import { CourseSemesterModel } from '../schema/CourseSemster.Schema';
import { SemesterDepartmentModel } from '../schema/DepartmentSemster.Schema';

async function SetDataOfNewSemster(
    IdSmster: string,
    DataCourse: any[], 
    DataTime: any, 
    DataDpart: string[], 

) {
    try {
        await connect('mongodb://localhost:27017/GT_Data');

        const departmentIds: mongoose.Types.ObjectId[] = [];
        for (const id of DataDpart) {
            try {
                departmentIds.push(new Types.ObjectId(id)); 
            } catch (e:any) {
                throw e
            }
        }

       

        await new TimeSemesterModel({ semester_id: IdSmster, time: DataTime }).save();
        await new SemesterDepartmentModel({ semester_id: IdSmster, department_id: departmentIds }).save();
        await CourseSemesterModel.insertMany(DataCourse);
    } catch (e:any) {
        console.error(`Error occurred: ${e.message}`);
        throw e; // Consider logging the error for better debugging
    } finally {
        await mongoose.connection.close();
    }
}

export { SetDataOfNewSemster };
