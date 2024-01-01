import Styles from "./Display.module.css";
// eslint-disable-next-line react/prop-types
function Display({Displayvalue}){
  return(
    <input className={Styles.display} type="text" value={Displayvalue} ></input>
  );

}
export default Display;