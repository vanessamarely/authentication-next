import { NextApiRequest, NextApiResponse } from "next";
// NextApiRequest is a type that represents the incoming request
// NextApiResponse is a type that represents the outgoing response
import { promises as fs } from "fs";
// promises is a property of the fs module that contains the asynchronous versions of the fs module methods
import path from "path";
// path is a built-in module that contains utilities for working with file and directory paths

//buildFilePath is a function that returns the absolute path of the json directory
export function buildFilePath() {
  return path.join(process.cwd(), "src", "data", "users.json");
}

//extractUser is a function that returns the content of the data.json file
export async function extractUser(filePath: string) {
  //Read the json data file data.json
  const fileContents = await fs.readFile(filePath, "utf-8");
  //Parse the json data file data.json
  const data = JSON.parse(fileContents);
  //Return the content of the data file in json format
  return data;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const jsonDirectory = buildFilePath();
  //Read the json data file data.json
  const fileContents = extractUser(jsonDirectory);
  //Return the content of the data file in json format
  res.status(200).json({ data: fileContents });
}
