"use client";
import React from "react";
import {
  FaBlackTie,
  FaBriefcase,
  FaHome,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaClock,
  FaFileContract,
} from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { jobPostings } from "@/lib/jobsData";
import { useSearchParams } from "next/navigation";
import ApplyForJob from "./applicationForm";

const JobDetail = () => {
  const searchParams = useSearchParams();
  const jobPost = searchParams.get("id");
  const formattedTitle = jobPost?.replace(/-/g, " ");
  const job = jobPostings.find(
    (job) => job.title.toLowerCase() === formattedTitle,
  );
  return (
    <article className="font-roboto " aria-labelledby={`job-title-${job?.id}`}>
      {/* Header */}
      <header className="px-6 py-6">
        <div className="flex items-center gap-4">
          <img
            src="/images/job.webp"
            alt="Sun River Health"
            width={60}
            height={60}
            className="rounded"
          />
          <div>
            <h1
              id={`job-title-${job?.id}`}
              className="text-[32px] font-bold font-serif "
            >
              {job?.title}
            </h1>
          </div>
        </div>
      </header>

      <hr className="border-gray-200" />

      {/* Meta Information */}
      <section className="px-6 py-6 font-roboto " aria-label="Job metadata">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaBriefcase size={16} aria-hidden="true" />
            <span>{job?.employmentType}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot size={16} aria-hidden="true" />
            <span>{job?.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarCheck size={16} aria-hidden="true" />
            <span>{job?.postedDate}</span>
          </div>
        </div>
      </section>

      {/* Organization Description */}
      <section className="px-6 py-6" aria-labelledby="org-description">
        <h2
          id="org-description"
          className="text-[32px] font-serif font-bold mb-4"
        >
          {job?.fullJobDescription}
        </h2>
        <p className="text-gray-700 leading-relaxed italic text-base whitespace-pre-line">
          {job?.organizationDescription}
        </p>
      </section>

      {job?.seek && <p className="px-6 text-base font-bold">{job?.seek}</p>}

      {/* Position Summary */}
      <section className="px-6 py-6" aria-labelledby="position-summary">
        <h2 id="position-summary" className="text-lg mb-4">
          Summary of Position
        </h2>
        <p className="text-gray-700 text-base leading-relaxed">
          {job?.positionSummary}
        </p>
      </section>

      {/* Essential Functions */}
      <section className="px-6 py-6" aria-labelledby="essential-functions">
        <h2 id="essential-functions" className="text-lg  mb-4">
          Essential Functions
        </h2>
        <ul className="space-y-3" role="list">
          {job?.essentialFunctions.map((func, index) => (
            <li key={index} className="flex gap-3 text-gray-700">
              <span
                className="text-primary mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                •
              </span>
              <span className="leading-relaxed">{func}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Education/Experience */}
      <section className="px-6 py-6" aria-labelledby="education-experience">
        <h2 id="education-experience" className="text-lg font-bold mb-4">
          Education/Experience
        </h2>
        <p className="text-gray-700 font-bold text-base leading-relaxed">
          {job?.educationExperience}
        </p>
      </section>
      {/* Additional Information */}
      <section className="px-6  pb-6" aria-labelledby="additional-info">
        <h2 className="text-lg mb-4">
          Job Type: <span>{job?.jobType}</span>
        </h2>
        <h3 className="text-lg">Responsibilities for Internal Candidates</h3>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              Relation to Mission
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {job?.responsibilitiesForInternalCandidates.relationToMission}
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              Equal Employment Opportunity
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {
                job?.responsibilitiesForInternalCandidates
                  .equalEmploymentOpportunity
              }
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              Americans with Disabilities Act
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {
                job?.responsibilitiesForInternalCandidates
                  .americansWithDisabilitiesAct
              }
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">
              Job Responsibilities
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {job?.responsibilitiesForInternalCandidates.jobResponsibilities}
            </p>
          </div>
        </div>
      </section>

      {/* Job Features */}
      <section className="px-6 py-6" aria-labelledby="job-features">
        <h2 id="job-features" className="text-[17px] font-serif font-bold mb-4">
          Job Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start gap-3">
            <FaBlackTie
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Job Category
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.jobCategory.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaBriefcase
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Experience
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.experience}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaHome
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Accommodation
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.accommodation}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaMoneyBillWave
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Salary
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.salary}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BsBank2
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Qualification
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.qualification}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaClock
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Working Hours
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.workingHours}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaLocationDot
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Location
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.location}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaFileContract
              size={30}
              className="text-primary mt-1 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold font-serif text-[24px] text-gray-900">
                Contract Type
              </p>
              <p className="text-[15px] text-gray-600">
                {job?.jobFeatures.contractType}
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

const Job = () => {
  return (
    <div className="min-h-screen bg-white pb-25 pt-40">
      <div className="max-w-330 mx-auto px-4">
        <JobDetail />
        <ApplyForJob />
      </div>
    </div>
  );
};

export default Job;
