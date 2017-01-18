import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
type Tag {
  id: Int
  label: String
}

type Query {
  tags: [Tag]
  hello: String
  ping(message: String!): String
}

type Mutation {
  addTag(label: String!): Tag
}

schema {
  query: Query
  mutation: Mutation
}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  graphiql: true,
  pretty: true,
  schema,
  resolvers
});
