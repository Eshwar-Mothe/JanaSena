import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { RiAdminFill, RiMailFill } from "react-icons/ri";
import { PiGooglePhotosLogo, PiPhoneCall } from "react-icons/pi";
import { LiaVideoSolid } from "react-icons/lia"
import { FaAddressCard } from "react-icons/fa6";
import { MdOutlinePostAdd } from "react-icons/md";



const Footer = () => {
    return (
        <Box>
            <h3
                style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                JanaSena-active Links
            </h3>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Galleries</Heading>
                        <FooterLink href="">
                            <PiGooglePhotosLogo
                                style={{
                                    color: "#f00"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >Photos</span>

                        </FooterLink>
                        <FooterLink href="#">
                            <LiaVideoSolid
                                style={{
                                    color: "#f00"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >Videos</span>

                        </FooterLink>

                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">
                            <MdOutlinePostAdd
                                style={{
                                    color: "#f00"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >Post Issue</span>

                        </FooterLink>
                        <FooterLink href="#">
                            Lorem Ipsum
                        </FooterLink>
                        <FooterLink href="#">
                            <FaAddressCard
                                style={{
                                    color: "#f00"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >Reach Us</span>

                        </FooterLink>
                        {/* <FooterLink href="#">
                            Teaching
                        </FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            <RiAdminFill
                                style={{
                                    color: "#f00"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >Contact Admin</span>

                        </FooterLink>
                        <FooterLink href="#">
                            <RiMailFill
                                style={{
                                    color: "#f00"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >Mail Us</span>

                        </FooterLink>
                        <FooterLink href="#">
                            <PiPhoneCall
                                style={{
                                    color: "#f00"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >Call Us</span>

                        </FooterLink>
                        {/* <FooterLink href="#">
                            Locate us
                        </FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <BiLogoFacebook
                                style={{
                                    color: "#ff0000"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >
                                Facebook
                            </span>
                        </FooterLink>

                        <FooterLink href="#">
                            <BsTwitterX
                                style={{
                                    color: "#ff0000"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >
                                Twitter
                            </span>

                        </FooterLink>
                        <FooterLink href="#">
                            <AiFillYoutube
                                style={{
                                    color: "#ff0000"
                                }}
                            />
                            <span
                                style={{
                                    marginLeft: "10px",
                                }}
                            >
                                Youtube
                            </span>

                        </FooterLink>
                    </Column>
                </Row>
                <p style={{ textAlign: 'center', fontSize: '25px', wordSpacing: '5px' }}>All rights Reserved for &copy;<span style={{ color: "red", fontWeight: "bold" }} >JanaSena-TS</span></p>
            </FooterContainer>
        </Box>
    );
};
export default Footer;