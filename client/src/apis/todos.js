import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    throw new Error(error.response?.data?.message || "Something went wrong");
  },
);

export async function getTodos(){
    const res = await api.get("/todos");
    return res.data;
}

export async function createTodo(todo){
    const res = await api.post("/todos",todo);
    return res.data;
}

export async function updateTodo(id,changes){
    const res = await api.put(`/todos/${id}`,changes);
    return res.data;
}


export async function toggleTodo(id){
    const res = await api.patch(`/todos/${id}/done`);
    return res.data;
}

export async function deleteTodo(id){
    const res = await api.delete(`/todos/${id}`);
    return res.data;
}
