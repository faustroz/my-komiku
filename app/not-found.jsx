"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex items-center min-h-screen p-4 text-center md:p-8 bg-dark-background">
      <div className="space-y-4 w-full max-w-2xl mx-auto text-dark-text">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
          404 Not Found
        </h1>
        <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
          The page you were looking for does not exist. Perhaps you would like
          to explore more anime content?
        </p>
        <Button
          className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-gray-200 bg-dark-primary text-sm font-medium shadow-sm transition-colors"
          onClick={(e) => router.back()}
        >
          <ArrowLeft size={32} className="w-4 h-4" />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default Page;
