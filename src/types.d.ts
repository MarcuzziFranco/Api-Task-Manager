export type Priority = "high" | "medium" | "low" | "no priority";

export interface TaskEntry {
  id: number;
  tittle: string;
  description: string;
  priorityLevel: Priority;
  finalized: boolean;
}
