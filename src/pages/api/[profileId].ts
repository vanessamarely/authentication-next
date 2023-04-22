import { NextApiRequest, NextApiResponse } from "next";
// NextApiRequest is a type that represents the incoming request
// NextApiResponse is a type that represents the outgoing response
import { extractUser, buildFilePath } from "./users";
// extractUser is a function that reads the file and returns the contents
// buildFilePath is a function that builds the path to the file

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { profileId } = req.query;
  // profileId is a string and is getting passed in as a query parameter

  if (req.method === "GET") {
    //a get request
    const filePath = buildFilePath();
    // build the path to the file
    const fileContents = await extractUser(filePath);
    // read the file and get the contents
  
    const user = fileContents.find((user: any) => {
      // find the user with the matching email
      return user.email === profileId;
    });
    
    // return the user
    res.status(200).json({ user });

  }
}
