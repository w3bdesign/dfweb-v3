import NextImage, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

declare const navigator: {
  connection: { type: string; effectiveType: string; saveData: boolean };
  mozConnection: Navigator;
  webkitConnection: Navigator;
};

/**
 * Image component.
 * A wrapper around the Next/image component with detection for slow connections
 * Uses eager loading depending on the connection or has the priority prop
 * @function Image
 * @param {ImageProps} props - Props for the image
 * @returns {JSX.Element} - Rendered component
 */

const Image = (props: ImageProps): JSX.Element => {
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    // Skip if image is already eager or has priority (disables lazy loading)
    if (props.loading === "eager" || props.priority) {
      return;
    }

    if (!isMobileConnection()) {
      let clearDefer: { (): void; (): void } | undefined = undefined;
      // Set loading to eager if all resources of document are loaded, but defer it a bit
      const onLoad = () => {
        clearDefer = defer(() => setLoading("eager"));
      };
      window.addEventListener("load", onLoad);
      return () => {
        // Clean up the load event listener and an eventual defer
        window.removeEventListener("load", onLoad);
        if (clearDefer) {
          clearDefer();
        }
      };
    }
  }, [props.loading, props.priority]);

  return <NextImage loading={loading} {...props} />;
};

export const isMobileConnection = (): boolean => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return (
    connection?.type === "cellular" ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "3g" ||
    connection?.saveData === true
  );
};

const defer = (callback: IdleRequestCallback) => {
  let handle = 0;
  // Check if we can use requestIdleCallback
  if (window.requestIdleCallback) {
    handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  // Just defer using setTimeout with some random delay otherwise
  handle = setTimeout(callback, 2345 + 0.5 * 1000);
  return () => clearTimeout(handle);
};

export default Image;
