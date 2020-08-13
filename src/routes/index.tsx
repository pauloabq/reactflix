import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CadastroVideo from '../pages/Cadastro/Video';
import CadastroCategoria from '../pages/Cadastro/Categoria';
import Watch from '../pages/Watch';
import Page404 from '../pages/Error';

const Routes: React.FC = () => {
  return (
    <Switch>
      ScrollToTop
      <Route path="/" exact component={Home} />
      <Route
        path="/cadastro/video/categoria"
        exact
        component={CadastroCategoria}
      />
      <Route path="/cadastro/video" exact component={CadastroVideo} />
      <Route path="/watch/:videoid" exact component={Watch} />
      <Route component={Page404} />
    </Switch>
  );
};

export default Routes;
