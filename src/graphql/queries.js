/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreate = /* GraphQL */ `
  query GetCreate($id: ID!) {
    getCreate(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listCreates = /* GraphQL */ `
  query ListCreates(
    $filter: ModelCreateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
