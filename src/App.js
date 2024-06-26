import styles from './App.module.css'
import { useState } from 'react';

function App() {

  const [exp, setExp] = useState("");
  const [res, setRes] = useState()

  const handleExpression = (value) => {
    setExp(prevExp => prevExp + value)
  }
  const handleClear = () => {
    setExp("")
    setRes()
  }
  const handleResult = () => {
    !exp ? setRes("Error") : setRes(Math.round(eval(exp)))
  }

  return (
    <div className={styles.wrapper}>
      <h1>React Calculator</h1>
      <input  type="text" value={exp}/>
      <p>{res}</p>

      <div className={styles.gridContainer}>
        <button type='button' onClick={() => handleExpression(7)} className={styles.item}>7</button>
        <button type='button' onClick={() => handleExpression(8)} className={styles.item}>8</button>
        <button type='button' onClick={() => handleExpression(9)} className={styles.item}>9</button>
        <button type='button' onClick={() => handleExpression('+')} className={styles.item}>+</button>
        <button type='button' onClick={() => handleExpression(4)} className={styles.item}>4</button>
        <button type='button' onClick={() => handleExpression(5)} className={styles.item}>5</button>
        <button type='button' onClick={() => handleExpression(6)} className={styles.item}>6</button>
        <button type='button' onClick={() => handleExpression('-')} className={styles.item}>-</button>
        <button type='button' onClick={() => handleExpression(1)} className={styles.item}>1</button>
        <button type='button' onClick={() => handleExpression(2)} className={styles.item}>2</button>
        <button type='button' onClick={() => handleExpression(3)} className={styles.item}>3</button>
        <button type='button' onClick={() => handleExpression('*')} className={styles.item}>*</button>
        <button type='button' onClick={handleClear} className={styles.item}>C</button>
        <button type='button' onClick={() => handleExpression(0)} className={styles.item}>0</button>
        <button type='button' onClick={handleResult} className={styles.item}>=</button>
        <button type='button' onClick={() => handleExpression('/')} className={styles.item}>/</button>
      </div>

    </div>
  );
}

export default App;
