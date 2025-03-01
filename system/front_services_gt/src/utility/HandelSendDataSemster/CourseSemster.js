


function HandelDataCourseSemster(AllTeacher,AllCourse,SelectCourse,AllClass,nameTeachers,idSemster){
  
    let AllCourseSend=[];

    for(let CurCourse of Object.keys(SelectCourse)){
        let AllPropertyCourse={};
        for(let AllC of AllCourse){
            if(AllC.nameE==CurCourse){
                AllPropertyCourse[`course_id`]=AllC._id;
                AllPropertyCourse[`semester_id`]=idSemster;
                for(let Class of AllClass){
                    if(Class.type==SelectCourse[CurCourse].hall){
                        AllPropertyCourse[`classroom`]=Class._id;
                        break;
                    }
                }
                AllPropertyCourse[`hours`]=SelectCourse[CurCourse].hours;
                AllPropertyCourse[`min`]=SelectCourse[CurCourse].min;
                AllPropertyCourse[`max`]=SelectCourse[CurCourse].max;
                AllPropertyCourse[`even`]=SelectCourse[CurCourse].onlyEven;
                AllPropertyCourse[`multi`]=SelectCourse[CurCourse].multi;
                AllPropertyCourse[`allSameDay`]=SelectCourse[CurCourse].allSameDay;
                AllPropertyCourse[`teachers`]=[];
                for(let NT of SelectCourse[CurCourse].teachers){
                    const Name=nameTeachers[NT];

                    for(let OneTeaccher of AllTeacher){
                        if(Name==OneTeaccher.username){
                            AllPropertyCourse[`teachers`].push(OneTeaccher._id)
                        }
                    }
 

                    
                }
                break;
                 

            }
        }
        AllCourseSend.push(AllPropertyCourse);
    }

    return AllCourseSend;

    
}

export default HandelDataCourseSemster;