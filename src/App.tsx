import './App.scss';
import { Button } from '@material-ui/core';
import AppSidebar from './components/AppSidebar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <Layout>
      <AppRoutes></AppRoutes>
    {/* <div className="App">
      <header className="App-header">        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        
        <Button variant="contained" >Aprender React</Button> 
      </header>
    </div> */}
    </Layout>
  );
} 

export default App;
