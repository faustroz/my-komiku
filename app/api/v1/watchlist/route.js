import prisma from "@/libs/prisma";

export async function POST(request) {
  const { endpoint, user_email, comic_image, comic_titles } =
    await request.json();
  const data = { endpoint, user_email, comic_image, comic_titles };
  const createWatchlist = await prisma.watchlist.create({ data });
  if (!createWatchlist) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
