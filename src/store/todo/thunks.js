import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTodo } from "../../api/todo";

export const getAllTodoThunk = createAsyncThunk('todo/getAll',()=>getAllTodo())