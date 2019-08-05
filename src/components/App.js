import React from 'react';
import ListCities from '../pages/page_list'
import DetailCity from './detail_city'
import NotFound from '../pages/notfound'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {ListCities} />
                    <Route exact path={`/detail/:id`}  component = {DetailCity}/>
                    <Route component = {NotFound}/>
                </Switch>
            </BrowserRouter>
        </div> 
        );
    }
}

export default App