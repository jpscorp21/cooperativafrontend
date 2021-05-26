import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Login from './containers/Login/Login';
import { AppRoutes } from './routes/AppRoutes';

function App() {

  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Layout> 
        <AppRoutes></AppRoutes>      
      </Layout>      
    </Switch>
  );
} 

export default App;
