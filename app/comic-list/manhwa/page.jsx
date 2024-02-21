import { getComicResponse } from "@/libs/api-libs";
import Card from "@/components/KomikList/Card";
const Page = async () => {
  const listManhwa = await getComicResponse("list", "filter=manhwa");
  return <Card api={listManhwa} title="Manhwa List" />;
};

export default Page;
