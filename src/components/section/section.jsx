import { Featurejobs } from "./featurejobs"
import { Hybridjobs } from "./hybridjobs"
import "./section.css"
import playapp from "../../assets/images/playstore.png"
import iosapp from "../../assets/images/appstore.png"
export function Sectionmain() {
    return (
        <>
            <div className="container-fluid">
                <section>
                    <div className="mt-3 welcomeoffer  p-2 ">
                        <span className="ms-2 fs-3 fw-bold text-light ">EMPLOYERS</span>
                        <span className="offertagline fw-bold">WELCOME OFFER - FREE JOB Postings and Much More.</span>
                        <span >
                            <button className="mx-2 btn btn-warning registerbtn">Register for FREE</button>
                            <button className="mx-2 btn btn-light ">Post a Job</button>
                            <button className=" mx-2 btn btn-link text-light">Salary Enquiry.</button>
                        </span>
                    </div>
                    <div className="mt-3 mb-2">
                        <sapn className=" sectionhead1 text-center">
                            <div className="fs-4 fw-bold">Bringing you the Perfect Job !</div>
                            <div className="fs-5">
                                11,000+ JOBS to Apply
                            </div>
                        </sapn>
                    </div>
                    <div className="searchcontainer ">
                        <span className="searchbar  p-4 me-4 rounded" style={{ backgroundColor: "#6ddad8" }}>
                            <span className="mb-2 d-flex">
                                <input className="form-control" placeholder="Search Jobs Now"></input>
                                <button className="btn btn-warning ms-2">search</button>
                            </span>
                            <span className="d-flex  justify-content-end">
                                <button className="btn btn-light mx-2">View Jobs</button>
                                <button className="btn btn-warning">Register for FREE</button>
                            </span>
                        </span>
                        <span className="rounded  p-3" style={{ backgroundColor: "#6ddad8" }}>
                            <div style={{ color: "#054274" }} className="fs-5 text-center fw-bold">Quick Job Search&nbsp;<span className="bi bi-search"></span></div>
                            <div className="text-light">#Fresher #Work From Home #WFH #IT #HR #Back Office #BPO Jobs #ITES #Finance #Accounts #Medical #Pharma #Manager #Developer #Marketing #Engineering #Non Government Jobs</div>
                        </span>
                    </div>
                    <div className="featuredjobs">
                        <h3 className="text-center my-2"> Featured Jobs</h3>
                        <Featurejobs />
                    </div>
                    <div className="featuredjobshybrid">
                        <h3 className="text-center my-2"> Remote Jobs</h3>
                        <Hybridjobs />
                    </div>
                    <div className="FeaturedEmployers">
                        <h3 className="text-center my-2">  FEATURED <span className="text-secondary"> EMPLOYERS</span></h3>
                    </div>
                    <div className="row">
                        <div className="onmblbanner ">
                            <div className="mblimgcontent">
                                <div className="fw-bold"> APPLY TO JOBS ON-THE-GO</div>
                                <div className="text-primary">Jobringer Mobile App</div>
                                <img src={playapp} width={130}></img>
                                <img src={iosapp} width={130}></img>
                                <div className="fw-bold">Mobile App <span className="text-primary">Download</span></div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </>
    )
}
