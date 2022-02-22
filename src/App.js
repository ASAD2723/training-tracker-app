import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/pages/Home';
import Trainer from './components/pages/trainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import AddTrainer from './components/Trainer/AddTrainer';
import EditTrainer from './components/Trainer/EditTrainer';
import Resources from './components/pages/resources';
import AddResources from './components/resources/AddResources';
import EditResources from './components/resources/EditResources';
import Curriculum from './components/pages/Curriculum';
import AddCurriculum from './components/curriculum/AddCurriculum';
import EditCurriculum from './components/curriculum/EditCurriculum';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/trainer' component={Trainer} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/curriculum' component={Curriculum} />
          <Route exact path='/users/add' component={AddUser} />
          <Route exact path='/trainer/add' component={AddTrainer} />
          <Route exact path='/resources/add' component={AddResources} />
          <Route exact path='/curriculum/add' component={AddCurriculum} />
          <Route exact path='/users/edit/:id' component={EditUser}/>
          <Route exact path='/trainer/edit/:id' component={EditTrainer}/>
          <Route exact path='/curriculum/edit/:id' component={EditCurriculum}/>
          <Route exact path='/resources/edit/:id' component={EditResources}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
