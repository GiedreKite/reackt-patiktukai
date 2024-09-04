import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState }  from "react";
import { FcLinux } from 'react-icons/fc';
import dviratis from './img/dviratis.png';

import { FaHeart } from 'react-icons/fa';



 export default function Patiktukai() {
    const [heart, setHeart] = useState(false);
    const [count, setCount] = useState(0)

    function handleHeart(){
    if(heart === false) {
        setHeart(true);
        setCount(count +1)
    }
    if (heart === true) {
        setHeart(false);
        setCount(count -1)
    }
   }
   
    return <>
 <div className='card'>
    <span> Patiktukai: {count}</span>

<div className='card card-header' style={{display:"flex", justifyContent: "center", width: 350}}>

    <FcLinux style={{fontSize: 50}}/>
    <p>Pleace like my photo, I am cute! Pleeeees</p>

    </div>
    <img onDoubleClick={handleHeart} src={dviratis} style={{width: 350}} alt="" />
   {heart ?  <FaHeart onClick={handleHeart} style={{fontSize: 150, color: "red"}}/>:  <FaHeart onClick={handleHeart}  style={{fontSize: 150}}/>}


 </div>
 </>
}

