import apiService from "./ApiService";

async function _getCourses(){
    return apiService({
        url:'/courses',
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        data:[]
    })
}

async function _createCourse(data){
    return apiService({
        url:'/courses',
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        data:data
    })
}

async function _deleteCourse(course_id){
    console.log(course_id);
    return apiService({
        url:`/courses/${course_id}`,
        method:'DELETE',
      
        headers:{
            'Content-Type':'application/json'
        },
        data:[]
    })
}

async function _getCoursebyId(course_id){
    console.log("v",course_id);
    return apiService({
        url:`/courses/${course_id}`,
        method:'GET',
        headers:{
            'content-Type':'application/json'
        },
        data:[]
    })

}

async function _updateCourse(course_id,data){
    return apiService({
        url:`/courses/${course_id}`,
        method:'PUT',
        headers:{
            'content-Type':'application/json'
        },
        data:data
    })
}

export {_getCourses,_createCourse,_deleteCourse,_getCoursebyId,_updateCourse};