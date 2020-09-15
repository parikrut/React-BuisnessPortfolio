import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
          status: ""
        };
      }

  render() {
    const { status } = this.state;
    return (
        <div>

        <section className="page-banner-area page-contact">
        <div className="overlay"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-12 col-12 text-center">
                    <div className="page-banner-content">
                        <h1 className="display-4 font-weight-bold">Got a question?</h1>
                        <p>We'd love to talk about how we can help you.</p>
                    </div>
                </div>
            </div> 
        </div> 
    </section>

    <section className="section" id="contact">
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-8 col-lg-6">
                    <h5>Leave a Message</h5>
                    <h2 className="section-title mb-2 ">
                        Tell us about <span className="font-weight-normal">yourself</span>
                    </h2>

                    <p className="mb-5 ">
                        Whether you have questions or you would just like to say hello, contact us.
                    </p>

                </div>
            </div> 

            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-success contact__msg" style={{display: "none"}} role="alert">
                                Your message was sent successfully.
                            </div>
                        </div>
                    </div>
                
                    <form className="contact_form" onSubmit={this.submitForm} action="https://formspree.io/mleorgll" method="POST">
                        <div className="row">
                            <div className="col-sm-6 mb-6">
                                <div className="form-group">
                                    <label className="h6 small d-block text-uppercase">
                                        Your name
                                        <span className="text-danger">*</span>
                                    </label>

                                    <div className="input-group">
                                        <input className="form-control" name="name" id="name" required="" placeholder="John Doe" type="text"/>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-sm-6 mb-6">
                                <div className="form-group">
                                    <label className="h6 small d-block text-uppercase">
                                        Your email address
                                        <span className="text-danger">*</span>
                                    </label>

                                    <div className="input-group ">
                                        <input className="form-control" name="email" id="email" required="" placeholder="john@gmail.com" type="email"/>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100"></div>

                            <div className="col-sm-6 mb-6">
                                <div className="form-group">
                                    <label className="h6 small d-block text-uppercase">
                                        Product Request
                                        <span className="text-danger">*</span>
                                    </label>

                                    <div className="input-group">
                                        <input className="form-control" name="subject" id="subject" required="" placeholder="Plastic Pipe" type="text"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-6">
                                <div className="form-group">
                                    <label className="h6 small d-block text-uppercase">
                                        Your Phone Number
                                        <span className="text-danger">*</span>
                                    </label>

                                    <div className="input-group ">
                                        <input className="form-control" id="phone" name="phone" required="" placeholder="1-800-643-4500" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-5">
                            <label className="h6 small d-block text-uppercase">
                                How can we help you?
                                <span className="text-danger">*</span>
                            </label>

                            <div className="input-group">
                                <textarea className="form-control" rows="4" name="message" id="message" required="" placeholder="Hi there, I would like to ..."></textarea>
                            </div>
                        </div>

                        <div className="mx-auto p-3">
                        {status === "SUCCESS" ? <p className="small pt-3"> Thanks!</p> : <button className="btn btn-primary btn-circled" >Send Message</button>}
                        {status === "ERROR" && <p className="small pt-3">Ooops! There was an error.</p>}
                           
                        </div>
                    </form>
                </div>

                        <div className="col-lg-6 col-md-6">
                            <section id="contact-info">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col">
                                            <div className="contact-info-block text-center">
                                            <a href="https://www.google.ca/maps/place/48+Kingknoll+Dr,+Brampton,+ON+L6Y+3G6/@43.6524227,-79.7451813,17z/data=!3m1!4b1!4m5!3m4!1s0x882b155e4b87744f:0x60e236559d8b40b4!8m2!3d43.6524188!4d-79.7429926">
                                                <i className="ti-mobile"></i>
                                                <h4>Address</h4>
                                                <p className="lead">153 Williamson Plaza, 09514</p></a>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row justify-content-center">
                                        <div className="col">
                                            <div className="contact-info-block text-center">
                                            <a href="mailto:4krutikparikh@gmail.com">
                                                <i className="ti-envelope"></i>
                                                <h4>Email</h4>
                                                <p className="lead">supportdb@dthememascot.com</p></a>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row justify-content-center">
                                        <div className="col">
                                            <div className="contact-info-block text-center">
                                            <a href="tel:789-789-7897">

                                                <i className="ti-mobile"></i>
                                                <h4>Phone Number</h4>
                                                <p className="lead">+23-68017684</p></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
            </div>
        </div>
    </section>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;