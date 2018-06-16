import React, { Component } from 'react';
import './home/Home.css';
import { Switch, Route } from 'react-router-dom'
import Info from './info/Info'
import Home from './home/Home'
import Music from './music/music'
import Gallery from './gallery/gallery'
import News from './news/News'
import Store from './store/Store'
import Shows from './shows/Shows'

class Routing extends Component {
    render() {
        return (

            <div className="Routing">

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/info' component={Info}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/gallery' component={Gallery}/>
                    <Route path='/news' component={News}/>
                    <Route path='/store' component={Store}/>
                    <Route path='/shows' component={Shows}/>
                </Switch>
            </div>
        );
    }
}


export default Routing;

