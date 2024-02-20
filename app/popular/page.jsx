"use client";

import Card from "@/components/KomikList/Card";
import Pagination from "@/components/Utilities/Pagination";
import { getComicResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {  
  const [page, setPage] = useState(1);
  const [popular, setTopComic] = useState([]);

  const fetchData = async () => {
    const data = await getComicResponse(`popular/page/${page}`);
    setTopComic(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Card api={popular} banyakData={32} />
      <Pagination page={page} setPage={setPage} numberOfPage={"8"} />
    </>
  );
};

export default Page;
