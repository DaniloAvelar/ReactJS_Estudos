import { useState, useEffect } from "react";

// 4 - Custom Hooks

export const useFetch = (url) => {
    
    const [data, setData] = useState(null)

// 5 - Refatorando o POST
    //-Configurando o método que será utilizado (configurando o POST com o cabeçalho, body e etc...)
    const[config, setConfig] = useState(null);
    //Configurando qual metho será usado (Get, Post)
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

// 6 - Loading
    const [loading, setLoading] = useState(false);

    // COnfig Cabeçalho POST
    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                Headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            console.log(data)
            setMethod(method);
            
        }
    };
    
    //Criando a REQ com useEffect, assim ele executa apenas 1x
       useEffect(() => {
        // Requisição asincrona
        const fetchData = async () => {
            // 6 - Inicio do Loading
            // setLoading(true)
            const res = await fetch(url); // Requisição dos dados
            const resJson = await res.json(); // Resposta com os dados em formato JSON
            setData(resJson); // Alterando o State com a resposta da requisição 
            // setLoading(false)
        };
        fetchData();
    }, [url, callFetch]);
    // A dependencia dessa [URL] significa, (Se mudar a URL chama a função novamente)

    // 5 - Refatorando o POST
    useEffect(() => {
        const httpRequest = async () =>{
            if(method === "POST"){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }
        };
        httpRequest();
    }, [config, method, url])

  return {data, httpConfig, loading};
};