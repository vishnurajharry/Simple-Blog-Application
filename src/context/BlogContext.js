import React , {useReducer} from 'react';
import createDataContext from './createDataContext';
import JsonServer from '../api/JsonServer';

const BlogReducer = (state , action) => {
	switch(action.type) {
		case 'get_blogposts': 
			return action.payload

		case 'edit_blogpost':
			return state.map((blogPost)=> {
				if(blogPost.id === action.payload.id) {
					return action.payload;
				} else {
					return blogPost;
				}
			
			})
		case 'delete_blogpost':
			return state.filter((blogPost) => 
				blogPost.id !== action.payload);

		case  'add_blogpost':
			return [...state,{id: Math.floor(Math.random()*99999) , title: action.payload.title,content:action.payload.content}];
		
		default:
			return state;
	}

}

const getBlogPosts = dispatch => {
	return async() => {
		const response = await JsonServer.get('/blogposts')
		dispatch({type:'get_blogposts',payload: response.data})
	}
}

const addBlogPost = (dispatch) => {
	return async (title , content , callback)=> {
		const response = await JsonServer.post('/blogposts',{title,content})
		// dispatch({type:'add_blogpost',payload: {title,content}})
		if(callback){
		 callback();
		 }
	}
}

const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await JsonServer.delete(`/blogposts/${id}`)
		dispatch({type: 'delete_blogpost',payload:id})
	}
}

const editBlogPost = dispatch => {
	return async (id,title,content,callback) => {

		await JsonServer.put(`/blogposts/${id}`,{title,content})
		dispatch({
			type:'edit_blogpost',
			payload:{id,title,content}
		});
		if(callback){
			callback();
		}
		
	}
}

export const {Context, Provider} = createDataContext(BlogReducer,
									{ addBlogPost , deleteBlogPost , editBlogPost, getBlogPosts},
									[])