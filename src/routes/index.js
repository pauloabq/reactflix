import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from '../pages/Home';
import CadastroVideo from '../pages/Cadastro/Video'
import CadastroCategoria from '../pages/Cadastro/Categoria'


const Page404 = () =>{
  return(
    <div>404 - Not Found</div>
  );
}

function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video/categoria" component={CadastroCategoria} />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route component={Page404} />
      </Switch>
  );
}

export default Routes;
