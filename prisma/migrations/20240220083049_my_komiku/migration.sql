-- CreateTable
CREATE TABLE "Watchlist" (
    "id" SERIAL NOT NULL,
    "endpoint" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "comic_image" TEXT,
    "comic_titles" TEXT,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_user_email_endpoint_key" ON "Watchlist"("user_email", "endpoint");
