export type JobStatusType = "Running" | "Queued" | "Completed" | "Failed";

export interface IJob {
  id: string;
  status: JobStatusType;
  type: string;
  taskData: Record<string, any>;
  description: string;
  createdAt: string;
  failedCount: number;
  pendingOn: string[];
  completedAt?: string;
  errorMsg?: string;
}

export interface IYouTubeVideo {}

export interface IYouTubeChannel {}

export interface IPrompt {}

export interface IResponse<T> {
  data: T;
}

