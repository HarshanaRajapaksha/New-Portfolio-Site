import React from 'react';
import { FaFilm } from 'react-icons/fa';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.4rem;
    font-family: 'Montserrat semibold';
    margin-top: 0.8rem;
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <FaFilm />,
  title = 'Video Editing',
  desc = 'We also make Logo Intro videos, products intro videos, Event Intro videos & We also make wedding album slideshows etc.',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon}</div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
