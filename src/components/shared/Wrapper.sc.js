import styled from 'styled-components';

const Wrapper = styled.section`
  width: 50%;
  height: 100%;
  flex-grow: 1;
  display: ${(props) => (props.isWindowOpen ? 'block' : 'none')};
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default Wrapper;
