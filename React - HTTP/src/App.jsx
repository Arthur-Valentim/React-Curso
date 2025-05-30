import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/UseFetch';

const url = ""
// http://localhost:3000/products

function App() {
  // 1 - resgatando dados
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const {data: items, htttpConfig, load, erro} = useFetch(url)


  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   getData();
  // }, []);

  // 2 - enviando dados

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSumit = async (e) =>{
    e.preventDefault()

      const product = {
      name, 
      price
    }


    htttpConfig(product, "POST")


  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(product),
  //   })

  //   // 3 - carregamento dinamico
  // const addedProduct = await res.json()

  // setProducts((prevProducts) => [...prevProducts, addedProduct])
  }
  
  // 4 - custom hook

  return (
    <div className="classApp">
      <h1>Requisições HTTP</h1>

      {/* 6 - loading */}
      {load && <p>Carregando...</p>}

      {/* 7 - tratamento de erro */}
      {erro && <p>{erro}</p>}

      {/* 1 - resgatando dados */}
      <ul>
        {items && 
        items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>

      {/* 2 - enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSumit}>
        <label> 
          <span>Nome:</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          <span>Preço:</span>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>
        {/* <input type="submit" value="Enviar" /> */}
        {/* 7 - loading post */}
        {load && <input type='submit' disabled value="Aguarde" />}
        {!load && <input type='submit' value="Enviar" />}
        </form>
      </div>


    </div>
  )
}

export default App

