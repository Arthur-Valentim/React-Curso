import "./MyForm.css"

import { useState } from "react"

const MyForm = ({userName, userEmail}) => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name, email, bio,role)

        // 7 - limpando formulário
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    console.log(name, email, bio, role)

    return (
        <div>
            {/* 1 - criação do formulário*/}
            {/* 5 - envio de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                    name="name" 
                    placeholder="Digite seu Nome" 
                    onChange={handleName}
                    // 6 - controled input
                    value={name || ""} />
                </div>

                {/* 2 - label envolendo input  */}
                <label>
                    <span>E-mail:</span>
                    {/* 4 - simplificando a manipulação de dado */}
                    <input type="text" 
                    name="email" 
                    placeholder="Digite o seu E-mail" 
                    onChange={(e) => { setEmail(e.target.value) }}
                    // 6 - controled input
                    value={email || ""}/>
                </label>
                {/* 8 - textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio"
                    placeholder="Descrição"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}></textarea>
                </label>
                {/* 9 - select */}
                <label>
                    <span>Função do sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="adimin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export default MyForm