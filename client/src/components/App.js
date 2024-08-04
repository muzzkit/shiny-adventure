import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header';
import history from '../history';
import '../style/App.css'

const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
            <div>
                <Header  />
                <Switch>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new"  component={StreamCreate}/>
                <Route path="/streams/edit/:id"  component={StreamEdit}/>
                <Route path="/streams/delete/:id"  component={StreamDelete}/>
                <Route path="/streams/:id"  component={StreamShow}/>
                </Switch>
               </div>
            </Router>
        </div>
    );
}

export default App;