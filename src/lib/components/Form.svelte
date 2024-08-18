<script lang="ts">
	import { postContactInfo } from '$lib/api/form';
	import DOMPurify from 'dompurify';
	import { marked } from 'marked';
	import Loader from './Loader.svelte';

	let isLoading = false;
	let error = false;
	let sent = false;
	export let content: { [key: string]: string | { [key: string]: string } };

	const formDataParsed = (formData: FormData): { [key: string]: string } => {
		const obj: { [key: string]: any } = {};
		for (const [key, value] of formData.entries()) {
			obj[key] = value;
		}
		return obj;
	};

	const onSubmit = async (event: Event) => {
		try {
			isLoading = true;
			event.preventDefault();
			const formData = new FormData(event.target as HTMLFormElement);

			const formDataObj = formDataParsed(formData);
			await postContactInfo(formDataObj);
			sent = true;
		} catch (err) {
			error = true;
		} finally {
			isLoading = false;
		}
	};
</script>

<form on:submit={onSubmit}>
	{#each Object.entries(content.input) as [key, value]}
		<div class={key === 'terms' ? 'row-input' : 'col-input'}>
			<label for={key}>{@html DOMPurify.sanitize(marked(value, { async: false }))}</label>
			{#if key === 'tell_more'}
				<textarea id={key} name={key}></textarea>
			{:else if key === 'terms'}
				<input type="checkbox" id={key} name={key} required />
			{:else}
				<input type="input" id={key} name={key} required />
			{/if}
		</div>
	{/each}
	{#if isLoading}
		<Loader />
	{:else}
		<div>
			{#if sent}
				<p class="success">{content.thanks}</p>
			{:else}
				<button type="submit">{content.send}</button>
			{/if}
		</div>
	{/if}
</form>

<style lang="scss">
	@import '../../styles/colors.scss';

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	div.row-input {
		display: flex;
		flex-direction: row-reverse;
	}

	div.col-input {
		display: flex;
		flex-direction: column;
	}

	div.row-input > input {
		margin: 0 10px 0 0;
	}

	p {
		font-size: 1.2rem;
		font-weight: 500;
		color: $neutral-80;
		margin-bottom: 40px;
	}
	label > :global(p) {
		font-size: 0.9rem;
		font-weight: 600;
		color: $neutral-80;
	}

	label :global(a) {
		color: $neutral-70;
	}

	input,
	textarea {
		padding: 1rem;
		border-width: 0px 0px 1px 0px;
		border-color: $neutral-60;
		border-radius: 6px;
		margin-bottom: 10px;
	}

	textarea {
		height: 80px;
	}

	input,
	textarea:focus-visible {
		outline-color: $neutral-20;
		outline-offset: -0.3rem;
	}

	button {
		width: 100%;
		margin-top: 20px;
		padding: 0.5rem 2rem;
		background-color: $white;
		border: 1px solid $black;
		border-radius: 4px;
		color: $black;
		font-style: italic;
	}

	button:hover {
		background-color: $neutral-90;
		color: $white;
	}

	div {
		display: flex;
		justify-content: center;
	}

	.success {
		font-size: 1.2rem;
		font-weight: 600;
		color: $neutral-80;
		text-decoration: underline;
		font-style: italic;
		text-underline-offset: 8px;
	}
</style>
