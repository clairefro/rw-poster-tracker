export const schema = gql`
  type Poster {
    id: String!
    lon: Float!
    lat: Float!
    description: String!
    location_type: String!
    date_posted: DateTime!
  }

  type Query {
    posters: [Poster!]!
    poster(id: String!): Poster
  }

  input CreatePosterInput {
    lon: Float!
    lat: Float!
    description: String!
    location_type: String!
    date_posted: DateTime!
  }

  input UpdatePosterInput {
    lon: Float
    lat: Float
    description: String
    location_type: String
    date_posted: DateTime
  }

  type Mutation {
    createPoster(input: CreatePosterInput!): Poster!
    updatePoster(id: String!, input: UpdatePosterInput!): Poster!
    deletePoster(id: String!): Poster!
  }
`
