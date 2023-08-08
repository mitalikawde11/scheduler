import { useState } from 'react';

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  
  function transition(newMode, replace = false) {
    // if replace is true, get rid of last element and add new mode
    // if replace is false, add new mode
    setHistory(prev => replace ?  [...prev.slice(0,-1), newMode] :  [...prev, newMode] )
      
  };
  
  function back() {
    if (history.length === 1) {
      return;
    }
    //the slice removes the last element
    setHistory(prev =>  prev.slice(0,-1))
  };


  return { mode: history[history.length - 1], transition, back };
};