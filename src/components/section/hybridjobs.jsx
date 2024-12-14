import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Hybridjobs() {
    const [hybridjobdata, sethybridjobdata] = useState(
        [
            {
                title: "Cloud Infrastructure Engineer",
                company: "Pearl Technologies Ltd.",
                type: "Remote",
                employmentType: "Full Time",
                experience: "0 - 5 Years",
                location: "New Delhi / India",
            },
            {
                title: "Data Architect - Azure",
                company: "JOB STORE CONSULTING",
                type: "Hybrid",
                employmentType: "Full Time - Permanent",
                experience: "12 - 15 Years",
                location: "Bengaluru / Bangalore / India",
            },
            {
                title: "Asset Manager",
                company: "Allyted Solutions",
                type: "Remote",
                employmentType: "Full Time - On Contract",
                experience: "5 - 6 Years",
                location: "Karnal / India",
            },
            {
                title: "AWS DevOps Engineer",
                company: "Rapid Consulting Services",
                type: "Hybrid",
                employmentType: "Full Time - On Contract",
                experience: "1 - 5 Years",
                location: "Bengaluru / Bangalore / India",
            },
            {
                title: "Quality Assurance Test Lead",
                company: "PRACYVA",
                type: "Hybrid",
                employmentType: "Full Time - Permanent",
                experience: "7 - 12 Years",
                location: "UK, United Kingdom",
            },
            {
                title: "DevOps Engineer",
                company: "Rapid Consulting Services",
                type: "Hybrid",
                employmentType: "Full Time - On Contract",
                experience: "1 - 6 Years",
                location: "Bengaluru / Bangalore / India",
            },
            {
                title: "Software Engineer in Test",
                company: "InfoStride",
                type: "Hybrid",
                employmentType: "Full Time - Permanent",
                experience: "8 - 10 Years",
                location: "Noida / India",
            },
            {
                title: "Data Scientist - Gen AI & LLM",
                company: "RandomTrees",
                type: "Hybrid",
                employmentType: "Full Time",
                experience: "5 - 8 Years",
                location: "Chennai / India",
            },
            {
                title: "Frontend Developer",
                company: "TechEdge Solutions",
                type: "Remote",
                employmentType: "Full Time",
                experience: "2 - 5 Years",
                location: "Mumbai / India",
            },
            {
                title: "Backend Engineer",
                company: "Innovate IT",
                type: "Hybrid",
                employmentType: "Full Time - Permanent",
                experience: "4 - 7 Years",
                location: "Pune / India",
            },
            {
                title: "Product Manager",
                company: "Visionary Minds",
                type: "Remote",
                employmentType: "Full Time",
                experience: "3 - 6 Years",
                location: "Hyderabad / India",
            },
            {
                title: "Cybersecurity Analyst",
                company: "SecureX",
                type: "Hybrid",
                employmentType: "Full Time - Permanent",
                experience: "6 - 10 Years",
                location: "Delhi / India",
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
        <>
            <div className="mx-5">
                <Slider {...settings}>
                    {
                        hybridjobdata.map((job, index) => (
                            <div key={index} className="card mt-2 p-3 ">
                                <div style={{ height: "170px" }}>
                                    <div className="title mt-2 fw-bold" style={{ color: "#054274" }}>{job.title}</div>
                                    <div>{job.company}</div>
                                    <div className="text-secondary">
                                        <div>{job.employmentType}</div>
                                        <div>{job.experience}</div>
                                        <div>{job.location}</div>
                                    </div>
                                </div>
                                <button className="text-light fw-bold applybtncard w-100" >Apply now<span className="bi bi-chevron-right"></span></button>
                                <div className="batchoffer position-absolute top-0 " style={{ right: "10px" }}>{job.type}</div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}