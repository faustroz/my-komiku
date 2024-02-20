import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const watchlist = await prisma.watchlist.findMany({
    where: { user_email: user.email },
  });
  return (
    <div className="flex flex-col bg-light-background dark:bg-dark-background">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid justify-center items-center h-full gap-4 md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr] ">
          <div className="flex flex-col items-center">
            <div className="flex justify-center">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="150"
                src={user.image}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
            </div>
            <div className="space-y-2 mt-4 text-center text-light-text dark:text-dark-text">
              <h1 className="text-3xl font-bold">{user.name}</h1>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader className="text-light-text dark:text-dark-text">
            <CardTitle>Watchlist</CardTitle>
            <CardDescription>Series you want to watch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
              {watchlist.map((watch, index) => {
                return (
                  <Card key={index}>
                    <Link href="/">
                      <CardContent className="p-2 ">
                        <Image
                          alt="Thumbnail"
                          className="overflow-hidden rounded-lg object-cover object-center"
                          height="169"
                          src={watch.comic_image}
                          width="300"
                        />
                      </CardContent>
                      <CardFooter>
                        <CardTitle className="text-sm font-medium dark:text-dark-text">
                          {watch.comic_titles}
                        </CardTitle>
                      </CardFooter>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Page;
