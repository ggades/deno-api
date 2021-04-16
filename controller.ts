export const getTodos = async ({ response }: { response: any }) => {
  const result = fetch("https://5ca6436e3a082600142795af.mockapi.io/todos");

  return result.then(res => {
    response.status = res.status
    return res.json();
  }).then((jsonData) => {
    response.body = jsonData
  });
}

export const getTodo = async ({ params, response }: { params: { id: string }; response: any }) => {
  const result = fetch(`https://5ca6436e3a082600142795af.mockapi.io/todos/${params.id}`);
  
  return result.then(res => {
    response.status = res.status
    return res.json();
  }).then((jsonData) => {
    response.body = jsonData
  });
}