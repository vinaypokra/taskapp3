/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmailData = /* GraphQL */ `
  mutation CreateEmailData(
    $input: CreateEmailDataInput!
    $condition: ModelEmailDataConditionInput
  ) {
    createEmailData(input: $input, condition: $condition) {
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
export const updateEmailData = /* GraphQL */ `
  mutation UpdateEmailData(
    $input: UpdateEmailDataInput!
    $condition: ModelEmailDataConditionInput
  ) {
    updateEmailData(input: $input, condition: $condition) {
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
export const deleteEmailData = /* GraphQL */ `
  mutation DeleteEmailData(
    $input: DeleteEmailDataInput!
    $condition: ModelEmailDataConditionInput
  ) {
    deleteEmailData(input: $input, condition: $condition) {
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
