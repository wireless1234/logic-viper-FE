"use client";

import React from "react";

export default function ApplyForJob() {
  return (
    <div className="w-full bg-white p-8">
      <h1 className="text-2xl font-bold mb-8">Apply For This Job</h1>

      <form className="space-y-10">
        {/* Personal Information */}
        <section className="border p-4">
          <h2 className="text-xl font-semibold mb-6 pb-2">
            Personal Information
          </h2>

          <div className="space-y-6">
            {[
              { id: "firstName", label: "First Name", required: true },
              { id: "middleName", label: "Middle Name" },
              { id: "lastName", label: "Last Name", required: true },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                required: true,
              },
              {
                id: "phone",
                label: "Phone Number",
                type: "tel",
                placeholder: "0802 123 4567",
              },
              { id: "country", label: "Country of residence", required: true },
            ].map((field) => (
              <div
                key={field.id}
                className="grid grid-cols-[320px_1fr] items-center gap-4"
              >
                <label htmlFor={field.id} className="font-medium">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  id={field.id}
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full border bg-[#F4FAFD] border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="border mt-5 p-4">
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">
            Additional Information
          </h2>

          <div className="space-y-6">
            {[
              {
                id: "source",
                label: "How did you hear about this opening?",
                required: true,
              },
              {
                id: "comment",
                label: "If other comment below",
              },
            ].map((field) => (
              <div
                key={field.id}
                className="grid grid-cols-[320px_1fr] items-center gap-4"
              >
                <label htmlFor={field.id} className="font-medium">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  id={field.id}
                  type="text"
                  required={field.required}
                  className="w-full border bg-[#F4FAFD] border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            <div className="grid grid-cols-[320px_1fr] items-center gap-4">
              <label htmlFor="startDate" className="font-medium">
                When are you able to begin work?
                <span className="text-red-500">*</span>
              </label>
              <select
                id="startDate"
                required
                className="w-full border border-gray-300 bg-[#F4FAFD] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option defaultValue="immediately">Immediately</option>
                <option value="1-week">Within 1 Week</option>
                <option value="2-weeks">Within 2 Weeks</option>
                <option value="1-month">Within 1 Month</option>
              </select>
            </div>

            <div className="grid grid-cols-[320px_1fr] items-center gap-4">
              <label htmlFor="experience" className="font-medium">
                Relevant years of experience
                <span className="text-red-500">*</span>
              </label>
              <select
                id="experience"
                required
                className="w-full border border-gray-300 bg-[#F4FAFD] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option defaultValue="0-1">1-3 Years</option>
                <option value="3-5">4-6 Years</option>
                <option value="5-plus">7 -10 Years</option>
              </select>
            </div>

            <div className="grid grid-cols-[320px_1fr] gap-4 items-start">
              <label htmlFor="coverLetter" className="font-medium mt-2">
                Cover Letter<span className="text-red-500">*</span>
              </label>
              <textarea
                id="coverLetter"
                rows={4}
                required
                className="w-full border border-gray-300 bg-[#F4FAFD] p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>
        <div className="grid grid-cols-[335px_1fr] items-center gap-4">
          <label htmlFor="resume" className="font-medium">
            Attach Resume<span className="text-red-500">*</span>
          </label>

          <div className="flex items-center w-full border border-gray-300 p-2">
            <input id="resume" type="file" required className="hidden" />

            <span className="flex-1 text-gray-500 text-sm truncate">
              No file chosen
            </span>

            <label
              htmlFor="resume"
              className="ml-4 bg-black text-white px-2.5 py-1 cursor-pointer hover:bg-gray-800 transition"
            >
              Browse
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end ">
          <button
            type="submit"
            className="bg-black text-white px-8 py-2   transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
