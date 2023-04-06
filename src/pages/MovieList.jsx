import { useFetch } from "../hooks/useFetch";
import { Cards } from "../components/index";
import { useEffect } from "react";
export const MovieList = ({apiPath,title}) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(() => {
    document.title = `${title} / cinema-app`;
  });
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap others:justify-evenly">
          {movies.map((movie)=>{
            return <Cards key={movie.id} movie={movie} />;
          })
          }

        </div>
      </section>
    </main>
  );
};
