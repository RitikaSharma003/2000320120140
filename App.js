
import './App.css';

import Train from'./components/Train';
import React from 'react';
import { useState,useEffect } from 'react';
const App=()=>{
  const[data,setData]=useState([]);

  
useEffect(()=>{
  fetchDataoftrain();

},[])
const fetchDataoftrain=async()=>{
  try{
    const res=await fetchDataoftrain('http://20.244.56.144/train/register');
    const d=await res.json();
    setData(d);

  }
  catch(error){
    console.error('Error fetching train data',error);

  }
};
return (
  <>
  <div>
 <h1>  TRAIN SCHEUDLE</h1> 
 <Train traindata={data}/>
  </div>
  </>
);
};

export default App;
