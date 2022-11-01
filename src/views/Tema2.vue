<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Arquitectura de <i>blockchain</i>

    .fondo1
      .row.justify-content-center.align-items-center.mb-0.position-relative(style="background-color:#f6f6f6")
        .col-lg-3.col-8.p-0
          img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img01.png")
          img.mb-lg-0.mb-0.position-absolute(style="width: 52px; top: -35px; left:0.5%" src="@/assets/curso/tema2/deco2.png")
          img.mb-lg-0.mb-0.position-absolute.d-none.d-lg-block(style="width: 41px; bottom: -21px; left:2%" src="@/assets/curso/tema2/deco3.png")
          img.mb-lg-0.mb-0.position-absolute.d-none.d-lg-block(style="width: 69px; bottom: -10px; left:10%" src="@/assets/curso/tema2/deco4.png")
          img.mb-lg-0.mb-0.position-absolute.d-none.d-lg-block(style="width: 52px; bottom: -20px; left:20%" src="@/assets/curso/tema2/deco5.png")
        .col-lg-9.col-12
          p.mb-0 El <i>blockchain</i>, está conformado por información almacenada en bloques los cuales están interconectados entre sí dentro de una red, a continuación, se explica la arquitectura de una red <i>blockchain</i> y cómo interactúan en el proceso de consolidar una red de este tipo.
          img.mb-lg-0.mb-0.position-absolute(style="width: 64px; bottom: -42px; right:0%" src="@/assets/curso/tema2/deco1.png")
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido
        h2 2.1 Conceptos
      div.p-0.position-relative
        div.position-absolute(style="top:-5px;  width:390px; height:28px; background-color:#f8f8f8")
        p.mb-4 La tecnología <i>blockchain</i>, llegó para quedarse, es así que se relaciona con la <i>web</i> de última generación, a continuación se ven los principales conceptos relacionados con esta arquitectura en el siguiente recurso educativo:

      .row.justify-content-center.align-items-center.mb-0.position-relative
        .col-lg-5.col-10
          img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img02.png")
        .col-lg-7.col-12
          LineaTiempoD.color-acento-contenido
            .div(numero="1" titulo="<i>Web 3.0</i>")
              p.mb-4 La <i>web</i> 3.0 es la tercera generación de servicios de <i>Internet</i> que se centrará en la comprensión y análisis de los datos para proporcionar una <i>web</i> semántica. Su objetivo es el de crear webs más inteligentes, conectadas, abiertas, descentralizadas y soportadas bajo redes de <i>blockchain</i> y adaptadas a cada usuario.
              img.mb-lg-0.mb-3(src="@/assets/curso/tema2/img03.svg")
            .div(numero="2" titulo="Red de Igual a Igual")
              p.mb-0 El nuevo <i>internet</i> estará totalmente descentralizado. Por lo tanto, no hay opción para ningún tipo de autoridad centralizada que gobierne sobre lo que haces y lo que no. Pero eso claramente no significa que puedas violar todas sus normas.
            .div(numero="3" titulo="Oráculo")
              p.mb-0 Los oráculos son necesarios para los contratos inteligentes porque actúan como un agente para recopilar información desde fuera de la red.
            .div(numero="4" titulo="Contrato inteligente")
              p.mb-0 Los contratos inteligentes son contratos legales codificados en programas que se ejecutan sobre una red <i>blockchain</i> dos participantes en la red, pueden intercambiar cualquier tipo de activo de información que este registrado en la cadena de bloques.
            .div(numero="5" titulo="Ubicuidad")
              p.mb-4 Para comprender mejor la tecnología <i>blockchain</i>, necesita  saber de qué se trata realmente la ubicuidad. Simplemente observe a su alrededor, ¿qué utilizan todas las personas para acceder a la <i>Internet</i>?
              p.mb-0 Además, todos los televisores inteligentes, refrigeradores, accesorios para el hogar inteligente, asistentes, <i>tablets</i> o teléfonos inteligentes hacen lo mismo. Entonces, todos se conectan a <i>internet</i>. Al hacerlo, forman una red. Por lo general, esta red en realidad se llama <i>Internet</i> de las cosas. Sin embargo, en algunos casos, la gente lo llama ubicuidad.

      Separador
      #t_2_2.titulo-segundo.color-acento-contenido
        h2 2.2 Capas de la arquitectura (aplicación, <i>ledger</i> o base de datos distribuida, red de igual a igual)

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(style="background-color:#cbdef4")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/img04.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La tecnología <i>blockchain</i>, actualmente está conformada por seis  (6) capas con las que se cuenta para ofrecer los servicios, estas capas se pueden apreciar en el siguiente recurso educativo:

      TabsC.color-acento-contenido.position-relative
        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de red")
          .col-lg-6.col-12
            h3.mb-4 Capa de red
            p.mb-lg-0.mb-3 La base de la red <i>blockchain</i> es básicamente una red <i>P2P</i>. Los recursos y servicios se distribuyen en todos los nodos de la red. La transmisión de información y la implementación del servicio se realizan directamente sobre sus nodos sin la necesidad de intermedios, estos nodos facilitan la sincronización de la información posibilitando la actualización de los bloques y manteniendo la red actualizada.
          .col-lg-3.col-8
            img.mb-0(src="@/assets/curso/tema2/img05.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de datos")
          .col-lg-6.col-12
            h3.mb-4 Capa de datos
            p.mb-lg-0.mb-3 Los datos subyacentes de <i>blockchain</i> están conformados por datos de bloque más la lista enlazada que incluye bloque de datos, estructura de cadena, marca de tiempo, función <i>hash</i>, árbol de <i>Merkle</i>, cifrado asimétrico y otros diseños. Entre ellos, el bloque de datos y la estructura de la cadena se pueden usar como la dirección de mejora de la investigación de la capa de datos en la solución escalable de la tecnología <i>blockchain</i>.
          .col-lg-3.col-8
            img.mb-0(src="@/assets/curso/tema2/img06.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de consenso")
          .col-lg-6.col-12
            h3.mb-4 Capa de consenso
            p.mb-lg-0.mb-3 Es fundamental para alcanzar un rápido consenso sobre la efectividad de los datos de bloque por nodos altamente descentralizados. Los principales mecanismos de consenso son <i>POW</i> (Prueba de trabajo), <i>POS</i> (Prueba de participación), <i>DPOS</i> (<i>Delegado Proof of Stake</i> confía en el mecanismo de prueba de participación) y <i>PBFT</i> (<i>Practical Byzantine Fault Tolerance</i>), etc., que siempre han sido lo más destacado de las soluciones escalables de la tecnología <i>blockchain</i>.
          .col-lg-3.col-8
            img.mb-0(src="@/assets/curso/tema2/img07.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de incentivo")
          .col-lg-6.col-12
            h3.mb-4 Capa de incentivo
            p.mb-lg-0.mb-3 Es un mecanismo de minería del que todos hablan a menudo. Se utiliza para diseñar un cierto modelo de incentivo económico y alentar a los nodos a participar en la verificación de seguridad de la cadena de bloques, incluido el diseño del mecanismo de emisión y el mecanismo de distribución. Este nivel de mejora no parece estar directamente relacionado con la escalabilidad de la cadena de bloques.

          .col-lg-3.col-8
            img.mb-0(src="@/assets/curso/tema2/img08.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de contrato")
          .col-lg-6.col-12
            h3.mb-4 Capa de contrato
            p.mb-lg-0.mb-3 Se refiere principalmente a varios códigos de script, mecanismos de algoritmos y contratos inteligentes. La primera generación de <i>blockchains</i> declaró estrictamente que falta esta capa, por lo que solo se pueden usar para transacciones, pero no se pueden usar en otros campos o para otro procesamiento lógico. La aparición de la capa de contrato hace posible usar <i>blockchain</i> en otros campos. 
          .col-lg-3.col-8
            img.mb-0(src="@/assets/curso/tema2/img09.svg")

        .row.justify-content-around.align-items-center.py-3.py-md-4(titulo="Capa de aplicación")
          .col-lg-6.col-12
            h3.mb-4 Capa de aplicación
            p.mb-lg-0.mb-3 Es la capa de visualización de la cadena de bloques, incluidos varios escenarios y casos de aplicación. Por ejemplo, <i>Ethereum</i> usa trufa y <i>web3-js</i>. La capa de aplicación de la cadena de bloques puede ser móvil, <i>web</i> o integrada en un servidor existente, y el servidor comercial actual se considera como la capa de aplicación. Este nivel de mejora también parece proporcionar una nueva dirección potencial para la escalabilidad de <i>blockchain</i>, pero no parece estar directamente relacionado en la estructura.
          .col-lg-3.col-8
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
