import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook
} from "next-sanity";
import React from "react";
import { config } from "./sanity.config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

/*const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>brrr - {props.node.code}</code>
      </pre>
    )
  }
};*/

// https://www.sanity.io/guides/3-things-you-need-to-know-when-getting-started-with-portable-text

const BlockRenderer = (props: {
  node: { style?: "normal" | undefined };
  children: {} | null | undefined;
}) => {
  console.log("Node: ", props.node);
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(style, { className: `heading-${level}` }, props.children);
  }

  // Fall back to default handling
  //return BlockContent.defaultSerializers.types.block(props)
};

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: { BlockRenderer }
});

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
