import createImageUrlBuilder from "@sanity/image-url";

import { config } from "./sanity.config";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

// TODO: Set up the live preview subscription hook
// https://github.com/sanity-io/next-sanity/blob/main/MIGRATE-v4-to-v5-pages-router.md
// export const usePreviewSubscription = definePreview(config);
