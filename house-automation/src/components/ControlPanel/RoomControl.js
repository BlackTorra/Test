import classes from './RoomControl.module.css';
import HouseContext from '../../store/house-context';
import { useContext, useState } from 'react';
import Card from '../UI/Card';

const RoomControl = (props) => {
    const houseCtx = useContext(HouseContext);
    const [isLightChecked, setIsLightChecked] = useState(props.light);
    const [isCurtainChecked, setIsCurtainChecked] = useState(props.curtain);
    const updateHouseLightController = ({ target }) => {
        setIsLightChecked(target.checked);
        console.log(`${"checkbox::" + target.checked}`);
        houseCtx.updateLight({
            id: props.id,
            light:target.checked
        });
    }

    const updateHouseCurtainController = ({ target }) => {
        setIsCurtainChecked(target.checked);
        console.log(`${"checkbox::" + target.checked}`);
        houseCtx.updateCurtain({
            id: props.id,
            curtain:target.checked
        });
    }
    
    const increaseHouseTempController = () =>{
        houseCtx.increaseTemp({
            id: props.id,
            //name:props.name,
            temp: props.temp,
            //price: props.price,
            //light:checked //props.light
        });
    }

    const decreaseHouseTempController = () =>{
        houseCtx.decreaseTemp({
            id: props.id,
            temp: props.temp,
        });
    }
    
    return (
        <Card>
        <label type="text" className={classes["label-text"]}>{props.name}</label>    
        <hr/>
        <input type="checkbox" onChange={updateHouseLightController} checked={isLightChecked}/><span>Light</span>    
        <input type="checkbox" onChange={updateHouseCurtainController} checked={isCurtainChecked}/><span>Curtain</span>
        <hr/>
        <div className={classes["button-container"]}>
            <button onClick={increaseHouseTempController}>+</button>
            <button onClick={decreaseHouseTempController}>-</button>
        </div>
        </Card>
    );
  };
  
  export default RoomControl;