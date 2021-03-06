import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Harshana Rajapaksha</h1>
          <PText>
            I am a freelance Creative designer and developer. I love to design
            and always try to show unique views to the audience through my
            design.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+94772617756',
                path: 'tel:+94772617756',
              },
              {
                title: 'har.rajapaksha@gmail.com',
                path: 'mailto:har.rajapaksha@gmail.com',
              },
              {
                title: 'Wetakeyawa, Gonawila.',
                path: 'https://goo.gl/maps/gcuZaoPFqTXQM8wg6',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/R.HarshanaOnline',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/rajapaksha_h_/',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/HarshanaOnline',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/harshana-rajapaksha/',
              },
              {
                title: 'YouTube',
                path: 'https://www.youtube.com/c/HaasProductions',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>??2021 - Harshana Rajapaksha | Designed By HaRuu</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
