"use client";

import { useState, useEffect } from "react";
import AnimePopularEpisodes from "./anime-popular-episode";

interface AnimeWatchCarouselProps {
  data: any[];
}

const AnimeWatchCarousel = ({ data }: AnimeWatchCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch detail anime dari Jikan API
  const fetchAnimeDetails = async (malId: number) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${malId}/full`
      );
      const details = await response.json();
      return details.data;
    } catch (error) {
      console.error("Error fetching anime details:", error);
      return null;
    }
  };

  // Effect untuk filter dan fetch data detail
  useEffect(() => {
    const initializeData = async () => {
      setIsLoading(true);
      const filtered = data.filter((item) => item.region_locked === false);

      // Fetch details untuk setiap anime
      const enrichedData = await Promise.all(
        filtered.map(async (item) => {
          const details = await fetchAnimeDetails(item.entry.mal_id);
          return {
            ...item,
            entry: {
              ...item.entry,
              rating: details?.rating || "N/A",
              synopsis: details?.synopsis || "No synopsis available",
              score: details?.score || "N/A",
            },
          };
        })
      );

      setFilteredData(enrichedData);
      setIsLoading(false);
    };

    initializeData();
  }, [data]);

  // Effect untuk interval pergantian data
  useEffect(() => {
    if (filteredData.length === 0 || isLoading) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === filteredData.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [filteredData, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (filteredData.length === 0) return null;

  const currentAnime = filteredData[currentIndex];

  return (
    <div>
      <AnimePopularEpisodes
        entry={currentAnime.entry}
        id={currentAnime.mal_id}
        episodes={currentAnime.episodes}
        region_locked={currentAnime.region_locked}
      />
    </div>
  );
};

export default AnimeWatchCarousel;
