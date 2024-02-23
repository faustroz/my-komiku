-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "endpoint" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
