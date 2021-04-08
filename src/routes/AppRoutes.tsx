import { Route, Switch } from 'react-router-dom';
import AcercaDe from '../containers/AcercaDe';
import Inicio from '../containers/Inicio';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route path="/acerca-de">
        <AcercaDe />
        {/* <Producto /> */}
      </Route>
      <Route path="/contacto">
        {/* <Contacto /> */}
      </Route>
    </Switch>
  )
}