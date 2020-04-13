import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  themeBtnHandler: PropTypes.func.isRequired,
  settingsVisible: PropTypes.bool.isRequired,
};

const Settings = ({ themeBtnHandler, settingsVisible }) => {
  return (
    <SettingsWrapper settingsVisible={settingsVisible} tabIndex="0">
      <ListWrapper>
        <ListHeading>Theme</ListHeading>
        <List>
          <ListItem>
            <ListButton onClick={() => themeBtnHandler('dark')}>
              Dark
            </ListButton>
          </ListItem>
          <ListItem>
            <ListButton onClick={() => themeBtnHandler('light')}>
              Light
            </ListButton>
          </ListItem>
        </List>
      </ListWrapper>
    </SettingsWrapper>
  );
};

// Styles
const SettingsWrapper = styled.div`
  position: absolute;
  width: 200px;
  right: 20px;
  bottom: 40px;
  background: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#282c34' : '#eee'};
  color: ${(props) =>
    props.theme.themeName === 'dark-theme' ? '#fff' : '#000'};
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.settingsVisible ? 'block' : 'none')};
  &:focus {
    outline: 1px solid;
    outline-color: ${(props) =>
      props.theme.themeName === 'dark-theme' ? '#fff' : '#000'};
  }
`;

const ListWrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

const ListHeading = styled.h1`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li``;

const ListButton = styled.button`
  display: block;
  width: 100%;
  background: transparent;
  border: none;
  margin-bottom: 10px;
  padding: 5px 0;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: #204c86;
  }
  &:focus {
    outline: 1px solid;
    outline-color: ${(props) =>
      props.theme.themeName === 'dark-theme' ? '#fff' : '#000'};
  }
`;

Settings.propTypes = propTypes;
export default Settings;
