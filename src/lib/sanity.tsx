import createImageUrlBuilder from "@sanity/image-url";

import { createPreviewSubscriptionHook, createCurrentUserHook } from "next-sanity";

import { config } from "./sanity.config";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// https://www.sanity.io/guides/3-things-you-need-to-know-when-getting-started-with-portable-text

// https://www.sanity.io/schemas/breaks-for-portable-text-189dba35

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
