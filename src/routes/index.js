import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from '../pages/Home';
import CadastroVideo from '../pages/Cadastro/Video'
import CadastroCategoria from '../pages/Cadastro/Categoria'
import Page404 from '../pages/Error'



function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video/categoria" exact component={CadastroCategoria} />
        <Route path="/cadastro/video" exact component={CadastroVideo} />
        <Route component={Page404} />
      </Switch>
  );
}

export default Routes;
