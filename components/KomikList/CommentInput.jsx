"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

const CommentInput = ({ endpoint, user_email, username }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();
    const data = { endpoint, user_email, username, comment };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const createComment = await response.json();
    if (createComment.isCreated) {
      setIsCreated(true);
      setComment("");
    }
    return;
  };

  return (
    <section className="container mx-auto px-4 text-light-text dark:text-dark-text pb-5">
      <h2 className="text-3xl font-bold mb-4">Comment Section</h2>
      <div className="grid gap-6">
        <form className="bg-white shadow rounded-lg p-6 grid gap-4">
          {isCreated && (
            <p className="text-light-text dark:text-dark-text">
              Postingan Terkirim...
            </p>
          )}
          <span className="sr-only">Leave a comment</span>
          <textarea
            onChange={handleInput}
            value={comment}
            className="border rounded-lg p-2 text-light-text"
            placeholder="Leave a comment..."
            rows={3}
          />
          <div className="text-right">
            <Button
              className="bg-light-primary text-dark-text"
              onClick={handlePosting}
            >
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CommentInput;
