<script lang="ts">
	import { inview } from 'svelte-inview';
	import { data } from '../../data/data';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	
    let visibility = { pic1: false, pic2: false };

	const handleChangeVisibility = (picKey: "pic1" | "pic2") => 
		({ detail }: CustomEvent<ObserverEventDetails>) => {
			visibility[picKey] = detail.inView;
		};

	const options: Options = {
		unobserveOnEnter: true,
	};

	const { title, pictures, intro, description } = data.about;

</script>

<svelte:head>
	<title>About me</title>
	<meta name="description" content="About Marta" />
</svelte:head>

<section>
	<div  class="horizontal effect">
		
		
			<h2>
				{title}
			</h2>
			<div>
			<img class={ `picture`} src={pictures[0].src} alt={pictures[0].alt} />
		</div>
			<p>
				{intro[0]}
				<br>
				<br>
				{intro[1]}
			</p>
	
		
	</div>
	<img src={"src/lib/images/text-divider-2.png"} alt="separator" class="separator"/>
	<div class="center">
		<p>
				{description[0]}
				<br>
				<br>
				{description[1]}
				<br>
				{description[2]}
				<br>
				<br>
				{description[3]}
				<br>
				<br>
				<strong>{description[4]}</strong>
			</p>
	</div>
	<div use:inview={options} on:inview_change={handleChangeVisibility('pic2')}>
		<img src={pictures[1].src} alt={pictures[1].alt} class={ `picture ${visibility.pic2 ? "effect" : ""}`}/>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		display: none;
	}

	.separator {
		max-width: 250px;
		padding: 60px 0;
	}

	.horizontal {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}

	.picture {
		max-width: 300px;
	}

	.effect {
		animation: fadeIn 3s;
	}
	p {
		font-size: 1em;
		line-height: 1.9em;
		text-align: justify;
	}	
	

	.center {
		width: 100%;
		padding-bottom: 40px;
	}

	@keyframes fadeIn {
  	0% { opacity: 0; }
  	100% { opacity: 1; }
		}

	@media (min-width: 520px) {
		.horizontal {
			flex-direction: row-reverse;
			gap: 80px;
			align-items: center
		}

		.picture {
			max-width: 300px;
		}

		.center {
			width: 80%;
			padding-bottom: 80px;
		}

	
	}

		@media (min-width: 1200px) {

		.horizontal {
			flex-direction: row-reverse;
			gap: 120px;
			align-items: end
		}

		h2 {
			display: block;
			position: absolute;
			top: 0;
			right: 42%;;
			font-size: 1.8em;
			font-weight: 600;
			color: rgba(0, 0, 0, 0.555);
		}
		.picture {
			max-width: 450px;
		}
	}
</style>


 