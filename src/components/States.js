import React, { Component, useState } from "react";
// import ShowTowns from './ShowTowns'
import './../styles/cssState.css';
const states = [
    {
      name: "Madhya Pradesh",
      cities: [
        {
          name: "Indore",
          towns: [
            {
              name: "Mhow",
            },
            {
              name: "Dewas",
            },
          ],
        },
        {
          name: "Bhopal",
          towns: [
            {
              name: "Manit",
            },
            {
              name: "Berasia",
            },
          ],
        },
        {
          name: "Gwalior",
          towns: [
            {
              name: "Ajaypur",
            },
          ],
        },
      ],
    },
    {
      name: "Jharkhand",
      cities: [
        {
          name: "Dhanbad",
          towns: [
            {
              name: "IIT(ISM) Dhanbad",
            },
            {
              name: "Hirapur",
            },
          ],
        },
        {
          name: "Wasseypur",
          towns: [
            {
              name: "Sardar khan's",
            },
            {
              name: "Faizal khan's",
            },
          ],
        },
        {
          name: "Mirzapur",
          towns: [
            {
              name: "Kaleen bhaiya's",
            },
            {
              name: "Guddu bhaiya's",
            },
          ],
        },
      ],
    },
    {
      name: "Assam",
      cities: [
        {
          name: "Guwhati",
          towns: [
            {
              name: "Amin",
            },
            {
              name: "Jalah",
            },
          ],
        },
        {
          name: "Jungle1",
          towns: [
            {
              name: "Tiger found at IIT Guwahati",
            },
            {
              name: "Leopard found in IIT Guwahati",
            },
          ],
        },
        {
          name: "Tezpur",
          towns: [
            {
              name: "Dibrugarh",
            },
            {
              name: "Silchar",
            },
          ],
        },
      ],
    },
    {
      name: "Bihar",
      cities: [
        {
          name: "Patna",
          towns: [
            {
              name: "Sonpur",
            },
            {
              name: "Maner",
            },
          ],
        },
        {
          name: "Gaya",
          towns: [
            {
              name: "Bakraur",
            },
            {
              name: "Barachatti",
            },
          ],
        },
        {
          name: "Darbhanga",
          towns: [
            {
              name: "Singhwara",
            },
            {
              name: "Jale",
            },
          ],
        },
      ],
    },
  ];


export default function State(props){

  const [citi,setciti]= useState(false);
  
  
  
  function ShowCitiName(props){
    const [town,settown]= useState(false);
    function showTowns(){
      settown(true);
    }
   
    
  function ShowTowns(props){
    // console.log(props.citieee)
    // console.log(props.array)
    
    if(town){
      const array= props.array.towns;
      //console.log(array);
    return <>{array.map((town,key)=>(<li key={key} className={`town${key+1}`} className={`town${key+1}`}>{town.name}</li>))}</>
    }else{
      return null;
    }
  }
  
       
    return (<li className={`city${props.idx+1}`} className={`city${props.idx+1}`} onClick={showTowns}>{props.citiName.name}
   <ol> <ShowTowns  stateName={props.stateName}  citieee={props.citiName.name} array={props.citiName}/></ol>
    </li>)
  }

  function ShowCiti(props){
    const stateName = props.state;
   // console.log(stateName);
    if(citi){
      if(stateName==="Madhya Pradesh"){
        const cities = states[0].cities;
      // console.log(cities)
      return <ol>{cities.map((citieee,idx) => (<ShowCitiName idx={idx} stateName={stateName} key={idx} citiName={citieee}/>))}</ol>
      }
      else if(stateName==="Jharkhand"){
        const cities = states[1].cities;
       
        return <ol>{cities.map((citieee,idx) => (<ShowCitiName key={idx} stateName={stateName}  citiName={citieee}/>))}</ol>
      }
      else if(stateName==="Assam"){
        const cities = states[2].cities;
        
        return <ol>{cities.map((citieee,idx) => (<ShowCitiName key={idx} stateName={stateName}  citiName={citieee}/>))}</ol>
      }
      else if(stateName==="Bihar"){
        const cities = states[3].cities;
        
        return <ol>{cities.map((citieee,idx) => (<ShowCitiName key={idx} stateName={stateName}  citiName={citieee}/>))}</ol>
      }
      else{
        return null;
      }
    }
    else{
      return null;
    }
  }
  const showCities = ()=>{
    setciti(true);
   // console.log(citi)
  }

    return (<li className={`state${props.idx+1}`}  onClick={showCities}> {props.statename.name}
    <ShowCiti state={props.statename.name}/>
    </li>)

}