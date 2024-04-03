import { GraphQLClient } from "graphql-request";
import { API_URL } from "@/lib/consts";

export const graphqlClient = new GraphQLClient(API_URL);
