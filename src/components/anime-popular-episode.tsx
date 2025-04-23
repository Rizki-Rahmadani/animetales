import Image from "next/image";
import Link from "next/link";

interface AnimeRecommendedProps {
  id: string;
  entry: {
    mal_id: number;
    images: {
      webp: {
        large_image_url: string;
      };
    };
    title: string;
    rating?: string;
    synopsis?: string;
    score?: number;
  };
  episodes: {
    title: string;
  }[];
  region_locked: boolean;
}

const AnimePopularEpisodes = ({
  entry,
  episodes,
  region_locked,
  id,
}: AnimeRecommendedProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Kolom Kiri - Informasi */}
      <div className="w-full md:w-[40%] h-screen p-8 flex flex-col justify-center space-y-4">
        <h1 className="anton-regular text-3xl md:text-5xl rubik-regular">
          {entry.title}
        </h1>

        <div className="space-y-2">
          {entry.rating && (
            <p className="text-base md:text-lg">
              Rating:{" "}
              <span className="text-amber-500 font-semibold">
                {entry.rating}
              </span>
            </p>
          )}

          {entry.score && (
            <p className="text-base md:text-lg">
              Score:{" "}
              <span className="text-amber-500 font-semibold">
                {entry.score}
              </span>
            </p>
          )}

          {entry.synopsis && (
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Synopsis
              </h3>
              <p className="text-gray-700 truncate transition-all duration-300">
                {entry.synopsis}
              </p>
            </div>
          )}

          <div className="pt-4">
            <h2 className="anton-regular text-lg md:text-xl mb-2">
              Latest Episode:
            </h2>
            <p className="text-base md:text-lg text-amber-600">
              {episodes[0].title}
            </p>
          </div>

          <div className="flex items-center gap-2 pt-4">
            <span
              className={`text-base md:text-lg font-semibold ${
                region_locked ? "text-red-500" : "text-green-500"
              }`}
            >
              {region_locked ? "Region Locked" : "Available in Your Region"}
            </span>
          </div>
        </div>
      </div>

      {/* Kolom Kanan - Gambar */}
      <div className="w-full md:w-[60%] transparent-image-container">
        <Image
          src={entry.images.webp.large_image_url}
          alt={entry.title}
          fill
          className="object-cover transparent-image"
          priority
        />
        {/* Overlay gradient untuk memastikan teks tetap terbaca */}
        {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-100/20" /> */}
      </div>
    </div>
  );
};

export default AnimePopularEpisodes;
