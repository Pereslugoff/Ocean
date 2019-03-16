import gql from 'graphql-tag'

export default gql`
query getUserComments($username: String!){
	user(username:$username){
    comments{
      body
    }
  }
}
`