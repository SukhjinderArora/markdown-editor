import styled from 'styled-components';

const TransparentButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  line-height: 0;
  margin-right: 5px;
  &:focus {
    outline: 1px solid ${(props) => props.theme.fg};
  }
`;

export default TransparentButton;
