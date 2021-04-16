import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getTodos, getTodo, addTodo, deleteTodo } from './controller.ts'

const router = new Router()
router.get('/todos', getTodos)
      .get('/todos/:id', getTodo)
      .post('/todos', addTodo)
      .delete('/todos/:id', deleteTodo)

export default router