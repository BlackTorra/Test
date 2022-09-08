import React from 'react';

const HouseContext = React.createContext({
    item:[],
    totalAmount:0,
    updateLight:(item) => {},
    updateCurtain:(item) => {},
    increaseTemp:(item) => {},
    decreaseTemp:(item) => {},
    removeItem:(id) => {}
});

export default HouseContext;