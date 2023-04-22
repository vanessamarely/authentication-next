import type { NextApiRequest, NextApiResponse } from "next";
// NextApiRequest is a type that represents the incoming request
// NextApiResponse is a type that represents the outgoing response

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // req.method is a string that represents the HTTP method
  if (req.method === "POST") {
    //a post request
    const { email, password } = req.body;
    // destructuring the request body

    res.status(200).json({ message: 'sucess' });
    // return a response
  }
}
