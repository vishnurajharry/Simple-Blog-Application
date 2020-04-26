import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import React from 'react';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {Provider} from './src/context/BlogContext';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    blogDetails : ShowScreen,
    Create : CreateScreen,
    Edit : EditScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

const App =createAppContainer(navigator);

export default () => {
	return <Provider>
			  <App />
		   </Provider>
}

