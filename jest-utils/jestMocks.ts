/**
 * Mocks the react-dom module by replacing certain functions with empty mocks.
 *
 * @return {void} This function does not return anything.
 */
export const mockReactDom = () => {
  jest.mock("react-dom", () => ({
    ...jest.requireActual("react-dom"),
    preload: () => {},
    preconnect: () => {},
    prefetchDNS: () => {}
  }));
};
