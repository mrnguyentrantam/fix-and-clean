import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getUserFromCookies } from "next-firebase-auth";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<User | null>
) {
  const { method } = req;
  let user;
  try {
    user = await getUserFromCookies({ req });
    console.log(user);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return res.status(403).json(null);
  }
  switch (method) {
    case "GET":
      // Get data from your database
      const data = await prisma.user.findFirst({
        where: { firebaseId: user.id || "" },
      });
      res.status(200).json(data);

      break;
    case "POST":
      const createdUser = await prisma.user.create({
        data: { firebaseId: user.id || "" },
      });

      // Update or create data in your database
      res.status(200).json(createdUser);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
