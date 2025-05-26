import { createClient } from 'contentful-management';
export default () =>
  createClient({ accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN! })
    .getSpace(process.env.CONTENTFUL_SPACE_ID!)
    .then((s) => s.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID!));