import { ExampleItem } from "./ExampleItem";
import style from "./Example.module.scss";

export const ExampleList = () => {
  return (
    <div className={style.examplelist}>
      <ExampleItem
        title="Next.js App Router"
        text="This is a Next.js project bootstrapped using create-next-app with DS library installed"
      />
      <ExampleItem
        title="Next.js Pages Router"
        text="This example is set up to use the Next.js Pages Router"
      />
      <ExampleItem
        title="Vite.js"
        text="This example uses Vite.js. It includes DS library and its peer dependencies"
      />
      <ExampleItem title="Remix" />
      <ExampleItem title="Create React App" />
      <ExampleItem title="Tailwind CSS + Create React App" />
      <ExampleItem title="styled-components" />
      <ExampleItem title="Preact" />
      <ExampleItem title="CDN" />
      <ExampleItem title="Express.js (server-rendered)" />
      <ExampleItem title="Gastby" />
      <ExampleItem title="React-admin" />
    </div>
  );
};
