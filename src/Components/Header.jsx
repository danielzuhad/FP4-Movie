import React from "react";

export default function Header({ Search, Change, Submit }) {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
        <span class="font-semibold text-xl tracking-tight">Film</span>
      </div>
      <div>
        <div class="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <form onSubmit={Submit} class="relative mx-auto text-gray-600 ">
            <input onChange={Change} value={Search} class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2"></button>
          </form>
        </div>
      </div>
    </nav>
  );
}
