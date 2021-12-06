import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import WebProjectItem from '../components/WebProjectItem';
import WebProjectInfo from '../assets/data/webprojects';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }

  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(WebProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      WebProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(WebProjectInfo);
    }
  }
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle
          heading="Web Projects"
          subheading="some of my recent developping works"
        />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Web Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <WebProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
