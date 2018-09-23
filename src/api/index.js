import ApiCreator from './api'

const api = ApiCreator('localhost:3001')

export const getTodos = () => api.get('todos')

export const postTodo = (todo) => api.post('todos', {
    body: JSON.stringify(todo),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})

export const deleteTodo = (id) => api.delete(`todos/${id}`)

// export const updateTodo = (todo) => api.put(`todos/${todo.id}`, {
//     body: JSON.stringify(todo),
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
// })