import { useCallback, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";

import { DsButton } from "design-system/src/components/Button/Button";

function ButtonPage() {
  console.log("ButtonPage");
  useTitle("Button Page");

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("handleClick", count);
  }, []);

  return (
    <>
      <Header />
      <Main>
        <DsButton onClick={() => setCount((count) => count + 1)}>
          button {count}
        </DsButton>
        <h1>
          Button <span>Component</span>
        </h1>
        <p>
          Buttons allow users to take actions, and make choices, with a single
          tap. Buttons communicate actions that users can take. They are
          typically placed throughout your UI, in places like: Modal windows,
          Forms, Cards, Toolbars.
        </p>
        <p>
          This unstyled version of the component is the ideal choice for heavy
          customization with a smaller bundle size.
        </p>
        <h2>
          Basic <span>Button</span>
        </h2>
        <p>
          The Button comes with three variants: contained (default), and
          outlined.
        </p>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ButtonPage;
