import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div class="py-2 rounded my-5">
                <footer
                    class="text-center text-lg-start text-white"
                    style={{ "backgroundColor": "#3e4551","borderRadius":"10px" }}
                >
                    <div class=" p-4 pb-0">
                        <section class="">
                            <div class="row">
                                <div class="col-lg-9 col-md-8 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">GOOD FOOD</h5>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Molestiae modi cum ipsam ad, illo possimus laborum ut
                                        reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                                        Reiciendis assumenda iusto sapiente inventore animi?
                                    </p>
                                </div>

                                <div class="col-lg-3 col-md-4 mb-4 mb-md-0">
                                    <h5 class="text-uppercase">Links</h5>

                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="#!" class="text-white">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!" class="text-white">Link 3</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr class="mb-4" />

                        <section class="">
                            <p class="d-flex justify-content-center align-items-center">
                                <span class="me-3">Register for free</span>
                                <button type="button" class="btn btn-outline-light btn-rounded">
                                    Sign up!
                                </button>
                            </p>
                        </section>

                        <hr class="mb-4" />

                        <section class="mb-4 text-center">
                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaFacebookF /></a>

                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaTwitter /></a>

                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaGoogle /></a>

                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaInstagram /></a>

                            <a
                                class="btn btn-outline-light btn-floating m-1"
                                href="#!"
                                role="button"
                            ><FaLinkedin /></a>

                        </section>
                    </div>

                    <div
                        class="text-center p-3"
                        style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2024 Copyright: &nbsp;
                        <span class="text-white">Good Food</span>
                    </div>
                </footer >
            </div >
        </>
    )
}

export default Footer