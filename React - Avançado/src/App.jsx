import './App.css'

// 2 - imagem e assets
import city from "./assets/city.png"

// 3 - hook useState
import Data from './components/Data'

//  4 - renderização de lista
import ListRender from './components/ListRender'

//  7 - render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserNmae from './components/ShowUserNmae'

// 9 - desestruturando props
import CarDetails from './components/carDetails'

// 11 - renderização ed listas de componentes
const cars = [
  { id: 1, brand: "Audi", km: 10000, color: "Branco" },
  { id: 2, brand: "Ferrari", km: 0, color: "Vermelho" },
  { id: 1, brand: "Mustang", km: 100, color: "Preto" }
]

// 12 - fragment
import Fragment from './components/Fragment'

//  13 - children 
import Container from './components/Container'

// 14 - função em prop
import ExecueFunction from './components/ExecueFunction'

// 15 - state lift 
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'


function App() {

// 14 - função em prop

  function showMessage() {
    console.log("Mensagem do componente pai")
  }

// 15 - state lift

const [message, setMessage] = useState()

const handleMessage = (msg) =>{
  setMessage(msg)
}

  return (
    <div className="app" style={{ paddingBottom: "500px" }}>
      <h1>Avançado em React</h1>

      {/* 1 - Imagem em public */}
      <img src="/image.png" alt="Paisagem" />

      {/* 2 - Imagem do assets */}
      <img src={city} alt="cidade" />

      {/* 3 - hook useState */}
      <Data />

      {/* 4 - redenderização de lista */}
      <ListRender />

      {/* 7 - render condicional */}
      <ConditionalRender />

      {/* 8 - props */}
      <ShowUserNmae nome="Arthur" />

      {/* 9 - desestruturando props */}
      <CarDetails brand="Audi" km={100} color="White" />
      <CarDetails brand="VW" km={10} color="Red" />
      <CarDetails brand="Celta" km={100} color="Black" />

      {/* 11 - rederização de lista com componente  */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}

      {/* 12 - fragment */}
      <Fragment/>

      {/* 13 - children */}
      <Container>alguma coisa</Container>

      {/* 14 - função em prop */}
      <ExecueFunction myFunction={showMessage}/>

      {/* 15 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  )
}

export default App
