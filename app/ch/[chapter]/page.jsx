import { getComicResponse } from "@/libs/api-libs";
import Image from "next/image";

const Page = async ({ params }) => {
  const { chapter } = params;
  const chapterDetail = await getComicResponse(`chapter/ch/${chapter}/`);

  return (
    <div className="container mx-auto py-8 bg-#010104">
      <h1 className="text-3xl font-semibold mb-4 text-center text-white">{chapterDetail.data.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {chapterDetail.data.image.map((imageUrl, index) => (
          <div key={index} className="relative">
            <Image
              src={imageUrl}
              alt={`Page ${index + 1}`}
              className="w-full h-auto rounded-lg"
              width={500}
              height={500}
            />
            <p className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-tr-lg"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
