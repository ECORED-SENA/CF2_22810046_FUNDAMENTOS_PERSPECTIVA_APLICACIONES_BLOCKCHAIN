<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contratos Inteligentes

    p.mb-0 Los contratos inteligentes se utilizan para automatizar la ejecución de un acuerdo para que todos los participantes puedan estar seguros de inmediato del resultado, sin la participación de ningún intermediario o pérdida de tiempo, se trata de un código escrito en lenguaje de programación que corre en una plataforma segura –<i><i>Blockchain</i></i>– que lo hace inmodificable y autoejecutable, para facilitar, asegurar, hacer cumplir y ejecutar acuerdos registrados entre dos o más partes, a continuación, se dará explicación al respecto:

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Conceptos

    .bloque-texto-a.color-primario.p-3.mb-5(data-aos="fade-left") 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-lg-0
            img(src="@/assets/curso/tema4/img01.svg")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Los contratos inteligentes, también denominados “<i>Smart Contracts</i>”, han venido cobrando fuerza en todos los ámbitos, y es que hoy en día, con la globalización de la economía, los mercados digitales y el impulso por diversos factores como la pandemia, han llevado a que muchos trámites que requerían de la presencia del interesado, de firmas físicas y papeleo interminable, se reinventen en su forma de realizarse y han encontrado en estos contratos inteligentes la manera de brindar las oportunidades y agilidad para la celebración de acuerdo a partir de transacciones basadas en <i>blockchain</i>.

    .fondo1
      .row.justify-content-center.align-items-center.mb-4.pt-4
        .col-lg-2.col-10  
          img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img02.png")
        .col-lg-10.col-12  
          p.mb-4 <b>Según <i>IBM</i> (2022):</b>
          p.mb-0 Los contratos inteligentes son simplemente programas almacenados en una cadena de bloques que se ejecutan cuando se cumplen condiciones predeterminadas. Por lo general, se utilizan para automatizar la ejecución de un acuerdo para que todos los participantes puedan estar seguros de inmediato del resultado, sin la participación de ningún intermediario o pérdida de tiempo. También pueden automatizar un flujo de trabajo, activando la siguiente acción cuando se cumplen las condiciones. 

      .row.justify-content-center.align-items-center.mb-0.pt-4
        .col-lg-8.col-12  
          h4.mb-4 Esto ha favorecido la inclusión de estos contratos dentro de aplicaciones y soluciones basadas en <i>blockchain</i> para facilitar actividades como:
          .row.justify-content-center.align-items-center.mb-5.pt-4
            .col-lg-11.col-12.dato1.position-relative
              SlyderF.mb-0.position-relative(columnas="col-12 col-lg-4" data-aos="fade-left")
                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 01
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img04.svg')                 
                  p.text-center.mb-0 Gobierno y administraciones públicas
                  
                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 02
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img05.svg')
                  p.text-center.mb-0 Automóvil

                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 03
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img06.svg')
                  p.text-center.mb-0 Compañías de seguros

                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 04
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img07.svg')
                  p.text-center.mb-0 Banca

                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 05
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img08.svg')
                  p.text-center.mb-0 Salud

                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 06
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img09.svg')
                  p.text-center.mb-0 Mercados inmobiliarios

                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 07
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img10.svg')
                  p.text-center.mb-0 Transporte

                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 08
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img11.svg')
                  p.text-center.mb-0 Auditoria

                .tarjeta.tarjeta1.p-4.w-100
                  h3.mb-0(style="color:#d7dadd") 09
                  div.justify-content-center.d-flex.mb-3
                    img(style="width: 93px" src='@/assets/curso/tema4/img12.svg')
                  p.text-center.mb-0 Notariado y registro
        .col-lg-4.col-10  
          img.mb-0(src="@/assets/curso/tema4/img03.png")
      p.mb-5 En comparación con los contratos tradicionales se puede ver una marcada diferencia que nos invita a estudiar la posibilidad de adopción de esta tecnología, en la siguiente gráfica se puede encontrar un paralelo que permite identificar la gran diferencia de los tipos de contratos (ver tabla 3).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.titulo <b>Tabla 3.</b> <i>Comparación contratos tradicionales vs contratos inteligentes </i>

        .tabla-a.mb-0
          table
            caption Nota. Adaptado de Shashank (2019). 
            thead(style="border-top: 0px solid;")
              tr.cabecara-tabla
                th(style="width:120px") 
                th.text-white Contratos tradicionales
                th.text-white Contratos inteligentes
                
            tbody
              tr
                td.d-flex.justify-content-center
                  img.mb-0(style="width:43px" src="@/assets/curso/tema4/img13.svg")
                td <b>1 a 3 días</b>
                td <b>Minutos </b>
              tr
                td.d-flex.justify-content-center
                  img.mb-0(style="width:43px" src="@/assets/curso/tema4/img14.svg")
                td <b>Asignados manuales</b>
                td <b>Asignados automáticos</b>
              tr
                td.d-flex.justify-content-center
                  img.mb-0(style="width:43px" src="@/assets/curso/tema4/img15.svg")
                td <b>Fidecomiso necesario</b>
                td <b>El fidecomiso puede no ser necesario</b>
              tr
                td.d-flex.justify-content-center
                  img.mb-0(style="width:43px" src="@/assets/curso/tema4/img16.svg")
                td <b>Costoso </b>
                td <b>Fracción del costo</b>
              tr
                td.d-flex.justify-content-center
                  img.mb-0(style="width:43px" src="@/assets/curso/tema4/img17.svg")
                td <b>Presentación física (requiere firmas estampadas)</b>
                td <b>Presencial virtual (firma digital)</b>
              tr
                td.d-flex.justify-content-center
                  img.mb-0(style="width:43px" src="@/assets/curso/tema4/img18.svg")
                td <b>Necesita abogado</b>
                td <b>Abogado puede no ser necesario </b>
        
    
    p.mb-0 El funcionamiento de un contrato inteligente está regido por un simple "si/cuando... entonces...", instrucciones de código que están escritas en código en una cadena de bloques. Una red de computadoras ejecuta las acciones, cuando se han cumplido y verificado las condiciones predeterminadas. Estas acciones podrían incluir liberar fondos a las partes apropiadas, registrar un vehículo, enviar notificaciones o emitir un boleto. Luego, la cadena de bloques se actualiza cuando se completa la transacción. Eso significa que la transacción no se puede cambiar y solo las partes a las que se les ha otorgado permiso pueden ver los resultados.

    Separador   
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Aplicación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-10
        img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img19.svg")
      .col-lg-8.col-12
        p.mb-0 En relación a su aplicación, se puede  observar que se ha venido avanzando en la adopción de los contratos inteligentes en varios sectores de la industria y la economía, y es muy común que hoy en día se haga uso de aplicaciones y no se identifique que internamente está soportado por esta tecnología, por ejemplo, la banca hoy en día para la apertura de cuentas o servicios, ya no requiere de la persona física, y ha establecido mecanismos para realizar las validaciones de identidad que permiten validar a un cliente, otros escenarios son los de votaciones, notariado y legales, a continuación se puede observar una gráfica que representa como puede ser adoptada esta tecnología (ver tabla 4).

    .fondo2
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.titulo <b>Tabla 4.</b> <i>Ejemplos de uso de contratos inteligentes </i>

      .tabla-a.mb-0.position-relative.mb-5
          table
            caption Nota. Adaptado de Shashank (2019).<br>De acuerdo al portal Idealex, en su artículo “Contratos inteligentes: ¿cuáles son sus aplicaciones?”  se puede encontrar algunos casos de éxito en donde se ha incorporado esta tecnología:
            thead(style="border-top: 0px solid;")
              tr.cabecara-tabla
                th.text-white Intercambio de valores digitales
                th.text-white Derechos y obligaciones inteligentes
                th.text-white Contrato inteligente básico
                th.text-white Contrato inteligente múltiple
                th.text-white Vendedor presta fondos al comprador para comprar una casa
                th.text-white Organización autónoma distribuida
                th.text-white Gobierno autónomo distribuida
                th.text-white Sociedad autónoma distribuida
                
            tbody
              tr(style="background-color:#f6f6f6")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:39px" src="@/assets/curso/tema4/img20.svg")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:48px" src="@/assets/curso/tema4/img21.svg")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:51px" src="@/assets/curso/tema4/img22.svg")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:64px" src="@/assets/curso/tema4/img23.svg")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:66px" src="@/assets/curso/tema4/img24.svg")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:85px" src="@/assets/curso/tema4/img25.svg")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:61px" src="@/assets/curso/tema4/img26.svg")
                td
                  div.d-flex.justify-content-center
                    img.mb-0(style="width:69px" src="@/assets/curso/tema4/img27.svg")

              tr(style="background-color:#f6f6f6")
                td(style="vertical-align:top") <b>Una simple transacción <i>bitcoin</i>.</b>
                td(style="vertical-align:top") <b>Consumidor compra un flujo de contenido digital.</b>
                td(style="vertical-align:top") <b>Propietario bloquea de forma remota al inquilino que no paga.</b>
                td(style="vertical-align:top") <b>Vendedor presta fondos al comprador para comprar una casa.</b>
                td(style="vertical-align:top") <b>La unidad de la corporación emite sus propios bonos y los compradores controlan pagos a través de un libro mayor compartido.</b>
                td(style="vertical-align:top") <b>Vehículos autónomos realizan entregas p2p, pagan tarifas de peajes locales y compran electricidad local.</b>
                td(style="vertical-align:top") <b>Los colonos de un área previamente deshabitad codifican sus propios servicios gubernamentales autoimpuestos. </b>
                td(style="vertical-align:top") <b>Grupo de colonos de diferentes áreas establecen todos los acuerdos comerciales de cumplimiento .</b>

      br
      div.p-0.mb-5
        h4.mb-0.text-white.d-inline.p-3(style="background-color:#1565c0") <b>CONTRATOS INTELIGENTES Y SUS CASOS DE ÉXITO</b>

      AcordionA.position-relative.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.justify-content-center.align-items-center(titulo="Salud")
          p.mb-4 En la atención médica, los contratos inteligentes ayudan a mejorar los procesos de prueba de seguros, brindan acceso a datos interinstitucionales y brindan a los pacientes la confianza de que sus datos confidenciales están seguros.
          .col-lg-8.col-10
            p.mb-4 <i><i>Robomed</i> Network</i> es una red médica descentralizada que emite sus propios <i>tokens</i> para respaldar contratos inteligentes entre proveedores de atención médica y pacientes. <i><i>Robomed</i> Network</i> se encuentra en fase de pruebas beta y utiliza <i>Robomed</i> <i>EHR</i> (<i>Electronic Health Record</i>).
            p.mb-lg-0.mb-0 Este sistema permite a los usuarios conectarse y gestionar su cooperación basada en contratos inteligentes de <i>blockchain</i> de <i>Ethereum</i>. El contrato digital monitorea todas las interacciones con los pacientes, las métricas de efectividad y las impresiones de los pacientes sobre las interacciones con los proveedores de atención.
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img29.png")
        
        .row.justify-content-center.align-items-center(titulo="Gobierno")
          p.mb-4 Las agencias gubernamentales pueden ejecutar acuerdos con la ayuda de contratos inteligentes, apoyando la justicia y la democracia. Por ejemplo, si un gobierno incluyera contratos inteligentes en el proceso de votación, no habría posibilidad de falsificar una elección.
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img30.png")
          .col-lg-8.col-10
            p.mb-4 Los contratos inteligentes proporcionan un entorno seguro que hace que el sistema de votación sea menos susceptible a la manipulación.
            p.mb-4 Los votos que utilizan contratos inteligentes estarían protegidos por un libro mayor, lo cual es extremadamente difícil de decodificar.
            p.mb-0 Además, los contratos inteligentes podrían aumentar la rotación de votantes, que históricamente es baja debido al sistema ineficiente que requiere que los votantes se alineen, muestren identidad y completen formularios. La votación, cuando se transfiere en línea mediante contratos inteligentes, puede aumentar el número de participantes en un sistema de elección.

        .row.justify-content-center.align-items-center(titulo="Real state")
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img28.png")
          .col-lg-8.col-10
            p.mb-4 La industria de bienes raíces puede usar contratos inteligentes para firmar acuerdos entre partes interesadas en comprar, vender o alquilar bienes raíces.
            p.mb-4 <i>Propy</i> es una de las primeras empresas inmobiliarias en hacer uso de contratos inteligentes. Vieron su primera transacción en septiembre de 2017, cuando alguien compró un apartamento de $ 60,000 en Ucrania.
            p.mb-0 Este mercado inmobiliario permite a los propietarios y corredores publicar propiedades. Los compradores pueden buscar y negociar. Tanto los compradores como los vendedores participan en el contrato inteligente y ambas partes toman medidas específicas a lo largo del proceso para garantizar un juego justo y legal.

        .row.justify-content-center.align-items-center(titulo="Servicios financieros")          
          .col-lg-8.col-10
            p.mb-4 Los contratos inteligentes ayudan a transformar los servicios financieros tradicionales de múltiples formas.
            p.mb-lg-0.mb-0 En el caso de las reclamaciones de seguros, realizan la verificación de errores, el enrutamiento y la transferencia de pagos al usuario si todo se considera apropiado.
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img31.png")
        
        .row.justify-content-center.align-items-center(titulo="Suministro")          
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img32.png")
          .col-lg-8.col-10
            p.mb-4 Tradicionalmente, las cadenas de suministro sufren debido a los sistemas basados en papel donde los formularios pasan por múltiples canales para obtener aprobaciones.
            p.mb-0 El laborioso proceso aumenta el riesgo de fraude y pérdida. <i><i>Blockchain</i></i> puede anular tales riesgos al entregar una versión digital accesible y segura a las partes involucradas en la cadena. Los contratos inteligentes se pueden utilizar para la gestión de inventario y la automatización de pagos y tareas.

    Separador   
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Interacción con otras aplicaciones
          
    .fondo3
      .row.justify-content-center.align-items-center.mb-5.position-relative
        .col-12.position-relative
          img.mb-4(src="@/assets/curso/tema4/img33.png")
          .row.justify-content-center.align-items-center.mb-5.position-absolute(style="top: 65%")
            .col-lg-10.col-12.position-relative.fondo4.p-3.px-4
              p.mb-0 El <i>blockchain</i> cuenta además de <i>Ethereum</i> como plataforma base, con un gran número de proyectos que permiten interactuar con las redes de cadenas de bloques, cada proyecto presenta una propuesta tecnológica que contempla la inclusión de servicios, <i>DApps</i>, <i>wallet</i>, infraestructura, finanzas descentralizadas, <i>gaming</i>, <i>NFT</i> entre otras soluciones, a continuación, vamos a conocer las propuestas de algunos proyectos.

      TabsC.color-acento-contenido.position-relative
        .row.justify-content-evenly.align-items-center.py-3.py-md-4(titulo="Ecosistema <i>Bitcoin</i>")
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img34.png")
          .col-lg-6.col-12
            h3.mb-4 Ecosistema <i>Bitcoin</i>
            p.mb-0 Este proyecto se ha convertido en una innovadora red de pagos y una nueva clase de dinero, en la siguiente figura podemos ver su ecosistema propuesto y su proyecto puede consultarse en: https://bitcoin.org/.
        .row.justify-content-evenly.align-items-center.py-3.py-md-4(titulo="Ecosistema <i>Etherum</i>")
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img35.png")
          .col-lg-6.col-12
            h3.mb-4 Ecosistema <i>Etherum</i>
            p.mb-0 Este proyecto es uno de los proyectos iniciales, y que estableció el punto de partida para los nuevos ecosistemas, este proyecto cuenta con grandes soluciones para <i>Wallets</i>, finanzas descentralizadas, mercados descentralizados, juegos, <i>NFT</i>, entre otros. En la siguiente figura podemos observar el ecosistema de proyectos que dependen de <i>Ethereum</i>, pueden consultar el proyecto en https://ethereum.org/.
        .row.justify-content-evenly.align-items-center.py-3.py-md-4(titulo="Ecosistema <i>Solana</i>")
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img36.png")
          .col-lg-6.col-12
            h3.mb-4 Ecosistema <i>Solana</i>
            p.mb-0 Proyecto <i>blockchain</i> que busca aprovechar al máximo los <i>NFT</i> y contratos inteligentes, se puede observar el ecosistema de soluciones integradas en la siguiente gráfica y consultar el proyecto en https://solana.com/ 
        .row.justify-content-evenly.align-items-center.py-3.py-md-4(titulo="Ecosistema <i>Cardano</i>")
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img37.png")
          .col-lg-6.col-12
            h3.mb-4 Ecosistema <i>Cardano</i>
            p.mb-0 Este proyecto promete ser una plataforma para contratos inteligentes y su integración con grandes soluciones, pueden consultar el proyecto en: https://cardano.org/ 
        .row.justify-content-evenly.align-items-center.py-3.py-md-4(titulo="Ecosistema <i>Polkadot</i>")
          .col-lg-3.col-10
            img.mb-lg-0.mb-3(src="@/assets/curso/tema4/img38.png")
          .col-lg-6.col-12
            h3.mb-4 Ecosistema <i>Polkadot</i>
            p.mb-4 Este proyecto apalancado en proyectos denominados <i>Parachains</i> buscan brindar soluciones de diferentes tipos, en la siguiente figura podemos consultar el ecosistema propuesto y consultar su proyecto en https://polkadot.network/ 
            p.mb-0 Existen muchos más proyectos con infinidad de propuestas para aplicar en el mundo del <i>blockchain</i>, cerca de 10000 proyectos activos y con infinidad de propuestas, los invitamos a estudiarlos tomar su propia decisión con cual trabajar en sus necesidades.


          
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
