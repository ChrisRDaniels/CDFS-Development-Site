import './FormStyles.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
	const [state, handleSubmit] = useForm('xknyeazz');
	if (state.succeeded) {
		return <p>Thank you for your request, I will respond shortly!</p>;
	}
	return (
		<div className='form'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email Address</label>
				<input id='email' type='email' name='email' />
				<ValidationError prefix='Email' field='email' errors={state.errors} />
				<textarea
					id='message'
					rows='6'
					placeholder='Type your message here...'
					name='message'
				/>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
				<button className='btn' type='submit' disabled={state.submitting}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
