import React from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import { privacyPolicyToc } from "@/lib/terms/privacy";
import { TiLocationArrowOutline } from "react-icons/ti";
import { LuCircleCheckBig } from "react-icons/lu";
import Link from "next/link";

const locations = [
  {
    country: "United States",
    address: "1125 Close Avenue, Bronx, NY 10472",
  },
  {
    country: "Nigeria",
    address: "251 Herbert Macaulay Wy, Wuse, Abuja 900211, Abuja, Nigeria.",
    link: "https://www.google.com/maps/dir/4.8882286,6.9961029/ascomnet/@6.9711589,4.9081294,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x104e0b076b5eaaab:0xab45f5e8a625a1d!2m2!1d7.4801489!2d9.0619483",
  },
  {
    country: "Ghana",
    address: "GD-284-1664 3E MD Estate, Sasso Street, Trassaco East, Accra",
  },
];

const PrivacyPolicy = () => {
  const checkIcon = <LuCircleCheckBig className="inline text-green-600 mr-2" />;
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Contact Us</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-[45px] font-bold font-serif text-gray-900 mb-4">
                Reach Out to Our Sales Team
              </h2>

              <p className="text-gray-700 mb-6 font-rubik text-lg">
                Explore how we can help with IT management and solutions that
                drive success for your business.
              </p>

              <p className="text-gray-900 uppercase font-medium mb-4 font-serif-display text-lg">
                Interested in Managed IT Services?
              </p>

              <p className="text-gray-700 mb-6 font-rubik text-lg">
                Speak directly with one of our sales professionals at{" "}
                <strong>+1 347-678-3232</strong>, or schedule a 30-minute
                consultation with our IT sales experts:
              </p>
              <div className="my-4 ">
                <Link
                  href="#"
                  className="inline-block font-rubik text-base bg-black hover:bg-[#75BDA7] px-6 py-3 font-medium text-white transition "
                >
                  Book a Free Consultation
                </Link>
              </div>
              <h2 className="text-[45px] font-serif font-bold text-gray-900 mt-14 mb-4">
                Need Technical Assistance?
              </h2>

              <p className="text-gray-700 font-rubik text-lg">
                Discuss how our strategic IT management services can help you
                achieve your business goals.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-xl  p-8 ">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField label="First Name" required />
                  <FormField label="Last Name" required />
                  <FormField label="Company Name" required />
                  <FormField label="State/Region" required />
                  <FormField label="Phone Number" type="tel" required />
                  <FormField label="Email" type="email" required />

                  <SelectField
                    label="Size of Business"
                    options={[
                      "- Please Select -",
                      "< 25",
                      "25 - 75",
                      "75 - 250",
                      "250 - 500",
                      "500+",
                    ]}
                    required
                  />

                  <SelectField
                    label="What is your IT service need?"
                    options={[
                      "- Please Select -",
                      "Cyber Security Solutions",
                      "Managed Security Services",
                      "Project Management",
                      "IT Consulting Service",
                      "Managed Solutions",
                      "Application Development",
                      "Compliance",
                      "Quality Assurance",
                    ]}
                  />
                </div>

                <div>
                  <label className="block text-[15px] font-normal font-rubik text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Additional Comments/Questions"
                    className="w-full border-b-2 border-black px-3 py-2 text-sm "
                  />
                </div>

                <div className="flex items-start gap-2 text-[15px] font-rubik text-gray-600">
                  <input type="checkbox" defaultChecked className="mt-1" />
                  <span>
                    By submitting this form, you acknowledge that Logic Viper
                    values your privacy. The data provided will be used to
                    respond to your inquiries and to enhance our services. We
                    will never share your information with third parties without
                    your explicit consent, except as required by law. For
                    further details, please review our{" "}
                    <a href="/privacy-policy" className="text-[#75BDA7] ">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className=" font-serif-display hover:scale-110 mx-auto bg-[#75BDA7] py-4 px-10 text-base font-medium text-black hover:text-white transition hover:scale-[1.02] hover:bg-gray-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#0F0E1B] py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Heading */}
          <h2 className="mb-14 text-center text-[50px] font-serif font-bold text-white">
            Our Locations
          </h2>

          {/* Location Cards */}
          <div className="grid gap-10 md:grid-cols-3">
            {locations.map((location, index) => {
              const Wrapper = location.link ? "a" : "div";

              return (
                <Wrapper
                  key={index}
                  href={location.link}
                  target={location.link ? "_blank" : undefined}
                  rel={location.link ? "noopener noreferrer" : undefined}
                  className={`block rounded-xl ${
                    index === 1 && "bg-[#75BDA7]"
                  } p-7.5 shadow-md transition hover:shadow-lg`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    {/* Icon */}
                    <div
                      className={`text-6xl ${
                        index === 1 ? "text-black" : "text-white"
                      }`}
                    >
                      <TiLocationArrowOutline />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-[30px] font-serif font-bold ${
                        index === 1 ? "text-black" : "text-white"
                      }`}
                    >
                      {location.country}
                    </h3>

                    {/* Address */}
                    <p
                      className={`text-[18px] font-rubik font-normal ${
                        index === 1 ? "text-black" : "text-white"
                      }`}
                    >
                      {location.address}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

function FormField({
  label,
  type = "text",
  required = false,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[15px] font-rubik font-normal text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        className="w-full  border-b-2 border-black px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  required = false,
}: {
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-normal text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <select
        required={required}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
