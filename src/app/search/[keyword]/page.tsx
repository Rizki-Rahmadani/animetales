import Header from "@/components/AnimeList/header";
import AnimeOnGoing from "@/components/AnimeList/anime-ongoing";
import { getSearchAnime } from "@/services/api-libs";
import FooterAnime from "@/components/Utilities/footer";

type SearchPageProps = {
  params: { keyword: string };
};

export default async function Search({ params }: SearchPageProps) {
  const { keyword } = await params;

  const searchAnime = await getSearchAnime(keyword);

  // Cleaning duplikat anime
  const uniqueSearchAnime = searchAnime.data.filter(
    (value: any, index: number, self: any[]) =>
      index === self.findIndex((v) => v.mal_id === value.mal_id)
  );

  return (
    <>
      <section>
        <div className="m-3 p-3 bg-[#bdd3ec] rounded-md">
          <Header title={`Pencarian untuk: ${keyword}`} />
          <AnimeOnGoing api={uniqueSearchAnime} />
        </div>
      </section>
      <FooterAnime />
    </>
  );
}
