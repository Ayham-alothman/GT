

function CompainNameTeachers(Courses,Teachers){

    let mapTeachers={}

    let KCourse=Object.keys(Courses);

    for(let C of KCourse){
        for(let ele of Courses[C].teachers){
           if(!mapTeachers[ele]){
            mapTeachers[ele]=Teachers[ele]
           }
        }
    }
    return mapTeachers;
}

export default CompainNameTeachers