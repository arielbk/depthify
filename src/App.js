import React from 'react';
import styled from 'styled-components';

import ParallaxItem from './ParallaxItem';

const ContentBox = styled.div`
  border-radius: 12px;
  background: #fff;
  padding: 3rem 4rem;
  color: #555;
  line-height: 1.5;
  margin: 2rem auto 4rem;
  width: 60%;
  min-width: 400px;
`;

const StyledCircle = styled.svg`
  z-index: ${({ zIndex }) => zIndex ? zIndex : 1};
  opacity: 1;
  padding: ${({ padding }) => padding}px;
  position: absolute; 
  circle {
    fill: ${({ color }) => color || '#fff'};
  }
`;

const App = () => (
  <div>
    <ContentBox>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus ut quisquam atque porro ullam repellendus? Inventore dicta eveniet laudantium.
    </ContentBox>

    <ContentBox>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque corrupti eveniet maiores rem odit labore nihil omnis reprehenderit optio nostrum nisi sed fugiat in, saepe consequatur, voluptatibus quia cumque!
    </ContentBox>

    {/* PARALLAX CIRCLE */}
    <ParallaxItem depth={4}>
      <StyledCircle color="#777" zIndex={4} padding={Math.floor(Math.random() * 80)}>
        <circle cx="40" cy="40" r="40" />
      </StyledCircle>
    </ParallaxItem>
    {/* PARALLAX CIRCLE */}
    <ParallaxItem depth={6}>
      <StyledCircle color="#fcc" zIndex={6} padding={Math.floor(Math.random() * 80)}>
        <circle cx="60" cy="60" r="60" />
      </StyledCircle>
    </ParallaxItem>

    <ContentBox>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nemo deserunt libero at ullam itaque laboriosam sunt alias dolorum, fugiat unde nobis, assumenda eos? Cupiditate error eaque quae, enim assumenda fuga ipsa velit nisi illum!
    </ContentBox>

    {/* PARALLAX BOX WITH 3D SHADOW */}
    <ParallaxItem depth={1.5} zIndex={1.5} contain shadowEffect>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed non assumenda, quis dolorum quas nobis, consectetur obcaecati magni ipsa nemo sit placeat, id veniam cum autem natus consequatur fugiat in!
    </ParallaxItem>

    <ContentBox>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam rem vero dolores. Ea, inventore reprehenderit.
    </ContentBox>
    <ContentBox>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, saepe ullam vitae, explicabo officiis soluta eius optio dolore quis magni dolor vel suscipit adipisci earum asperiores nemo.
    </ContentBox>
    <ContentBox>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quasi modi officiis provident nihil. Aspernatur, sit voluptatum. Incidunt quod ducimus enim numquam et?
    </ContentBox>
  </div>
);

export default App;
