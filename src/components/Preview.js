import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './shared/Wrapper.sc';
import Tab from './Tab';
import EditButton from './shared/TransparentButton.sc';
import { EditIcon } from './shared/Icons.sc';

const propTypes = {
  html: PropTypes.string.isRequired,
  isPreviewWindowOpen: PropTypes.bool.isRequired,
  setPreviewWindowOpen: PropTypes.func.isRequired,
  setEditorWindowOpen: PropTypes.func.isRequired,
};

const Preview = ({
  html,
  isPreviewWindowOpen,
  setPreviewWindowOpen,
  setEditorWindowOpen,
}) => {
  const tabCloseHandler = () => {
    setPreviewWindowOpen(false);
  };
  const createMarkup = () => {
    return { __html: html };
  };
  return (
    <Wrapper isWindowOpen={isPreviewWindowOpen}>
      <Tab title="Preview" tabCloseHandler={tabCloseHandler}>
        <EditButton
          title="open editor"
          onClick={() => setEditorWindowOpen(true)}
        >
          <EditIcon />
        </EditButton>
      </Tab>
      <PreviewContainer dangerouslySetInnerHTML={createMarkup()} />
    </Wrapper>
  );
};

// Styles
const PreviewContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  max-height: calc(100% - 40px);
  overflow-y: auto;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  padding: 10px;
  font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  line-height: 1.4;
  word-spacing: 1px;
  @media (max-width: 700px) {
    height: calc(100% - 50px);
    max-height: calc(100% - 50px);
  }
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
  & code {
    color: ${(props) => props.theme.codeColor};
  }

  & pre code {
    color: inherit;
  }
  & blockquote {
    border-left: 4px solid ${(props) => props.theme.blockQuote.borderColor};
    padding: 1px 15px;
    color: ${(props) => props.theme.blockQuote.fg};
    background: ${(props) => props.theme.blockQuote.bg};
  }
  & img {
    max-width: 100%;
  }
  & a,
  & a:active,
  & a:link {
    color: ${(props) => props.theme.linkColor};
  }
  & table {
    width: 100%;
    overflow: auto;
    display: block;
    border-spacing: 0;
    border-collapse: collapse;
    & tr {
      border-top: 1px solid ${(props) => props.theme.table.borderColor};
      background-color: transparent;
    }
    & th {
      border: 1px solid ${(props) => props.theme.table.borderColor};
      padding: 6px 13px;
      font-weight: 700;
    }
    & td {
      border: 1px solid ${(props) => props.theme.table.borderColor};
      padding: 6px 13px;
    }
  }
`;

Preview.propTypes = propTypes;
export default Preview;
