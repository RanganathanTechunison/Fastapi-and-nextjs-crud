"use client";

import { _deleteCourse } from "@/app/services/crudService";
// import { useTransition } from "react";
// import { redirect } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi"
import {useRouter} from "next/navigation"


export default function RemoveBtn({id}) {

 

 const router = useRouter();
 
  const removeCourse = async() =>{
    const confirmed = confirm('Are you Sure?');
    if(confirmed){
      console.log(id);
      await _deleteCourse(id).then((res)=>{
        router.refresh();
        console.log("deleteddd");
   
        
      }).catch((err)=>{
        console.log(err);
      })
    }

  }

  const refresh = async () =>{
    // redirect("/AddCourse")
  
  }

  return (
    <div>
     <button onClick={removeCourse} className="text-red-400">
        <HiOutlineTrash size={24}/>
     </button>
     <button onClick={refresh} className="text-black-400">
        <HiOutlineTrash size={24}/>
     </button>
    </div>
  )
}
