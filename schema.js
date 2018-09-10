const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

const Post = require('./models/post')

const postType = new GraphQLObjectType({
  name: 'postType',
  fields: () => ({
    id: {type:GraphQLString},
    desc: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: postType,
      resolve() {
      return  Post.find({})
            .then(res => {
              console.log(res);
              return res
            } )
      }
    },
    posts: {
      type: new GraphQLList(postType),
      resolve(){
        return Post.find({})
                   .then(res => {
                     console.log(res);
                     return res
                   })
      }
    }
  }
})

const mutation = new GraphQLObjectType({
  name:'Mutation',
  fields: {
    addPost : {
      type: postType,
      args: {
        desc: {
          type: GraphQLString
        },
        title: {
          type:GraphQLString
        }
      },
      resolve(parent,args){
        const post = new Post({
          title: args.title,
          desc: args.desc
        });
         return  post.save()
            .then(res => res )
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation
})
