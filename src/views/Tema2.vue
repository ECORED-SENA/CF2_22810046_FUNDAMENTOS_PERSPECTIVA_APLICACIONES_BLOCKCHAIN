<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Arquitectura de blockchain

    .fondo1
      .row.justify-content-center.align-items-center.mb-5.position-relative(style="background-color:#f6f6f6")
        .col-lg-3.col-12.p-0
          img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img01.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 52px; top: -35px; left:0.5%" src="@/assets/curso/tema2/deco2.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 41px; bottom: -21px; left:2%" src="@/assets/curso/tema2/deco3.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 69px; bottom: -10px; left:10%" src="@/assets/curso/tema2/deco4.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 52px; bottom: -20px; left:20%" src="@/assets/curso/tema2/deco5.png")
        .col-lg-9.col-12
          p.mb-0 El blockchain, está conformado por información almacenada en bloques los cuales están interconectados entre sí dentro de una red, a continuación, se explica la arquitectura de una red blockchain y cómo interactúan en el proceso de consolidar una red de este tipo.
          img.mb-lg-0.mb-0.position-absolute(style="width: 64px; bottom: -42px; right:0%" src="@/assets/curso/tema2/deco1.png")
      <br>
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1 Conceptos
      p.mb-4 La tecnología blockchain, llegó para quedarse, es así que se relaciona con la web de última generación, a continuación se ven los principales conceptos relacionados con esta arquitectura en el siguiente recurso educativo:

      .row.justify-content-center.align-items-center.mb-0.position-relative
        .col-lg-5.col-10
          img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img02.png")
        .col-lg-7.col-12
          LineaTiempoD.color-acento-contenido
            .div(numero="1" titulo="Web 3.0")
              p.mb-4 La web 3.0 es la tercera generación de servicios de Internet que se centrará en la comprensión y análisis de los datos para proporcionar una web semántica. Su objetivo es el de crear webs más inteligentes, conectadas, abiertas, descentralizadas y soportadas bajo redes de blockchain y adaptadas a cada usuario.
              img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img03.svg")
            .div(numero="2" titulo="Red de Igual a Igual")
              p.mb-0 El nuevo internet estará totalmente descentralizado. Por lo tanto, no hay opción para ningún tipo de autoridad centralizada que gobierne sobre lo que haces y lo que no. Pero eso claramente no significa que puedas violar todas sus normas.
            .div(numero="3" titulo="Oráculo")
              p.mb-0 Los oráculos son necesarios para los contratos inteligentes porque actúan como un agente para recopilar información desde fuera de la red.
            .div(numero="4" titulo="Contrato inteligente")
              p.mb-0 Los contratos inteligentes son contratos legales codificados en programas que se ejecutan sobre una red blockchain dos participantes en la red, pueden intercambiar cualquier tipo de activo de información que este registrado en la cadena de bloques.
            .div(numero="5" titulo="Ubicuidad")
              p.mb-4 Para comprender mejor la tecnología blockchain, necesita  saber de qué se trata realmente la ubicuidad. Simplemente observe a su alrededor, ¿qué utilizan todas las personas para acceder a la Internet?
              p.mb-0 Además, todos los televisores inteligentes, refrigeradores, accesorios para el hogar inteligente, asistentes, tablets o teléfonos inteligentes hacen lo mismo. Entonces, todos se conectan a internet. Al hacerlo, forman una red. Por lo general, esta red en realidad se llama Internet de las cosas. Sin embargo, en algunos casos, la gente lo llama ubicuidad.

      Separador
      #t_2_2.titulo-segundo.color-acento-contenido
        h2 2.2 Capas de la arquitectura (aplicación, ledger o base de datos distribuida, red de igual a igual)

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#cbdef4")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/img04.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La tecnología blockchain, actualmente está conformada por seis  (6) capas con las que se cuenta para ofrecer los servicios, estas capas se pueden apreciar en el siguiente recurso educativo:

      TabsC.color-acento-contenido.position-relative
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de red")
          .col-lg-6.col-12
            h3.mb-4 Capa de red
            p.mb-0 La base de la red blockchain es básicamente una red P2P. Los recursos y servicios se distribuyen en todos los nodos de la red. La transmisión de información y la implementación del servicio se realizan directamente sobre sus nodos sin la necesidad de intermedios, estos nodos facilitan la sincronización de la información posibilitando la actualización de los bloques y manteniendo la red actualizada.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema2/img05.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de datos")
          .col-lg-6.col-12
            h3.mb-4 Capa de datos
            p.mb-0 Los datos subyacentes de blockchain están conformados por datos de bloque más la lista enlazada que incluye bloque de datos, estructura de cadena, marca de tiempo, función hash, árbol de Merkle, cifrado asimétrico y otros diseños. Entre ellos, el bloque de datos y la estructura de la cadena se pueden usar como la dirección de mejora de la investigación de la capa de datos en la solución escalable de la tecnología blockchain.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema2/img06.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de consenso")
          .col-lg-6.col-12
            h3.mb-4 Capa de consenso
            p.mb-0 Es fundamental para alcanzar un rápido consenso sobre la efectividad de los datos de bloque por nodos altamente descentralizados. Los principales mecanismos de consenso son POW (Prueba de trabajo), POS (Prueba de participación), DPOS (Delegado Proof of Stake confía en el mecanismo de prueba de participación) y PBFT (Practical Byzantine Fault Tolerance), etc., que siempre han sido lo más destacado de las soluciones escalables de la tecnología blockchain.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema2/img07.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de incentivo")
          .col-lg-6.col-12
            h3.mb-4 Capa de incentivo
            p.mb-0 Es un mecanismo de minería del que todos hablan a menudo. Se utiliza para diseñar un cierto modelo de incentivo económico y alentar a los nodos a participar en la verificación de seguridad de la cadena de bloques, incluido el diseño del mecanismo de emisión y el mecanismo de distribución. Este nivel de mejora no parece estar directamente relacionado con la escalabilidad de la cadena de bloques.

          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema2/img08.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de contrato")
          .col-lg-6.col-12
            h3.mb-4 Capa de contrato
            p.mb-0 Se refiere principalmente a varios códigos de script, mecanismos de algoritmos y contratos inteligentes. La primera generación de blockchains declaró estrictamente que falta esta capa, por lo que solo se pueden usar para transacciones, pero no se pueden usar en otros campos o para otro procesamiento lógico. La aparición de la capa de contrato hace posible usar blockchain en otros campos. 
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema2/img09.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de aplicación")
          .col-lg-6.col-12
            h3.mb-4 Capa de aplicación
            p.mb-0 Es la capa de visualización de la cadena de bloques, incluidos varios escenarios y casos de aplicación. Por ejemplo, Ethereum usa trufa y web3-js. La capa de aplicación de la cadena de bloques puede ser móvil, web o integrada en un servidor existente, y el servidor comercial actual se considera como la capa de aplicación. Este nivel de mejora también parece proporcionar una nueva dirección potencial para la escalabilidad de blockchain, pero no parece estar directamente relacionado en la estructura.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema2/img10.svg")
</template>

<script>
export default {
  name: 'Tema2',
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
