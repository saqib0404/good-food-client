import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="py-2 rounded my-5">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ "backgroundColor": "#3e4551","borderRadius":"10px" }}
                >
                    <div className=" p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-lg-9 col-md-8 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">GOOD FOOD</h5>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Molestiae modi cum ipsam ad, illo possimus laborum ut
                                        reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                                        Reiciendis assumenda iusto sapiente inventore animi?
                                    </p>
                                </div>

                                <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
                                    <h5 className="text-uppercase">Links</h5>

                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" className="text-white">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" className="text-white">Link 3</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="mb-4" />

                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <button type="button" className="btn btn-outline-light btn-rounded">
                                    Sign up!
                                </button>
                            </p>
                        </section>

                        <hr className="mb-4" />

                        <section className="mb-4 text-center">
                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaFacebookF /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaTwitter /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaGoogle /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaInstagram /></a>

                            <a
                                className="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaLinkedin /></a>

                        </section>
                    </div>

                    <div
                        className="text-center p-3"
                        style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2024 Copyright: &nbsp;
                        <span className="text-white">Good Food</span>
                    </div>
                </footer >
            </div >
        </>
    )
}

export default Footer