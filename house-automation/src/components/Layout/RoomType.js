//import { useState } from 'react';
import classes from './RoomType.module.css';

const defaultTemp = 70;

const RoomType = (props) => {
    
    //const [tempColor, setTempColor]=useState(coldTemp);
    let tempColor;
    if(props.temp >= defaultTemp){
        tempColor = `${classes.roomHot}`;
      }else {
        tempColor=`${classes.roomCold}`;;
      }

    let btnClasses = `${classes.default}`;

    if(props.light && props.curtain){
        //console.log("light and curtain");
        btnClasses = `${classes.roomLightCurtain}`;
    }else if(props.light){
        btnClasses = `${classes.roomLight}`;
        //console.log("light");
    }else if(props.curtain){
        btnClasses = `${classes.roomCurtain}`;
        //console.log("curtain");
    }

    return (
      <li className={`${classes.room} ${btnClasses} `}>
        <div>
          <h3>{props.name}</h3>
          <div className={`${classes["temperature-display"]} ${tempColor}`}>{props.temp}°F</div>
        </div>
      </li>
    );
  };
  
  export default RoomType;
  