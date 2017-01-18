function addTag(label) {
  let t = {
    id: id++,
    label
  };
  tags.push(t);
  return t;
}

const resolvers = {
  Query: {
    tags(root, args, context) {
      return tags;
    },
    hello(root, args, context) {
      return "Hello world!";
    },
    ping(root, { message }, context) {
      return `Answering ${message}`;
    }
  },
  Mutation: {
    addTag(root, { label }, context) {
      console.log(`adding tag '${label}'`);
      return addTag(label);
    }
  }
}

export default resolvers;
