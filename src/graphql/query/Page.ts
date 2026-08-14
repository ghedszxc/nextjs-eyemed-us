import { gql } from 'graphql-request'
import { PAGE } from './Fragments'

export const PageQuery = (variables: any) => {
  return {
    query: gql`
      query PageQuery($path: String!) {
        content {
          pageByPath(path: $path) {
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
