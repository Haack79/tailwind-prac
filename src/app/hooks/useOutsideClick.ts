'use client';

import { useEffect, RefObject } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
        // Check if the clicked element is not inside the referenced element
    if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log(ref.current, event.target)
      callback();
    }
  };

  useEffect(() => {
        // Add mousedown event listener to document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
