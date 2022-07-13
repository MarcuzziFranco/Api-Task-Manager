export type Priority = "high" | "medium" | "low" | "no priority";

export interface TaskEntry {
  id: string;
  tittle: string;
  description: string;
  priorityLevel: Priority;
  finalized: boolean;
}
