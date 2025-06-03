import { useState,useEffect } from "react";

// 4 - custom fetch
export const useFetch = (url) =>{

    const [data, setData] = useState()

    // 5 - refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    // 6 - loading 

    const [load, setLoad] = useState(false)

    // 7 - erro
    const [erro, setErro] = useState(null)

    const htttpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    

    useEffect(() =>{
        
            const fetchData = async () =>{
            // 7 - tratemento de erro
            try {
                // 6 - loading
            setLoad(true)
            const res = await fetch(url)
            const json = await res.json()
            setLoad(false)
            setData(json)
                
            } catch (error) {
                console.log(error.message)
                setErro("Houve algum erro ao carregar os dados!!")   
            }
        }
        fetchData()
    },[url, callFetch])

    // 5 - refatorando o POST
    useEffect(()=>{
    const httpREquest = async () =>{
        let json

        if(method === "POST"){
            // 6 - loading
            setLoad(true)
            let fetchOptions =  [url, config]
            const res = await fetch(...fetchOptions)
            json = await res.json()
            setLoad(false)
        }
        
        setCallFetch(json)
    }
    httpREquest()
    },[config, method, url])

    return {data, htttpConfig, load, erro}
}