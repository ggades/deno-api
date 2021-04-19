# Deno API

A REST api built with Deno for [react-context-typescript](https://github.com/ggades/react-context-typescript) to list, create and delete simple todo items. It uses [filedb](https://github.com/jswildcards/filedb) for data persistence.

You can check more info about deno [here](https://deno.land).

To run it locally:

`denon run --allow-net --allow-read --allow-write app.ts`

## Routes
<br>

### GET

`/todos`

List all todos.
  
```
[
  {
    "id": "f074f310-26e4-4ce4-8301-1e88e721f306",
    "text": "Drink Coffee",
    "done": true,
    "updatedAt": "2021-04-16T19:11:07.990Z",
    "createdAt": "2021-04-16T19:11:07.990Z"
  },
  {
    "id": "b0f79c8e-6dc6-4a34-8c83-29e06e6a1e31",
    "text": "Drink more coffee",
    "done": false,
    "updatedAt": "2021-04-16T19:11:07.990Z",
    "createdAt": "2021-04-16T19:11:07.990Z"
  }
]
```

`/todos/:id`

Get todo info.
  
```
{
  "id": "f074f310-26e4-4ce4-8301-1e88e721f306",
  "text": "Drink Coffee",
  "done": true,
  "updatedAt": "2021-04-16T19:11:07.990Z",
  "createdAt": "2021-04-16T19:11:07.990Z"
}
```
<br>

### POST

`/todos`

Create new todo.

Body:

  
```
{
  "text": "Todo text", 
  "done": true
}
```
<br>

### DELETE

`/todos/:id`

Delete a todo from DB.

Parameters:

 `id`: Todo id.



