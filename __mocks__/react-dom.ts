const reactDom = jest.requireActual("react-dom");

module.exports = {
  ...reactDom, // use actual for all non-hook parts
  preload: () => {}, // This is a mock function used in testing, so it's intentionally empty.
  preconnect: () => {}, // This is a mock function used in testing, so it's intentionally empty.
  prefetchDNS: () => {} // This is a mock function used in testing, so it's intentionally empty.
};
