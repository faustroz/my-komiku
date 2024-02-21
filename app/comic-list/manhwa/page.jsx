"use client";

import { getComicResponse } from "@/libs/api-libs";
import Card from "@/components/KomikList/Card";
import { useEffect, useState } from "react";
import PaginationButton from "@/components/Utilities/Pagination";
const Page = () => {
  const [manhwaData, setManhwaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  useEffect(() => {
    const fetchManhwaData = async () => {
      try {
        const listManhwa = await getComicResponse("list", "filter=manhwa");
        setMangaData(listManhwa.data);
      } catch (error) {
        console.error("Failed to fetch manhwa data: ", error);
      }
    };

    fetchManhwaData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = manhwaData?.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <Card api={currentPost} title={`Manhwa List #${currentPage}`} />
      <PaginationButton
        totalPost={currentPost.length}
        postPerPage={postPerPage}
        page={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  );
};

export default Page;
