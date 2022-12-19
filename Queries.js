import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

export const COUNTRY_QUERY = gql`
  query Query {
    countries {
      name
      phone
      currency
    }
  }
`;

export const LANGUAGES_QUERY = gql`
  query Query {
    languages(limit: 10) {
      code
      name
      native
      rtl
    }
  }
`;
