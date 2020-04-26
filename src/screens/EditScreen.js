import React , {useContext,useState} from 'react';
import {View , StyleSheet,Text ,TextInput, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state ,editBlogPost } = useContext(Context);

	const blogPost = state.find(blogPost=> blogPost.id === id);

	return <BlogPostForm 
				initialValues = {{title:blogPost.title, content: blogPost.content}}
				onSubmit = {(title,content)=> {
					editBlogPost(id,title,content,()=>navigation.pop())
				}} 
	/>
}

const styles = StyleSheet.create({
	inputStyle : {
		margin:10,
		borderColor: 'gray',
		padding : 10,
		borderWidth: 1
	},

	viewStyle : {
		flexDirection : 'column'
	},

	buttonStyle : {
		margin:10
	}
})

export default EditScreen;