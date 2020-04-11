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
  font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  line-height: 1.4;
  word-spacing: 1px;
  & > *:first-child {
    margin-top: 0;
  }
  & pre {
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
  & code {
    font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
  }
  & p > code {
    color: #b5b226;
  }
  & blockquote {
    border-left: 4px solid #195788;
    padding: 1px 15px;
    color: #bfc7d5;
    background: #323545d9;
  }
  & img {
    max-width: 100%;
  }
  & table {
    width: 100%;
    overflow: auto;
    display: block;
    border-spacing: 0;
    border-collapse: collapse;
    & tr {
      border-top: 1px solid #abb2bf;
      background-color: transparent;
    }
    & th {
      border: 1px solid #abb2bf;
      padding: 6px 13px;
      font-weight: 700;
    }
    & td {
      border: 1px solid #abb2bf;
      padding: 6px 13px;
    }
  }
`;
