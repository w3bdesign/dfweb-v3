import { useLayoutEffect, useEffect } from "react";

/**
 * Check if we need to use useEffect or useLayoutEffect depending on if we are on clientside or serverside
 * @function useIsomorphicLayoutEffect
 * @returns {void} useEffect or useLayoutEffect is returned
 */

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
