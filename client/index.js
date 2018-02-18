import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

 

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}> 
          <IndexRoute component={SongList}/>
          <Route path="songs/new" component={SongCreate}/> 
          <Route path="songs/:id" component={SongDetail}/> 
        </Route>
        <Route path="/" component={App}> </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
