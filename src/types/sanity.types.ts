/*
Se mer på følgende:

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
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Id — `number`
   *
   *
   */
  id?: number;

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Technologies — `string`
   *
   *
   */
  subdescription?: string;

  /**
   * Project category — `reference`
   *
   *
   */
  projectcategory?: SanityReference<Category>;

  /**
   * Project URL — `array`
   *
   *
   */
  urlwww?: Array<SanityKeyed<Link>>;

  /**
   * Github URL — `array`
   *
   *
   */
  urlgithub?: Array<SanityKeyed<Link>>;

  /**
   * Project image — `image`
   *
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
 * Project category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Id — `number`
   *
   *
   */
  id?: number;

  /**
   * Name — `string`
   *
   *
   */
  name?: string;
}

/**
 * Index content
 *
 *
 */
export interface Sitecontent extends SanityDocument {
  _type: "sitecontent";

  /**
   * Id — `number`
   *
   *
   */
  id?: number;

  /**
   * Pagename — `string`
   *
   *
   */
  pagename?: string;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Text — `array`
   *
   *
   */
  text?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: "Navigation";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * required
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Navigation — `array`
   *
   * Navigation links
   */
  navigation?: Array<SanityKeyed<Link>>;
}

export type Link = {
  _type: "link";
  /**
   * Title — `string`
   *
   * Title
   */
  title?: string;

  /**
   * Url — `string`
   *
   * URL
   */
  url?: string;

  /**
   * External — `boolean`
   *
   * Is link external?
   */
  external?: boolean;
};

export type Documents = Project | Category | Sitecontent | Navigation;
