import styled from 'styled-components';

interface SliderProp {
  slickColor: string;
}
export const Container = styled.ul<SliderProp>`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
    color: ${props => props.slickColor};
  }
  .slick-next::before,
  .slick-prev::before {
    color: ${props => props.slickColor};
  }
  .slick-dots li button:before {
    color: ${props => props.slickColor};
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;
