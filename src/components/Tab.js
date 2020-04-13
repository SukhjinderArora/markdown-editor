import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as TabCloseIconSVG } from '../assets/images/svg/tab-close-icon.svg';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Tab = ({ title }) => {
  return (
    <Wrapper>
      <StyledTab>
        <TabTitle>{title}</TabTitle>
        <TabCloseBtn title="close" tabIndex="0">
          <TabCloseIcon />
        </TabCloseBtn>
      </StyledTab>
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  background: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#282c34f0' : '#eee'};
  height: 40px;
`;

const StyledTab = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  background: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#282c34' : '#fff'};
`;

const TabTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
  color: #fff;
  color: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#fff' : '#000'};
`;

const TabCloseBtn = styled.button`
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  &:focus {
    border-color: ${(props) =>
      props.theme.themeName === 'dark-theme' ? '#fff' : '#000'};
  }
`;

const TabCloseIcon = styled(TabCloseIconSVG)`
  width: 20px;
  stroke: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#fff' : '#000'};
  & polygon {
    fill: ${(props) =>
      props.theme.themeName === 'dark-theme' ? '#fff' : '#000'};
  }
`;

Tab.propTypes = propTypes;
export default Tab;
