import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getTodos, getTodo, addTodo } from './controller.ts'

const router = new Router()
router.get('/todos', getTodos)
      .get('/todos/:id', getTodo)
      .post('/todos', addTodo)

export default router