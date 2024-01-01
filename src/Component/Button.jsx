import styles from "./Button.module.css"
// eslint-disable-next-line react/prop-types
const Button=({onButtonClick})=>{
  // eslint-disable-next-line no-unused-vars
  const ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return(
    <div className={styles.botan}>
        {
          
          ButtonNames.map((items)=>(
            // eslint-disable-next-line react/jsx-key
            <button className={styles.button} onClick={()=>onButtonClick(items )} >{items}
            
            </button>
            
          ))
        }
    </div>
  );

}
export default Button;