import { useState } from "react"

const Data = () => {
  let somaData = 10

  const [anotherNumber, setAnotherNumber] = useState(15);

  const [newName, setNewName] = useState("Zé");
  return (
    <div>
        <p>Valor = {somaData}</p>
        <button onClick={() => (valorData = 15)}>Mudar Variável</button>

        <div>
        <p>valor = {anotherNumber}</p>
        <button onClick={() => (setAnotherNumber(20))}>Mudar state</button>
        </div>

        <div>
        <p>Bem Vindo {newName}!!!</p>
        <button onClick={() => setNewName("Arthur")}>Change name</button>
        </div>
    </div>
  )
}

export default Data