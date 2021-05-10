#!/usr/bin/env node
let inputbox=document.querySelector(".inputbox");
let ul=document.querySelector(".task-list");
let arr=[];
if(localStorage.getItem("storage")){
    let strarr=localStorage.getItem("storage");
    let arr=JSON.parse(strarr);
    for(let i=0;i<arr.length;i++){
       
        let li=document.createElement("li");
        ul.appendChild(li);
        li.textContent=arr[i];
        li.setAttribute("class","task");  
        li.addEventListener("dblclick",function(){
            li.remove();
      
      
        });
        
    }}




inputbox.addEventListener("keydown",function(object){
    if(object.key=="Enter"&&inputbox.value!=""){

        let value=inputbox.value;
        console.log(value);
        let li=document.createElement("li");
        ul.appendChild(li);
        li.textContent=value;
        li.setAttribute("class","task");
        arr.push(value);/*create an array*/
        console.log(arr);
        inputbox.value="";
        let strArr=JSON.stringify(arr);//convert to string
        
      
        
        
        localStorage.setItem("storage",strArr);//push to stoarge;

      
       
        
 
  
    
    }});
