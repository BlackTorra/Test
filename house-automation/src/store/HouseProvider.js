import {useReducer} from 'react';
import HouseContext from './house-context';
import data from '../data/data.json';

const defaultHouseState = {
    item:data,
    totalAmount : 0,
};

const houseReducer = (state, action) => {
    console.log("Called");
    if(action.type ==='ACTION_LIGHT'){

        //console.log('ACTION_LIGHT :: ' + state.item[0].id + " " + action.item.id );
        //console.log('ACTION_LIGHT :: ' + action.item.light + "::" + state.item[0].light);

        const existingHouseItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        );
        const existingHouseItem= state.item[existingHouseItemIndex];
        //console.log(JSON.stringify(existingHouseItem));
        let updatedItems;

        if(existingHouseItem){
            //console.log(`in existingHouseItem light ${existingHouseItem.light}`);
            //console.log(existingHouseItem.light);

            const updatedItem = {
                ...existingHouseItem,
                //temp:existingHouseItem.temp + action.item.temp,
                light: action.item.light
            };
            updatedItems = [...state.item];
            updatedItems[existingHouseItemIndex] = updatedItem;
        }else{
            updatedItems = state.item.concat(action.item);
        }
        return{
            item: updatedItems,
            totalAmount: 1
        }
    }

    if(action.type ==='ACTION_CURTAIN'){

        const existingHouseItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        );
        const existingHouseItem= state.item[existingHouseItemIndex];

        let updatedItems;

        if(existingHouseItem){
            console.log(`in existingHouseItem curtain ${existingHouseItem.curtain}`);
            console.log(existingHouseItem.curtain);

            const updatedItem = {
                ...existingHouseItem,
                curtain: action.item.curtain
            };
            updatedItems = [...state.item];
            updatedItems[existingHouseItemIndex] = updatedItem;
        }else{
            updatedItems = state.item.concat(action.item);
        }
        return{
            item: updatedItems,
            totalAmount: 1
        }
    }

    if(action.type ==='INCREASE_TEMP'){

        console.log('INCREASE_TEMP :: ' + state.item[0].id + " " + action.item.id );
        console.log('INCREASE_TEMP :: ' + action.item.temp + "::" + state.item[0].temp);

        const existingHouseItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        );
        const existingHouseItem= state.item[existingHouseItemIndex];
        //console.log(JSON.stringify(existingHouseItem));

        //console.log(`${"existingHouseItem amount ::" + existingHouseItem.amount}`);
        let updatedItems;

        if(existingHouseItem){
            //console.log(`in existingHouseItem light ${existingHouseItem.light}`);
            //console.log(existingHouseItem.light);

            const updatedItem = {
                ...existingHouseItem,
                temp:existingHouseItem.temp + 1,
            };
            updatedItems = [...state.item];
            updatedItems[existingHouseItemIndex] = updatedItem;
        }else{
            updatedItems = state.item.concat(action.item);
        }
        return{
            item: updatedItems,
            totalAmount: 1
        }
    }

    if(action.type ==='DECREASE_TEMP'){

        console.log('DECREASE_TEMP :: ' + state.item[0].id + " " + action.item.id );
        console.log('DECREASE_TEMP :: ' + action.item.temp + "::" + state.item[0].temp);
        //const updatedTotalAmount = state.totalAmount+ action.item.amount * 0;

        const existingHouseItemIndex = state.item.findIndex(
            (item) => item.id === action.item.id
        );
        const existingHouseItem= state.item[existingHouseItemIndex];
        //console.log(JSON.stringify(existingHouseItem));

        //console.log(`${"existingHouseItem amount ::" + existingHouseItem.amount}`);
        let updatedItems;

        if(existingHouseItem){
            const updatedItem = {
                ...existingHouseItem,
                temp:existingHouseItem.temp - 1,
            };
            updatedItems = [...state.item];
            updatedItems[existingHouseItemIndex] = updatedItem;
        }else{
            updatedItems = state.item.concat(action.item);
        }
        return{
            item: updatedItems,
            totalAmount: 1
        }
    }

    return defaultHouseState;
}

const HouseProvider = (props) => {
    const[houseState, dispatchHouseAction] = useReducer(
        houseReducer,
        defaultHouseState
        );
    const updateLightHouseHandler = (item) => {
        dispatchHouseAction({type:'ACTION_LIGHT', item: item});
    }

    const updateCurtainHouseHandler = (item) => {
        dispatchHouseAction({type:'ACTION_CURTAIN', item: item});
    }

    const increaseTempHouseHandler = (item) => {
        dispatchHouseAction({type:'INCREASE_TEMP', item: item});
    }

    const decreaseTempHouseHandler = (item) => {
        dispatchHouseAction({type:'DECREASE_TEMP', item: item});
    }

    const removeItemHandler = (id) => {
        dispatchHouseAction({type:'REMOVE', id:id});
    }

    const houseContext = {
        item: houseState.item,
        totalAmount:houseState.totalAmount,
        updateLight: updateLightHouseHandler,
        updateCurtain: updateCurtainHouseHandler,
        increaseTemp: increaseTempHouseHandler,
        decreaseTemp: decreaseTempHouseHandler,
        removeItem:removeItemHandler
    };

    return( 
        <HouseContext.Provider value={houseContext}> {props.children}</HouseContext.Provider>
    );
    };

    export default HouseProvider;