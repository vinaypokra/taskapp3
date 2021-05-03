// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EmailData } = initSchema(schema);

export {
  EmailData
};