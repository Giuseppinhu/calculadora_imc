import Header from './componets/Header';
import CalcIMC from './componets/CalcIMC';
import About from './componets/About';

function App() {
  return (
    <div className="container">
        <Header/>
        <CalcIMC/>
        <About/>
    </div>
  )
}

export default App