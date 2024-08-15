<main class="loader-container">
	<div class="loader-item">
		<i class="loader"></i>
	</div>
</main>

<style>
	.loader-container {
		letter-spacing: 0.3px;
		display: flex;
		justify-content: center;
		margin: 10px 0;
	}

	.loader {
		--color: #848484;
		--size-dot: 1.2vmin;

		width: 50%;
		display: grid;
		place-items: center;
	}

	.loader::before,
	.loader::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
	}

	.loader::before,
	.loader::after {
		width: var(--size-dot);
		height: var(--size-dot);
		background-color: var(--color);
		border-radius: 50%;
		opacity: 0;
		animation: loader 0.8s cubic-bezier(0.2, 0.32, 0, 0.87) infinite;
	}

	.loader::after {
		animation-delay: 0.3s;
	}

	@keyframes loader {
		0%,
		80%,
		100% {
			opacity: 0;
		}

		33% {
			opacity: 1;
		}

		0%,
		100% {
			transform: translateX(-3vmin);
		}

		90% {
			transform: translateX(3vmin);
		}
	}
</style>
