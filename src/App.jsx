import Button from "./Component/Button";
import styles from"./App.module.css";
import Display from "./Component/Display";
import { useState } from "react";
function App(){
  let [calVal,setCalVal]=useState(0);
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal("");
    }else if(buttonText==='='){
      const answer=eval(calVal);
      setCalVal(answer);
    }else{
      const newValue=calVal + buttonText;
      setCalVal(newValue);
    }
  }
  return(
    <>
    <h1><u>CALCULATOR</u></h1>
    <div className={styles.calculator} >
      
      <Display  Displayvalue={calVal} />
      <Button  onButtonClick={onButtonClick}  />
    </div></>
  );
}
export default App;