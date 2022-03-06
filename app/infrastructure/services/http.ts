import { redirect } from "remix";

import { getSession, isAuthenticatedSession } from "./sessions";

export const header = (headerName: string, request: Request) =>
  request.headers.get(headerName);

export const sessionFromCookies = (request: Request) =>
  getSession(header("Cookie", request));

export const requireAuthentication = async (request: Request) => {
  const session = await sessionFromCookies(request);

  if (!isAuthenticatedSession(session)) throw redirect("/login");
};
