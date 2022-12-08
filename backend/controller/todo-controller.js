import todo from "../model/Todo.js";


export const addTodo = async (request, response) => {
    const newTodo = await todo.create({
        date: request.body.data,
        createdAt: Date.now()
    });

    await newTodo.save();
}