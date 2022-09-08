import data from '../../data/data.json';
import RoomControl from './RoomControl';
import Card from '../UI/Card';
import classes from './ControlPanel.module.css';

const ControlPanel = () =>{

    const roomControl = data.map((d) => (
        <RoomControl
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
          <div className={classes.inStyle}>{roomControl}</div>
          </Card>
        </section>
      );
}

export default ControlPanel;