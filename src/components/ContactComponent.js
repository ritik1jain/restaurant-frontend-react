import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return(
        <div className="container">
             <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                        
                    </Breadcrumb>
                    <div className="col-12">
                            <h3>Contact Us</h3>
                            <hr />
                        </div>
                </div>
               
            <div className="row row-content">
                
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5 className="mt-2">Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    <div>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234706.1362414357!2d78.52656206955501!3d23.196341148571847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397f1d6538536813%3A0xe64e6df0008c4d4a!2sMadhya%20Pradesh%20464774!5e0!3m2!1sen!2sin!4v1591092367333!5m2!1sen!2sin" width="350" height="200" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;