import React , {useReducer} from 'react';


//Basic Implementation of Redux , without redux ,
//this is a small way of handling states.

export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = ({children}) => {
		const [state,dispatch] =useReducer(reducer,initialState);

		// actions === { addBlogPost: (dispatch) => {return ()=> {}}}   same function writen in blogcontext.js
		// Very Generic implementation , this complete codeis reusable.
		const boundActions = {};
		for(let key in actions) {
			boundActions[key] = actions[key](dispatch)
		}

		return <Context.Provider value = {{ state, ...boundActions }}>
					{children}
			   </Context.Provider>
	}

	return {Context , Provider}
};



