import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getTodos, getTodo } from './controller.ts'

const router = new Router()
router.get('/todos', getTodos)
      .get('/todos/:id', getTodo)

export default router