'use client';
import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null); //Create a ref to the element & Ensure proper typing for useRef
  useOutsideClick(ref, () => setShowContent(false)); // Use the hook to handle outside clicks

return (
    <div>
        {showContent ? (
            <div ref={ref} className="border border-solid border-blue-600 bg-blue-400">
                <h1>This is random content</h1>
                <p>
                    Please click outside of this to close this. It won&apos;t close if you
                    click inside of this content.
                </p>
            </div>
        ) : (
            <button onClick={() => setShowContent(true)} className="border border-solid border-blue-700 bg-blue-600 rounded-lg p-2 ml-4">Show Content</button>
        )}
    </div>
);
}

export default UseOnclickOutsideTest;
