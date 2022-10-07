import React from 'react';
import styled from 'styled-components';
import HarshanaCV from '../Docs/HarshanaCV.pdf';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-imgi2.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 1em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: var(--dark-bg);
    font-family: 'Montserrat SemiBold';
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__Stilldevelop {
      font-size: 5rem;
      color: red;
      padding: 2rem 0;
      text-transform: uppercase;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Harshana Rajapaksha</span>
            </p>
            <h2 className="about__heading">A freelance Creative Designer</h2>
            <div className="about__info">
              <PText>
                I am from Makandura, Sri Lanka. A place of beauty and nature.
                Since my childhood, I love to design and Editing. I always try
                to design stuff with my unique point of view. I also love to
                create things that can be usefull to others.
                <br />
                <br />
                I am mostly interested in Graphic Designing, UI/UX Designing &
                Video Editing. I am always energetic and eager to try new things
                related to this field. Over the years I have taken my hobby to a
                professional level.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>

            {/* <Button btnText="Download CV" btnLink={HarshanaCV} download /> */}

            <a
              href={HarshanaCV}
              download="Harshana Rajapaksha - CV"
              className="button"
            >
              Download CV
              <i className="fa fa-download" />
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="aboutimg" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Sandalanka National School, Sri Lanka']}
            />
            <AboutInfoItem
              title="University"
              items={['Sri Lanka Institute of Information Technology (SLIIT)']}
            />
            <AboutInfoItem
              title="Specialization"
              items={[
                'B.Sc Hons Information Technology Specializing in Interactive Media',
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="Design"
              items={['Photoshop', 'Illustrator', 'Adobe XD', 'Figma']}
            />
            <AboutInfoItem
              title="Editing"
              items={['Premiere Pro', 'After Effects', 'Resolve', 'Blender']}
            />
            <AboutInfoItem
              title="FrontEnd Develop"
              items={['HTML', 'CSS', 'JavaScripts', 'REACT']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
