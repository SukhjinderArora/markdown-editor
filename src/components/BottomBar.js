import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SettingsButton from './shared/TransparentButton.sc';
import { SettingsIcon } from './shared/Icons.sc';

const propTypes = {
  setSettingsVisible: PropTypes.func.isRequired,
};

const BottomBar = ({ setSettingsVisible }) => {
  return (
    <Footer>
      <SettingsButton onClick={() => setSettingsVisible(true)} title="settings">
        <SettingsIcon />
      </SettingsButton>
    </Footer>
  );
};

// Styles
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 30px;
  background: #204c86;
`;

BottomBar.propTypes = propTypes;
export default BottomBar;
