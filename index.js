const express = require("express")

const app = express()

app.use(express.json())

app.get("/", ( req, res) => {
    res.json ({mensagem: "servidor ta no ar!"})

})
app.get("/usua rios", (req,res) => {
    res.json({usuarios: "toma aqui seus usuarios!"})
})


app.listen(3000, () => {
     console.log("🚀  Hellow world !")
})

