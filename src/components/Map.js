import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/mapi.png';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 12%;
    bottom: 23%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 2rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Makandura, Sri Lanka</PText>
          <a
            className="map__card__link"
            href="https://goo.gl/maps/gcuZaoPFqTXQM8wg6"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
