/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncEmailData = /* GraphQL */ `
  query SyncEmailData(
    $filter: ModelEmailDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmailData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        FirstName
        LastName
        Dob
        PhoneNumber
        Gender
        EmployeeID
        Resume
        IDCard
        Email
        Status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEmailData = /* GraphQL */ `
  query GetEmailData($id: ID!) {
    getEmailData(id: $id) {
      id
      FirstName
      LastName
      Dob
      PhoneNumber
      Gender
      EmployeeID
      Resume
      IDCard
      Email
      Status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listEmailDatas = /* GraphQL */ `
  query ListEmailDatas(
    $filter: ModelEmailDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FirstName
        LastName
        Dob
        PhoneNumber
        Gender
        EmployeeID
        Resume
        IDCard
        Email
        Status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
