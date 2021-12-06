import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'robotomono regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
  .projectButton {
    display: inline-block;
    font-size: 1.8rem;
    text-decoration: transparent;
    margin: 2rem 0;
    color: black;
    background-color: var(--gray-1);
    text-align-last: center;
    border-radius: 8px;
    padding: 0.4rem 1.3rem;
    font-family: 'Montserrat bold';
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'An application to track your all data from one place.',
  link,
}) {
  return (
    <ProjectItemStyle>
      <Link to="/webproject" className="projectItem__img">
        <img src={img} alt="projectImg" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        {link && (
          <a
            className="projectButton"
            target="_blank"
            href={link}
            rel="noreferrer"
          >
            Open Project
          </a>
        )}
      </div>
    </ProjectItemStyle>
  );
}
