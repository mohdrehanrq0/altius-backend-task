import { Request } from "express";

//got issue in typescript in node so copied  from https://github.com/mohdrehanrq0/redvision-task-backend/blob/main/types/app-request.d.ts
declare interface ProtectedRequest extends Request {
  user: { [index: string]: any } | any;
}
