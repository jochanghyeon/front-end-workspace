// export로 내보내는것 import할때 {}
import { getFetchThen, getAwait } from "./api/movie";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setDate] = useState([]);

  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      setDate(result);
    });
  };
  // async/await
  const loadAwait = async () => {
    const result = await getAwait();
    setData(result);
  };

  useEffect(() => {
    // loadFetchThen();
    loadAwait();
  }, []);
  return (
    <>
      {data.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.genre}</h2>
          <p>{movie.actor}</p>
        </div>
      ))}
    </>
  );
};
export default App;
