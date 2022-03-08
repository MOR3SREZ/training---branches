import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';

function App() {
  const [pizza, setPizza] = useState({ base: '', toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' component={<Home />} />
        <Route
          path='/base'
          component={<Base addBase={addBase} pizza={pizza} />}
        />

        <Route
          path='/toppings'
          component={<Toppings addTopping={addTopping} pizza={pizza} />}
        />

        <Route path='/order' component={<Order pizza={pizza} />} />
      </Routes>
    </>
  );
}

export default App;
