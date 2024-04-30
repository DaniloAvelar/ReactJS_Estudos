const express = require('express');
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//Rotas - Endpoint
app.post("/createProduct", (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if(!name) {
        return res.status(422).json({message: "O parametro (Nome) nao foi informado"})
    }
    if(!price) {
        return res.status(422).json({message: "O parametro (Preço) nao foi informado"})
    }


    res.status(201).json({message: `O Produto ${name} foi cadastrado com sucesso!`})
})

app.get("/", (req, res) => {
    res.status(200).json({message: 'Primeira rota criada com sucesso'})
})

//escutando a porta
app.listen(3000)