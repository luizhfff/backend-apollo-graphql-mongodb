import 'dotenv/config'
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from './typeDefs/ListItemTypeDefs';
import { resolvers } from './resolvers/ListItemResolvers';
import { ListItem as ListItemModel } from './models/ListItem'
import ListItem from './dataSources/ListItem';

const uri = process.env.MONGODB_URI
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('Connected to database successfully'))
  .catch(error => console.error(error));

const dataSources = () => ({
  ListItem: new ListItem(ListItemModel),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server started at ${url}`);
});