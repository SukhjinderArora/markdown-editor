import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import marked from './utils/marked';

import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [inputText, setInputText] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const htmlStr = marked(inputText);
    setHtml(htmlStr);
  }, [inputText]);

  const onTextChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Markdown>
      <Editor text={inputText} onTextChange={onTextChangeHandler} />
      <Preview html={html} />
    </Markdown>
  );
}

// Styles
const Markdown = styled.main`
  display: flex;
  max-height: 100vh;
  height: 100vh;
`;

export default App;
