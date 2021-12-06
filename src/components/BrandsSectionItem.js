import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import logo1 from '../assets/images/logo1.png';

const ItemStyles = styled.div`
  text-align: center;
  .brandsItem__icon {
    svg {
      width: 3rem;
    }
  }
  .brandsItem__title {
    font-size: 2.4rem;
    font-family: 'Montserrat semibold';
    margin-top: 1rem;
  }
  .para {
    margin-top: 2rem;
  }
  .visitButton {
    display: inline-block;
    font-size: 1.8rem;
    text-decoration: transparent;
    margin: 2rem 0;
    color: white;
    background-color: #0090ff;
    text-align-last: center;
    border-radius: 8px;
    padding: 0.4rem 1.3rem;
    font-family: 'Montserrat bold';
    .fab.fa-facebook-f {
      color: white;
      margin-right: 1.2rem;
    }
  }
`;

export default function ServicesSectionItem({
  logo = logo1,
  title = 'Logo Name',
  desc = 'We also make Logo Intro videos, products intro videos, Event Intro videos & We also make wedding album slideshows etc.',
  link,
}) {
  return (
    <ItemStyles>
      <div className="brandsItem__icon">
        <img src={logo} alt="projectImg" />
      </div>
      <div className="brandsItem__title">{title}</div>
      <PText>{desc}</PText>
      {link && (
        <a className="visitButton" target="_blank" href={link} rel="noreferrer">
          <i className="fab fa-facebook-f"> </i>Visit Us
        </a>
      )}
    </ItemStyles>
  );
}
