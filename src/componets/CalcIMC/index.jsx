import { useState } from 'react';
import { PatternFormat } from 'react-number-format';

import styles from './CalcIMC.module.css'

const CalcIMC = () => {
  const [height, setHeight] = useState(0);
  const [peso, setPeso] = useState(0);
  const [result, setResult] = useState(null);

  const valueHeight = (e) => {
    return setHeight(parseFloat(e.target.value))
  }

  const valuePeso = (e) => {
    return setPeso(parseFloat(e.target.value))
  }

  const calcIMC = () => {
    const numPeso = peso;
    const numHeight = height;

    const imc = numPeso / (numHeight * numHeight)

    return setResult((imc).toFixed(2))
  }

  const formulario = (e) => {
    e.preventDefault();
    calcIMC();
  }

  return (
    <>
      <form onSubmit={formulario} className={styles.form}>
        <div className={styles.formControl}>
          <label for='height'>Altura:</label>
          <PatternFormat className={styles.formInput} id='height' format="#.##" onChange={valueHeight} placeholder='1.63m' />
        </div>
        <div className={styles.formControl}>
          <label for='peso'>Peso:</label>
          <PatternFormat className={styles.formInput} id='peso' format="####" onChange={valuePeso} placeholder='50kg'/>
        </div>
        <button className={styles.button} type="submit">Calcular</button>
      </form>
      <div className={styles.resultDiv}>
        <p>Seu IMC é:</p>
        <p className={styles.resultIMC}>{result}</p>
      </div>
    </>
  )
}

export default CalcIMC