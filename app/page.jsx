import Card from "@/components/KomikList/Card";
import Slider from "@/components/KomikList/Slider";
import { getComicResponse } from "../libs/api-libs";
import Header from "@/components/KomikList/Header";

const Page = async () => {
  const manga = await getComicResponse("list", "filter=manga");
  const randomizedManga = manga.data.sort(() => Math.random() - 0.5);

  const slider = await getComicResponse("popular/page/1");
  const sliderTitle = slider.data;

  const manhwa = await getComicResponse("list", "filter=manhwa");
  const randomizedManhwa = manhwa.data.sort(() => Math.random() - 0.5);

  const manhua = await getComicResponse("list", "filter=manhua");
  const randomizedManhua = manhua.data.sort(() => Math.random() - 0.5);

  return (
    <div>
      <section>
        <Slider images={slider.data} />
        <Card api={manga} banyakData={4} title="Top Manga" title2="View All" />
      </section>
      <section>
        <Card api={manhwa} banyakData={4} title="Top Manhwa" />
      </section>
      <section>
        <Card api={manhua} banyakData={4} title="Top Manhua" />
      </section>
    </div>
  );
};

export default Page;
