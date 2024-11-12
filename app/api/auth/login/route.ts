import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated/authentication";
import { verifyPassword } from "../../../../lib/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User_Login } from "../../../../prisma/generated/authentication/index";

const prismaAuth = new PrismaClient({
  datasources: {
    dbAuthentication: { url: process.env.DATABASE_AUTHENTICATION_URL },
  },
});

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  // Cari user di database Authentication
  /*   const user = await prismaAuth.user_Login.findFirst({
    where: { Username },
  }); */

  const user = await prismaAuth.user_Login.findFirst({
    where: {
      Username: username, // Assuming 'inputUsername' contains the username you're searching for
      Deleted: false,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 401 });
  }

  // Verifikasi password
  const isValidPassword = await bcrypt.compare(password, user.Password);
  if (!isValidPassword) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { userId: user.Id, username: user.Username },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  // Kirim token dan data user
  return NextResponse.json({
    token,
    user: {
      id: user.Id,
      usernmae: user.Username,
    },
  });
}

/* export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;
  console.log("sdsadasd");
  const user = await prismaAuth.User_Login.findUnique({ where: { username } });
  console.log(user);
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const isValidPassword = await verifyPassword(password, user.Password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user.Id, username: user.Username },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    token,
    user: {
      id: user.Id,
      usernmae: user.Username,
    },
  });
}
 */
