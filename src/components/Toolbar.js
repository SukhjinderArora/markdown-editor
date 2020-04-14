import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  toolbarHandler: PropTypes.func.isRequired,
  isEditorOpen: PropTypes.bool.isRequired,
  isPreviewOpen: PropTypes.bool.isRequired,
};

const Toolbar = ({ toolbarHandler, isEditorOpen, isPreviewOpen }) => {
  return (
    <Wrapper>
      <Tab onClick={() => toolbarHandler('editor')} activeTab={isEditorOpen}>
        <TabTitle>Editor</TabTitle>
      </Tab>
      <Tab onClick={() => toolbarHandler('preview')} activeTab={isPreviewOpen}>
        <TabTitle>Preview</TabTitle>
      </Tab>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 50px;
  cursor: pointer;
  @media (min-width: 701px) {
    display: none;
  }
`;

const Tab = styled.div`
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  flex-grow: 1;
  border-bottom: 1px solid transparent;
  border-bottom-color: ${(props) =>
    props.activeTab ? props.theme.fg : 'transparent'};
`;

const TabTitle = styled.h1`
  font-size: 16px;
  text-align: center;
`;

Toolbar.propTypes = propTypes;
export default Toolbar;
