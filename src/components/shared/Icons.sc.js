import styled from 'styled-components';

import { ReactComponent as SettingsIconSVG } from '../../assets/images/svg/settings-icon.svg';
import { ReactComponent as TabCloseIconSVG } from '../../assets/images/svg/tab-close-icon.svg';
import { ReactComponent as EditIconSVG } from '../../assets/images/svg/edit-icon.svg';
import { ReactComponent as PreviewIconSVG } from '../../assets/images/svg/preview-icon.svg';

export const SettingsIcon = styled(SettingsIconSVG)`
  stroke: #ffffff;
  width: 20px;
`;

export const TabCloseIcon = styled(TabCloseIconSVG)`
  width: 20px;
  stroke: ${(props) => props.theme.fg};
  & polygon {
    fill: ${(props) => props.theme.fg};
  }
`;

export const EditIcon = styled(EditIconSVG)`
  width: 18px;
  stroke: ${(props) => props.theme.fg};
`;

export const PreviewIcon = styled(PreviewIconSVG)`
  width: 18px;
  stroke: ${(props) => props.theme.fg};
`;
