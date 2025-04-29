// 13  - children

const Container = ({children}) => {
  return (
    <div>
        <h3>Conteudo do componente pai:</h3>
        {children}
    </div>
  )
}

export default Container