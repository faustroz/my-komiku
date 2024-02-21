"use client";

import { getComicResponse } from "@/libs/api-libs";
import Card from "@/components/KomikList/Card";
import { useEffect, useState } from "react";
import PaginationButton from "@/components/Utilities/Pagination";
const Page = () => {
  const [mangaData, setMangaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  useEffect(() => {
    const fetchMangaData = async () => {
      try {
        const listManga = await getComicResponse("list", "filter=manga");
        setMangaData(listManga.data);
      } catch (error) {
        console.error("Failed to fetch manga data: ", error);
      }
    };

    fetchMangaData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = mangaData?.slice(firstPostIndex, lastPostIndex);
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
