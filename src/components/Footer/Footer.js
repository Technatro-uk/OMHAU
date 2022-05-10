import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../images/OMHAU_LOGO.png';
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
  SocialIcon } from './Footer.Elements';

const Footer = () => {
  return (
    <FooterContainer>
        {/* Add Email Subscription here in future if required */}
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='sign-up'>About</FooterLink>
              <FooterLink to='/'>Mental Health</FooterLink>
              <FooterLink to='/'>Privacy Policy</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='sign-up'>Messenger</FooterLink>
              <FooterLink to='/'>Email</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>    
            <FooterLinksWrapper>    
            <FooterLinksItems>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink to='sign-up'>Videos</FooterLink>
              <FooterLink to='/'>Audio</FooterLink>
              <FooterLink to='/'>Podcasts</FooterLink>
              <FooterLink to='/'>Workbooks</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>YouTube</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <SocialIcon src={logo} alt='logo' />
              Our Mental Health & Us
            </SocialLogo>
            <WebsiteRights>&copy; OMHAU 2020-2022</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://facebook.com' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialIconLink> */}
              <SocialIconLink href='https://youtube.com' target='_blank' aria-label='YouTube' rel='noopener noreferrer'><FaYoutube /></SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'><FaLinkedin /></SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer;