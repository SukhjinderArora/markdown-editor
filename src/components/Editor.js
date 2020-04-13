import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './shared/Wrapper.sc';
import Tab from './Tab';
import PreviewButton from './shared/TransparentButton.sc';
import { PreviewIcon } from './shared/Icons.sc';

const propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

const Editor = ({ text, onTextChange }) => {
  const [closeWindow, setWindowClose] = useState(false);

  const tabCloseHandler = () => {
    setWindowClose(true);
  };

  return (
    <Wrapper closeWindow={closeWindow}>
      <Tab title="Editor" tabCloseHandler={tabCloseHandler}>
        <PreviewButton title="open preview">
          <PreviewIcon />
        </PreviewButton>
      </Tab>
      <TextEditor
        onChange={onTextChange}
        value={text}
        placeholder="Type here to start."
      />
    </Wrapper>
  );
};

// Styles
const TextEditor = styled.textarea`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: calc(100% - 40px);
  resize: none;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  border: 1px solid transparent;
  border-right: 1px solid ${(props) => props.theme.fg};
  font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  font-size: 16px;
  line-height: 1.4;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

Editor.propTypes = propTypes;
export default Editor;
