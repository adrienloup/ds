import { StatusType } from "../models/Status";
import { PageType } from "../models/Page";
import { BannerType } from "../models/Banner";
import i18n from "../i18n";

export function useData() {
  const pagesData: PageType[] = [
    {
      name: i18n.t("page.overview.name"),
      description: i18n.t("page.overview.description"),
      path: "/ds/overview",
      category: {
        name: i18n.t("generic.category.category1"),
        value: "getting-started",
      },
      news: false,
      soon: false,
    },
    {
      name: i18n.t("page.usage.name"),
      description: i18n.t("page.usage.description"),
      path: "/ds/usage",
      category: {
        name: i18n.t("generic.category.category1"),
        value: "getting-started",
      },
      news: false,
      soon: false,
    },
    {
      name: i18n.t("page.support.name"),
      description: i18n.t("page.support.description"),
      path: "/ds/support",
      category: {
        name: i18n.t("generic.category.category1"),
        value: "getting-started",
      },
      news: false,
      soon: false,
    },
    {
      name: i18n.t("page.avatar.name"),
      description: i18n.t("page.avatar.description"),
      path: "/ds/avatar",
      category: {
        name: i18n.t("generic.category.category2"),
        value: "data-display",
      },
      news: false,
      soon: false,
    },
    {
      name: i18n.t("page.badge.name"),
      description: i18n.t("page.badge.description"),
      path: "/ds/badge",
      category: {
        name: i18n.t("generic.category.category2"),
        value: "data-display",
      },
      news: false,
      soon: false,
    },
    {
      name: "typography",
      description:
        "Use typography to present your design and content as clearly and efficiently as possible",
      path: "/ds/typography",
      category: {
        name: i18n.t("generic.category.category2"),
        value: "data-display",
      },
      news: false,
      soon: false,
    },
    {
      name: "button",
      description:
        "Buttons allow users to take actions, and make choices, with a single tap",
      path: "/ds/button",
      category: {
        name: i18n.t("generic.category.category3"),
        value: "action",
      },
      news: false,
      soon: false,
    },
    {
      name: "fab",
      description: "A floating action button (FAB)",
      path: "/ds/fab",
      category: {
        name: i18n.t("generic.category.category3"),
        value: "action",
      },
      news: true,
      soon: false,
    },
    {
      name: "alert",
      description: "Alerts display brief messages for the user",
      path: "/ds/alert",
      category: {
        name: i18n.t("generic.category.category4"),
        value: "feedback",
      },
      news: false,
      soon: true,
    },
    {
      name: "progress",
      description:
        "Progress used to indicate the current advancement state of a process",
      path: "/ds/progress",
      category: {
        name: i18n.t("generic.category.category4"),
        value: "feedback",
      },
      news: false,
      soon: false,
    },
    {
      name: "tag",
      description: "Used for marking and categorization",
      path: "/ds/tag",
      category: {
        name: i18n.t("generic.category.category4"),
        value: "feedback",
      },
      news: true,
      soon: false,
    },
    {
      name: "select",
      description:
        "The Selectcomponent provides a compact way to present a list of choices to the user",
      path: "/ds/select",
      category: {
        name: i18n.t("generic.category.category5"),
        value: "forms",
      },
      news: false,
      soon: true,
    },
    {
      name: "switch",
      description: "Switches toggle the state of a single setting on or off",
      path: "/ds/switch",
      category: {
        name: i18n.t("generic.category.category5"),
        value: "forms",
      },
      news: false,
      soon: false,
    },
    {
      name: "textField",
      description: "TextFields let users enter and edit text",
      path: "/ds/textfield",
      category: {
        name: i18n.t("generic.category.category5"),
        value: "forms",
      },
      news: false,
      soon: true,
    },
    {
      name: "breadcrumbs",
      description:
        "A breadcrumbs is a list of links that help visualize a page's location",
      path: "/ds/breadcrumbs",
      category: {
        name: i18n.t("generic.category.category6"),
        value: "navigation",
      },
      news: false,
      soon: false,
    },
    {
      name: "Pagination",
      description:
        "The Pagination component enables the user to select a specific page from a range of pages",
      path: "/ds/pagination",
      category: {
        name: i18n.t("generic.category.category6"),
        value: "navigation",
      },
      news: false,
      soon: false,
    },
    {
      name: "stepper",
      description:
        "Steppers convey progress through numbered steps. It provides a wizard-like workflow",
      path: "/ds/stepper",
      category: {
        name: i18n.t("generic.category.category6"),
        value: "navigation",
      },
      news: true,
      soon: false,
    },
    {
      name: "tabs",
      description: "Tabs are a set of layered sections of content",
      path: "/ds/tabs",
      category: {
        name: i18n.t("generic.category.category6"),
        value: "navigation",
      },
      news: false,
      soon: false,
    },
    {
      name: "modal",
      description:
        "The modal component provides a solid foundation for creating dialogs",
      path: "/ds/modal",
      category: {
        name: i18n.t("generic.category.category7"),
        value: "pattern",
      },
      news: true,
      soon: false,
    },
  ];

  const bannersData: BannerType[] = [
    {
      id: "0",
      text: i18n.t("component.banner.banner0"),
      status: "warning" as StatusType,
    },
    {
      id: "1",
      text: i18n.t("component.banner.banner1", {
        link: "<a href='https://github.com/adrienloup/ds' target='_blank' rel='noopener'>GitHub</a>",
      }),
      status: "info" as StatusType,
    },
  ];

  return {
    pagesData,
    bannersData,
  };
}
