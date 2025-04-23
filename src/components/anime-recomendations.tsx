import Image from "next/image";
import Link from "next/link";

interface AnimeRecommendedProps {
  id: string;
  entry: {
    mal_id: number;
    images: {
      jpg: {
        large_image_url: string;
      };
    };
    title: string;
  }[];
  content: string;
}
const AnimeRecommended = ({ entry, content, id }: AnimeRecommendedProps) => {
  return (
    <Link href={`/cuyanimelist/${id}`} className="cursor-pointer">
      <div className="relative w-full h-[350px]">
        {/* Background blur */}
        <Image
          src={entry[0].images.jpg.large_image_url}
          alt={entry[0].title}
          fill
          className="object-cover blur-xs brightness-100 -z-10 rounded-md"
        />

        {/* Main image */}
        <Image
          src={entry[0].images.jpg.large_image_url}
          width={350}
          height={350}
          alt={entry[0].title}
          className="w-full h-[350px] object-contain relative z-10 p-3"
        />
      </div>
      <h1 className="anton-regular lg:text-lg text-sm p-2 truncate ">
        {" "}
        {entry[0].title}
      </h1>
    </Link>
  );
};

export default AnimeRecommended;
