<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import img1 from '$lib/images/profile-1.jpeg';
	import img2 from '$lib/images/profile-2.jpeg';
	import separator from "$lib/images/text-divider-2.png";

	const about = {
        title: 'Sobre mí',
        intro: [`¡Hola! Soy Marta, y en primer lugar quería darte las gracias por dedicar tu tiempo a conocerme un poco mejor.
		Nací en Sevilla en 1991 y desde siempre mi vida ha estado muy ligada al arte y a la fotografía.`,
		`Estudié Bellas Artes en la Universidad de Sevilla y pasé brevemente por la Escuela de Arte de Sevilla para estudiar el ciclo superior de Fotografía, del que me fui para cursar un máster en Etología y comportamiento animal de fauna salvaje en la Universidad Pablo de Olavide. Sé que esto último puede sonarte un poco extraño de primeras pero, a día de hoy puedo decir que no me arrepiento en absoluto pues mis intereses son diversos y me proporcionan una visión amplia y diferente del mundo`],
        description: [`Me gusta la luz, la naturaleza, me fascinan las aves y me encanta el mar. Me interesa especialmente la belleza de este mundo, la cual siempre tengo el afán de coleccionar, bien sea recogiendo una concha de la playa o captando emociones verdaderas a través de la cámara. Me gusta cuando las personas son ellas mismas y mostrarles la belleza de su naturalidad, gestos espontáneos, miradas, movimientos…`,
		`Descubrí la fotografía de bodas allá por 2015, cuando empecé a hacer trabajos esporádicos para otros fotógrafos. 
        En 2017 empecé a trabajar para una de las empresas de fotografía de bodas más conocidas de Sevilla y con ellos llevo más de 150 bodas a mis espaldas. Ahora tengo la experiencia y las herramientas para volar en este mundo, y con ello quiero empezar a construir mi propio camino.`,
		`Ahora que ya conoces mi historia me gustaría conocer la tuya, saber de dónde vienes, cuáles son tus expectativas e intereses y todo lo que quieras compartir conmigo.`,
        `¡Gracias por leerme!`,`Marta Portillo Góngora`],
        pictures: [
		    {
		    	src: img1,
		    	alt: 'Profile 1',
		    	id: "1"
		    },
		    {
		    	src: img2,
		    	alt: 'Profile 2',
		    	id: "12"
		    }
	    ]
    }

	
    let visibility = { pic1: false, pic2: false };

	const handleChangeVisibility = (picKey: "pic1" | "pic2") => 
		({ detail }: CustomEvent<ObserverEventDetails>) => {
			visibility[picKey] = detail.inView;
		};

	const options: Options = {
		unobserveOnEnter: true,
	};

	const { title, pictures, intro, description } = about;

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
	<img src={separator} alt="separator" class="separator"/>
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


 