export interface IJob {
    "id": string,
    "status": "Running" | "Queued" | "Completed" | "Failed",
    "type": string,
    "taskData": Record<string, any>,
    "description": string,
    "createdAt": string,
    "failedCount": number,
    "pendingOn": string[],
    "completedAt": string | null,
    "errorMsg": string | null
}