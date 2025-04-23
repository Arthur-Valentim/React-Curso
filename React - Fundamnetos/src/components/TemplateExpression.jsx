// 4 - template expression

const TemplateExpression = () => {
    const person ={
      nome:"Arthur",
      job: "Desenvolvedor",
      wel: "Tudo bem"

    }
  return (
    <div>
        <h2>Olá {person.job} {person.nome}, {person.wel}?</h2>
    </div>
  )
}

export default TemplateExpression