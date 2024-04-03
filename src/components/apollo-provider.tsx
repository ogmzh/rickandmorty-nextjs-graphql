"use client";

import { ReactNode } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApolloGQLProvider,
} from "@apollo/client";
import { API_URL } from "@/lib/consts";

// used for client side querying
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

// used for serverside querying

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  return <ApolloGQLProvider client={client}>{children}</ApolloGQLProvider>;
};
