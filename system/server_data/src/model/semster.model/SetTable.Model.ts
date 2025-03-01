import mongoose,{connect} from 'mongoose';
import { TableModel } from '../schema/Table.Schema';



async function SaveTableModel(file: Buffer,idSmster:String){
    try{
        await connect('mongodb://localhost:27017/GT_Data');
        await new TableModel({ file: file, semester_id: idSmster }).save();     
    }
    catch(e){throw e}
    finally{await mongoose.connection.close()}

}


export {SaveTableModel}