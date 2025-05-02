import './App.css'

// 2 - CSS em componente
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  // 4 - CSS inline dinâmico
  const n = 10

  // 5 - classe dinâmica
  const redTile = true
  
  return (
    <div className="ClassApp">
      <h1>CSS no React</h1>

      {/* 2 - CSS em componente */}
      <MyComponent/>

      {/* 3 - CSS inlne */}
      <p style={{color: "green", padding: "25px", borderTop: "1px solid purple"}}>Inline Element</p>

      {/* 4 - CSS inline dinâmico*/}
      <h2 style={n > 15? {color: "purple"} : {color: "magenta"}} >CSS Dinâmico</h2>

      {/* 4 - CSS inline dinâmico*/}
      <h2 style={n > 1? {color: "purple"} : {color: "magenta"}} >CSS Dinâmico 2</h2>

      {/* 5 - classe dinâmica */}
      <h2 className={redTile? "red-title" : "tile"}>Titulo com classe dinâmica</h2>

      {/* 6 - CSS modules */}
      <Title/>
      
    </div>
  )
}

export default App
