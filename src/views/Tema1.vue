<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistema distribuido y red extendida

    .row.justify-content-center.align-items-center.mb-5
      .col-12.position-relative
        img.mb-4(src="@/assets/curso/tema1/img01.png")
        .row.justify-content-center.align-items-center.mb-5.position-absolute(style="top: 70%")
          .col-lg-10.col-12.position-relative.fondo1.p-3.px-4
            p.mb-0 Un sistema distribuido es aquel en el que los componentes localizados en computadores independientes, e interconectados a través de una red, son capaces de colaborar (comunican y coordinan sus acciones) mediante el paso de mensajes, con el fin de realizar una tarea, aunque ante los usuarios pareciera que se trata de un solo computador.

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Conceptos

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-9.col-12
        p.mb-5 El blockchain es una estructura de datos que almacena información en bloques a los cuales puede agregarse información denominada metainformación además cuenta con su propio hash y el hash del bloque inmediatamente anterior, la cual permite mantener una estrecha relación con otros bloques de una red. 
        h4.mb-lg-0.mb-3 <b>Puede ser un sistema centralizado, descentralizado o distribuido:</b>
      .col-lg-3.col-10
        img.mb-0(src="@/assets/curso/tema1/img02.svg")

    .fondo2.p-0.pt-5.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.col-12
          .row.justify-content-center.mb-0
            .col-lg-4.col-12.d-flex
              .fondo3.p-4.mb-lg-0.mb-3
                .d-flex.justify-content-center.mb-3
                  img.mb-0(style="width:126px" src="@/assets/curso/tema1/img03.svg")
                h3.text-center Centralizado
                p.text-center.mb-3 Está controlado por una unidad central que autoriza y valida las transacciones realizadas en cada bloque de información.
            .col-lg-4.col-12.d-flex
              .fondo4.p-4.mb-lg-0.mb-3
                .d-flex.justify-content-center.mb-3
                  img.mb-0(style="width:125px" src="@/assets/curso/tema1/img04.svg")
                h3.text-center Descentralizado
                p.text-center.mb-3 No depende de un nodo central para el desarrollo de sus funciones, busca que cada miembro que se conecte a la red actúe a manera de nodo.
            .col-lg-4.col-12.d-flex
              .fondo5.p-4.mb-lg-0.mb-3
                .d-flex.justify-content-center.mb-3
                  img.mb-0(style="width:114px" src="@/assets/curso/tema1/img05.svg")
                h3.text-center Distribuido
                p.text-center.mb-3 Carece de un nodo central y o grupal de nodos, en su lugar, los nodos existentes se enlazan para conformar la red.

      p.mb-5 Una explicación más detallada al respecto a los tipos de red en el blockchain de encuentra en el siguiente recurso:

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5.col-10
          img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img06.png")
        .col-lg-7.col-12
          LineaTiempoD.color-acento-contenido
            .div(numero="1" titulo="Centralizado")
              p.mb-4 Este término bastante escuchado en el ámbito del blockchain. Dado que hay un nodo central que regula la información, cuando un miembro requiera realizar una transacción, deberá de hacer uso de un intermediario para alcanzar su objetivo, esto choca con la filosofía del blockchain el cual se concibió para que fuese abierto y descentralizado.
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-4.col-10
                  img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img07.svg")
                .col-lg-8.col-12
                  p.mb-0 Para entender un poco el concepto puedes imaginar un servicio electrónico que utilice a diario, como Facebook, YouTube o twitter los cuales están controlados por una unidad quien es la que valida y aprueba todos los cambios sobre los elementos de la red, ¿qué pasaría si este nodo no es capaz de operar?, lo más probable es que se presenten intermitencias en el servicio indisponiendo la continuidad del mismo. 

            .div(numero="1" titulo="Descentralizado")
              p.mb-4 Este concepto tomó fuerza con el surgimiento del blockchain a mediados del año 2009, busca independencia y autonomía entre nodos.

              .row.justify-content-center.align-items-center.mb-0
                .col-lg-8.col-12
                  p.mb-lg-0.mb-3 Asegura, que esta autonomía se conserve mientras exista un nodo de la red activo y conectado, esto promueve muchos beneficios como son: rapidez, seguridad confiabilidad en la información que circula bajo estas redes, ya que si la red es hackeada, se tendrían que alterar todos los nodos activos, lo que dificulta la operación.
                .col-lg-4.col-10
                  img.mb-0(src="@/assets/curso/tema1/img08.svg")
            .div(numero="3" titulo="Distribuido")
              p.mb-0 Adicional a los modelos anteriormente descritos, esta el distribuido, que como se dijo antes carece de nodo central y/o grupal, y los nodos existentes se enlazan para conformar la red, con este modelo ya no se tendría en cuenta los conceptos de centro y periferia propuestos por el centralizado y descentralizado, para poner un ejemplo, la internet se convierte en una red distribuida.

    div.d-flex.align-items-center.mb-5
      div.p-0
        img.mb-0(style="width:55px" src="@/assets/curso/tema1/vineta1.png")
      div.px-2
        p.mb-0 <b>Continuando con el tema de los tipos de red que se encuentran en blockchain, otro aspecto relacionado es el de: algoritmo de consenso, que es el mecanismo utilizado por una red blockchain, para determinar el estado correcto de un registro después de realizar una transacción.</b>

    p.mb-4 Se pueden resaltar dos tipos de algoritmos como los más representativos: PoW (Proof of Work), como se explica a continuación:

    .fondo7.p-4.mb-5      
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img09.svg")
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-115px; left:-85px;" src="@/assets/curso/tema1/img17.png")  
                h4 PoW (Proof of Work)
                p.mb-0 Se conoce como el algoritmo inicial de blockchain y fue implementado junto con Bitcoin, este algoritmo es utilizado por los mineros o validadores para el desarrollo de las funciones en las transacciones sometiendo a hash los datos almacenados en los bloques y así proporcionar una solución valida.

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-115px; left:-85px;" src="@/assets/curso/tema1/img18.png")  
                h4 PoS (Proof of Stake)
                p.mb-lg-0.mb-3 Se implementó al inicio del Bitcoin como una alternativa a Proof of Work. En este sistema no existe un concepto de mineros o validadores, hardware especializado o consumo masivo de energía. Todo lo que se necesita es una PC normal.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema1/img10.svg")

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img11.svg")
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-105px; left:-85px;" src="@/assets/curso/tema1/img19.png")  
                h4 POW+POS
                p.mb-0 Combina los dos algoritmos anteriormente presentados. En PoW se necesita recursos externos como hardwares de minería para completar los procesos. En PoS no es necesario. A través del protocolo de la Prueba de Trabajo (PoW), los mineros resuelven problemas matemáticos. Por dicho trabajo éstos obtienen una recompensa por agregar un bloque verificado a la blockchain.

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-115px; left:-85px;" src="@/assets/curso/tema1/img20.png")  
                h4 DPOS (Delegated Proof of Stake)
                p.mb-lg-0.mb-3 Certificado de participación autorizado. Los poseedores de monedas pueden votar y elegir algunos nodos como representantes para llevar cuentas, similar al sistema del Congreso Nacional de Personas.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema1/img12.svg")

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img13.svg")
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-105px; left:-85px;" src="@/assets/curso/tema1/img21.png")  
                h4 PBFT (Practical Byzantine Fault Tolerance)
                p.mb-0 Práctico algoritmo bizantino tolerante a fallas. Todos en la cadena participan en la votación y el resultado se procesa de acuerdo con el algoritmo de consenso bizantino. Hay un problema muy conocido en matemáticas llamado Problema de los generales bizantinos, que es muy interesante, y puede consultar fácilmente en la internet.

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-115px; left:-85px;" src="@/assets/curso/tema1/img22.png")  
                h4 POI (Proof of Importance) 
                p.mb-lg-0.mb-3 Prueba de importancia. Utiliza la puntuación de importancia de la cuenta para asignar la probabilidad de derechos de contabilidad.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema1/img14.svg")

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img15.svg")
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-105px; left:-85px;" src="@/assets/curso/tema1/img23.png")  
                h4 POI (Proof of Participation) 
                p.mb-0 Algoritmo de prueba de participación. Es un protocolo de consenso creado para reemplazar al conocido Proof of Work aportando una mejor seguridad y escalabilidad a las redes que lo implementen.

        .row.justify-content-center.align-items-center.mb-0.pt-4
          .col-lg-8.col-12                  
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.col-12.position-relative
                img.mb-0.position-absolute(style="width:201px; top:-115px; left:-85px;" src="@/assets/curso/tema1/img24.png")  
                h4 P2P
                p.mb-lg-0.mb-3 Las redes P2P o peer-to-peer, son redes conformadas por personas o dispositivos que operan de manera descentralizada y sin responder a un nodo central, haciendo uso de protocolos de comunicación y consenso común, esta red permite el intercambio de información directa entre lo mismos miembros de la red.
          .col-lg-3.col-10
            img.mb-0(src="@/assets/curso/tema1/img16.svg")

    .fondo8.mb-0
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-2.col-10
          div.d-flex.justify-content-center
            img.mb-0(style="width:101px" src="@/assets/curso/tema1/img25.svg")
        .col-lg-10.col-2
          p.mb-0 El hash es un numero generado a partir de un fragmento de información aplicando algoritmos criptográficos, y para el caso del blockchain, dificulta las transacciones fraudulentas.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Clasificación 

    .fondo9
      .bloque-texto-a.color-primario.p-3.mb-5(data-aos="fade-left") 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img26.svg")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 En la actualidad existen distintos tipos de blockchain cada una con sus capacidades y características únicas que se adaptan a distintas necesidades. Las redes blockchain de acuerdo a su ámbito de operación y dependencia pueden clasificarse como pública, privada y la híbrida o federada, a continuación se puede ver en detalle esta clasificación:

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        div(titulo="Públicas")
          p.mb-5 Este tipo de redes, como su nombre lo indica son públicas y cualquier miembro puede hacer parte de ella, este tipo de redes son abiertas y no requiere de una aprobación para agregar miembros, para fomentar su crecimiento genera un plan de beneficios basado en juegos entregando beneficios a la misma red.
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-5.col-10
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img27.svg")
            .col-lg-7.col-12
              h3.mb-4 Características:
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Cualquier miembro puede descargar el código y empezar a correr un nodo público en sus dispositivos locales, validar transacciones en la red, de este modo participar en el proceso de consenso, el proceso para determinar que bloques son añadidos a la cadena y su estado actual.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Cualquier miembro puede enviar transacciones a través de la red y esperar que sean incluidas en la blockchain si son válidas.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Cualquiera puede consular las transacciones en el explorador de transacciones públicas. Las transacciones son transparentes, pero anónimas/ pseudo anónimas.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.col-12
              h3 Entre sus beneficios se encuentran:
              ul.lista-ul--color.lista-ul--separador.mb-lg-0.mb-3
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Mejora en los negocios actuales, a partir de la eliminación de intermediarios.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Protege los usuarios de los desarrolladores de aplicaciones, a partir de acciones que los desarrolladores no tienen autoridad para hacer.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 No hay costos asociados a infraestructura: no requiere de servidores o administradores de sistemas.
            .col-lg-4.col-10
              img.mb-0(src="@/assets/curso/tema1/img28.svg")

        div(titulo="Privadas")
          p.mb-5 Este tipo de red, requiere de una autorización por parte del propietario o creador de la red para adicionar algún miembro o nodo y que este pueda hacer transacciones, este tipo de redes por lo general son implementadas en compañías privadas, manteniendo un control absoluto sobre la misma.
          h3.mb-4 Características: Entre los usos y beneficios de la adopción de este tipo de redes se resaltan:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-5.col-10
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img29.svg")
            .col-lg-7.col-12
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Muy utilizada en gestión de Identidad Digital en las organizaciones e industria
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Favorable en el uso de soluciones de inventario y cadenas de suministro.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Facilita el desarrollo de auditoria automatizada, así como el establecimiento de controles a partir de permisos.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Su nivel de confiabilidad permite a sectores como el medico implementarlo para salvaguardar registros confidenciales de pacientes.

        div(titulo="Hibrida, Federada o de Consorcio")
          p.mb-4 Con estas redes se buscan reducir la dependencia de un nodo central, y busca que dependa de un grupos, consorcios o federaciones que busquen siempre la mejora de la misma red.
          p.mb-4 A diferencia de las redes públicas, estas no permiten a ninguna persona con acceso a internet participar en el proceso de verificar transacciones. Las blockchain federadas son más rápidas (más escalabilidad) y proveen de más privacidad en las transacciones.
          p.mb-5 Entre los beneficios de este tipo de redes, están:

          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.col-12
              p.mb-4 Entre los beneficios de este tipo de redes, están:
              ul.lista-ul--color.lista-ul--separador.mb-lg-0.mb-3
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Reducción de costos por transacción y redundancia de datos.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Reemplaza los sistemas legales, simplificando la gestión de documentos y deshaciéndose de mecanismo de cumplimiento semi-manual.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Permite establecer permisos de lectura, agregando un gran nivel de privacidad y control.
                li 
                  i.fas.fa-pen-square.fa-lg
                  p.mb-0 Al ser distribuido, estas redes son más rápidas lo que redunda en menores costos.                 
            .col-lg-4.col-10
              img.mb-0(src="@/assets/curso/tema1/img30.svg")

    h4.mb-5 A continuación, en la tabla 2, se puede encontrar un resumen con las principales características de las redes blockchain.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.titulo <b>Tabla 2.</b> <i>Tipos de redes blockchain</i>

        .tabla-a.mb-5 
          table
            caption Nota. Adaptado de Grupo Garatú (2018).
            thead(style="border-top: 0px solid;")
              tr.cabecara-tabla
                th 
                th.text-white Acceso
                th.text-white Participantes
                th.text-white Seguridad
                th.text-white Velocidad de transmisión
            tbody
              tr
                td(style="vertical-align: top;") Blockchain Publicas
                td(style="vertical-align: top;") - Cualquiera
                td(style="vertical-align: top;") - Sin permiso<br>- Anónima
                td(style="vertical-align: top;") Mecanismos de consenso descentralizados:<br><br>- Prueba de trabajo<br>- Prueba de participación
                td(style="vertical-align: top;") Lenta
              tr
                td(style="vertical-align: top;") Blockchain Privadas
                td(style="vertical-align: top;") -  Una única organización
                td(style="vertical-align: top;") - Con permisos<br>- Identidades conocidas
                td(style="vertical-align: top;") Algoritmos de consenso propios:<br><br>-  Transacciones verificadas dentro de una organización (centralizado)
                td(style="vertical-align: top;") Más ágil y rápida
              tr
                td(style="vertical-align: top;") Blockchain Federadas o de Consorcio 
                td(style="vertical-align: top;") - Organizaciones múltiples seleccionadas
                td(style="vertical-align: top;") - Con permisos<br>- Identidades conocidas
                td(style="vertical-align: top;") Algoritmos de consenso propios:<br><br>- Varios nodos preseleccionados dentro de las organizaciones (parcialmente descentralizados)
                td(style="vertical-align: top;") Más ágil y rápida
</template>

<script>
export default {
  name: 'Tema1',
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
