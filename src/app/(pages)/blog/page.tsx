import React from "react";
import { FaSearch } from "react-icons/fa";
type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="bg-white py-25">
      <div className="max-w-330 mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-8">
            <section className=" rounded-lg  bg-white">
              <header className="mb-4">
                <h1 className="text-[22px] font-serif font-semibold text-gray-900">
                  Nothing Found
                </h1>
              </header>

              <div className="space-y-6">
                <p className="text-gray-600 font-rubik text-[15px]">
                  It seems we can’t find what you’re looking for. Perhaps
                  searching can help.
                </p>

                {/* Search Form */}
                <form
                  role="search"
                  method="get"
                  action="/"
                  className="flex items-center border border-gray-300 overflow-hidden w-full"
                >
                  <input
                    type="search"
                    name="s"
                    required
                    placeholder="Search..."
                    className="flex-1 px-4 py-2 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4.5 h-full py-4.5 bg-[#75BDA7] text-white hover:bg-gray-800 transition"
                    aria-label="Search"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>
            </section>

            {/* Pagination Area */}
            <div className="mt-8">
              <nav
                aria-label="navigation"
                className="flex justify-center text-sm text-gray-400"
              >
                {/* Empty pagination placeholder (matches original output) */}
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="space-y-8">
              {/* Sidebar Search */}
              <div className="border  shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 bg-white">
                <form
                  role="search"
                  method="get"
                  action="/"
                  className="flex items-center border border-gray-300  overflow-hidden"
                >
                  <input
                    type="search"
                    name="s"
                    required
                    placeholder="Search..."
                    className="flex-1 px-4 py-2 text-sm outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4.5 h-full py-4.5 bg-[#75BDA7] text-white hover:bg-gray-800 transition"
                    aria-label="Search"
                  >
                    <FaSearch />
                  </button>
                </form>
              </div>

              {/* Categories Widget */}
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 bg-white">
                <div className="border-b pb-3 mb-4 relative">
                  <h2 className="text-[20px]  font-medium font-serif ">
                    Categories
                  </h2>
                  <hr className="absolute -bottom-0.5 w-10  border border-[#75BDA7]" />
                </div>
                <ul className="text-gray-500 text-[15px] font-medium font-rubik list-disc list-inside space-y-2">
                  <li>No categories</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
