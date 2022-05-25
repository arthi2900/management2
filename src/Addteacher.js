import { useHistory } from "react-router-dom";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { APIteacher } from './APIteacher';
import {useFormik} from "formik";
import *as yup from "yup";
export const teacherValidationSchema=yup.object({
 tname: yup.string().required("why not fill this name???"),
 texp: yup.string().required("why not fill this exper?"),
tdegree:yup.string().required("why not fill this degree???")
})
export function Addteacher() {
  //const [ teacherlist,setteacherlist]= useState([]);
   const formik=useFormik({
    initialValues:{
     tname:" ",texp:" ",tdegree:" ",
    },
    validationSchema:teacherValidationSchema, 
     onSubmit:(addte)=>{
      newteacher(addte)
      //console.log("onSubmit",newteacher);
  },
      }) 
       const history = useHistory();
      const newteacher =(addte)=>{
        console.log("onSubmit",addte);
        fetch(`${APIteacher}/teacher/`,{
          method:"POST",
          body:JSON.stringify(addte),
          headers:{
            "content-Type":"application/json"
          }
        })
         .then(()=> history.push('/Teacher'));

    
       };
  return <div className="add-teacher-form">
    <form onSubmit={formik.handleSubmit}>
     {/*<TextField fullWidth label="name" id="fullWidth" type="text"
      placeholder="Name"
    onChange={(event) => settname(event.target.value)} />*/}
    <TextField fullWidth label="name" id="tname"name="tname" 
    type="text" onBlur={formik.handleChange}
     onChange={formik.handleChange} 
    value={formik.values.tname}
        />{formik.touched.tname && formik.errors.tname ?formik.errors.tname :" "}
    <TextField fullWidth label="degree" id="tdegree" 
    name="tdegree" type="text" 
      onChange={formik.handleChange} 
      onBlur={formik.handleChange} value={formik.values.tdegree}/>
      {formik.touched.tdegree && formik.errors.tdegree ?formik.errors.tdegree :" "}
    <TextField fullWidth label="exp" id="texp" name="texp" type="text" 
      onChange={formik.handleChange} onBlur={formik.handleChange} />
      {formik.touched.texp && formik.errors.texp ?formik.errors.texp :" "}

    <button  type="submit" >add movie</button>
    </form>
  </div>;
}

//1.METHOD POST
//2.BODY JSON() data
//3.headers-json data
/*fetch(`${API}/teacher/`,{
  method:"POST",
  body:JSON.stringify(data),
  headers:{
    "content-Type":"application/json"
  }
})*/