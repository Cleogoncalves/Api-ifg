import express from 'express'
import { alunosRoutes } from './rotas/alunos.js'
import { disciplinasRoutes } from './rotas/disciplina.js'
import { professoresRoutes } from './rotas/professor.js'
import { turmasRoutes } from './rotas/turmas.js'
import { cursosRoutes } from './rotas/cursos.js'

const app = express ()
app.use(express.json())
app.use(alunosRoutes)
app.use(professoresRoutes)
app.use(disciplinasRoutes)
app.use(turmasRoutes)
app.use(cursosRoutes)

export default app