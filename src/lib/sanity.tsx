import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook
} from "next-sanity";

import { config } from "./sanity.config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

const serializers = {
  types: {
    p: (props: any) => <pre>brrr span</pre>
  }
};

// https://www.sanity.io/guides/3-things-you-need-to-know-when-getting-started-with-portable-text

// https://www.sanity.io/schemas/breaks-for-portable-text-189dba35

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: { serializers }
});

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
