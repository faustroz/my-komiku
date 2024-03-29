import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

const Card = ({ api, banyakData, title, href, titleHref }) => {
  return (
    <section className="w-full py-12">
      <div className="container grid grid-cols-2 gap-12 px-4 md:px-6 mb-4 text-light-text dark:text-dark-text">
        <h1 className="text-3xl font-bold ">
          <Balancer>{title}</Balancer>
        </h1>
        <div className="flex items-center justify-end">
          <div className="grid gap-2">
            {href ? (
              <Link
                className="flex items-center gap-2 text-sm"
                href={href ? href : ""}
              >
                <CaretRight className="w-4 h-4" />
                {titleHref ? titleHref : null}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-6 drop-shadow-lg">
        {api?.slice(0, banyakData).map((data, index) => {
          return (
            <div
              className="relative group overflow-hidden rounded-lg md:basis-1/2 text-light-text dark:text-dark-text "
              key={index}
            >
              <Link className="absolute inset-0 z-10" href={data.endpoint}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                unoptimized
                alt={data.title}
                className="object-cover object-center w-full aspect-video"
                height={225}
                src={data.image}
                loading="lazy"
                width={400}
              />
              <div className="bg-white p-4 0">
                <h3 className="font-semibold text-lg md:text-xl whitespace-nowrap overflow-hidden text-ellipsis">
                  {data.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Card;
