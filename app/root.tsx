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
import { Box, ChakraProvider, Heading, GlobalStyle } from "@chakra-ui/react";
import theme from "./chakra/theme";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

interface DocumentProps {
  children?: React.ReactNode;
  title?: string;
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
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === "development" && <LiveReload />}
        </body>
      </ChakraProvider>
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
