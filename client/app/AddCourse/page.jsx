"use client"
import { useState } from "react"
import { _createCourse } from "../services/crudService"
import { useRouter } from "next/navigation"

export default function AddCourse() {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [userId] = useState(1)

  const {push} = useRouter();

  const handleSubmit = async (e) => {
    const data = {
        "title":title,
        "description":description,
        "user_id":userId
    }
    e.preventDefault()
    await _createCourse(data).then((res)=>{    
        push("/");    
    }).catch((err)=>{
        console.log(err);
    })


  }

  return (
 <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input onChange={(e)=>setTitle(e.target.value)} className="border border-slate-500 px-8 py-2" type="text" placeholder="Enter the Title">
    </input>
    <input onChange={(e)=>setDescription(e.target.value)} className="border border-slate-500 px-8 py-2" type="text" placeholder="Enter the Description">
    </input>
    <button type="submit" className="bg-green-500 font-bold text-white py-3 px-6 w-fit">Add Course</button>
 </form>
  )
}
