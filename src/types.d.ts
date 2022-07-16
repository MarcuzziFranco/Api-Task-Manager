export type Priority = "High" | "Medium" | "Low" | "No priority";

export interface TaskEntry {
  id: string;
  tittle: string;
  description: string;
  priorityLevel: Priority;
  finalized: boolean;
}
