import "babel-polyfill"
import express from "express";
import renderer from "./helpers/renderer";
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import reducers from './client/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const app = express();

app.use(express.static('public'));
app.get('*', (req,res) => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
	
	const promises = matchRoutes(Routes, req.path).map((route) => {
		return route["route"].loadData ? route["route"].loadData(store, route) : null
	}).map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

	Promise.all(promises).then(() => {
		res.send(renderer(req, store));
	})
});

app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port 3000")
})