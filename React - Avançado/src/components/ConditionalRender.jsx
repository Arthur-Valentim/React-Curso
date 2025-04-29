import React from 'react'

const ConditionalRender = () => {
    const x = true

    const nome = "Arthur"
  return (
    <div>
        {/* 7 - render condicional */}
        <h3>Isso vai ser exibido</h3>
        {x && <p>Se x for Ture sim!</p>}

        {/* 8 - else */}
        <h3>render ternário</h3>
        {nome === "Ana"? (
            <div><p>Bem vinda Ana!!!</p></div>
        ) : (
            <div>Nome não encontrado✋</div>
        )}
    </div>
  )
}

export default ConditionalRender