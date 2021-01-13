import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";
import { Modal } from "../../components/Modal";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRightsLink,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Polityka prywatności</FooterLinkTitle>
              <FooterLink to="/modal">Czytaj</FooterLink>
              {/*<FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms od Service</FooterLink>*/}
            </FooterLinkItems>
            {/*<FooterLinkItems>
                <FooterLinkTitle>Rody w Polsce</FooterLinkTitle>
                <FooterLink to="/">Info</FooterLink> 
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms od Service</FooterLink> 
               </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Video</FooterLinkTitle>
                <FooterLink to="/">Zakrzew</FooterLink> 
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms od Service</FooterLink> 
               </FooterLinkItems> */}
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink
                to="//www.facebook.com/adam.gierczak.334"
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </FooterLink>
              <FooterLink
                to="//twitter.com/AdamBabinicz"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </FooterLink>
              <FooterLink
                to="//www.google.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google
              </FooterLink>
              <FooterLink
                to="//github.com/AdamBabinicz"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome}>
              "jak nie zostałem Janem Matejką"
            </SocialLogo>
            <WebsiteRightsLink
              href="//a-g.netlify.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              ag 2020 - {new Date().getFullYear()}.
            </WebsiteRightsLink>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com/adam.gierczak.334"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com/AdamBabinicz"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.google.com/"
                target="_blank"
                aria-label="Google"
              >
                <FaGoogle />
              </SocialIconLink>
              <SocialIconLink
                href="//github.com/AdamBabinicz"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
