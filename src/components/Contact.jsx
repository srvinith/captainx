import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ContactForm from './Forms/ContactForm'
import langData from '../locales/langData.json'
import { MdOutlineLocationOn } from 'react-icons/md'

const Contact = ({language}) => {
    const contact =langData[language].contact;
    return (
        <section className='contact-sec'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="sec-title">{contact.contacttitle}</h2>
                        <p className="contact-p">{contact.contactdesc}</p>

                        <div className="row my-2">
                            <div className="col">
                                <Link to="mailto:info@captainx.ai" className='text-decoration-none'>
                                    <div className="card-contact">
                                        <FaRegEnvelope />
                                        <h6>{contact.email}</h6>
                                        <p>info@captainx.ai</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="tel:+966539872389" className='text-decoration-none'>
                                    <div className="card-contact">
                                        <FiPhone />
                                        <h6>{contact.phone}</h6>
                                        <p>+966 53 987 2389</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-12">
                                <Link to="https://maps.app.goo.gl/cfYWixZt6QRjMKYk7" className='text-decoration-none'>
                                    <div className="card-contact">
                                        <MdOutlineLocationOn />
                                        <h6>{contact.loaction}</h6>
                                        <p>{contact.address}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="follow-part  pt-3">
                            <h6>{contact.follow}</h6>
                            <div className="icons">
                                <Link className='text-decoration-none'>
                                    <FaFacebookF />
                                </Link>
                                <Link className='text-decoration-none'>
                                    <FaInstagram />
                                </Link>
                                <Link className='text-decoration-none'>
                                    <FaLinkedinIn />
                                </Link>
                                <Link className='text-decoration-none'>
                                    <FaXTwitter />
                                </Link>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact