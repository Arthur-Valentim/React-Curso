import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Zé","Ana","Ivo"])

    const [users, setUsers] = useState([
        {id: 1, nome: "Zé", age: 22},
        {id: 2, nome: "Ana", age: 21},
        {id: 3, nome: "Ivo", age: 20}
    ])

    const deleteRamdom = () =>{
        const randoNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => (
            prevUsers.filter((user) => randoNumber !== user.id)
        ))
    }
  return (
    <div>
        {/* 4 - render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>

        {/* 5 renedr com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}> {user.nome} tem {user.age} anos!</li>
            ))}
        </ul>

         {/* 6 - previous state */}
         <button onClick={deleteRamdom}>Delete Random User</button>
    </div>
  )
}

export default ListRender