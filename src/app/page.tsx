import {
  getAnimeSeasonNow,
  getAnimePopular,
  getAnimeRecommended,
  getAnimePopularEpisode,
} from "../services/api-libs";
import FooterAnime from "../components/Utilities/footer";
import Header from "@/components/AnimeList/header";
import AnimePopular from "@/components/AnimeList/anime-popular";
import AnimeOnGoing from "@/components/AnimeList/anime-ongoing";

const Home = async () => {
  // Anime Popular
  const animePopular = await getAnimePopular();
  // Anime OnGoing
  const animeSeasonNow = await getAnimeSeasonNow();

  const animeRecommended = await getAnimeRecommended();
  const animePopularEpisode = await getAnimePopularEpisode();
  // const animeWatchEpisodes = await getWatchEpisodes();

  // Cleaning duplikat anime
  const uniqueAnime = animeSeasonNow.data.filter(
    (value: any, index: number, self: any[]) =>
      index === self.findIndex((v) => v.mal_id === value.mal_id)
  );

  return (
    <>
      {/* <div className="w-screen h-screen">
        <AnimeWatchCarousel data={animeWatchEpisodes.data} />
      </div> */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col w-full md:w-3/4">
          <div>
            {/* Anime Populer */}
            <section>
              <div className="m-3 p-3 bg-[#bdd3ec] rounded-md">
                <Header
                  title="Anime Populer"
                  linkHref="/populer"
                  linkTitle="View All"
                />
                <AnimePopular api={animePopular} />
              </div>
            </section>

            {/* Anime onGoing */}
            <section>
              <div className="m-3 p-3 bg-[#bdd3ec] rounded-md">
                <Header
                  title="Anime OnGoing"
                  linkHref="/ongoing"
                  linkTitle="View All"
                />
                <AnimeOnGoing api={uniqueAnime} />
              </div>
            </section>
          </div>
        </div>
        <div className="bg-[#bdd3ec] md:w-full m-3 p-3 rounded-md">
          <p>Topics</p>
        </div>
      </div>
      <FooterAnime />
    </>
  );
};

export default Home;
