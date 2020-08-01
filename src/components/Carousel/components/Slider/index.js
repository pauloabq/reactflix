/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import {Container, SliderItem as Item} from './styles'


export const SliderItem = ({ children, ...props }) =>{
  return (
        <Item {...props}>
          { children }
        </Item>
  );
}

export const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);
