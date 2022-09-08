import { useContext } from 'react';
//import data from '../../data/home.json';
import RoomType from './RoomType';
import Card from '../UI/Card';
import classes from './HouseLayout.module.css';
import HouseContext from '../../store/house-context';

const HomeLayout = () =>{

    const houseCtx = useContext(HouseContext);
    const totalAmount = houseCtx.totalAmount;
    console.log(`${"totalAmount::" + totalAmount + " light::" + houseCtx.item[0].light}`);
    console.log("JSON" + JSON.stringify(houseCtx));
    //const hasItems = houseCtx.item.length > 0;
    //console.log(`${hasItems}`);
   // const initData = hasItems ? houseCtx.item : data;
    //console.log(data);
    const roomType = houseCtx.item.map((d) => (
        <RoomType
          key={d.id}
          id={d.id}
          name={d.name}
          temp={d.temp}
          light={d.light}
          curtain={d.curtain}
        />
      ));
    return (
        <section className={classes.card}>
          <Card>
          <ul>{roomType}</ul>
          </Card>
        </section>
      );
}

export default HomeLayout;