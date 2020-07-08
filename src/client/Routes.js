import React from "react";
import {Route} from "react-router-dom";
import Home, {loadData} from "./components/Home";

export default  [
			{
				loadData,
				path: "/",
				exact: true,
				component: Home
			},
			{
				loadData,
				path: "/:page",
				component: Home
			}
		]