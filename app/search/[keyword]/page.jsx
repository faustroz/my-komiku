import { getComicResponse } from "@/libs/api-libs";
import Image from "next/image";
import Link from "next/link";

const createSlug = (text) => {
  return text.toLowerCase().replace(/ /g, "-");
};

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decodedKeyword = decodeURI(keyword);
  const searchComic = await getComicResponse(`search/${decodedKeyword}`);

  return (
    <section className="w-full py-12">
      <div className="container grid grid-cols-2 gap-12 px-4 md:px-6 mb-4 text-light-text dark:text-dark-text">
        <div className="flex flex-col gap-4 lg:gap-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Hasil Pencarian : {decodedKeyword}
          </h1>
        </div>
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-6 drop-shadow-lg">
        {searchComic.data.map((data, index) => {
          const slug = createSlug(data.title);
          return (
            <div
              className="relative group overflow-hidden rounded-lg md:basis-1/2 text-light-text dark:text-dark-text "
              key={index}
            >
              <Link
                className="absolute inset-0 z-10"
                href={data.endpoint}
              ></Link>
              <Image
                alt="Anime 1"
                className="object-cover object-center w-full aspect-video"
                height={225}
                src={data.image}
                priority={true}
                width={400}
              />
              <div className="bg-white p-4 0">
                <h3 className="font-semibold text-lg md:text-xl whitespace-nowrap overflow-hidden text-ellipsis">
                  {data.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
