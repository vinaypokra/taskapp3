import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class EmailData {
  readonly id: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly Dob: string;
  readonly PhoneNumber: string;
  readonly Gender: string;
  readonly EmployeeID: string;
  readonly Resume: string;
  readonly IDCard: string;
  readonly Email: string;
  readonly Status: string;
  constructor(init: ModelInit<EmailData>);
  static copyOf(source: EmailData, mutator: (draft: MutableModel<EmailData>) => MutableModel<EmailData> | void): EmailData;
}