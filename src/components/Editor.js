import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tab from './Tab';

const propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

const Editor = ({ text, onTextChange }) => {
  return (
    <Wrapper>
      <Tab title="Editor" />
      <TextEditor
        onChange={onTextChange}
        value={text}
        placeholder="Type here to start."
      />
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.section`
  width: 50%;
  height: 100%;
`;

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
`;

Editor.propTypes = propTypes;
export default Editor;
