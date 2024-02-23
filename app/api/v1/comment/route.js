import prisma from "@/libs/prisma";

export async function POST(request) {
  const { endpoint, user_email, username, comment } = await request.json();
  const data = { endpoint, user_email, username, comment };
  const createComment = await prisma.comment.create({ data });
  if (!createComment) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
