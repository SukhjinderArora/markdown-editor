import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import marked from '../utils/marked';

import Editor from './Editor';
import Preview from './Preview';

const Markdown = () => {
  const [inputText, setInputText] = useState('');
  const [html, setHtml] = useState('');

  const [isEditorOpen, setEditorOpen] = useState(true);
  const [isPreviewOpen, setPreviewOpen] = useState(true);

  useEffect(() => {
    const htmlStr = marked(inputText);
    setHtml(htmlStr);
  }, [inputText]);

  const onTextChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Wrapper>
      <Editor
        text={inputText}
        onTextChange={onTextChangeHandler}
        isEditorWindowOpen={isEditorOpen}
        setEditorWindowOpen={setEditorOpen}
        setPreviewWindowOpen={setPreviewOpen}
      />
      <Preview
        html={html}
        isPreviewWindowOpen={isPreviewOpen}
        setPreviewWindowOpen={setPreviewOpen}
        setEditorWindowOpen={setEditorOpen}
      />
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.main`
  display: flex;
  max-height: 100vh;
  height: 100vh;
  padding-bottom: 20px;
`;

export default Markdown;
