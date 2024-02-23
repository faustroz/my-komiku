"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CommentInput = ({
  endpoint,
  user_email,
  username,
  user_profile,
  comic_titles,
}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();
  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();
    const data = {
      endpoint,
      user_email,
      user_profile,
      username,
      comic_titles,
      comment,
    };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const createComment = await response.json();
    if (createComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
    return;
  };

  return (
    <section className="container mx-auto px-4 text-light-text dark:text-dark-text pb-5">
      <h2 className="text-3xl font-bold mb-4">Join the Discussion</h2>
      <div className="grid gap-6">
        <form className="bg-white shadow rounded-lg p-6 grid gap-4">
          {isCreated && (
            <p className="text-light-text dark:text-dark-text">
              Your comment has been posted...
            </p>
          )}
          <span className="sr-only">Leave a comment</span>
          <textarea
            onChange={handleInput}
            value={comment}
            className="border rounded-lg p-2 text-light-text"
            placeholder="Share your thoughts..."
            rows={3}
          />
          <div className="text-right">
            <Button
              className="bg-light-primary text-dark-text"
              onClick={handlePosting}
            >
              Submit Comment
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommentInput;
