import { Suspense } from "react";
import { Movie } from "@/_types/types";
import { getPlaiceholder } from "plaiceholder";

import LoadingGrid from "../LoadingGrid";
import MovieCarousel from "./MovieCarousel";
import { getPopularMovies } from "@/lib/popularMovies";

async function MostPopularMovies() {
  // const processedMovies = await fetchMovies();
  const movies = await getPopularMovies()

  //   const processedMovies = await Promise.all(
  //     movies.results.map(async (movie) => {
  //       const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  //       try {
  //         const { base64 } = await getPlaiceholder(Buffer.from(imageUrl))
  //         console.log("base64 IMAGE - ",base64)
  //         return { ...movie, blurDataURL: base64 }
  //       } catch (error) {
  //         console.error(`Error generating blur for ${movie.title}:`, error)
  //         return { ...movie, blurDataURL: 'https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg' }
  //       }
  //     })
  //   )

  return (
    <section className="py-24 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl">
      <h2 className="text-4xl font-bold font-raleway text-raleway text-center mb-8">
        Most Popular Movies
      </h2>
      <Suspense fallback={<LoadingGrid />}>
        <MovieCarousel movies={movies} />
      </Suspense>
    </section>
  );
}

export default MostPopularMovies;
