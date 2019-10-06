import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLNonNull, GraphQLList, GraphQLSchema } from 'graphql'
import Todo from '../models'

// * TodoType is custom GraphQL type just like other GraphQLType
const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        isCompleted: { type: GraphQLBoolean }
    })
})

// * In GraphQL there are no endpoints 
// * but there is only one supercharged point where all query type are fired

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        todo: {
            type: TodoType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Todo.findById(args.id)
            }
        },
        todos: {
            type: GraphQLList(TodoType),
            resolve(parent, args) {
                return Todo.find({})
            }

        }
    }
})

// * Mutation means performing CRUD operation 

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addTodo: {
            type: TodoType,
            args: {
                title: new GraphQLNonNull(GraphQLString),
                isCompleted: new GraphQLNonNull(GraphQLBoolean)
            },
            resolve(parent, args) {
                const todo = new Todo({
                    title: args.title,
                    isCompleted: args.isCompleted
                })
                return todo.save()
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})

export default schema