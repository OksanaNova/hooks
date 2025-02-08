
import { useState } from 'react';
import './App.css'
import Focus from './Focus';
import HomeworkOne from './HomeworkOne';
import Music from './Music';
import OneContext from './OneContext';
import Previous from './Previous';
import Reducer from './Reducer';
import Timer from './Timer';
import TwoContext from './TwoContext';
import { Context } from './Context';

function App() {

  const [context, setContext] = useState("Initial state")

  return (
    <>

    <Focus />

    <Previous />

    <Music />

    <Reducer />

    <HomeworkOne />
    
    <Timer />

    <Context.Provider value={[context, setContext]}>
        <OneContext />
       <TwoContext />
    </Context.Provider>


    </>
  )
}

export default App
