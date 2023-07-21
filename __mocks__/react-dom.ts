const reactDom = jest.requireActual("react-dom");

module.exports = {
  ...reactDom, // use actual for all non-hook parts
  preload: () => {},
  preconnect: () => {},
  prefetchDNS: () => {}
};
