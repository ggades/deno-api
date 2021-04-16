import fetchConfig from './.config/fetch.config.ts'

const { API } = fetchConfig;

interface ITodo {
  id: string;
  text: string;
  done: boolean;
}

export const getTodos = async ({ response }: { response: any }) => {
  const result = fetch(`${API}/todos`);

  return result.then(res => {
    response.status = res.status
    return res.json();
  }).then((jsonData) => {
    response.body = jsonData
  });
}

export const getTodo = async ({ params, response }: { params: { id: string }; response: any }) => {
  const result = fetch(`${API}/todos/${params.id}`);
  
  return result.then(res => {
    response.status = res.status
    return res.json();
  }).then((jsonData) => {
    response.body = jsonData
  });
}

export const addTodo = async ({ request, response }: { request: any, response: any }) => {
  const body = await request.body()
  const todo: ITodo = body.value;
  const result = fetch(`${API}/todos`, {
    method: 'POST',
    body: JSON.stringify(todo)
  });
  
  return result.then(res => {
    response.status = res.status
    return res.json();
  }).then((jsonData) => {
    response.body = jsonData
  }).catch((error) => {
    console.error(error)
    response.body = error
  });
}