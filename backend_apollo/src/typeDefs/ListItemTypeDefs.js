import { gql } from 'apollo-server';

export const typeDefs = gql`
  type ListItem {
    _id: ID!
    text: String!
    timeCreated: String!
    timeModified: String!
  }

  type Query {
    getListItems: [ListItem!]!,
    getListItem(id: ID!): ListItem!
  }

  type Mutation {
    createListItem(text: String!): ListItem!,
    updateListItem(id: ID!, text: String!): ListItem!,
    deleteListItem(id: ID!): ListItem!
  }
`;