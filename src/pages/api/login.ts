import type { NextApiRequest, NextApiResponse } from "next";
// NextApiRequest is a type that represents the incoming request
// NextApiResponse is a type that represents the outgoing response

/**
 * @typedef {Object} Data
 * @property {string} message
 * @property {string} [email]
 */
type Data = {
  message: string;
  email?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // req.method is a string that represents the HTTP method
  switch (req.method) {
    case "GET":
      //a get request
      res.status(200).json({ message: "Welcome!!" });
      break;
    case "POST":
      //a post request
      const { email, password } = req.body;
      res.status(200).json({ message: "Welcome!!", email });
      break;
    default:
      //a request that is not get or post
      res.status(405).end("Method Not Allowed");
      res.status(404).json({
        status: 404,
        message: "Not Found",
      });
      break;
  }
}
