import CommentBox from "@/components/KomikList/CommentBox";
import CommentInput from "@/components/KomikList/CommentInput";
import WatchListButton from "@/components/KomikList/WatchlistButton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { getComicResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import { CaretRight, CheckCircle, Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { endpoint } }) => {
  const detailKomik = await getComicResponse(`info/manga/${endpoint}`);
  const user = await authUserSession();
  const watchlist = await prisma.watchlist.findFirst({
    where: { user_email: user?.email, endpoint: endpoint },
  });

  return (
    <main className="flex flex-col min-h-screen ">
      <article className="px-4 py-6 md:px-6 md:py-12 lg:py-16 flex-grow bg-light-background dark:bg-dark-background">
        <div className="grid md:grid-cols-2 md:gap-6 lg:gap-12 max-w-6xl mx-auto items-start space-y-4 md:space-y-0 ">
          <figure className="relative w-full h-100 md:h-auto ">
            <Image
              alt="Cover image"
              className="object-cover object-center rounded-lg "
              src={detailKomik.data.thumbnail}
              priority="primary"
              width={500}
              height={500}
            />
          </figure>
          <section className="space-y-4 text-light-dark dark:text-dark-text">
            <header className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                {detailKomik.data.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                {detailKomik.data.author}
              </p>
            </header>
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" weight="fill" />
                  {detailKomik.data.status}
                </p>
                <p className="flex items-center gap-2">
                  <Star className="w-4 h-4" weight="fill" />
                  {detailKomik.data.rating}
                </p>
                {!watchlist && user && (
                  <WatchListButton
                    user_email={user?.email}
                    endpoint={endpoint}
                    comic_image={detailKomik.data.thumbnail}
                    comic_titles={detailKomik.data.title}
                  />
                )}
              </div>
              <div>
                <p>Genres</p>
                <ul className="flex flex-col items-start gap-2">
                  {detailKomik.data.genre.map((genre, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CaretRight className="w-4 h-4" weight="fill" />
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <section className="grid gap-4">
              <div className="h-72 w-full rounded-md border overflow-hidden">
                <ScrollArea className="h-full w-full overflow-y-auto">
                  <div className="p-4">
                    <h4 className="mb-4 text-2xl font-semibold leading-none text-center">
                      Chapter List
                    </h4>
                    {detailKomik.data.chapter_list.map((chapter, index) => (
                      <div className="text-base " key={index}>
                        <div className="rounded p-2 m-2 transition-colors duration-200 flex items-center bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text">
                          <Link className="underline " href={chapter.endpoint}>
                            {chapter.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                    <Separator className="my-2" />
                  </div>
                </ScrollArea>
              </div>
            </section>
          </section>
        </div>
      </article>
      {user && (
        <CommentInput
          endpoint={endpoint}
          user_email={user?.email}
          username={user?.name}
          user_profile={user?.image}
          comic_titles={detailKomik.data.title}
        />
      )}
      <CommentBox endpoint={endpoint} />
    </main>
  );
};

export default Page;
