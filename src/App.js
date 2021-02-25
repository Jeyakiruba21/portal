import Signup from './components/Signup';
import {Container} from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh" }}> 
<div className="div w-100" style={{maxWidth:"400px"}}>
<Router>
  <AuthProvider>
<Switch>
  <PrivateRoute exact path = "/" component={Dashboard} />
  <Route path="/signup" component={Signup}/>
  <Route path="/login" component={Login}/>
</Switch>
    </AuthProvider>
</Router> 
          </div>
    </Container>
    
    
  );
}

export default App;
