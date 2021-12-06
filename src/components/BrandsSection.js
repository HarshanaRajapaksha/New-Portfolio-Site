import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import BrandsSectionItem from './BrandsSectionItem';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';

const ServicesItemStyles = styled.div`
  padding: 7rem 0;
  .brands__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .brands__allItems {
      flex-direction: column;
      max-width: 360px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="Brands"
          subheading="The brands I currently run"
        />

        <div className="brands__allItems">
          <BrandsSectionItem
            logo={logo1}
            title="HaRuu"
            desc="Artwork designing, video works and animations are mostly done here. In addition, we hope to do UI Designing, Frontend Development and Mobile App Development in the future."
            link="https://www.facebook.com/HaruuProductions"
          />
          <BrandsSectionItem
            logo={logo2}
            title="Sihakuru"
            desc="Logo designing is mainly done here. We always strive to create a unique design for the client's brand. So far 20+ logos have been completed."
            link="https://www.facebook.com/Sihakuru"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
