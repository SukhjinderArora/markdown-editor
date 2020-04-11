import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

const Editor = ({ text, onTextChange }) => {
  return (
    <Wrapper>
      <TextEditor onChange={onTextChange} value={text} />
    </Wrapper>
  );
};

Editor.propTypes = propTypes;

export default Editor;

// Styles
const Wrapper = styled.section`
  width: 50%;
  height: 100%;
`;

const TextEditor = styled.textarea`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  resize: none;
  background: #282c34;
  color: #abb2bf;
  border: none;
  border-right: 1px solid #abb2bf;
  font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  font-size: 16px;
  line-height: 1.4;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;
