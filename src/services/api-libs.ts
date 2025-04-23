export const getAnimePopular = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();
  return anime;
};

export const getAnimeSeasonNow = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=10`
  );
  const anime = await response.json();
  return anime;
};

export const getAnimeRecommended = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/recommendations/anime`
  );
  const anime = await response.json();
  console.log("data", anime.data);
  return anime;
};

export const getAnimePopularEpisode = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/watch/episodes`
  );
  const anime = await response.json();

  return anime;
};

export const getAnimeDetails = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}/full`
  );
  const data = await response.json();
  return data;
};

// export const getWatchEpisodes = async () => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/watch/episodes`
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("API error response", errorText);
//       throw new Error(`Http error! status: ${response.status}`);
//     }

//     const episodeData = await response.json();

//     if (!episodeData || !Array.isArray(episodeData.data)) {
//       throw new Error("Invalid data format received from the API");
//     }

//     const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

//     const enrichedData = [];

//     for (const anime of episodeData.data) {
//       try {
//         const details = await getAnimeDetails(anime.entry.mal_id);

//         enrichedData.push({
//           ...anime,
//           entry: {
//             ...anime.entry,
//             rating: details?.data?.rating || "N/A",
//             synopsis: details?.data?.synopsis || "No synopsis available",
//             score: details?.data?.score || "N/A",
//           },
//         });
//       } catch (error) {
//         // Kalau error, push original data aja
//         enrichedData.push(anime);
//       }

//       // Delay 400–500ms antar request ke Jikan
//       await delay(500);
//     }

//     return {
//       ...episodeData,
//       data: enrichedData,
//     };
//   } catch (error) {
//     console.error("Error fetching watch episodes:", error);
//     return { data: [] };
//   }
// };
