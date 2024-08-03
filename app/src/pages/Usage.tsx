import { memo } from "react";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Title } from "../components/Title/Title";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";
import { Sticky } from "../components/Sticky/Sticky";
import { Search } from "../components/Search/Search";

function UsagePage() {
  useTitle("Usage");

  return (
    <>
      <HeaderMemo />
      <Main>
        <Title>
          Learn the basics of working <span>with DS library components</span>
        </Title>
        <Promote
          head={<h2>Every component you need is ready for production</h2>}
          body={
            <p>
              Build beautiful UIs with ease. Start with Google's Material
              Design, or create your own sophisticated theme. Our components are
              as flexible as they are powerful. You always have full control
              over how they look and behave.
            </p>
          }
          foot={<Button to={"/ds/"}>Get Started</Button>}
        />
        <Sticky>
          <SearchMemo />
        </Sticky>
        <h2>
          Advantages <span>of DS library</span>
        </h2>
        <p>
          Ship faster: Our team has invested thousands of hours into these
          components so you don't have to. Get up and running in a fraction of
          the time it would take to build from scratch.
        </p>
        <p>
          Expand on the power of MUI Core: MUI X components work seamlessly with
          MUI Core libraries like Material UI, delivering more advanced
          functionality, but can also be used standalone.
        </p>
        <p>
          Grow with us: You can start for free with the MIT-licensed packages,
          and upgrade to Pro or Premium when you need more advanced features or
          technical support.
        </p>
        <p>
          Dedicated maintenance: MUI X is maintained by a full-time staff of
          engineers, so you can rest assured that any issues will be addressed
          in a timely manner.
        </p>
        <p>
          Technical support: Pro and Premium users get access to technical
          support from our team as well as priority for bug fixes and feature
          requests.
        </p>
        <h2>
          40+ building block components{" "}
          <span>A meticulous implementation of DS library</span>
        </h2>
        <p>
          Every DS library component meets the highest standards of form and
          function.
        </p>
        <p>
          Build your design system just as you want it to be Start quickly with
          Material Design or use the advanced theming feature to easily tailor
          the components to your needs.
        </p>
        <h2>
          A delightful experience&nbsp;
          <span>for you and your users</span>
        </h2>
        <p>
          Build beautiful UIs with ease. Start with Google's Material Design, or
          create your own sophisticated theme.
        </p>
        <p>
          Our components are as flexible as they are powerful. You always have
          full control over how they look and behave.
        </p>
        <p>
          The answer to your problem can be found in our documentation. How can
          we be so sure? Because our docs boast over 2,000 contributors.
        </p>
        <p>
          We believe in building for everyone. That's why accessibility is one
          of our highest priorities with every new feature we ship.
        </p>
        <h2>
          Beautiful and powerful <span>right out of the box</span>
        </h2>
        <p>
          We've relied on DS library really heavily. I override a lot of default
          styles to try and make things our own, but the time we save with
          complex components like the Autocomplete and the Data Grid are so
          worth it.
        </p>
        <p>
          Every other library I try has 80% of what I'm looking for when it
          comes to complex use cases, DS library has it all under one roof which
          is a huge help for our small team.
        </p>
        <h2>
          Supported by thousands <span>of developers and designers</span>
        </h2>
        <p>
          DS library looks great and lets us deliver fast, thanks to their solid
          API design and documentation - it's refreshing to use a component
          library where you get everything you need from their site rather than
          Stack Overflow.
        </p>
        <p>
          We think the upcoming version, with extra themes and customizability,
          will make DS library even more of a game changer.
        </p>
        <p>
          We're extremely grateful to the team for the time and effort spent
          maintaining the project.
        </p>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

const HeaderMemo = memo(Header);
const SearchMemo = memo(Search);

export default UsagePage;
