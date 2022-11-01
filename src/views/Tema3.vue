<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plataforma <i>Ethereum</i>
  
    .fondo1
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(style="background-color:#cbdef4")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 <b><i>Ethereum</i> es la plataforma que provee de tecnología de cadena de bloques (<i>blockchain</i>) y proporciona un abanico de aplicaciones para el aprovechamiento en ámbitos financieros, empresariales e industriales. Cuenta con una moneda nativa que es el <i>Ether</i> que es una de las más usadas en el mundo de los criptomercados.</b>

      
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-8.col-12
          div.d-flex.align-items-center.mb-4
            div.p-0
              img.mb-0(style="width:110px" src="@/assets/curso/tema3/vineta1.png")
            div.px-2
              p.mb-0 La plataforma <i>Ethereum</i> fue creada en 2015 por el programador Vitalik Buterin, con la perspectiva de crear un instrumento para aplicaciones descentralizadas y colaborativas. <i>Ether</i> ($ETH), su criptomoneda nativa, es un <i>token</i> que puede ser utilizado en transacciones que usen este software. Al igual que <i>bitcoin</i>, ether hace parte de un sistema financiero autónomo de pares, libre de intervención gubernamental.
          .cajon.color-acento-botones.p-4.mb-lg-0.mb-3
            p.mb-0 <b>A continuación, se presentan las etapas del desarrollo sobre <i>Ethereum</i> y cómo se puede dar inicio al desarrollo de soluciones bajo esta tecnología.</b>
        .col-lg-4.col-10 
          img.mb-0(src="@/assets/curso/tema3/img03.png")

      Separador
      #t_3_1.titulo-segundo.color-acento-contenido
        h2 3.1 Análisis de etapas de <i>Ethereum</i>

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-10 
          img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img04.png")
        .col-lg-9.col-12
          p.mb-4 Para el desarrollo de cualquier proyecto basado en tecnología, es importante contar con una hoja de ruta que oriente en las fases para alcanzar el éxito del proyecto, para el caso de <i>Ethereum</i> este ha dispuesto una serie de etapas importantes relacionadas con el ciclo de vida de un proyecto, cada etapa cuenta con un objetivo claro y necesario para el mantenimiento y correcto funcionamiento de <i>Ethereum</i>, estas etapas de llaman <i>Frontier</i>, <i>Homestead</i>, <i>Metropolis</i> y <i>Serenity</i>, las cuales se detallan a continuación:
          div.d-flex.align-items-center.mb-0
            div.p-0
              img.mb-0(style="width:50px" src="@/assets/curso/tema3/vineta1.png")
            div.px-2
              p.mb-0 <b>La primera Etapa <i>Frontier</i></b> surgió con el lanzamiento de <i>Ethereum</i> a mediados de julio del 2015, y esta etapa aborda la forma más básica de <i>Ethereum</i>, para conocer detalles de esta etapa, se invita a ver el siguiente recurso: 
        
    figure.mb-5(data-aos="fade-right") 
      .video      
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/V1Q7d_3GDnA" title="Ethereum: primera etapa Frontier" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 Continuando con <b>la segunda Etapa <i>Homestead</i></b>, esta etapa de <i>Ethereum</i>, salió a la luz pública bajo la figura de versión estable aproximadamente en marzo de 2016.

    .fondo2.p-4.mb-5      
      SlyderA(tipo="b")

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-115px; left:-85px;" src="@/assets/curso/tema1/img17.png")                  
                p.mb-4 Al hacerse pública en marzo de 2016, cuando alcanzó 1.150.000 bloques minados, en donde desde la comunidad se podría señalar a esta plataforma como segura.
                p.mb-lg-0.mb-3 Esta actualización conllevó a que los clientes de la plataforma se actualizarán, tales como <i>Geth</i> entre otros más nodos, ya que, si no realizaban dicha actualización, perderían la capacidad de recibir los beneficios de la nueva red, entre ellos los del minado, perdiendo el esfuerzo realizado en dichas tareas.                
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema3/img05.png")

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img06.png")
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-80px; left:-85px;" src="@/assets/curso/tema1/img18.png")  
                p.mb-4 Esta etapa conllevó a que el coste para la implementación de contratos inteligentes se incrementará con la implementación del <i>GAS</i>, el cual es una comisión por las transacciones similar a la que cobran los bancos tradicionales actualmente.
                p.mb-3.text-center <b>Costo de transacciones con <i>GAS</i></b>
                p.mb-4.text-center <b style="color:#1565C0">Envió de 1 Eth 🡺 (1 Eth +</b><b style="color:#FF5422"> 0.0001 Eth de comisión</b> )   <b>=   <span style="height:200px;border:2px solid #FF5422;border-radius:200px">1.0001 Eth</span></b>
                p.mb-0 Aparte de la inclusión de las comisiones gas, esta etapa permitió corregir gran variedad de errores presentados en la plataforma y así evitar la generación de transacciones maliciosas dentro de la plataforma.


        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-115px; left:-85px;" src="@/assets/curso/tema1/img19.png")  
                p.mb-4 También se aseguró que sus clientes pudieran actualizarse sin inconvenientes, de igual forma se incluyó <i>MIST</i>, un navegador robusto basado en <i>Ethereum</i> el cual permitió interactuar fácilmente con su red.
                p.mb-lg-0.mb-3 Entre otro de los beneficios fue que abrió la posibilidad de ejecutar y gestionar <i>DApps</i> en la red de cadena de bloques para gente que tenía conocimientos técnicos en <i>Ethereum</i>.                
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema3/img07.png")

        

    p.mb-5 Ahora bien, <b>la tercera etapa <i>Metropolis</i></b>, se lanzó a mediados de octubre de 2017 cuando alcanzó 4.370.000 minados en su red, se puede conocer más detalles de lo que esta implicó:

    .row.justify-content-center.mb-0.pt-4.mb-5
      .col-lg-5.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img08.svg")
      .col-lg-7.col-12
        LineaTiempoD.color-acento-contenido
            .div(numero="1" titulo="Reducción bomba de dificultad")
              <br>
              ul.lista-ul--color
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 <b>Reducir dificultad del minado:</b> además se reduce el tiempo de creación de bloques de 24.5 segundos a unos 14 segundos, lo que conllevaba a una mayor rapidez del proceso.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 <b>Reducción de las recompensas:</b> recibidas por los mineros de cada bloque, que pasa de los 5 <i>Ether</i> por bloque minado a 3 <i>Ether</i>.


            .div(numero="2" titulo="Funciones <i>revert</i> return contratos ")
              <br>
              ul.lista-ul--color
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 <b>Función “<i>Revert</i>” (revertir):</b> permite a los contratos volver a su estado inicial sin necesidad de consumir todo el gas del contrato. Además, el gas no utilizado en el contrato será devuelto al creador del contrato.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 <b>Función es “<i>Return data</i>”:</b> Permite a los contratos no necesariamente volver a su estado inicial, sino modificar solo pequeños datos que no tengan un consumo de <i>gas</i> tan grande como el de volver al estado inicial, si la función "<i>revert</i>" devuelve al estado original el contrato inteligente, la funcion "<i>return data</i>" solo modifica pequeñas partes del contrato.

            .div(numero="3" titulo="Implementación de los <i>ZK-Snarks</i>")
              <br>
              ul.lista-ul--color
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 <b>Integridad:</b> si la declaración es verdadera, entonces un verificador íntegro y honesto puede confiar en un probador íntegro y honesto. Ejemplo: Si Carlos conoce el camino, la contraseña y trae el balón a Pablo, Pablo puede confiar en la integridad y honestidad de Carlos.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 <b>Solidez:</b> si el probador no es honesto y miente, no puede convencer al verificador de ninguna manera. Ejemplo: Si Carlos dice que sabe el camino y la contraseña, pero no trae el balón a Pablo, éste no podrá confiar en la solidez de las palabras de Carlos. Lo que Carlos afirma saber no es sólido, porque no lo puede demostrar.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 <b>Cero conocimiento:</b> si la declaración es verdadera, el verificador no tendrá idea de la declaración en sí. <b style="color:#FF5422">Ejemplo:</b> Si Carlos sabe el camino, la contraseña y trae el balón a Pablo, Pablo seguirá sin saber cuál es la contraseña. Tendrá “cero-conocimiento” del camino y de la contraseña, pero sabrá que Carlos es de fiar.

    .bloque-texto-a.color-primario.p-3.mb-5(data-aos="fade-left") 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-lg-0
            img(src="@/assets/curso/tema3/img09.svg")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Finalmente, la cuarta etapa <i>Serenity</i> viene a ser la última del proyecto Erhereum, con la cual se presume, dará paso definitivo de <i>PoW</i> (Prueba de trabajo) a <i>PoS</i> (Prueba de participación), esta actualización se verá reflejada en lo conocido hasta el momento como <i>Ethereum</i> 2.0, si una fecha específica de lanzamiento, manteniéndose actualmente en desarrollo.
        
    .cajon.color-acento-botones.p-4.mb-lg-0
      p.mb-0 Con esta etapa se busca con <i>Serenity</i>, que viene del inglés “Serenidad”, es precisamente eso: encontrar la estabilidad del proyecto, de la comunidad y de su sistema, consiguiendo expandir la tecnología <i>Ethereum</i> a lo largo y ancho del planeta.

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Instalación y Configuración

    .fondo3
      .row.justify-content-center.align-items-center.mb-5.position-relative(style="background-color:#f4f7fe")
        .col-lg-3.col-12.p-0
          img.mb-lg-0.mb-3(src="@/assets/curso/tema3/img10.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 52px; top: -35px; left:0.5%" src="@/assets/curso/tema2/deco2.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 73px; top: -21px; left:8%" src="@/assets/curso/tema3/deco3.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 69px; bottom: -10px; left:6%" src="@/assets/curso/tema2/deco4.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 40px; bottom: -20px; left:22%" src="@/assets/curso/tema3/deco4.png")
        .col-lg-9.col-12
          p.mb-0 La red de <i>Ethereum</i> está abierta a la creación de nuevos nodos, y en este caso, si se quisiera agregar a la red de bloques, tan solo se debe hacer uso de las herramientas para el enlace, a continuación, se va a realizar la creación de un nodo para la red <i>Ethereum</i>.
          img.mb-lg-0.mb-0.position-absolute(style="width: 64px; bottom: -42px; right:0%" src="@/assets/curso/tema2/deco1.png")

      <br>
      <br>
      figure.mb-0(data-aos="fade-right") 
        .video        
          iframe(width="1280" height="720" src="https://www.youtube.com/embed/LxH4JhZTSTQ" title="Instalación y configuración básica de una red de bloques basada en Ethereum" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
