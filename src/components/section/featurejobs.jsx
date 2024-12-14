import { useState } from "react";
import './featurejobs.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Featurejobs() {
    const [jobdata, setjobdata] = useState(
        [
            {
                jobCategory: "In Office job",
                jobTitle: "Non IT Recruiter",
                companyName: "Pilot Industries Ltd.",
                jobType: "Full Time - Permanent",
                experienceRequired: "0 - 2 Years",
                location: "New Delhi / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Digital Marketing Executive",
                companyName: "Suffescom Solutions Inc",
                jobType: "Full Time - Permanent",
                experienceRequired: "2 - 5 Years",
                location: "Mohali / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Project Engineer",
                companyName: "Jayatma Technologies Pvt. Ltd.",
                jobType: "Full Time - Permanent",
                experienceRequired: "2 - 3 Years",
                location: "Ahmedabad / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Senior Manager - Finance & Accounts",
                companyName: "OneInsure",
                jobType: "Full Time - Permanent",
                experienceRequired: "8 - 14 Years",
                location: "Mumbai - South Mumbai / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Java Fullstack Developer",
                companyName: "Excelencia",
                jobType: "Full Time",
                experienceRequired: "5 - 8 Years",
                location: "Chennai / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Executive - Audit& Reporting - CA",
                companyName: "Collegedunia",
                jobType: "Full Time - Permanent",
                experienceRequired: "1 - 12 Years",
                location: "Gurgaon / Gurugram / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Content Writer (female only)",
                companyName: "Bhargava Consulting Group",
                jobType: "Full Time - Permanent",
                experienceRequired: "4 - 6 Years",
                location: "Faridabad / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Odoo Developer/Lead - ERP/Python",
                companyName: "PEOPLEOCITY LLP",
                jobType: "Full Time - Permanent",
                experienceRequired: "2 - 5 Years",
                location: "Mumbai (All Areas) / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Customer Service Representative",
                companyName: "Kreez Consulting",
                jobType: "Full Time - Permanent",
                experienceRequired: "1 - 3 Years",
                location: "Navi Mumbai / Panvel | Mohali | Chandigarh / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Sales Executive",
                companyName: "AJFAN INTERNATIONAL",
                jobType: "Full Time",
                experienceRequired: "1 - 5 Years",
                location: "Kozhikode / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "IT Marketing Manager",
                companyName: "Almighty HRD Consultants",
                jobType: "Full Time - Permanent",
                experienceRequired: "4 - 7 Years",
                location: "Coimbatore / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Account Manager (Advertising)",
                companyName: "Buffalo Soldiers",
                jobType: "Full Time",
                experienceRequired: "5 - 6 Years",
                location: "Noida / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "CUSTOMER SUPPORT",
                companyName: "Hex Business Innovations",
                jobType: "Full Time - Permanent",
                experienceRequired: "0 - 5 Years",
                location: "Faridabad / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Tele Sales",
                companyName: "PROPADDA",
                jobType: "Full Time - Permanent",
                experienceRequired: "1 - 2 Years",
                location: "Noida / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Android Developer - Java/Kotlin",
                companyName: "Syphnosys Technology Private Limited",
                jobType: "Full Time - Permanent",
                experienceRequired: "0 - 1 Years",
                location: "Surat / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Data Engineer",
                companyName: "Aventior",
                jobType: "Full Time - Permanent",
                experienceRequired: "2 - 3 Years",
                location: "Pune / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "HR Recruiter | BMS / BBA Fresher | Mumbai",
                companyName: "HINDCO Consulting Services",
                jobType: "Full Time",
                experienceRequired: "0 - 5 Years",
                location: "Mumbai (All Areas) / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Python Developer",
                companyName: "MResult",
                jobType: "Full Time - Permanent",
                experienceRequired: "2 - 5 Years",
                location: "Bengaluru / Bangalore / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Digital Marketing Role - Luxury Products",
                companyName: "The Quarry Gallery",
                jobType: "Full Time - Permanent",
                experienceRequired: "3 - 5 Years",
                location: "Mumbai (All Areas) / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Freight Broker",
                companyName: "Virtual Oplossing Pvt. Ltd.",
                jobType: "Full Time - Permanent",
                experienceRequired: "1 - 5 Years",
                location: "Dehradun / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "Patient Coordinator",
                companyName: "Hospital Staff",
                jobType: "Full Time",
                experienceRequired: "1 - 2 Years",
                location: "Mumbai (All Areas) / India"
            },
            {
                jobCategory: "In Office job",
                jobTitle: "SEO Fresher",
                companyName: "Wisdom InfoSoft",
                jobType: "Full Time - Permanent",
                experienceRequired: "0 - 1 Years",
                location: "Sahibzada Ajit Singh Nagar / India"
            }
        ]
    )
    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#53b9b7", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#53b9b7",borderRadius:"100%" }}
        onClick={onClick}
      />
    );
  }
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1100, // For screens less than or equal to 1100px
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900, // For screens less than or equal to 800px
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600, // For screens less than or equal to 500px
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      };
    return (
        <div className="mx-5">
            <Slider {...settings}>
            {
                jobdata.map(job => (
                    <div className="card mt-2 p-3 ">
                        <div style={{height:"170px"}}>
                        <div className="title mt-2 fw-bold" style={{ color: "#054274" }}>{job.jobTitle}</div>
                            <div>{job.companyName}</div>
                            <div className="text-secondary">
                                <div>{job.jobType}</div>
                                <div>{job.experienceRequired}</div>
                                <div>{job.location}</div>
                            </div>
                        </div>
                        <button className="text-light fw-bold applybtncard w-100">Apply now<span className="bi bi-chevron-right"></span></button>
                        <div className="batchoffer position-absolute top-0 " style={{ right: "10px" }}>{job.jobCategory}</div>
                    </div>
                ))
            }
            </Slider>
        </div>
    )
}