import React , { useState } from 'react';
import {View,StyleSheet,Text,TextInput,Button} from 'react-native';

const BlogPostForm = ({onSubmit , initialValues}) => {

	const [title , setTitle] = useState(initialValues.title);
	const [content , setContent] = useState(initialValues.content);

	return <View style = {styles.viewStyle}>
		<Text>Enter Title </Text>
		<TextInput 
			value = {title}
			style = {styles.inputStyle} 
			onChangeText = { (text)=> setTitle(text) }
		/>
		<Text>Enter Content </Text>
		<TextInput 
			value = {content}
			style = {styles.inputStyle} 
			onChangeText = {(text)=> setContent(text)}
		/>
		<Button 
			style = {styles.buttonStyle} 
			title = 'Save Blog Post'
			onPress= {() => onSubmit(title,content) }
					//addBlogPost(title,content,()=> navigation.navigate('Index'))
					// navigation.navigate('Index') Can be done like this but could create Problems 
					//while handling an api request , withoutwaiting for result it could redirect
					//Instead a Callback as shown above will be called only after the actual execution is over.
					
		/>
	</View>

}

BlogPostForm.defaultProps = {
	initialValues: {
		title:'',
		content: ''
	}
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

export default BlogPostForm;