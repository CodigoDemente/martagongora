<script lang="ts">
	import type { Input } from "../types/input";

	export let inputs: Input[];
    export let text: string; 
    export let buttonText: string;
</script>

<form>
	<p>{text}</p>
	{#each inputs as {type, name, label}, i}
		{#if type === 'textarea'}
			<label for={name}>Tell me more about you</label>
			<textarea id={name} name={name} required></textarea>
		{:else}
			<label for={name}>{label}</label>
			<input type={type} id={name} name={name} required>
		{/if}
	{/each}
	<button type="submit">{buttonText}</button>
</form>

<style lang="scss">
    @import '../styles/colors.scss';

	form {
		display: flex;
		flex-direction: column;
	}
	p {
		font-size: 1.2rem;
		font-weight: 500;
		color: $neutral-80;
		margin-bottom: 40px;
	}
	label {
		font-size: 1rem;
		font-weight: 500;
		color: $neutral-90;
	}

	input, textarea {
		width: 100%;
		padding: 1rem;
		border-width: 0px 0px 1px 0px;
		border-radius: 6px;
		margin-bottom: 10px;
	}

	textarea#message {
    	height: 100px;	
	}

	button {
		padding: 0.5rem 2rem;
		background-color: $white;
		border: 1px solid $black;
		border-radius: 4px;
		color: $black;
	}

	button:hover {
		background-color: $black;
		color: $white;
	}
</style>