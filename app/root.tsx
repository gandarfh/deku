import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { MetaFunction } from "remix";
import {
  Box,
  ChakraProvider,
  Heading,
  GlobalStyle,
  DarkMode,
} from "@chakra-ui/react";
import theme from "./chakra/theme";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

interface DocumentProps {
  children?: React.ReactNode;
  title?: string;
}

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },

    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    {
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap",
      rel: "stylesheet",
    },
  ];
}

const Document = ({ children, title }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />

        <title>{title}</title>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </ChakraProvider>
      </body>
    </html>
  );
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <Box>
        <Heading as="h1">There was an error</Heading>
      </Box>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Box>
        <Heading as="h1">
          {caught.status} {caught.statusText}
        </Heading>
      </Box>
    </Document>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
