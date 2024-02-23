import Link from "next/link";
import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Balancer from "react-wrap-balancer";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  const watchlist = await prisma.watchlist.findMany({
    where: { user_email: user.email },
  });
  return (
    <div className="flex flex-col bg-gray-100 p-4">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-white rounded-lg shadow-md">
        <div className="grid justify-center items-center h-full gap-4 md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr]">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <Image
                alt="Avatar"
                className="rounded-full"
                height={150}
                src={user.image}
                width={150}
              />
            </div>
            <div className="space-y-2 mt-4 text-center text-light-text dark:text-dark-text">
              <h1 className="text-3xl font-bold">{user.name}</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="p-4">
            <h2 className="text-xl font-bold dark:text-dark-text">Watchlist</h2>
            <p className="text-sm dark:text-dark-text">
              Series you want to watch
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {watchlist.map((watch, index) => (
              <div className="rounded-lg overflow-hidden" key={index}>
                <Link href="/">
                  <div className="p-2">
                    <Image
                      alt="Thumbnail"
                      className="rounded-lg object-cover object-center w-full"
                      height={169}
                      src={watch.comic_image}
                      width={300}
                    />
                  </div>
                  <div className="p-2 dark:text-dark-text">
                    <h3 className="text-sm font-medium">
                      {watch.comic_titles}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold dark:text-dark-text">
            Comment History
          </h2>
          <p className="text-sm dark:text-dark-text">Your past comments</p>
          <div className="mt-4 space-y-4">
            {comments.map((comment) => (
              <div
                className="rounded-lg overflow-hidden p-2 dark:text-dark-text bg-gray-100 border border-gray-200"
                key={comment.id}
              >
                <p className="text-xs">Commented on: {comment.comic_titles}</p>
                <h3 className="text-sm font-medium">
                  <Balancer>{comment.comment}</Balancer>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
