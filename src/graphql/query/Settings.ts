import { gql } from 'graphql-request'

export const SettingsQuery = (variables: { path: string; names?: string[] | string }) => {
  return {
    query: gql`
      query PageConfigs($path: String!, $names: [[String!]!]!) {
        content {
          pageByPath(path: $path) {
            settings(paths: $names)
          }
        }
      }
    `,
    variables,
  }
}
