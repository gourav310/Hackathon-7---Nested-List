import React, { Component, useState } from "react";
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
  const [town,settown]= useState(false);
  function showTowns(){
    settown(true);
  }
  function ShowTowns(props){
    // console.log(props.citieee)
    // console.log(props.array)
    
    if(town){
      props.array.map((ct,key)=>{if(ct===props.citieee){
        return(<li></li>)
      }})
    }else{
      return null;
    }
  }
  function ShowCitiName(props){
    return (<li className={`city${props.idx+1}`}><button className={`city${props.idx+1}`} onClick={showTowns}>{props.citiName.name}</button>
    <ShowTowns citieee={props.citiName.name} array={props.citiName}/>
    </li>)
  }

  function ShowCiti(props){
    const stateName = props.state;
    console.log(stateName);
    if(citi){
      if(stateName==="Madhya Pradesh"){
        const cities = states[0].cities;
       console.log(cities)
      return <ol>{cities.map((citieee,idx) => (<ShowCitiName idx={idx} key={idx} citiName={citieee}/>))}</ol>
      }
      else if(stateName==="Jharkhand"){
        const cities = states[1].cities;
       
        return <ol>{cities.map((citieee,idx) => (<ShowCitiName key={idx} citiName={citieee}/>))}</ol>
      }
      else if(stateName==="Assam"){
        const cities = states[2].cities;
        
        return <ol>{cities.map((citieee,idx) => (<ShowCitiName key={idx} citiName={citieee}/>))}</ol>
      }
      else if(stateName==="Bihar"){
        const cities = states[3].cities;
        
        return <ol>{cities.map((citieee,idx) => (<ShowCitiName key={idx} citiName={citieee}/>))}</ol>
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

    return (<><button onClick={showCities} className={`state${props.idx+1}`}>{props.statename.name}</button><br></br>
    <ShowCiti state={props.statename.name}/>
    </>)

}