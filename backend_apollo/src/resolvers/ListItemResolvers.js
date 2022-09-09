export const resolvers = {
  Query: {
    getListItems: async (_, _args, { dataSources: { ListItem } }) => {
      return ListItem.getListItems();
    },
    getListItem: async (_, { id }, { dataSources: { ListItem } }) => {
      return ListItem.getListItem(id);
    }
  },
  Mutation: {
    createListItem: async (_, args, { dataSources: { ListItem } }) => {
      return ListItem.createListItem(args)
    },
    updateListItem: async (_, args, { dataSources: { ListItem } }) => {
      return ListItem.updateListItem(args)
    },
    deleteListItem: async (_, { id }, { dataSources: { ListItem } }) => {
      return ListItem.deleteListItem(id)
    }
  }
}