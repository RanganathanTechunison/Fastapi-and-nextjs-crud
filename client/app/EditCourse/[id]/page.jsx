import { _getCoursebyId } from "@/app/services/crudService";
import EditCourseForm from "@/component/EditCourseForm";

let coursedetail = {}

  const getCoursebyId = async(id) =>{
    console.log(id,"from function");
        await _getCoursebyId(id).then((res)=>{
          
            coursedetail = res.data
       
        
        })
        // const res = await fetch(`http:localhost:8000/courses/${id}`,{
        //     method:"GET",
        //     headers:{
        //         "content-type":"application/json"
        //     },
            
        // })

        // return res.json();

       }

export default async function EditCourse({params}) {
    const course_id = params
    const course =  await getCoursebyId(course_id.id)
    const id = coursedetail.id
    const description = coursedetail.description
    const title = coursedetail.title

       
    console.log(coursedetail,"coursedetail from function");
  return (
    <div>
    <EditCourseForm id={id} title={title} description={description} />
    </div>
  )
}
