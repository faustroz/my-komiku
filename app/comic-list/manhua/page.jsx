"use client";

import { getComicResponse } from "@/libs/api-libs";
import Card from "@/components/KomikList/Card";
import { useEffect, useState } from "react";
import PaginationButton from "@/components/Utilities/Pagination";
const Page = () => {
  const [manhuaData, setManhuaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  useEffect(() => {
    const fetchManhuaData = async () => {
      try {
        const listManhua = await getComicResponse("list", "filter=manhua");
        setManhuaData(listManhua.data);
      } catch (error) {
        console.error("Failed to fetch manhua data: ", error);
      }
    };

    fetchManhuaData();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = manhuaData?.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <Card api={currentPost} title={`Manhua List #${currentPage}`} />
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
