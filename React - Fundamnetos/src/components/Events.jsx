import React from 'react'

const Events = () => {
    const funcEvent = (e) =>{
        console.log(e)
        console.log("Executou")
    }

    // 8 - renderizando
    const renderSomething = (x) =>{
        if(x) {
            return <h1>Renderizando</h1>
        } else {
            return <h1>Nada foi renderizado</h1>
        }
    }

    // return 10> 1 && <p>carregando..</p> 
  return (
    <div>
        <div>
            <button onClick={() => console.log("Evento de Click")}>Clique aqui</button>
        </div>
        {/* 7 - evento com função*/}
        <div>
            <button onClick={funcEvent}>Clique aqui - Função</button>
        </div>
        {/*8 - renderizando*/}
        <div>
            {renderSomething(true)}
            { renderSomething(false)}
        </div>
    </div>
  )
}

export default Events