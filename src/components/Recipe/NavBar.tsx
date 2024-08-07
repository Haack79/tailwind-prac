'use client';

import { useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "./Context";

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <Link href={"/home"}>FoodRecipe</Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <Link
            href={"/home"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}