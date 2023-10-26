"use client"
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"
import { _getCourses } from "@/app/services/crudService";
import { useEffect,useState } from "react";



// const getCourses = async () =>{

//      console.log("get courses");
//     await _getCourses().then((res)=>{
//         console.log("outget uscess")
//         console.log(res.data)
//         setCourseList(res.data)
//     }).catch((err)=>{
//         console.log(err);
//     })
    // try{
    // const res = await fetch("http://127.0.0.1:8000/courses");
    // if(!res.ok){
    //     throw new Error("Failed to fetch courses")
    // }
    // return res.json();
    // }catch(err){
    //     console.log("Error Loading Courses:",err);
    // }
    // let fetchRes = fetch( 
    //     "http://127.0.0.1:8000/courses"); 
    //     // fetchRes is the promise to resolve 
    //     // it by using.then() method 
    //     fetchRes.then(res => 
    //         res.json()).then(d => { 
    //             console.log(d) 
    //         }) 
// }




export default  function CourseList() {

    const [courseList,setCourseList] = useState([])

    const getCourses = async () =>{

       await _getCourses().then((res)=>{
          setCourseList(res.data)
       }).catch((err)=>{
           console.log(err);
       })
    }

    useEffect(()=>{
      getCourses()
    },[])

 

   

  return (
    <>
   {courseList.map((list,index)=>{
    return <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5" key={index}>
    <div>
    <h2 className="font-bold text-2xl">{list.title}</h2>
    <div>{list.description}</div>
  </div>
  <div className="flex gap-2 item-start">
    <RemoveBtn id={list.id}></RemoveBtn>
    <Link href={`/EditCourse/${list.id}`}><HiPencilAlt size={24}></HiPencilAlt></Link>
  </div>
  </div>

   })}
    
    </>
  )
}
