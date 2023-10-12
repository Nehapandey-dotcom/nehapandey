function Contact(){
    return(
        <>
        <div className="box_content">
            <div className="innerbox">
                <h1 className="title">Contact</h1>
                <div className="row experience">
                    <div className="col">
                        <div className="work_status"><span>Open for opportunities: <strong>Yes</strong></span></div>
                        <h3 className="resume_title">
                        <i class="fi fi-rs-envelope-open"></i>Contact Form</h3>
                        <div className="contact_section">
                            <form className="row form">
                                <div className="input_field col-12 col-md-6">
                                    <input type="text" placeholder="Full Name"/>
                                </div>
                                <div className="input_field col-12 col-md-6">
                                    <input type="email" placeholder="Email Address"/>
                                </div>
                                <div className="input_field col-12 col-md-12">
                                    <textarea placeholder="Message" rows="4"></textarea> 
                                </div>
                                <div className="input_field col-12 col-md-12">
                                    <button type="submit" className="submit_btn"><i class="fi fi-rs-paper-plane"></i>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;