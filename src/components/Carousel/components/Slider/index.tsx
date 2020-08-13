/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import { Container, SliderItem as Item } from './styles';

export const SliderItem: React.FC = ({ children, ...rest }) => {
  return <Item {...rest}>{children}</Item>;
};

interface SliderProp {
  categoryColor: string;
}

export const Slider: React.FC<SliderProp> = ({ categoryColor, children }) => (
  <Container slickColor={categoryColor}>
    <SlickSlider
      {...{
        dots: true,
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
