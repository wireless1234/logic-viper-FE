import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const EducationSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/education.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Educational & Knowledge Services</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Ensuring Secure Learning Environments
                </h2>
                <p>
                  The education sector is rapidly adopting digital platforms for
                  learning, collaboration, and research, making cybersecurity an
                  essential part of its ecosystem. From K-12 schools to higher
                  education institutions, ensuring that student data is secure,
                  that research is protected, and that platforms for learning
                  are free from disruptions is critical. Educational
                  institutions are increasingly targeted by ransomware attacks
                  and phishing schemes due to the vast amount of personal and
                  financial data they manage.
                </p>
                <p>
                  <strong>
                    Logic Viper&apos;s solutions for educational institutions
                  </strong>{" "}
                  go beyond basic IT support we create secure digital learning
                  environments, protect intellectual property, and ensure
                  compliance with data privacy laws such as FERPA. Our
                  multi-layered defense systems are designed to prevent
                  unauthorized access to student records and secure cloud-based
                  learning platforms. We also provide solutions for securing
                  campus networks and enabling safe collaboration between
                  students and educators.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/learn.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full  aspect-video rounded overflow-hidden">
                <Image
                  src="/images/education-solutions.webp"
                  alt="gov"
                  fill
                  sizes="(max-width: 1024px) 100vw, 505px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik pl-12">
                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Key Solutions:
                </h2>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Protecting cloud-based learning platforms and online portals
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Data encryption for student records and financial
                    information
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Intellectual property protection for research institutions
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Network security for campus infrastructures and remote
                    learning
                  </p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  Cyberattacks on educational institutions can disrupt learning
                  and compromise sensitive student data. Protecting these
                  environments is critical to fostering safe, effective learning
                  experiences.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Educational & Knowledge Resources
        </h3>
      </div>
    </div>
  );
};

export default EducationSector;
