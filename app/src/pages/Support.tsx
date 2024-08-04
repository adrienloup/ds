import { memo } from "react";
import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Title } from "../components/Title/Title";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";
import { Separator } from "../components/Separator/Separator";
import { Sticky } from "../components/Sticky/Sticky";
import { Search } from "../components/Search/Search";

function SupportPage() {
  useTitle("Support");

  return (
    <>
      <HeaderMemo />
      <Main>
        <Title>
          <span>Learn how to get support for</span> library components
        </Title>
        <Promote
          head={<h2>Bug and feature request</h2>}
          body={
            <>
              <p>
                We use GitHub issues as a bug and feature request tracker. If
                you think you've found a bug, or you have a new feature idea.
                Please start by making sure it hasn't already been reported or
                fixed. You can search through existing issues and pull requests
                to see if someone has reported one similar to yours.
              </p>
            </>
          }
          foot={
            <Button href={"https://github.com/adrienloup/ds"}>GitHub</Button>
          }
        />
        <Sticky>
          <SearchMemo />
        </Sticky>
        <h2>Support</h2>
        <p>
          Learn how to get support for DS library components, including feature
          requests, bug fixes, and technical support from the team.
        </p>
        <p>
          Please start by making sure it hasn't already been reported or fixed.
          You can search through existing issues and pull requests to see if
          someone has reported one similar to yours.
        </p>
        <p>
          Then, if no duplicates exist, open an issue in the DS library
          repository.
        </p>
        <Separator name="face_3" />
        <h2>
          New issue <span>guidelines</span>
        </h2>
        <p>Please follow one the issue templates provided on GitHub.</p>
        <p>
          Please begin the title with "[component-name]" (if relevant), and use
          a succinct description that helps others find similar issues. ❌ "It
          doesn't work" ✅ "[button] Add support for [new feature]"
        </p>
        <p>Please don't group multiple topics in one issue.</p>
        <p>
          Please don't comment "+1" on an issue. It spams the maintainers and
          doesn't help move the issue forward. Use GitHub reactions instead
          (👍).
        </p>
        <Separator name="face_5" />
        <h2>
          Bug <span>reproductions</span>
        </h2>
        <p>
          We require bug reports to be accompanied by a minimal reproduction. It
          significantly increases the odds of fixing the problem. You have a few
          possible options to provide it.
        </p>
        <p>
          You can use a starter React template to build a reproduction case with
          JavaScript or TypeScript.
        </p>
        <p>
          We use Stack Overflow for how-to questions. Answers are crowdsourced
          from expert developers in the DS library community as well as DS
          library maintainers.
        </p>
        <p>
          If you can't find your answer, ask a new question using the relevant
          tags.
        </p>
        <Separator name="support_agent" />
        <h2>
          Technical <span>support</span>
        </h2>
        <p>
          We do not offer paid support for Core libraries like DS library. But
          you might want to read the{" "}
          <a
            href="https://github.com/adrienloup/ds"
            target="_blank"
            rel="noopener"
          >
            technical support offered
          </a>{" "}
          on MUI X components.
        </p>
        <p>
          We use Stack Overflow for how-to questions. Answers are crowdsourced
          from expert developers in the DS library community as well as DS
          library maintainers.
        </p>
        <p>
          If you can't find your answer,{" "}
          <a
            href="https://github.com/adrienloup/ds"
            target="_blank"
            rel="noopener"
          >
            ask a new question
          </a>{" "}
          using the relevant tags.
        </p>
        <p>
          Bug fixes, performance enhancements, and other improvements are
          delivered in new releases. However, we remain committed to providing
          security updates and addressing regressions for the immediate
          predecessor of the current major version.
        </p>
        <p>
          This includes issues introduced by external sources, like browser
          upgrades or changes to upstream dependencies.
        </p>
        <Separator name="face_retouching_natural" />
        <h2>
          Custom <span>work</span>
        </h2>
        <p>
          If your team gets stuck and needs help getting unblocked, Material
          UI's engineers may be available on a contract basis.
        </p>
        <p>
          Keep in mind that the work must be directly related to DS librady's
          products—we don't accept general web development or React work.
        </p>
        <p>
          Our contracting price starts at $200/hour or $1,500/day. Send us an
          email summarizing of your needs, and we'll let you know whether we can
          help (or else try to suggest alternatives).
        </p>
        <Separator name="face_2" />
        <h2>Community</h2>
        <p>
          The DS library community is active on both X/Twitter and LinkedIn.
          These are great platforms to share what you're working on and connect
          with other developers.
        </p>
        <p>
          We have a Discord Server to bring the DS library community together.
          Our tools are used by thousands of developers and teams all around the
          world, many of whom actively engage with the community.
        </p>
        <p>
          You can join Discord to engage in lively discussions, share your
          projects, and interact with developers just like you from all around
          the world. We'd love for you to join us!
        </p>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

const HeaderMemo = memo(Header);
const SearchMemo = memo(Search);

export default SupportPage;
