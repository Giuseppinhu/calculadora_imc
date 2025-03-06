import { useState } from 'react';
import { PatternFormat } from 'react-number-format';

import styles from './CalcIMC.module.css'
import About from '../About';

const CalcIMC = () => {
  const [height, setHeight] = useState(0);
  const [peso, setPeso] = useState(0);
  const [result, setResult] = useState(null);
  const [category, setCategory] = useState("");

  const valueHeight = (e) => {
    return setHeight(parseFloat(e.target.value))
  }

  const valuePeso = (e) => {
    return setPeso(parseFloat(e.target.value))
  }

  const getCategoriaIMC = (imc) => {
    if (imc < 18.5) return "abaixoPeso";
    if (imc >= 18.5 && imc <= 24.9) return "pesoNormal";
    if (imc >= 25 && imc <= 29.9) return "sobrepeso";
    if (imc >= 30 && imc <= 34.9) return "obesidade1";
    if (imc >= 35 && imc <= 39.9) return "obesidade2";
    return "obesidade3";
  }

  const calcIMC = () => {
    const numPeso = peso;
    const numHeight = height;
    
    const imc = numPeso / (numHeight * numHeight)
    const imcFixed = imc.toFixed(2)
    
    setResult(imcFixed);
    setCategory(getCategoriaIMC(imc));
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

      <About imc={result} category={category}/>
    </>
  )
}

export default CalcIMC