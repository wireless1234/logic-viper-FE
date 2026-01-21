/**
 * Job Postings Data Structure
 * Exact content from job posting documents
 */

export interface JobPosting {
  id: string;
  title: string;
  employmentType: string;
  location: string;
  postedDate: string;
  fullJobDescription: string;
  seek?: string;
  organizationDescription: string;
  positionSummary: string;
  essentialFunctions: string[];
  educationExperience: string;
  jobType: string;
  responsibilitiesForInternalCandidates: {
    relationToMission: string;
    equalEmploymentOpportunity: string;
    americansWithDisabilitiesAct: string;
    jobResponsibilities: string;
  };
  jobFeatures: {
    jobCategory: string[];
    experience: string;
    accommodation: string;
    salary: string;
    qualification: string;
    workingHours: string;
    location: string;
    contractType: string;
  };
}

export const jobPostings: JobPosting[] = [
  {
    id: "job-001",
    title: "Water Manager",
    employmentType: "Hybrid",
    location: "Nigeria",
    postedDate: "Posted 1 year ago",
    fullJobDescription: "Full job description",
    organizationDescription:
      "Sun River Health provides the highest quality of comprehensive primary, preventative and behavioral health services to all who seek it, regardless of insurance status and ability to pay, especially for the underserved and vulnerable. Sun River Health is a Federally Qualified, Non-Profit Health Center serving communities in Suffolk, Rockland, Orange, Duchess, Ulster, Sullivan, Columbia and Westchester County.",
    seek: "We are seeking a reliable and talented Care Manager to join our Townsend Health Center! This position is full-time onsite.",
    positionSummary:
      "The Care Manager has overall day-to-day responsibility for coordinating the activities of the care team for patients with complex medical and psychosocial needs and for facilitating each patient's access to the full range of medical and psychosocial services in an efficient and effective manner.",
    essentialFunctions: [
      "Works closely with the interdisciplinary care team including the PCP, mental health provider, residential services, substance abuse provider, etc. in the development and ongoing coordination of the care plan.",
      "Works closely with the Patient Navigator to direct field activity as needed and ensure the flow of information across and between the care team is optimized.",
      "Provides input to providers/patient/family for written individualized care plans.",
      "Reviews patient intake assessments and uses results to coordinate the completion of the care plan, self-management goals and strategies.",
      "In conjunction with the patient, identifies potential barriers to care and helps patient identify ways to overcome those barriers; reaches out to patients who have not met treatment goals to resolve barriers/adjust goals when possible.",
      "Evaluates medication compliance and assesses potential barriers to adherence; ensures medication reconciliation is current.",
      "Receives alerts to inpatient and ER admissions. Visits patients during inpatient stays and participates actively in discharge planning and care transition activities.",
      "Contacts patients after discharge from inpatient services and ER within one business day.",
      "Reaches out to patients to help them keep scheduled appointment; arranges for appropriate metabolic and periodic preventive screening in accordance with agency policy.",
      "Ensures that patients and care givers are aware of test results by facilitating discussions between the patient and physician as necessary.",
      "Coordinates services between patient and extended care team providers to ensure that integrated care plan is fully implemented.",
      "Regularly reviews workload report in TREAT to identify patients requiring, assessments outreach and engagement.",
      "Provides or arranges for provision of self-management/ wellness education, peer and other support groups in the language that the patient/family prefers.",
      "Organizes and participates in case conferences as per patient need and in accordance with agency policy",
      "Reviews benefits, entitlements, housing with the patient/family and assists in the application process. Follows up as necessary to ensure services are approved.",
      "Utilizes the TREAT system to complete all documentation and assessments timely including scheduling of all activity.",
      "The above is intended to describe the essential job functions, the general supplemental functions and the essential requirements for the performance of the job it is not to be construed as an exhaustive statement of all the job functions",
    ],
    educationExperience:
      "Bachelor's degree preferred in Health or Human Services related field with 2 years of related work experience. High School Diploma/GED required.",
    jobType: "Full-time",
    responsibilitiesForInternalCandidates: {
      relationToMission:
        "The mission of Sun River Health is to increase access to comprehensive primary and preventive health care and to improve the health status of our community, especially for the underserved and vulnerable.",
      equalEmploymentOpportunity:
        "Sun River Health provides equal employment opportunities to all qualified individuals without regard to race, creed, color, religion, national origin, age, sex, marital status, sexual preference, or non-disqualifying physical or mental handicap or disability in each aspect of the human resources function.",
      americansWithDisabilitiesAct:
        "Applicants as well as employees who are or become disabled must be able to perform the essential job functions either unaided or with reasonable accommodation. The organization shall determine reasonable accommodation on a case-by-case basis in accordance with applicable law.",
      jobResponsibilities:
        "The following statements reflect the general duties, responsibilities and competencies considered necessary to perform the essential functions of the job and should not be considered as a detailed description of all the work requirements of the position. Sun River Health may change the specific job duties with or without prior notice based on the needs of the organization.",
    },
    jobFeatures: {
      jobCategory: ["Administration & Human Resources", "Web Designer"],
      experience: "3 +Years",
      accommodation: "No",
      salary: "Competitive",
      qualification: "Bachelors",
      workingHours: "9am - 5pm",
      location: "Onsite",
      contractType: "Full-time",
    },
  },
  {
    id: "job-002",
    title: "Care Manager",
    employmentType: "Full-Time/Regular",
    location: "Ghana, Nigeria, Remote",
    postedDate: "Posted 1 year ago",
    fullJobDescription: "Full job description",
    organizationDescription:
      "Sun River Health provides the highest quality of comprehensive primary, preventative and behavioral health services to all who seek it, regardless of insurance status and ability to pay, especially for the underserved and vulnerable. Sun River Health is a Federally Qualified, Non-Profit Health Center serving communities in Suffolk, Rockland, Orange, Duchess, Ulster, Sullivan, Columbia and Westchester County.\n\nWe are seeking a reliable and talented Care Manager to join our Townsend Health Center! This position is full-time onsite.",
    positionSummary:
      "The Care Manager has overall day-to-day responsibility for coordinating the activities of the care team for patients with complex medical and psychosocial needs and for facilitating each patient's access to the full range of medical and psychosocial services in an efficient and effective manner.",
    essentialFunctions: [
      "Works closely with the interdisciplinary care team including the PCP, mental health provider, residential services, substance abuse provider, etc. in the development and ongoing coordination of the care plan.",
      "Works closely with the Patient Navigator to direct field activity as needed and ensure the flow of information across and between the care team is optimized.",
      "Provides input to providers/patient/family for written individualized care plans.",
      "Reviews patient intake assessments and uses results to coordinate the completion of the care plan, self-management goals and strategies.",
      "In conjunction with the patient, identifies potential barriers to care and helps patient identify ways to overcome those barriers; reaches out to patients who have not met treatment goals to resolve barriers/adjust goals when possible.",
      "Evaluates medication compliance and assesses potential barriers to adherence; ensures medication reconciliation is current.",
      "Receives alerts to inpatient and ER admissions. Visits patients during inpatient stays and participates actively in discharge planning and care transition activities.",
      "Contacts patients after discharge from inpatient services and ER within one business day.",
      "Reaches out to patients to help them keep scheduled appointment; arranges for appropriate metabolic and periodic preventive screening in accordance with agency policy.",
      "Ensures that patients and care givers are aware of test results by facilitating discussions between the patient and physician as necessary.",
      "Coordinates services between patient and extended care team providers to ensure that integrated care plan is fully implemented.",
      "Regularly reviews workload report in TREAT to identify patients requiring, assessments outreach and engagement.",
      "Provides or arranges for provision of self-management/ wellness education, peer and other support groups in the language that the patient/family prefers.",
      "Organizes and participates in case conferences as per patient need and in accordance with agency policy",
      "Reviews benefits, entitlements, housing with the patient/family and assists in the application process. Follows up as necessary to ensure services are approved.",
      "Utilizes the TREAT system to complete all documentation and assessments timely including scheduling of all activity.",
      "The above is intended to describe the essential job functions, the general supplemental functions and the essential requirements for the performance of the job it is not to be construed as an exhaustive statement of all the job functions",
    ],
    educationExperience:
      "Bachelor's degree preferred in Health or Human Services related field with 2 years of related work experience. High School Diploma/GED required.",
    jobType: "Full-time",
    responsibilitiesForInternalCandidates: {
      relationToMission:
        "The mission of Sun River Health is to increase access to comprehensive primary and preventive health care and to improve the health status of our community, especially for the underserved and vulnerable.",
      equalEmploymentOpportunity:
        "Sun River Health provides equal employment opportunities to all qualified individuals without regard to race, creed, color, religion, national origin, age, sex, marital status, sexual preference, or non-disqualifying physical or mental handicap or disability in each aspect of the human resources function.",
      americansWithDisabilitiesAct:
        "Applicants as well as employees who are or become disabled must be able to perform the essential job functions either unaided or with reasonable accommodation. The organization shall determine reasonable accommodation on a case-by-case basis in accordance with applicable law.",
      jobResponsibilities:
        "The following statements reflect the general duties, responsibilities and competencies considered necessary to perform the essential functions of the job and should not be considered as a detailed description of all the work requirements of the position. Sun River Health may change the specific job duties with or without prior notice based on the needs of the organization.",
    },
    jobFeatures: {
      jobCategory: ["Administration & Human Resources", "Web Designer"],
      experience: "3 +Years",
      accommodation: "No",
      salary: "Competitive",
      qualification: "Bachelors",
      workingHours: "9am - 5pm",
      location: "Onsite",
      contractType: "Full-time",
    },
  },
];

// Export for easy access to individual jobs
export const [waterManagerJob, careManagerJob] = jobPostings;
