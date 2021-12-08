import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWY4ZTJhYTQ5Y2FkMjcwMThjMzc2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODkwMjIyMywiZXhwIjoxNjM5MTYxNDIzfQ.01ryFinQvJR11r0vQoCD8p1tUfXkojhbLqrEC8pQvwI';

export const publicRequest = axios.create({});
export const userRequest = axios.create({
  header: { token: `Bearer ${TOKEN}` },
});
