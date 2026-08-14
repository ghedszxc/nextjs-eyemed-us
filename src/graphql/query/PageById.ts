import { gql } from 'graphql-request'
import { PAGE } from './Fragments'

export const PageQueryById = (variables: any) => {
  return {
    query: gql`
      query PageQuery($id: String!) {
        content {
          pageByPath: page(id: $id) {
            __typename
            settings(paths: ["otherproperties", ["googleAnalytics"]])
            ...PAGE
          }
        }
      }
      ${PAGE}
    `,
    variables,
  }
}
