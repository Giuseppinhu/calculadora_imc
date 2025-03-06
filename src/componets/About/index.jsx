import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.text}>
                <h2 className={styles.textTitle}>O que é o IMC:</h2>
                <p>O <b>IMC (Índice de Massa Corporal)</b> é uma medida utilizada para avaliar se o peso de uma pessoa está adequado em relação à sua altura. Ele é calculado dividindo o peso <b>(em kg)</b> pela altura <b>(em metros)</b> ao quadrado.</p>
            </div>
            <div className={styles.text}>
                <h2 className={styles.textTitle}>Interpretação do IMC:</h2>
                <ul className={styles.table}>
                    <li><b>Abaixo do peso:</b> IMC abaixo de 18,5.</li>
                    <li><b>Peso normal:</b> IMC entre 18,5 e 24,9.</li>
                    <li><b>Sobrepeso:</b> IMC entre 25 e 29,9.</li>
                    <li><b>Obesidade I:</b> IMC entre 30 e 34,9</li>
                    <li><b>Obesidade II:</b> IMC entre 35 e 39,9</li>
                    <li><b>Obesidade III:</b> IMC acima de 40</li>
                </ul>
                <p>Embora o IMC seja uma ferramenta útil para avaliar a saúde geral, ele não leva em conta a composição corporal, como a quantidade de massa muscular ou gordura, e pode não ser completamente preciso para todas as pessoas, especialmente atletas ou pessoas com diferentes tipos de corpo.</p>
            </div>
        </div>
    )

}

export default About
