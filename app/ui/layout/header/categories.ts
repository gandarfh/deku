export type CategoryItemLinkType = {
  link: string;
  path: string;
};

export type CategoryItemType = {
  title: string;
  links: CategoryItemLinkType[];
};

export type CategoryType = {
  category: string;
  items: CategoryItemType[];
};

export const categories: CategoryType[] = [
  {
    category: "Audio Amplifier",
    items: [
      {
        title: "Furniture",
        links: [
          { link: "Table", path: "" },
          { link: "Chairs", path: "" },
          { link: "Cupboards", path: "" },
          { link: "Cupboards 1", path: "" },
          { link: "Cupboards 2", path: "" },
          { link: "Cupboards 3", path: "" },
        ],
      },
      {
        title: "Kitchen",
        links: [
          { link: "Teapots", path: "" },
          { link: "Cups", path: "" },
          { link: "Plates", path: "" },
          { link: "Plates 1", path: "" },
          { link: "Plates 2", path: "" },
          { link: "Plates 3", path: "" },
        ],
      },
      {
        title: "Headphones",
        links: [
          { link: "Wireless", path: "" },
          { link: "Gaming", path: "" },
          { link: "Professional", path: "" },
          { link: "Professional 1", path: "" },
          { link: "Professional 2", path: "" },
          { link: "Professional 3", path: "" },
        ],
      },
    ],
  },
  {
    category: "TV & Video",
    items: [
      {
        title: "Furniture",
        links: [
          { link: "Table", path: "" },
          { link: "Chairs", path: "" },
          { link: "Cupboards", path: "" },
          { link: "Cupboards 1", path: "" },
          { link: "Cupboards 2", path: "" },
          { link: "Cupboards 3", path: "" },
        ],
      },
      {
        title: "Kitchen",
        links: [
          { link: "Teapots", path: "" },
          { link: "Cups", path: "" },
          { link: "Plates", path: "" },
          { link: "Plates 1", path: "" },
          { link: "Plates 2", path: "" },
          { link: "Plates 3", path: "" },
        ],
      },
      {
        title: "Headphones",
        links: [
          { link: "Wireless", path: "" },
          { link: "Gaming", path: "" },
          { link: "Professional", path: "" },
          { link: "Professional 1", path: "" },
          { link: "Professional 2", path: "" },
          { link: "Professional 3", path: "" },
        ],
      },
    ],
  },
  {
    category: "Action Cameras",
    items: [
      {
        title: "Furniture",
        links: [
          { link: "Table", path: "" },
          { link: "Chairs", path: "" },
          { link: "Cupboards", path: "" },
          { link: "Cupboards 1", path: "" },
          { link: "Cupboards 2", path: "" },
          { link: "Cupboards 3", path: "" },
        ],
      },
      {
        title: "Kitchen",
        links: [
          { link: "Teapots", path: "" },
          { link: "Cups", path: "" },
          { link: "Plates", path: "" },
          { link: "Plates 1", path: "" },
          { link: "Plates 2", path: "" },
          { link: "Plates 3", path: "" },
        ],
      },
      {
        title: "Headphones",
        links: [
          { link: "Wireless", path: "" },
          { link: "Gaming", path: "" },
          { link: "Professional", path: "" },
          { link: "Professional 1", path: "" },
          { link: "Professional 2", path: "" },
          { link: "Professional 3", path: "" },
        ],
      },
    ],
  },
];
