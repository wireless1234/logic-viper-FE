import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarCheck, Search } from "lucide-react";
import { FaBriefcase } from "react-icons/fa";

export default function JobsPage() {
  return (
    <main className="bg-white py-12 ">
      <div className="max-w-330 mx-auto px-4 mt-24">
        {/* Page Title */}
        <h2 className="text-[32px] font-serif font-bold  mb-10">
          Build Your Future Here
        </h2>

        {/* Filters */}
        <form className="   p-6 mb-10 bg-[#f2f2f2]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <input
              type="text"
              placeholder="Keywords"
              className="border  px-4 py-2 w-full md:col-span-4 bg-[#F2F9FC]"
            />

            <select className="border  px-4 py-2 w-full bg-[#F2F9FC]">
              <option>Category</option>
              <option>Administration & Human Resources</option>
              <option>Compliance & Legal</option>
              <option>Consulting & Strategy</option>
              <option>IT, Data & Innovation</option>
            </select>

            <select className="border px-4 py-2 w-full bg-[#F2F9FC]">
              <option>Job Type</option>
              <option>Full-Time</option>
              <option>Hybrid</option>
              <option>Internship</option>
              <option>Part-Time</option>
            </select>

            <select className="border rounded px-4 py-2 w-full bg-[#F2F9FC]">
              <option>Location</option>
              <option>Ghana</option>
              <option>Nigeria</option>
              <option>Remote</option>
            </select>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded px-4 py-2 hover:bg-primary/90 transition"
            >
              <Search size={18} />
            </button>
          </div>
        </form>

        {/* Job Listing */}
        <div className="space-y-8">
          {/* Job Card */}
          <div className="border py-6">
            {/* Header */}
            <div className="flex px-6 flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/job.webp"
                  alt="Company"
                  width={60}
                  height={60}
                  className="rounded"
                />

                <div>
                  <h4 className="text-xl font-semibold">
                    <Link href="/jobs/view-job?id=water-manager">
                      Water Manager
                    </Link>
                  </h4>
                </div>
              </div>

              <Link
                href="/jobs/view-job?id=water-manager"
                className="inline-block bg-primary text-white px-6 py-2 rounded font-semibold"
              >
                Apply Now
              </Link>
            </div>
            <hr className="my-4" />
            {/* Meta */}
            <div className="grid px-6 grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <FaBriefcase size={16} />
                Hybrid
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Nigeria
              </div>
              <div className="flex items-center gap-2">
                <CalendarCheck size={16} />
                Posted 1 year ago
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 px-6 text-gray-700">
              Full job description Sun River Health provides the highest quality
              of comprehensive primary, preventative and behavioral health
              services to all who seek it, regardless of insurance status and
              ability ...
            </p>
          </div>

          {/* Duplicate Job Card Example */}
          <div className="border py-6">
            {/* Header */}
            <div className="flex px-6 flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/job.webp"
                  alt="Company"
                  width={60}
                  height={60}
                  className="rounded"
                />

                <div>
                  <h4 className="text-xl font-semibold">
                    <Link href="/jobs/view-job?id=care-manager">
                      Care Manager
                    </Link>
                  </h4>
                </div>
              </div>

              <Link
                href="/jobs/view-job?id=care-manager"
                className="inline-block bg-primary text-white px-6 py-2 rounded font-semibold"
              >
                Apply Now
              </Link>
            </div>
            <hr className="my-4" />
            {/* Meta */}
            <div className="grid px-6 grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <FaBriefcase size={16} />
                Hybrid
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Ghana, Nigeria, Remote
              </div>
              <div className="flex items-center gap-2">
                <CalendarCheck size={16} />
                Posted 1 year ago
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 px-6 text-gray-700">
              Full job description Sun River Health provides the highest quality
              of comprehensive primary, preventative and behavioral health
              services to all who seek it, regardless of insurance status and
              ability ...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
