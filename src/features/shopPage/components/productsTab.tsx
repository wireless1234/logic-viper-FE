"use client";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function ProductTabs({ name }: { name: string }) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Tabs */}
      <ul role="tablist" className="flex border-b border-[#eee] gap-2.5">
        <li role="presentation">
          <button
            role="tab"
            aria-selected={activeTab === "description"}
            onClick={() => setActiveTab("description")}
            className={`px-5 py-2.5 hover:text-[#75bda7] font-rubik border border-[#eee] font-bold  transition
              ${
                activeTab === "description"
                  ? " text-[#75bda7] -mb-1 border-b-white border-b-3"
                  : "border-transparent text-gray-[#515151] bg-[#fafafa] "
              }`}
          >
            Description
          </button>
        </li>

        <li role="presentation">
          <button
            role="tab"
            aria-selected={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
            className={`px-5 hover:text-[#75bda7] py-2.5 border border-[#eee] font-medium transition
              ${
                activeTab === "reviews"
                  ? "  border-b-2 -mb-1 border-b-white text-[#75bda7]"
                  : "border-transparent text-gray-[#515151] bg-[#fafafa] "
              }`}
          >
            Reviews (0)
          </button>
        </li>
      </ul>

      {/* Panels */}
      {activeTab === "description" && (
        <div
          role="tabpanel"
          className="space-y-2.5 font-normal text-[15px] font-rubik text-[#212121] border border-t-0 p-6"
        >
          <h3 className="text-xl font-serif text-[#0e0129] font-semibold ">
            Description
          </h3>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy.
          </p>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure.
          </p>

          <p>
            Latin words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered
            the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
            1.10.33 of “de Finibus Bonorum et Malorum”.
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div
          role="tabpanel"
          className="space-y-2.5 p-6 border font-rubik border-t-0 text-[15px] text-[#212121]"
        >
          <h3 className="text-xl font-serif  font-semibold">
            Customer Reviews
          </h3>

          <p className="">There are no reviews yet.</p>
          <p>Be the first to review “{name}”</p>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>

          <div className="space-y-2">
            <label className="block font-medium font-rubik text-[15px] text-black">
              Rate this item
            </label>

            {/* Stars */}
            <div role="radiogroup" aria-label="Rating" className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => {
                const active = hover ? star <= hover : star <= rating;

                return (
                  <button
                    key={star}
                    type="button"
                    role="radio"
                    aria-checked={rating === star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="focus:outline-none"
                  >
                    <FaStar
                      className={`text-xl transition
                  ${active ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Hidden input for native form submit */}
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="mt-2 p-2.5 border border-gray-300 bg-white p-2 text-sm
             focus:outline-none "
              required
            >
              <option value={0}>Rate…</option>
              <option value={5}>Perfect</option>
              <option value={4}>Good</option>
              <option value={3}>Average</option>
              <option value={2}>Not that bad</option>
              <option value={1}>Very poor</option>
            </select>
          </div>
          {/* Review Form */}
          <form className="gap-4 w-full grid lg:grid-cols-2">
            <textarea
              placeholder="Write your review*"
              className="w-full bg-[#F7F7F7] lg:col-span-2 border rounded p-3 focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
              required
            />

            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-[#F7F7F7] border p-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-[#F7F7F7] border p-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <div className="flex col-span-2 items-center gap-3">
              <input type="checkbox" name="" id="" />
              <p>
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 col-span-2 hover:bg-blue-900 text-white w-fit bg-[#75bda7] transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
