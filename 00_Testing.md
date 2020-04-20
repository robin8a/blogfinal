
# Default aws console
```js
# Welcome!
#
# This is an in-browser tool for writing, validating, and testing GraphQL queries.
#
An example query named "GetPost" might look like:

    query GetPost {
      singlePost(id: 123) {
        id
        title
      }
    }
#
# An example mutation named "PutPost" might look like:
#
    mutation PutPost {
      putPost(id: 123, title: "Hello, world!") {
        id
        title
      }
    }
#
# Keyboard shortcuts:
#
 Prettify Query:  Ctrl+Shift+P (also removes comments)
      Run Query:  Ctrl+Enter   (or press the play button above)
  Auto Complete:  Ctrl+Space   (or just start typing)
#


```

# Mutations

```js
mutation createPost{
  createPost(input:{
    postBody: "First post body"
    postTitle: "First post title"
    postOwnerId: "8999hfg"
    postOwnerUsername: "Hello World"
  }){
    id
    postBody
    postTitle
  }
}

query listPosts {
  listPosts {
    items {
      id
      postTitle
      postBody
      postOwnerId
    }
  }
}

mutation createPost{
  createPost(input:{
    postBody: "Second post body"
    postTitle: "Second post title"
    postOwnerId: "8999hfg"
    postOwnerUsername: "James Bond"
  }){
    id
    postBody
    postTitle
  }
}

```

# Start server
```sh
npm start

```