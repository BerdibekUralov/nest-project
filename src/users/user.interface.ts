export enum Status {
  CREATED = "created",
  PROCESSING = "processing",
  ABORTED = "aborted",
  ERROR = "error",
  DONE = "done"
}

export interface IUser {
  id: number;
  user: string;
  status: Status;
  tags: string[];
  createdAt: Date;
  updatedAt: Date; 
}