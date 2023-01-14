import styled from 'styled-components';
import bgImg from '../../images/background.jpg';
import bgImg2 from '../../images/currency.jpg';

export const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #d2dcfa33;
  background-image: linear-gradient(
      to bottom,
      rgb(161, 233, 233),
      rgba(241, 233, 233, 0.5)
    ),
    url('${bgImg}');
  background-repeat: no-repeat;
  background-size: cover;

  /* background-image: linear-gradient(
      to bottom,
      rgb(161, 233, 233),
      rgba(241, 233, 233, 0.5)
    ),
    url('${bgImg2}');
  background-repeat: no-repeat;
  background-size: cover; */
  /* background-image:${p => p} */
`;
