# Starting React App
```sh
source ~/.bash_profile
npx create-react-app blogfinal
```

# Git

```sh

git remote add origin https://github.com/robin8a/blogfinal.git
git push -u origin master
```


# To user aws commands
## Use this commands with the 3.7 update
```sh
export PATH=~/Library/Python/3.7/bin:$PATH
source ~/.bash_profile

```


# AWS amplify

## Init
```sh
amplify init

? Enter a name for the project (blogfinal) 
robins-mbp:blogfinal robin8a$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project blogfinal
? Enter a name for the environment blogapi
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start

```

## API

```sh

amplify add  api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: blogfinal
? Choose the default authorization type for the API API key
? Enter a description for the API key: 
? After how many days from now the API key should expire (1-365): 7
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes
? What best describes your project: Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now? Yes
Please edit the file in your editor: /Users/robin8a/Documents/react_ws/blogfinal/amplify/backend/api/blogfinal/schema.graphql
? Press enter to continue 

amplify push
✔ Successfully pulled backend environment blogapi from the cloud.

Current Environment: blogapi

| Category | Resource name | Operation | Provider plugin   |
| -------- | ------------- | --------- | ----------------- |
| Api      | blogfinal     | Create    | awscloudformation |
? Are you sure you want to continue? Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
         - Post
         - Comment
         - Like
Learn more about @auth here: https://aws-amplify.github.io/docs/cli-toolchain/graphql#auth 


GraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/blogfinal/amplify/backend/api/blogfinal/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/blogfinal/amplify/backend/api/blogfinal/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS apiblogfinal                     AWS::CloudFormation::Stack Sun Apr 19 2020 16:54:39 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS apiblogfinal                     AWS::CloudFormation::Stack Sun Apr 19 2020 16:54:38 GMT-0500 (Colombia Standard Time)                            
UPDATE_IN_PROGRESS amplify-blogfinal-blogapi-163602 AWS::CloudFormation::Stack Sun Apr 19 2020 16:54:33 GMT-0500 (Colombia Standard Time) User Initiated             
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ AWS::CloudFormation::Stack Sun Apr 19 2020 16:54:39 GMT-0500 (Colombia Standard Time) User Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Sun Apr 19 2020 16:54:43 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Sun Apr 19 2020 16:54:49 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey        Sun Apr 19 2020 16:54:48 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    GraphQLAPI    AWS::AppSync::GraphQLApi    Sun Apr 19 2020 16:54:46 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GraphQLAPI    AWS::AppSync::GraphQLApi    Sun Apr 19 2020 16:54:46 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey Sun Apr 19 2020 16:54:50 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Sun Apr 19 2020 16:54:52 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLAPIKey AWS::AppSync::ApiKey        Sun Apr 19 2020 16:54:51 GMT-0500 (Colombia Standard Time)                            
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS Post          AWS::CloudFormation::Stack  Sun Apr 19 2020 16:55:56 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS Comment       AWS::CloudFormation::Stack  Sun Apr 19 2020 16:55:55 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS Like          AWS::CloudFormation::Stack  Sun Apr 19 2020 16:55:55 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE    GraphQLSchema AWS::AppSync::GraphQLSchema Sun Apr 19 2020 16:55:53 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS Like AWS::CloudFormation::Stack Sun Apr 19 2020 16:55:56 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-Like-4TDK02CZT2Y0 AWS::CloudFormation::Stack Sun Apr 19 2020 16:55:56 GMT-0500 (Colombia Standard Time) User Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS Post    AWS::CloudFormation::Stack Sun Apr 19 2020 16:55:56 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Comment AWS::CloudFormation::Stack Sun Apr 19 2020 16:55:56 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-Post-DK1SCALA2Y9Q AWS::CloudFormation::Stack Sun Apr 19 2020 16:55:56 GMT-0500 (Colombia Standard Time) User Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-Comment-1FJOPI889KG5V AWS::CloudFormation::Stack Sun Apr 19 2020 16:55:56 GMT-0500 (Colombia Standard Time) User Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PostTable   AWS::DynamoDB::Table Sun Apr 19 2020 16:56:04 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PostIAMRole AWS::IAM::Role       Sun Apr 19 2020 16:56:03 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PostIAMRole AWS::IAM::Role       Sun Apr 19 2020 16:56:03 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PostTable   AWS::DynamoDB::Table Sun Apr 19 2020 16:56:03 GMT-0500 (Colombia Standard Time)                            
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CommentIAMRole AWS::IAM::Role       Sun Apr 19 2020 16:56:04 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS CommentTable   AWS::DynamoDB::Table Sun Apr 19 2020 16:56:04 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS CommentIAMRole AWS::IAM::Role       Sun Apr 19 2020 16:56:03 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CommentTable   AWS::DynamoDB::Table Sun Apr 19 2020 16:56:03 GMT-0500 (Colombia Standard Time)                            
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS LikeIAMRole AWS::IAM::Role       Sun Apr 19 2020 16:56:03 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS LikeTable   AWS::DynamoDB::Table Sun Apr 19 2020 16:56:03 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS LikeIAMRole AWS::IAM::Role       Sun Apr 19 2020 16:56:02 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS LikeTable   AWS::DynamoDB::Table Sun Apr 19 2020 16:56:02 GMT-0500 (Colombia Standard Time)                            
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE LikeIAMRole AWS::IAM::Role Sun Apr 19 2020 16:56:15 GMT-0500 (Colombia Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE PostIAMRole AWS::IAM::Role Sun Apr 19 2020 16:56:15 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CommentIAMRole AWS::IAM::Role Sun Apr 19 2020 16:56:16 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PostDataSource AWS::AppSync::DataSource Sun Apr 19 2020 16:56:18 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CommentDataSource AWS::AppSync::DataSource Sun Apr 19 2020 16:56:19 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    LikeDataSource AWS::AppSync::DataSource Sun Apr 19 2020 16:56:20 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS LikeDataSource AWS::AppSync::DataSource Sun Apr 19 2020 16:56:20 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS LikeDataSource AWS::AppSync::DataSource Sun Apr 19 2020 16:56:18 GMT-0500 (Colombia Standard Time)                            
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PostDataSource AWS::AppSync::DataSource Sun Apr 19 2020 16:56:20 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CommentDataSource AWS::AppSync::DataSource Sun Apr 19 2020 16:56:21 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdatePostResolver AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS CreatePostResolver AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS DeletePostResolver AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS GetPostResolver    AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS ListPostResolver   AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:23 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE    PostDataSource     AWS::AppSync::DataSource Sun Apr 19 2020 16:56:21 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ListCommentResolver   AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS UpdateCommentResolver AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS CreateCommentResolver AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS GetCommentResolver    AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS DeleteCommentResolver AWS::AppSync::Resolver   Sun Apr 19 2020 16:56:24 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE    CommentDataSource     AWS::AppSync::DataSource Sun Apr 19 2020 16:56:21 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ListLikeResolver   AWS::AppSync::Resolver Sun Apr 19 2020 16:56:25 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS DeleteLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:23 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetLikeResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:23 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:23 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:23 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListLikeResolver   AWS::AppSync::Resolver Sun Apr 19 2020 16:56:23 GMT-0500 (Colombia Standard Time)                            
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CreateCommentResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateCommentResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GetCommentResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeleteCommentResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteCommentResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    DeleteLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreateLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:25 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ListLikeResolver   AWS::AppSync::Resolver Sun Apr 19 2020 16:56:25 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:25 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    CreatePostResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:29 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreatePostResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:29 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ListPostResolver   AWS::AppSync::Resolver Sun Apr 19 2020 16:56:29 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListPostResolver   AWS::AppSync::Resolver Sun Apr 19 2020 16:56:28 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeletePostResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:27 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    GetPostResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:27 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeletePostResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:27 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GetPostResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:27 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdatePostResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdatePostResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    ListCommentResolver   AWS::AppSync::Resolver Sun Apr 19 2020 16:56:27 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListCommentResolver   AWS::AppSync::Resolver Sun Apr 19 2020 16:56:27 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdateCommentResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    CreateCommentResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    GetCommentResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:28 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateLikeResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:28 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GetLikeResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetLikeResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:26 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CommentTable AWS::DynamoDB::Table Sun Apr 19 2020 16:56:34 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE LikeTable AWS::DynamoDB::Table Sun Apr 19 2020 16:56:34 GMT-0500 (Colombia Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE PostTable AWS::DynamoDB::Table Sun Apr 19 2020 16:56:34 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-Post-DK1SCALA2Y9Q AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:37 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-Comment-1FJOPI889KG5V AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:37 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-Like-4TDK02CZT2Y0 AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:37 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE Post    AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:44 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Comment AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:44 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Like    AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:43 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:47 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:46 GMT-0500 (Colombia Standard Time)                            
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-ConnectionStack-8SP8OWHAJOZL AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:47 GMT-0500 (Colombia Standard Time) User Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    CommentpostResolver  AWS::AppSync::Resolver Sun Apr 19 2020 16:56:55 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CommentpostResolver  AWS::AppSync::Resolver Sun Apr 19 2020 16:56:55 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    PostcommentsResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:54 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    PostlikesResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:54 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PostcommentsResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:54 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PostlikesResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:54 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    LikepostResolver     AWS::AppSync::Resolver Sun Apr 19 2020 16:56:54 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS LikepostResolver     AWS::AppSync::Resolver Sun Apr 19 2020 16:56:53 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PostcommentsResolver AWS::AppSync::Resolver Sun Apr 19 2020 16:56:52 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PostlikesResolver    AWS::AppSync::Resolver Sun Apr 19 2020 16:56:52 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CommentpostResolver  AWS::AppSync::Resolver Sun Apr 19 2020 16:56:52 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS LikepostResolver     AWS::AppSync::Resolver Sun Apr 19 2020 16:56:51 GMT-0500 (Colombia Standard Time)                            
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE ConnectionStack AWS::CloudFormation::Stack Sun Apr 19 2020 16:56:58 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:01 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:01 GMT-0500 (Colombia Standard Time)                            
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-CustomResourcesjson-PY28LKL44I7X AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:01 GMT-0500 (Colombia Standard Time) User Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ-CustomResourcesjson-PY28LKL44I7X AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:06 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:12 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:15 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     amplify-blogfinal-blogapi-163602 AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:20 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-blogfinal-blogapi-163602 AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:19 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE                     apiblogfinal                     AWS::CloudFormation::Stack Sun Apr 19 2020 16:57:17 GMT-0500 (Colombia Standard Time) 
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ All resources are updated in the cloud

GraphQL endpoint: https://kux4ajthgjbe7nhyqmrqxesiri.appsync-api.us-east-1.amazonaws.com/graphql
GraphQL API KEY: da2-5xaa67dew5bhvaee4jko6s4afq
```


# Installing aws-amplify and aws-amplify-react

```sh
npm install aws-amplify aws-amplify-react


```

# Adding auth

```sh
amplify add auth

amplify add auth
Scanning for plugins...
Plugin scan successful
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
Successfully added resource blogfinal5aeb482d locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

#################################################
amplify push

amplify push
✔ Successfully pulled backend environment blogapi from the cloud.

Current Environment: blogapi

| Category | Resource name     | Operation | Provider plugin   |
| -------- | ----------------- | --------- | ----------------- |
| Auth     | blogfinal5aeb482d | Create    | awscloudformation |
| Api      | blogfinal         | No Change | awscloudformation |
? Are you sure you want to continue? Yes
⠙ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS apiblogfinal                     AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:43 GMT-0500 (Colombia Standard Time)               
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole   AWS::IAM::Role             Mon Apr 20 2020 18:48:43 GMT-0500 (Colombia Standard Time)               
CREATE_IN_PROGRESS authblogfinal5aeb482d            AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:43 GMT-0500 (Colombia Standard Time)               
UPDATE_IN_PROGRESS amplify-blogfinal-blogapi-163602 AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:38 GMT-0500 (Colombia Standard Time) User Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:44 GMT-0500 (Colombia Standard Time) User Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS authblogfinal5aeb482d          AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:44 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Mon Apr 20 2020 18:48:43 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-blogfinal-blogapi-163602-authblogfinal5aeb482d-1FFY18HSDDK67 AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:44 GMT-0500 (Colombia Standard Time) User Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS Post    AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:50 GMT-0500 (Colombia Standard Time) 
UPDATE_IN_PROGRESS Comment AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:50 GMT-0500 (Colombia Standard Time) 
UPDATE_IN_PROGRESS Like    AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:49 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Mon Apr 20 2020 18:48:50 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Mon Apr 20 2020 18:48:50 GMT-0500 (Colombia Standard Time)                            
⠸ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE    ConnectionStack AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:54 GMT-0500 (Colombia Standard Time) 
UPDATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:53 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE    Like            AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:50 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE    Post            AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:50 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE    Comment         AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:50 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Mon Apr 20 2020 18:48:57 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE    CustomResourcesjson AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:57 GMT-0500 (Colombia Standard Time) 
UPDATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Mon Apr 20 2020 18:48:56 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE SNSRole AWS::IAM::Role Mon Apr 20 2020 18:49:03 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-blogfinal-blogapi-163602-apiblogfinal-14FBQTYQU8JTQ AWS::CloudFormation::Stack Mon Apr 20 2020 18:49:00 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE apiblogfinal AWS::CloudFormation::Stack Mon Apr 20 2020 18:49:06 GMT-0500 (Colombia Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Mon Apr 20 2020 18:49:08 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPool AWS::Cognito::UserPool Mon Apr 20 2020 18:49:10 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Mon Apr 20 2020 18:49:10 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClient AWS::Cognito::UserPoolClient Mon Apr 20 2020 18:49:14 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClientWeb AWS::Cognito::UserPoolClient Mon Apr 20 2020 18:49:17 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Mon Apr 20 2020 18:49:17 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClient    AWS::Cognito::UserPoolClient Mon Apr 20 2020 18:49:16 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Mon Apr 20 2020 18:49:16 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Mon Apr 20 2020 18:49:15 GMT-0500 (Colombia Standard Time)                            
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Mon Apr 20 2020 18:49:20 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Mon Apr 20 2020 18:49:20 GMT-0500 (Colombia Standard Time)                            
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientRole AWS::IAM::Role Mon Apr 20 2020 18:49:33 GMT-0500 (Colombia Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClientLambda AWS::Lambda::Function Mon Apr 20 2020 18:49:38 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Mon Apr 20 2020 18:49:38 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Mon Apr 20 2020 18:49:37 GMT-0500 (Colombia Standard Time)                            
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Mon Apr 20 2020 18:49:44 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Mon Apr 20 2020 18:49:43 GMT-0500 (Colombia Standard Time)                            
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambdaPolicy AWS::IAM::Policy Mon Apr 20 2020 18:49:54 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Mon Apr 20 2020 18:49:58 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Mon Apr 20 2020 18:49:57 GMT-0500 (Colombia Standard Time)                            
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLogPolicy AWS::IAM::Policy Mon Apr 20 2020 18:50:08 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Mon Apr 20 2020 18:50:12 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UserPoolClientInputs Custom::LambdaCallout Mon Apr 20 2020 18:50:16 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Mon Apr 20 2020 18:50:16 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    IdentityPool AWS::Cognito::IdentityPool Mon Apr 20 2020 18:50:24 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Mon Apr 20 2020 18:50:23 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Mon Apr 20 2020 18:50:21 GMT-0500 (Colombia Standard Time)                            
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Mon Apr 20 2020 18:50:28 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Mon Apr 20 2020 18:50:30 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Mon Apr 20 2020 18:50:29 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-blogfinal-blogapi-163602-authblogfinal5aeb482d-1FFY18HSDDK67 AWS::CloudFormation::Stack Mon Apr 20 2020 18:50:32 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE authblogfinal5aeb482d AWS::CloudFormation::Stack Mon Apr 20 2020 18:50:39 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateRolesWithIDPFunction AWS::Lambda::Function Mon Apr 20 2020 18:50:42 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Mon Apr 20 2020 18:50:41 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function Mon Apr 20 2020 18:50:41 GMT-0500 (Colombia Standard Time)                            
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Mon Apr 20 2020 18:50:48 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Mon Apr 20 2020 18:50:48 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Mon Apr 20 2020 18:50:44 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-blogfinal-blogapi-163602 AWS::CloudFormation::Stack Mon Apr 20 2020 18:50:50 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE amplify-blogfinal-blogapi-163602 AWS::CloudFormation::Stack Mon Apr 20 2020 18:51:03 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE apiblogfinal                     AWS::CloudFormation::Stack Mon Apr 20 2020 18:51:03 GMT-0500 (Colombia Standard Time) 
✔ All resources are updated in the cloud
```

# Git use an old commit



```
git checkout <old-commit>
git branch temp-branch
git checkout master
git merge temp-branch
git push origin master

```


# Installing react icons

```sh
npm install react-icons --save

```