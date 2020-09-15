import React, { Component } from 'react';

class Enquiry extends Component {
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
            <section className="banner-area py-5" id="banner">
       <div className="overlay"></div>
        <div className="container">
            <div className="row  align-items-center justify-content-center">
                <div className="col-md-12 col-lg-8">
                   <div className="banner-content text-center text-lg-left">
                        <h1 className="display-4 mb-4 ">
                            Industry <br/>Leading Managed Services Solutions
                        </h1>

                        <p className="lead mb-5">
                            Pindom is set of landing and support pages aimed at helping companies promote new products and business launches.
                        </p>

                        <p className="mb-0">
                            <a href="#" target="_blank" className="btn btn-primary btn-circled">
                                Purchase now
                            </a>
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-4 ">
                    <div className="banner-contact-form bg-white">
                        <form onSubmit={this.submitForm} action="https://formspree.io/mleorgll" method="POST" >
                            <div className="form-group">
                                <input type="text" name="name" id="name" className="form-control" placeholder="your Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="email" id="email" className="form-control" placeholder="your Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="your Subject"/>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" cols="30" rows="4" className="form-control" placeholder="Your message"></textarea>
                            </div>
                            {status === "SUCCESS" ? <p className="small pt-3"> Thanks!</p> : <button className="btn btn-dark btn-block btn-circled" >Submit a query</button>}
                        {status === "ERROR" && <p className="small pt-3">Ooops! There was an error.</p>}
                        </form>
                    </div>
                </div>
            </div> 
        </div> 
    </section>

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

export default Enquiry;