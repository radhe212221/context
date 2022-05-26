import React, { useContext, createContext, useState } from 'react';
import './style.css';

const MyContext = createContext();
const ActionContext = createContext();

export default function App() {
  const [counter, setcounter] = useState(0);

  const abc = (val) => {
    setcounter(val);
  };
  return (
    <MyContext.Provider value={counter}>
      <ActionContext.Provider value={abc}>
        <h1>parent comp</h1>
        <C7 />
      </ActionContext.Provider>
    </MyContext.Provider>
  );
}

const C1 = () => <C2 />;
const C2 = () => <C3 />;
const C3 = () => <C4 />;
const C4 = () => <C5 />;
const C5 = () => <C6 />;
const C6 = () => <C7 />;
const C7 = () => <C8 />;
const C8 = () => <C9 />;
const C9 = () => <C10 />;
const C10 = () => {
  const x = useContext(MyContext);
  console.log(x);
  return (
    <>
      <h1>
        10<sup>th</sup>
        my counter : {x}
      </h1>
      <Actions />
    </>
  );
};

const Actions = () => {
  const counter = useContext(MyContext);
  const _abc = useContext(ActionContext);
  const p1 = () => {
    _abc(counter + 1);
  };
  const p2 = () => {
    _abc(counter - 1);
  };
  const p3 = () => {
    _abc(0);
  };
  return (
    <>
      <h1>actions: +,-,0</h1>
      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onClick={p3}>0</button>
    </>
  );
};
