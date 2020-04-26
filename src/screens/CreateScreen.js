import React , {useState,useContext} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {

	const {addBlogPost} =useContext(Context);

	return <BlogPostForm onSubmit = {(title,content)=> {
		addBlogPost(title , content , ()=> navigation.navigate('Index'))
	}} />


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

export default CreateScreen;