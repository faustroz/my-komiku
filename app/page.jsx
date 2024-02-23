import Card from "@/components/KomikList/Card";
import Slider from "@/components/KomikList/Slider";
import { getComicResponse } from "../libs/api-libs";

const getRandomizedComics = async (filter) => {
  const response = await getComicResponse("list", `filter=${filter}`);
  return response.data.sort(() => Math.random() - 0.5);
};

const Page = async () => {
  const slider = await getComicResponse("popular/page/1");

  const randomizedManga = await getRandomizedComics("manga");
  const randomizedManhwa = await getRandomizedComics("manhwa");
  const randomizedManhua = await getRandomizedComics("manhua");

  return (
    <div>
      <section>
        <Slider images={slider.data} />;
        <Card
          api={randomizedManga}
          banyakData={4}
          title="Editor's Picks: Manga"
          titleHref="Explore All Manga"
          href="/comic-list/manga"
        />
      </section>
      <section>
        <Card
          api={randomizedManhwa}
          banyakData={4}
          title="Must-Read Manhwa"
          titleHref="Discover All Manhwa"
          href="/comic-list/manhwa"
        />
      </section>
      <section>
        <Card
          api={randomizedManhua}
          banyakData={4}
          title="Trending Manhua"
          titleHref="See All Manhua"
          href="/comic-list/manhua"
        />
      </section>
    </div>
  );
};

export default Page;
