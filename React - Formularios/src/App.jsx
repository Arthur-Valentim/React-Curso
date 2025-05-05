import './App.css'

// 1 - criação do formulário
import MyForm from './components/MyForm'


function App() {
 
  return (
    <div className="App">
      <h1>Form React</h1>
      <MyForm  userName="Arthur" userEmail="abc@def.com"/>
    </div>
  )
}

export default App
