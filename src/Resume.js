
function Resume(){
    return(
        <> 
        <div className="box_content">
            <div className="innerbox">
                <h1 className="title">Resume</h1>
                <div className="row experience">
                    <div className="col">
                        <h3 className="resume_title">
                        <i class="fi fi-rs-shopping-bag"></i>Experience</h3>
                        <div className="timeline">
                            <div className="timeline_item">
                                <h6 className="company">Infosys Technologies <small>as</small> System Associate</h6>
                                <span className="date">February 2022 - Present</span>
                                <div class="work_list">
                                <ul class="all_works">
                                    <li>Build responsive website using HTML5, CSS, JavaScript and ReactJS.</li>
                                    <li>Worked with UI/UX design team to improve existing website and 
                                        increase conversion rate.
                                    </li> 
                                    <li> Created reusable components and routing to implement navigation 
                                        between the components using React and React-router.</li>
                                    <li>Implemented custom hooks to properly consume and fetch API on 
                                        front end. </li>
                                    <li>Managed GitHub for development team.
                                        </li>
                                </ul>
                            </div>
                            </div>
                            <div className="timeline_item">
                                <h6 className="company">Singsys Pvt. Limited <small>as</small> Frontend Developer</h6>
                                <span className="date">June 2021 - January 2022</span>
                                <div class="work_list">
                                <ul class="all_works">
                                    <li>Developed and styled interactive web applications for clients.</li>
                                    <li>Worked with UI/UX design team to improve existing website and 
                                        increase conversion rate.
                                    </li> 
                                    <li>Designing, developing, testing, and debugging responsive websites on 
                                        desktop and mobiles .</li>
                                        <li>Build reusable code and libraries for future use</li>
                                    
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row experience">
                    <div className="col">
                        <h3 className="resume_title">
                        <i class="fi fi-rs-graduation-cap"></i>Education</h3>
                        <div className="timeline">
                            <div className="timeline_item">
                                <h6 className="company">Dr. Abdul Kalam Technical University</h6>
                                <span className="date">October 2020 - July 2023</span>
                                <div class="work_list">
                                <div class="all_works">
                                    <span>Bachelor of Technology in Electronics & Communication Engineering</span>
                                    <span>Lucknow, Uttar Pradesh</span>
                                </div>
                            </div>
                            </div>
                            <div className="timeline_item">
                                <h6 className="company">Government Ploytechnic Lucknow </h6>
                                <span className="date">June 2016 - August 2019</span>
                                <div class="work_list">
                                <div class="all_works">
                                    <span>Diploma in Electronics & Communication Engineering</span>
                                    <span>Lucknow, Uttar Pradesh</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row skiils">
                    <div className="col-12">
                        <h3 className="resume_title">Code Skills</h3>
                        <div className="skill_list">
                            <div className="progress">
                                <div role="progressbar" className="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                    <div className="progresstext"><span>HTML5</span><span>Intermediate</span></div>
                                </div>
                            </div>
                            <div className="progress">
                                <div role="progressbar" className="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                    <div className="progresstext"><span>CSS</span><span>Intermediate</span></div>
                                </div>
                            </div>
                            <div className="progress">
                                <div role="progressbar" className="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                    <div className="progresstext"><span>JavaScript</span><span>Intermediate</span></div>
                                </div>
                            </div>
                            <div className="progress">
                                <div role="progressbar" className="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}>
                                    <div className="progresstext"><span>Python</span><span>Beginner</span></div>
                                </div>
                            </div>
                            <div className="progress">
                                <div role="progressbar" className="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                    <div className="progresstext"><span>Bootstrap</span><span>Intermediate</span></div>
                                </div>
                            </div>
                            <div className="progress">
                                <div role="progressbar" className="progressbar" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                    <div className="progresstext"><span>ReactJS</span><span>Intermediate</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Resume;