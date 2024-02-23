"use client";

import { Bookmarks } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

const WatchListButton = ({
  endpoint,
  user_email,
  comic_image,
  comic_titles,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = { endpoint, user_email, comic_image, comic_titles };
    const response = await fetch("/api/v1/watchlist", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const watchlist = await response.json();
    if (watchlist.status == 200) {
      setIsCreated(watchlist.isCreated);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-light-text dark:text-dark-text">
          Success add to watchlist
        </p>
      ) : (
        <button className="flex items-center " aria-label="Add to watchlist">
          <Bookmarks
            onClick={handleCollection}
            size={15}
            className="text-light-text dark:text-dark-text"
          />
          <span className="ml-2">Add to watchlist</span>
        </button>
      )}
    </>
  );
};

export default WatchListButton;
