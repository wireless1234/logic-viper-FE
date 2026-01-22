import React from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
type Props = {};

const AutomotiveSector = (props: Props) => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/health.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Healthcare</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="grid lg:grid-cols-2 gap-y-20">
            <div className="flex items-center">
              <div className="space-y-2.5 text-sm font-rubik">
                <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                  Protecting Patient Data and Healthcare Networks
                </h2>
                <p>
                  The healthcare industry manages vast amounts of sensitive
                  data, including patient records, medical histories, and even
                  genomic information. With the rapid adoption of electronic
                  health records (EHR), telemedicine, and IoT-enabled medical
                  devices, healthcare providers have become prime targets for
                  cybercriminals. Data breaches in healthcare are particularly
                  damaging, leading to potential identity theft, financial loss,
                  and even disruptions to critical care.
                </p>
                <p>
                  <strong>
                    Logic Viper offers holistic healthcare cybersecurity
                    solutions
                  </strong>{" "}
                  that go beyond just securing data. We protect hospitals and
                  clinics by implementing secure access controls, ensuring
                  compliance with HIPAA, GDPR, and other regulatory standards.
                  Our network monitoring and incident response capabilities
                  prevent unauthorized access and mitigate ransomware
                  attacks—ensuring that patient care remains uninterrupted.
                  Furthermore, our solutions extend to securing medical devices
                  and the broader Internet of Medical Things (IoMT), ensuring
                  that critical infrastructure is safe from tampering.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full max-w-[505px] aspect-[505/570] rounded overflow-hidden">
                <Image
                  src="/images/patient.webp"
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
                  src="/images/health-solutions.webp"
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
                    Securing IoMT (Internet of Medical Things) devices and
                    healthcare infrastructure
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>Advanced encryption for EHR and patient data</p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Compliance management for HIPAA, GDPR, and other regulatory
                    frameworks
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                  <p>
                    Real-time threat detection and ransomware protection for
                    hospital systems
                  </p>
                </div>

                <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                  Why It Matters:
                </h2>
                <p>
                  A cyberattack on a healthcare system could not only compromise
                  sensitive patient data but also endanger lives if it disrupts
                  medical devices or patient care systems. Healthcare
                  organizations that ensure robust cybersecurity are better
                  equipped to protect their patients and their reputations.
                </p>
                <div className="mt-6 border-2 border-black w-10"></div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-serif text-[50px] font-bold mt-25 text-center">
          Healthcare Resources
        </h3>
      </div>
    </div>
  );
};

export default AutomotiveSector;
