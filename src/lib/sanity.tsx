import createImageUrlBuilder from "@sanity/image-url";

import { definePreview } from "next-sanity/preview";

import { config } from "./sanity.config";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = definePreview(config);
