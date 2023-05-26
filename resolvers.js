module.exports = {
  Query: {
    psalm: (_, { id }, { dataSources }) =>
      dataSources.psalmAPI.getPsalms({ id }),
  },
};
