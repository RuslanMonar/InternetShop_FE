import React, { useState } from "react";
import axios from "axios";
import classes from '../../css/style.module.css';



   





function Form (){
   const url="https://jsonplaceholder.typicode.com/todos"
   const[data,setData]=useState("");
   function submit(event){
       
       event.preventDefault();
       
       if(data!=""){
        
       fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            body: JSON.stringify({
                searchItem: data
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
           })
        setData("");
        
        
       }
             
     }
        
   function handle(event){
       setData(()=>event.target.value);
   }
    return(
       
    <div className={classes.search_context}>
        <form onSubmit={submit}>
            
             
       
                <input className={classes.searchField} onChange={handle} value={data} size="" type="text" placeholder="Я шукаю...."  ></input>
                <input className={classes.search_button} type="submit"  value="Пошук" />
            
            
        </form>
         </div>
    )
}

export default Form;
