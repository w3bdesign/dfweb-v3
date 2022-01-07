/*
Se mer på følgende for inpirasjon:

https://github.com/abdullahibneat/next-portfolio

https://github.com/ndimatteo/HULL

https://github.com/Kerosz/personal-website

https://github.com/Kerosz/chirila.dev

https://github.com/crvouga/thebandalibi-com
*/

import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch
};

/**
 * Project
 *

 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Id — `number`
   *
   */
  id?: number;

  /**
   * Name — `string`
   *
   */
  name?: string;

  /**
   * Description — `string`
   *
   */
  description?: string;

  /**
   * Subdescription — `string`
   *
   */
  subdescription?: string;

  /**
   * Category — `string`
   *
   */
  category?: string;

  /**
   * Urlwww — `url`
   *
   */
  urlwww?: string;

  /**
   * Urlgithub — `url`
   *
   */
  urlgithub?: string;

  /**
   * projectImage — `image`
   *
   */
  projectimage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Sitecontent
 *

 */
export interface Sitecontent extends SanityDocument {
  //data: any;

  _type: "sitecontent";

  /**
   * Id — `number`
   *
   */
  id?: number;

  /**
   * Pagename — `string`
   *
   */
  pagename?: string;

  /**
   * Title — `string`
   *
   */
  title?: string;

  /**
   * Text — `array`
   *
   */
  text?: Array<SanityKeyed<SanityBlock>>;
}

export type Documents = Project | Sitecontent;
