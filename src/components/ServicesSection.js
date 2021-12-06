import React from 'react';
import styled from 'styled-components';
import { FaFilm, FaPenNib } from 'react-icons/fa';
import { MdPhotoSizeSelectLarge } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
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
        <SectionTitle heading="Services" subheading="What I will do for you" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FaFilm />}
            title="Video Editing"
            desc="Will make Educational Videos, Cover Films, Logo Openers, Products intros, Event Intros & We also make wedding album slideshows etc."
          />
          <ServicesSectionItem
            icon={<MdPhotoSizeSelectLarge />}
            title="Print Design"
            desc="Flyers, leaflets, exhibition graphics, brochures, product catalogues, reports and packaging."
          />
          <ServicesSectionItem
            icon={<FaPenNib />}
            title="Logo Design"
            desc="Will design & create Your own Logo for your Facebook page, Company, Business, Brand Name, YouTube Channel or your Name."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
