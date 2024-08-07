'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface FetchResult<T> {
  data: T | null;
  pending: boolean;
  error: string | null;
}

const useFetch = <T,>(url: string, options = {}): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use useRef to store the latest options without causing re-renders
  const optionsRef = useRef(options);
  optionsRef.current = options;
    // i could have used useMemo to memoize the options object, but it would still cause re-renders if the component using the hook was creating a new options object on each render
    // so memoize it in useFetchTest component and pass it as a prop to the useFetch hook
  const fetchData = useCallback(async () => {
    try {
      setPending(true);
      const response = await fetch(url, { ...optionsRef.current });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setPending(false);
    }
  }, [url]); // Only depend on url

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, pending, error };
};

export default useFetch;
/*Type Definitions for useFetch Hook:
The FetchResult<T> interface defines the structure of the data returned by the useFetch hook.
The generic type T allows the hook to be reusable for different data types.
Type Safety for Data:
By passing <ProductsResponse> as the type argument to useFetch, TypeScript will ensure that data conforms to the structure defined by the ProductsResponse interface.
Component Usage:
The UseFetchHookTest component uses the useFetch hook and handles the state (data, error, pending) appropriately.
Proper type definitions ensure that accessing data.products is type-checked and safe.
==== useRef to keep from causing re-renders ==== infinite loops
Problem with the original approach:
In the original version, we were using useMemo to memoize the options object. However, if the component using the hook was creating a new options object on each render (even if the contents were the same), useMemo would still see this as a new object and create a new memoized value. This would cause the useCallback for fetchData to create a new function, triggering the useEffect to run again, resulting in an infinite loop.
How useRef solves this:
useRef creates a mutable reference that persists for the full lifetime of the component.
Unlike state variables, changes to a ref don't cause re-renders.
The ref object has a current property that can be updated without triggering re-renders.
In the context of our hook:
typescriptCopyconst optionsRef = useRef(options);
optionsRef.current = options;
We create a ref with the initial options.
On each render, we update optionsRef.current with the latest options.
This update doesn't trigger a re-render or affect any dependency arrays.
Usage in fetchData:
typescriptCopyconst fetchData = useCallback(async () => {
  // ...
  const response = await fetch(url, { ...optionsRef.current });
  // ...
}, [url]);
fetchData now only depends on url, not on options.
It always uses the latest options via optionsRef.current.
Changes to options don't cause fetchData to be recreated.
Breaking the loop:
Because fetchData doesn't change when options change, the useEffect doesn't re-run unnecessarily.
This breaks the infinite loop while still allowing the hook to use the latest options.
In essence, useRef allows us to have a stable reference to the latest options without causing re-renders or affecting dependency arrays. This is particularly useful in cases like this where we want to use the most up-to-date value of something (options) without causing effects or callbacks to re-run.
This pattern is often used in React when you need to access the latest value of a prop or state within an effect or callback, but you don't want changes to that value to trigger re-runs of the effect or recreations of the callback.
*/