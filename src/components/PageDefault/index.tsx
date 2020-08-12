import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Container } from './styles';

interface PagedefaultProps {
  paddingAll?: number;
}
const PageDefault: React.FC<PagedefaultProps> = ({ paddingAll, children }) => {
  return (
    <>
      <Menu />
      <Container paddingAll={paddingAll}>{children}</Container>
      <Footer />
    </>
  );
};

export default PageDefault;
