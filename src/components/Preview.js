import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  html: PropTypes.string.isRequired,
};

const Preview = ({ html }) => {
  const createMarkup = () => {
    return { __html: html };
  };
  return (
    <Wrapper>
      <PreviewContainer dangerouslySetInnerHTML={createMarkup()} />
    </Wrapper>
  );
};

Preview.propTypes = propTypes;
export default Preview;

// Styles
const Wrapper = styled.section`
  width: 50%;
  height: 100%;
`;

const PreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  background: #282c34;
  color: #abb2bf;
  padding: 10px;
`;
