<script lang="ts">
	let text = `sobre mí
		¡Hola! Soy Marta, y en primer lugar quería darte las gracias por dedicar tu tiempo a conocerme un poco mejor.
		Nací en Sevilla en 1991 y desde siempre mi vida ha estado muy ligada al arte y a la fotografía.

		Estudié Bellas Artes en la Universidad de Sevilla y pasé brevemente por la Escuela de Arte de Sevilla para estudiar el ciclo superior de Fotografía, del que me fui para cursar un máster en Etología y comportamiento animal de fauna salvaje en la Universidad Pablo de Olavide. Sé que esto último puede sonarte un poco extraño de primeras pero, a día de hoy puedo decir que no me arrepiento en absoluto pues mis intereses son diversos y me proporcionan una visión amplia y diferente del mundo.

		Me gusta la luz, la naturaleza, me fascinan las aves y me encanta el mar. Me interesa especialmente la belleza de este mundo, la cual siempre tengo el afán de coleccionar, bien sea recogiendo una concha de la playa o captando emociones verdaderas a través de la cámara. Me gusta cuando las personas son ellas mismas y mostrarles la belleza de su naturalidad, gestos espontáneos, miradas, movimientos…

		Descubrí la fotografía de bodas allá por 2015, cuando empecé a hacer trabajos esporádicos para otros fotógrafos. En 2017 empecé a trabajar para una de las empresas de fotografía de bodas más conocidas de Sevilla y con ellos llevo más de 150 bodas a mis espaldas. Ahora tengo la experiencia y las herramientas para volar en este mundo, y con ello quiero empezar a construir mi propio camino.

		Ahora que ya conoces mi historia me gustaría conocer la tuya, saber de dónde vienes, cuáles son tus expectativas e intereses y todo lo que quieras compartir conmigo.

		¡Gracias por leerme!
		Marta Portillo Góngora`;
	let pictures = [
		{
			src: 'src/lib/images/profile-1.jpeg',
			alt: 'Profile 1',
			id: "1"
		},
		{
			src: 'src/lib/images/profile-2.jpeg',
			alt: 'Profile 2',
			id: "12"
		}
	];
</script>

<svelte:head>
	<title>About me</title>
	<meta name="description" content="About Marta" />
</svelte:head>

<section>
	<div class="container">
		<p>
			Para que me conozcáis un poquito más, mi nombre es Rosa Fernández Leal. 
			<br>Sevillana de nacimiento y dando guerra desde el 91. Soy Licenciada en Publicidad y Relaciones Públicas por la Universidad de Sevilla, tiempo en el que no he dejado en ningún momento la fotografía y Graduada Profesional en Piano. <br><br>La fotografía como modo de expresión de todo lo que veo y la composición como modo de expresión de todo aquello que siento.
			Para formarme en el mundo de la fotografía, escogí Madrid donde he realizado el Máster de Fotografía Internacional de Bodas entre otros en EFTI y capital que me ha dado mucho a nivel de crecimiento profesional. <br><br> Enamorada del foto-periodismo, del blanco y negro, de la Agencia de Fotografía Magnum y de las imágenes que captan emociones y momentos claves. Fotografías como medio para no olvidar.
		</p>
		<img src={pictures[0].src} alt={pictures[0].alt} />
	</div>
	<div class="center">
	<p>Me interesan las personas cuando son ellas mismas, en un entorno bajo circunstancias determinadas, los gestos, las miradas, lo espontáneo… He realizado viajes intentando fotografiar todo lo que veía, el alma de las ciudades y… una boda no se aleja mucho de esto.
<br><br>
Mis viajes por Francia, Portugal, Marruecos, Inglaterra, Italia, Estados Unidos, Grecia o India me han dotado de una perspectiva amplia a la hora de disparar y de disfrutar fotografiando. <br><br>Cada evento es un entorno que reúne preciosos sentimientos, bajo unas circunstancias, historias y protagonistas distintos.
Un reto que mi cámara y yo siempre estamos preparadas para viajar y fotografiarlo.</p>
</div>
<img src={pictures[1].src} alt={pictures[1].alt} />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
		padding-top: 60px;
		animation: fadeIn 3s
	}
	p {
		font-size: 1em;
		text-align: justify;
	}
	img {
    width: 30%;
    cursor: pointer;
  	}
	.container {
		display: flex;
		gap: 120px;
		justify-content: space-between;
		align-items: end;
	}

	.center {
		width: 85%;
		text-align: justify;
		padding-block: 60px;
	}

	@keyframes fadeIn {
  	0% { opacity: 0; }
  	100% { opacity: 1; }
		}
</style>