import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TabCloseButton from './shared/TransparentButton.sc';
import { TabCloseIcon } from './shared/Icons.sc';

const propTypes = {
  title: PropTypes.string.isRequired,
  tabCloseHandler: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

const Tab = ({ title, tabCloseHandler, children }) => {
  return (
    <Wrapper>
      <StyledTab>
        <TabTitle>{title}</TabTitle>
        <TabCloseButton title="close tab" onClick={tabCloseHandler}>
          <TabCloseIcon />
        </TabCloseButton>
      </StyledTab>
      {children}
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  background: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#282c34f0' : '#eee'};
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledTab = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#282c34' : '#fff'};
`;

const TabTitle = styled.h1`
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  color: ${(props) => props.theme.fg};
`;

Tab.propTypes = propTypes;
export default Tab;
