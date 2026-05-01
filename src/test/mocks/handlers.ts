import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users/:userId', () => {
    return HttpResponse.json({
      name: 'John Doe',
      email: 'john@example.com',
    })
  }),
]
