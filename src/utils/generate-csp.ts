type Directive =
  | "child-src"
  | "connect-src"
  | "default-src"
  | "font-src"
  | "frame-src"
  | "img-src"
  | "manifest-src"
  | "media-src"
  | "object-src"
  | "prefetch-src"
  | "script-src"
  | "script-src-elem"
  | "script-src-attr"
  | "style-src"
  | "style-src-elem"
  | "style-src-attr"
  | "worker-src"
  | "base-uri"
  | "plugin-types"
  | "sandbox"
  | "form-action"
  | "frame-ancestors"
  | "navigate-to"
  | "report-uri"
  | "report-to"
  | "block-all-mixed-content"
  | "referrer"
  | "require-sri-for"
  | "require-trusted-types-for"
  | "trusted-types"
  | "upgrade-insecure-requests";

type Value = string;
interface Options {
  devOnly?: boolean;
}

const generateCSP = () => {
  const policy: Partial<Record<Directive, Value[]>> = {};

  // adder function for our policy object
  const add = (directive: Directive, value: Value, options: Options = {}) => {
    if (options.devOnly && process.env.NODE_ENV !== "development") return;
    const curr = policy[directive];
    policy[directive] = curr ? [...curr, value] : [value];
  };

  // default-src
  add("default-src", `'none'`);

  // script-src-elem
  add("script-src-elem", `'self'`);

  // script-src
  add("script-src", `'unsafe-eval'`, { devOnly: true });

  // connect-src
  add("connect-src", `'self'`, { devOnly: true });

  // return the object in a formatted value (this won't work on IE11 without a polyfill!)
  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(" ")}`)
    .join("; ");
};

export default generateCSP;
