const express =  require('express')

const app = express()
app.use(express.json())


app.listen(3000,  () => {
    console.log('Api rodando na porta 3000, ')

    const alunos = []
    app.get('/alunos', (pedido, resposta) => {
        resposta.json(alunos)
    })
    app.post('/alunos', (pedido, resposta) => {


        const aluno = {
            matricula: pedido.body.matricula,
            nome : pedido.body.matricula,
            dataNasc : pedido.body.matricula ,
            email : pedido.body.matricula
        }
        alunos.push (aluno) 
        resposta.json(aluno)
    })
})