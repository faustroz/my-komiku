import { getComicResponse } from "@/libs/api-libs";
import Card from "@/components/KomikList/Card";
const Page = async () => {
  const listManhua = await getComicResponse("list", "filter=manhua");
  return <Card api={listManhua} title="Manhua List" />;
};

export default Page;
