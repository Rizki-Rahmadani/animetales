import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface animeOnGoingProps {
  api: any;
}

const AnimeOnGoing = ({ api }: animeOnGoingProps) => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 grid-cols-2 gap-5 md:px-10 px-1">
      {api ? (
        api.map((data: any) => (
          <div key={`${data.mal_id}`} className="shadow-xl p-3 rounded-md">
            <Link href={``} className="cursor-pointer">
              <div className="relative md:w-full md:h-[350px] w-[100%] h-[150px]">
                {/* Background blur */}
                <Image
                  src={data.images.jpg.large_image_url}
                  fill
                  alt="background"
                  className="object-cover blur-xs brightness-100 z-10"
                />

                {/* Main image */}
                <Image
                  src={data.images.jpg.large_image_url}
                  width={350}
                  height={350}
                  alt={data.title}
                  className="md:w-full md:h-[350px] w-[100%] h-[150px] object-contain relative z-10 p-3"
                />
              </div>
              <h1 className="anton-regular lg:text-lg text-sm p-2 truncate ">
                {" "}
                {data.title}{" "}
              </h1>

              <p className="text-sm pl-2 text-gray-500">
                {" "}
                Episodes: {data.episodes}{" "}
              </p>
              <div className="flex flex-col gap-1">
                <p className="md:text-sm text-xs pl-2 text-gray-500 flex items-center gap-1">
                  {" "}
                  Ratings: {data.score} / 10.0{" "}
                  <span className="text-amber-500">
                    <FaStar />
                  </span>{" "}
                </p>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading Anime Season Now...</p>
      )}
    </div>
  );
};

export default AnimeOnGoing;
