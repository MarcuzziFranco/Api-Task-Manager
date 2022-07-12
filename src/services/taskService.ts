import taskData from "./mock/tasks.json";
import { TaskEntry } from "../types";

const tasks: Array<TaskEntry> = taskData as Array<TaskEntry>;
export const getTasks = () => tasks;

export const addTask = () => null;
