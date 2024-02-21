import { getComicResponse } from "@/libs/api-libs";
import Card from "@/components/KomikList/Card";
const Page = async () => {
  const listManga = await getComicResponse("list", "filter=manga");
  return <Card api={listManga} title="Manga List" />;
};

export default Page;
