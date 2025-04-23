import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import ClientSwiper from "../ClientSwiper";

export interface animeProps {
  api: any;
}

const AnimePopular = ({ api }: animeProps) => {
  return (
    <div className="md:px-10 px-1 ">
      <ClientSwiper>
        {api.data.map((anime: any) => (
          <div key={anime.mal_id} className="shadow-xl p-3 rounded-md w-[100%]">
            <Link href={`/${anime.mal_id}`} className="cursor-pointer">
              <div className="relative md:w-full md:h-[350px] w-[100%] h-[150px]">
                {/* Background blur */}
                <Image
                  src={anime.images.jpg.large_image_url}
                  fill
                  alt="background"
                  className="object-cover blur-xs brightness-100 -z-10 rounded-md"
                />

                {/* Main image */}
                <Image
                  src={anime.images.jpg.large_image_url}
                  width={350}
                  height={350}
                  alt={anime.title}
                  className="md:w-full md:h-[350px] w-[100%] h-[150px] object-contain relative z-10 p-3"
                />
              </div>
              <h1 className="anton-regular lg:text-lg text-sm p-2 truncate ">
                {" "}
                {anime.title}{" "}
              </h1>
              <div className="flex flex-col gap-1">
                <p className="md:text-sm text-xs pl-2 text-gray-500 flex items-center gap-1">
                  {" "}
                  Ratings: {anime.score} / 10.0{" "}
                  <span className="text-amber-500">
                    <FaStar />
                  </span>{" "}
                </p>
                <div className=" flex text-center items-center pl-2 gap-1 md:text-sm text-xs divl-2 text-gray-500">
                  {anime.status}{" "}
                  <span className="text-blue-600">
                    <GrStatusGood />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </ClientSwiper>
    </div>
  );
};
export default AnimePopular;
