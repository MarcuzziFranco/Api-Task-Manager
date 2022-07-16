import taskData from "./mock/tasks.json";
import { TaskEntry } from "../types";

export const getTasks = (): Array<TaskEntry> => {
  const tasks: Array<TaskEntry> = taskData as Array<TaskEntry>;
  return tasks;
};

export const addTask = (task: TaskEntry): void => {
  taskData.push(task);

  console.log(taskData);
};
