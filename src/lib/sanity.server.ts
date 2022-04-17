import { createClient } from "next-sanity";
import { config } from "./sanity.config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

const env = process.env.NODE_ENV;

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: env === "development" ? false : true,
  token: process.env.SANITY_API_TOKEN
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean) => (usePreview ? previewClient : sanityClient);
