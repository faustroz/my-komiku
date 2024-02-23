import prisma from "@/libs/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

const CommentBox = async ({ endpoint }) => {
  const comment = await prisma.comment.findMany({ where: { endpoint } });
  return (
    <div className="container mx-auto px-4 text-light-text dark:text-dark-text pb-5">
      <h2 className="text-3xl font-bold mb-4">Community Discussions</h2>
      <div className="grid gap-6">
        {comment.map((comments) => {
          return (
            <div
              className="bg-white shadow-md dark:shadow-white rounded-lg p-6 grid gap-4"
              key={comments.id}
            >
              <div className="flex items-start gap-6 mt-6">
                <Avatar className="border w-12 h-12 m-2">
                  <AvatarImage
                    alt={`Profile picture of ${comments.username}`}
                    src="/placeholder-user.jpg"
                  />
                  <AvatarFallback>{comments.username}</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-lg">
                      {comments.username}
                    </div>
                    <div className="text-gray-500 text-sm dark:text-gray-400 ml-2">
                      Commented on: {comments.comic_title}
                    </div>
                  </div>
                  <div className="text-gray-700">{comments.comment}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
