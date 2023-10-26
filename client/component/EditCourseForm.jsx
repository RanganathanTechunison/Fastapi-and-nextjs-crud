"use client"

import { _updateCourse } from "@/app/services/crudService"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditCourseForm({id,title,description}) {

console.log(id,"From form");
console.log(title,"from form");

  const [newTitle,setNewTitle] = useState(title)
  const [newDescription,setNewDescription] = useState(description)
  const [userId] = useState(1)

  const {push} = useRouter();
 

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = {
      "title":newTitle,
      "description":newDescription,
      "user_id":userId
  }
      await _updateCourse(id,data).then((res)=>{
        push("/"); 
      
      }).catch((err)=>{
        console.log(err);
      })
  }

  return (
    <div>
     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} className="border border-slate-500 px-8 py-2" type="text" placeholder="Enter the Title">
    </input>
    <input onChange={(e)=>setNewDescription(e.target.value)} value={newDescription} className="border border-slate-500 px-8 py-2" type="text" placeholder="Enter the Description">
    </input>
    <button className="bg-green-500 font-bold text-white py-3 px-6 w-fit">Update Course</button>
    </form>
    
    </div>
  )
}
