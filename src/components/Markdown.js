import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import marked from '../utils/marked';

import Editor from './Editor';
import Preview from './Preview';
import Toolbar from './Toolbar';

const Markdown = () => {
  const [inputText, setInputText] = useState('');
  const [html, setHtml] = useState('');

  const [isEditorOpen, setEditorOpen] = useState(true);
  const [isPreviewOpen, setPreviewOpen] = useState(() => {
    if (window.innerWidth <= 700) return false;
    return true;
  });

  useEffect(() => {
    const htmlStr = marked(inputText);
    setHtml(htmlStr);
  }, [inputText]);

  const onTextChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const toolbarHandler = (activeTab) => {
    if (activeTab === 'editor') {
      setEditorOpen(true);
      setPreviewOpen(false);
    } else {
      setEditorOpen(false);
      setPreviewOpen(true);
    }
  };

  return (
    <Wrapper>
      <Toolbar
        toolbarHandler={toolbarHandler}
        isEditorOpen={isEditorOpen}
        isPreviewOpen={isPreviewOpen}
      />
      <Editor
        text={inputText}
        onTextChange={onTextChangeHandler}
        isEditorWindowOpen={isEditorOpen}
        setEditorWindowOpen={setEditorOpen}
        isPreviewWindowOpen={isPreviewOpen}
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
  height: calc(100% - 30px);
  @media (max-width: 700px) {
    display: block;
  }
`;

export default Markdown;
