import { useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { SearchAndFind } from "../components/SearchAndFind/SearchAndFind";

import { Button } from "design-system/src/components/Button/Button";

function HomePage() {
  const [count, setCount] = useState(0);
  const { loading, data } = useFetch("src/data/pages.json");

  console.log("HomePage");

  useTitle("Home Page");

  return (
    <>
      <Header />
      <Main>
        <h1>HomePage</h1>
        <p>High waisted skinny jeans with fading - Abercrombie and Fitch</p>
        <div>
          <Button />
          <Button />
        </div>

        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        {loading && <div style={{ background: "red" }}>Loading...</div>}
        {data && (
          <div>
            <SearchAndFind list={data} />
            {JSON.stringify(data)}
          </div>
        )}
      </Main>
      <Footer />
    </>
  );
}

export default HomePage;
