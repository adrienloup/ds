import { useTitle } from "../hooks/useTitle";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { Title } from "../components/Title/Title";
import { Promote } from "../components/Promote/Promote";
import { Button } from "../components/Button/Button";

function SupportPage() {
  // console.log("SupportPage");
  useTitle("Support");

  return (
    <>
      <Header />
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
        <h2>
          Bug <span>reproductions</span>
        </h2>
        <p>
          We require bug reports to be accompanied by a minimal reproduction. It
          significantly increases the odds of fixing the problem. You have a few
          possible options to provide it.
        </p>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default SupportPage;
