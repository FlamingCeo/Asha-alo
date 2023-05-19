export const questions =  [
{
	text: 
	[
		"Hey there! We are so glad you reached out to us! Which language would you like to use?",
		"English",
		"বাংলা"
	],
	type: true

},
{
	text: 
	[
		"What would you like us to call you?"
	],

	type: false
},


{
	text: 
	[
		"could you specific your age?"
	],

	type: false
},

{
	text: 
	[
		"Could you specific your gender?"
	],

	type: false
},
{
	text: 
	[
		"Which of the following would you like to do?",
		"Call a helpline",
		"Seek legal advice",
		"Talk to a counselor",
		"Join a support group" 

	],

	type: true
}

];


export function appendAnswer(props){
	var element = 
	{	text: 
		[
			props
		],

		type: false
	}

	return element;
}

export const links = [""," Free Toll helpline +880124535789", "http://asharalo/legalhelp","Wait for a few minutes. Connecting you with a person.......","http://asharalo/forums/supportgroup"]
