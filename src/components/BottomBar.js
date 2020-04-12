import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as SettingsIconSVG } from '../assets/images/svg/settings-icon.svg';

const propTypes = {
  setSettingsVisible: PropTypes.func.isRequired,
};

const BottomBar = ({ setSettingsVisible }) => {
  return (
    <Footer>
      <SettingsButton onClick={() => setSettingsVisible(true)}>
        <SettingsIcon />
      </SettingsButton>
    </Footer>
  );
};

// Styles
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #204c86;
  height: 20px;
  padding: 15px 0;
`;

const SettingsIcon = styled(SettingsIconSVG)`
  stroke: #ffffff;
  width: 20px;
`;

const SettingsButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  &:focus {
    outline: 1px solid #ffffff;
  }
`;

BottomBar.propTypes = propTypes;
export default BottomBar;
