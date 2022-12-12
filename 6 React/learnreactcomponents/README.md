### first day of learning react

There are some of the chapters I am gonna follow to learn a react
chapters are follow as:

1- React (created my first react app on 12/12/22)
	- It is a javascript libary for building user interfaces.
	- It is maintained by facebook
	- It is released at May 2013
	- To work on react you have to install nodejs from nodejs.org/en
	- After installing, open command prompt and type node -v to find the version
	
	- Commands	
		- npx create-react-app project1
			to create a react project	
 		- npm start
			to start the project
		- To stop project "ctrl+c"

2- App and JSX
	- In app.js you will HTML but that is not HTML code that is a JSX
	- To write javascript in react JSX  we use <p>{}</p> thse brackets. 
	- Inside {} these, if anything is written then it would be consider as javascript.
	- We can not add objects like array in react because they are not valid as a react child
		ex. {{a:1,b:2,}} //It will show an error
	- Also it does not render boolean values
		ex { 2===4} //output should false but it does not appear on screen

	- How to add comment
		{/* <p>{}</p> */}

3- Functional components
	- to open snippet ctrl+alt+r
	- We have learn how to add functional componets inside react
    - added three components such as header, content, and footer