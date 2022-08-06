import React from "react";
import logo from "../../images/OMHAU_LOGO.png";
import { FaFacebook, FaYoutube } from "react-icons/fa";
// import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
  DevelopedBy,
} from "../styles/Footer.Elements";

const Footer = () => {
  return (
    <FooterContainer>
      {/* Add Email Subscription here in future if required */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/about" target="_blank">
              About
            </FooterLink>
            <FooterLink to="/" target="_blank">
              Contact
            </FooterLink>
            <FooterLink to="/privacy" target="_blank">
              Privacy Policy
            </FooterLink>
            <FooterLink to="/terms" target="_blank">
              Terms of Service
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Resources</FooterLinkTitle>
            <FooterLink to="/audio" target="_blank">
              Audio
            </FooterLink>
            <FooterLink to="/video" target="_blank">
              Video
            </FooterLink>
            <FooterLink to="/" target="_blank">
              Books
            </FooterLink>
            <FooterLink to="/" target="_blank">
              Support Groups
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Links</FooterLinkTitle>
            <FooterLink
              to="//www.facebook.com/groups/ourmentalhealthandus/"
              target="_blank"
            >
              Facebook
            </FooterLink>
            <FooterLink to="//www.youtube.co.uk" target="_blank">
              YouTube
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon src={logo} alt="logo" />
          </SocialLogo>
          <WebsiteRights>&copy; OMHAU 2020-2022</WebsiteRights>
          <DevelopedBy
            href="https://www.technatro.uk"
            target="_blank"
            aria-label="Developed by Technatro"
          >
            Developed by Technatro
          </DevelopedBy>
          <SocialIcons>
            {/* <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIconLink> */}
            {/* <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialIconLink> */}
            {/* <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'><FaLinkedin /></SocialIconLink> */}
            <SocialIconLink
              href="https://www.facebook.com/groups/ourmentalhealthandus/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.co.uk"
              target="_blank"
              aria-label="YouTube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
