import { IUser, Status } from "./user.interface";

export class User implements IUser {
  id = new Date().getTime();
  user: string;
  status: Status;
  tags: string[];
  email: string;
  createdAt: Date = new Date;
  updatedAt: Date = new Date;

  constructor(user: string, email?: string, tags?: string[], status?: Status) {
    this.user = user;
    this.tags = tags || [];
    this.status = status || Status.CREATED;
    this.email = email || null;
  }
}