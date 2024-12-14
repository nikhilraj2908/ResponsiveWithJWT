import './footer.css'
import bgimg from "../../assets/images/startuplogo.png"
export function Footer() {
    return (
        <>
            <div >
                <div className="jobscategory">
                    <div className=" jobsinindia ">
                        <div className="fs-3 text-center fw-bold">
                            JOBS IN INDIA
                        </div>
                        <div >
                            #Mumbai
                            #Delhi
                            #Ajmer
                            #Pune
                            #Hyderabad
                            #Agra
                            #Chennai
                            #Kolkata
                            #Indore
                            #Gurugram
                            #Jaipur
                            #Ahmedabad
                        </div>
                    </div>
                    <div className="internationaljobs">
                        <div className="fs-3 text-center fw-bold">
                            International Jobs
                        </div>
                        <div>
                            #Africa
                            #USA
                            #UK
                            #Australia
                            #Canada
                            #Singapore
                            #Dubai
                            #Saudi Arabia
                            #New Zealand
                        </div>
                    </div>
                </div>
                <div className='d-flex footerbg py-3'>
                    <div className="jobcountbanner ">
                        <span>
                            <div>Jobs Posted</div>
                            <div className=" jobcount fw-bold" style={{ color: "#054274" }}>31432</div>
                        </span>
                        <span>
                            <div>Jobs Filled</div>
                            <div className=" jobcount fw-bold" style={{ color: "#054274" }}>15153</div>
                        </span>
                        <span>
                            <div>Employers</div>
                            <div className=" jobcount fw-bold" style={{ color: "#054274" }}>20085</div>
                        </span>
                        <span>
                            <div>Active Users</div>
                            <div className=" jobcount fw-bold" style={{ color: "#054274" }}>1296217</div>
                        </span>
                    </div>
                </div>
                <div className='footerpart2'>
                    <div className='disclaimercontainer '>
                        <div className='disclaimertext'><b>Disclaimer:</b> All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.</div>
                        <img src={bgimg} height={50}></img>
                    </div>
                    <div className="socialitems">
                        <div className='fs-5 fw-bold'>Follow us on:
                            <a className="bi bi-whatsapp rounded-circle text-light " href='#'></a>
                            <a className="bi bi-facebook rounded-circle text-light" href='#'></a>
                            <a className="bi bi-twitter rounded-circle text-light" href='#'></a>
                            <a className="bi bi-instagram rounded-circle text-light" href='#'></a>
                            <a className="bi bi-linkedin rounded-circle text-light" href='#'></a>
                            <a className="bi bi-youtube rounded-circle text-light" href='#'></a>
                            <a className="bi bi-telegram rounded-circle text-light" href='#'></a>
                        </div>
                    </div>
                </div>
                <div className='footerlast text-center py-2'>
                    Terms and conditions | Privacy Policy | Refund / Cancellation Policy | About Us | Contact Us | FAQ |<br></br>
                    © All Rights Reserved @ 2024 Jobtech Ventures Private Limited.
                    </div>
            </div>
        </>
    )
}