import Header from "@/components/KomikList/Header";
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
    <div className="bg-dark-background">
      <div className="container mx-auto px-2 pb-8 text-center mt-8">
        <Header title={`Hasil Pencarian : ${decodedKeyword}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchComic.data.map((data, index) => {
            const slug = createSlug(data.title);
            return (
              <Link
                href={data.endpoint}
                key={index}
                className="rounded-lg shadow-md overflow-hidden block"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={data.image}
                    alt={data.title}
                    className="object-cover rounded-t-lg"
                    layout="fill"
                  />
                </div>
                <div className="p-4 text-dark-text">
                  <h2 className="text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap">
                    {data.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
