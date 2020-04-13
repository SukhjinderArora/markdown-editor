import styled from 'styled-components';

const Wrapper = styled.section`
  width: 50%;
  height: 100%;
  flex-grow: 1;
  display: ${(props) => (props.closeWindow ? 'none' : 'block')};
`;

export default Wrapper;
