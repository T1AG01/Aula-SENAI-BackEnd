//Importar bibliotecas
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors')
const bcrypt = require('bcrypt')

//configurar servidor
const app = express()
const PORT = 3000
app.use(cors())
app.use(express.json())

// Criar banco sqlite
const db = new sqlite3.Database('./database.db')

//Criar tabela de usuários
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT, 
    senha TEXT
    )
`)

//Cadastro usuário
app.post('/usuarios', async (req, res) => {
    let nome = req.body.nome
    let email = req.body.email
    let senha = req.body.senha

    let senhaHash = await bcrypt.hash(senha, 10)
    console.log(senhaHash)

    //Inserir no banco de dados
    db.run(`INSERIR INTO usuarios (nome, email, senha)
    VALUES (?, ?, ?)`,
    [nome, email, senhaHash],
    res.json({
        id: this.lastID,
        nome,
        email
    })
    
    )

})




