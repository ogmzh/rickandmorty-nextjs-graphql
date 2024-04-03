import { gql } from "@/__generated__/gql";

const GET_CHARACTERS = gql(/* GraphQL */ `
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        location {
          name
          dimension
        }
        origin {
          name
          dimension
        }
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`);

const GET_CHARACTER_DETAILS = gql(/* GraphQL */ `
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
        dimension
      }
      location {
        name
        dimension
      }
      image
      episode {
        id
        name
        air_date
        created
      }
    }
  }
`);

const GET_EPISODES = gql(/* GraphQL */ `
  query GetEpisodes($page: Int!) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`);

const GET_LOCATIONS = gql(/* GraphQL */ `
  query GetLocations($page: Int!) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        id
        type
        dimension
        created
      }
    }
  }
`);

const GET_EPISODE_DETAILS = gql(/* GraphQL */ `
  query GetEpisodeDetails($id: ID!) {
    episode(id: $id) {
      id
      name
      created
      air_date
      episode
      characters {
        id
        name
        status
        species
        image
      }
    }
  }
`);

const GET_LOCATION_DETAILS = gql(/* GraphQL */ `
  query GetLocationDetails($id: ID!) {
    location(id: $id) {
      id
      name
      dimension
      type
      created
      residents {
        id
        name
        species
        image
        status
      }
    }
  }
`);

export {
  GET_CHARACTER_DETAILS,
  GET_CHARACTERS,
  GET_EPISODE_DETAILS,
  GET_EPISODES,
  GET_LOCATION_DETAILS,
  GET_LOCATIONS,
};
