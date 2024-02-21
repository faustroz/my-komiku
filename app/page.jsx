import Card from "@/components/KomikList/Card";
import Slider from "@/components/KomikList/Slider";
import { getComicResponse } from "../libs/api-libs";

const Page = async () => {
  const manga = await getComicResponse("list", "filter=manga");
  const randomizedManga = manga.data.sort(() => Math.random() - 0.5);

  const slider = await getComicResponse("popular/page/1");
  const manhwa = await getComicResponse("list", "filter=manhwa");
  const randomizedManhwa = manhwa.data.sort(() => Math.random() - 0.5);

  const manhua = await getComicResponse("list", "filter=manhua");
  const randomizedManhua = manhua.data.sort(() => Math.random() - 0.5);

  return (
    <div>
      <section>
        <Slider images={slider.data} />
        <Card
          api={randomizedManga}
          banyakData={4}
          title="Recommended Manga"
          titleHref="View All"
          href="/comic-list/manga"
        />
      </section>
      <section>
        <Card
          api={randomizedManhwa}
          banyakData={4}
          title="Recommended Manhwa"
          titleHref="View All"
          href="/comic-list/manhwa"
        />
      </section>
      <section>
        <Card
          api={randomizedManhua}
          banyakData={4}
          title="Recommended Manhua"
          titleHref="View All"
          href="/comic-list/manhua "
        />
      </section>
    </div>
  );
};

export default Page;
