<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5(data-aos="fade-left") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.mb-lg-0.mb-3(src="@/assets/curso/intro/img01.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Se da la bienvenida al componente formativo “<b>Soluciones para una arquitectura de <i>Blockchain</i></b>". Para comenzar el recorrido por el mismo, se debe visitar el recurso didáctico que se muestra a continuación:
    
    figure.mb-5(data-aos="fade-right") 
      .video            
        iframe(width="1255" height="706" src="https://www.youtube.com/embed/oMom6ivFGDE" title="Soluciones para una Arquitectura de Blockchain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    p.mb-0 A continuación, se va a reconocer los tipos de redes de <i>blockchain</i> y la estructura de 6 capas que manejan actualmente.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
