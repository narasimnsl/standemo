import '../components/scss/main.scss'
import React from 'react';
import Aux from '../hoc/aux'
import { Switch, Route, withRouter } from "react-router-dom";
import Layout from '../components/layout/layout';
import Intro from '../containers/pages/intro';
import Series from '../containers/pages/series';
import Movies from '../containers/pages/movies';



const main = ({ location }) => (
   
    <Aux>
         <Switch location={location}>
           <Layout>
              <Route path="/" exact component={Intro}/>
              <Route path="/series" exact component={Series}  />
              <Route path="/movies" exact component={Movies} />
            </Layout>
         </Switch>
    </Aux>
)

export default withRouter(main);