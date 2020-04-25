import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import themeObj from './utils/themes';

import Markdown from './components/Markdown';
import BottomBar from './components/BottomBar';
import Settings from './components/Settings';

function App() {
  const [theme, setTheme] = useState(themeObj.dark);
  const [settingsVisible, setSettingsVisible] = useState(false);

  useEffect(() => {
    document.querySelectorAll('link[title=theme]').forEach((link) => {
      // eslint-disable-next-line no-param-reassign
      link.disabled = link.id !== theme.themeName;
    });
  }, [theme]);

  const selectThemeBtnHandler = (newTheme) => {
    if (newTheme === 'dark') {
      setTheme(themeObj.dark);
    } else {
      setTheme(themeObj.light);
    }
    setSettingsVisible(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Markdown />
        <BottomBar setSettingsVisible={setSettingsVisible} />
        <Settings
          themeBtnHandler={selectThemeBtnHandler}
          settingsVisible={settingsVisible}
        />
      </Container>
    </ThemeProvider>
  );
}

// Styles
const Container = styled.div`
  position: relative;
  height: 100vh;
  max-height: 100vh;
`;

export default App;
