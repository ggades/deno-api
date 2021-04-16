import { FileDB, Document } from 'https://raw.githubusercontent.com/jswildcards/filedb/main/mod.ts';

interface ITodo extends Document {
  id?: string;
  text?: string;
  done?: boolean;
}

const db = new FileDB({ rootDir: "./data", isAutosave: true });
const todos = await db.getCollection<ITodo>('todos');

export const getTodos = async ({ response }: { response: any }) => {
  const todosFound = todos.findMany({});
  if (todosFound) {
    response.status = 200
    response.body = todosFound
  } else {
    response.status = 200
    response.body = []
  }
}

export const getTodo = async ({ params, response }: { params: { id: string }; response: any }) => {
  const { id } = params;
  const todo = todos.findOne({ id });
  
  if (todo) {
    response.status = 200;
    response.body = todo
  } else {
    response.status = 404;
    response.body = { error: 'Todo not found' }
  }
}

export const addTodo = async ({ request, response }: { request: any, response: any }) => {
  try {
    const todoInsert = request.body({ type: 'json' });
    const todo = await todos.insertOne(await todoInsert.value);
    response.status = 201
    response.body = todo
  } catch {
    response.status = 500
    response.body = { error: 'Internal server error' }
  }
}