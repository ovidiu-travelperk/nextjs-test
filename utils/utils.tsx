import { useRouter } from "next/dist/client/router";
import queryString from "query-string";

export const usePreserveEmbeddedQuery = () => {
  const { query } = useRouter();

  const preserve = (path: string) => {
    const parsed = queryString.parseUrl(path);
    parsed.query.embedded = query.embedded;
    return queryString.stringifyUrl(parsed);
  };
  return { preserve };
};
