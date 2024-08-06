<script lang="ts">
	import profileImg from '$lib/images/V_2023_07_01_Cristina y Luis-362.jpg';
	import Form from '../../components/Form.svelte';

	const contact = {
		text: 'Fill the form to get into contact with me.',
		inputs : [
			{
				type: 'date',
				name: 'date',
				label: 'Date of the marriage'
			},
			{
				type: 'tel',
				name: 'phone',
				label: 'Phone number'
			},
			{
				type: 'text',
				name: 'assistant',
				label: 'Number of assistant'
			},
			{
				type: 'text',
				name: 'place',
				label: 'Place'
			},
			{
				type: 'textarea',
				name: 'message',
				label: 'Tell me more about you'
			}
		],
		button: {
			text: 'Enviar'
		}
	};

	const { text, inputs, button } = contact;
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact info" />
</svelte:head>

<section>
	<img src={profileImg} alt='contact-picture' />
	<Form {text} {inputs} buttonText={button.text} />
</section>


<style lang="scss">
	@import '../../styles/colors.scss';
	section {
		display:flex;
		flex-direction: column;
		gap: 40px;
		align-items: center;
	}
	img {
		display: block;
		width: 100%;
		object-fit: cover;
		max-height: 900px;
	}

	@media (min-width: 600px) {
		section {
			display:flex;
			flex-direction: row;
			gap: 120px;
			align-items: center;
		}	
		img {
			display: block;
			width: 50%;
			object-fit: cover;
			max-height: 900px;
		}
	}
	@media (min-width: 1240px) {
		section {
			display:flex;
			flex-direction: row;
			gap: 120px;
			align-items: center;
		}
	}
</style>