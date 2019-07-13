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
  padding: 2rem;
  position: absolute; 
  circle {
    fill: #555;
  }
`;

const App = () => (
  <div>
    <ContentBox>
      Some text in here!
    </ContentBox>
    <ContentBox>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque corrupti eveniet maiores rem odit labore nihil omnis reprehenderit optio nostrum nisi sed fugiat in, saepe consequatur, voluptatibus quia cumque!
    </ContentBox>
    <ParallaxItem>
      <StyledCircle>
        <circle cx="50" cy="50" r="50" />
      </StyledCircle>
    </ParallaxItem>
    <ContentBox>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nemo deserunt libero at ullam itaque laboriosam sunt alias dolorum, fugiat unde nobis, assumenda eos? Cupiditate error eaque quae, enim assumenda fuga ipsa velit nisi illum!
    </ContentBox>
    <ContentBox>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam rem vero dolores. Ea, inventore reprehenderit.
    </ContentBox>
    <ContentBox>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, saepe ullam vitae, explicabo officiis soluta eius optio dolore quis magni dolor vel suscipit adipisci earum asperiores nemo.
    </ContentBox>
  </div>
);

export default App;
