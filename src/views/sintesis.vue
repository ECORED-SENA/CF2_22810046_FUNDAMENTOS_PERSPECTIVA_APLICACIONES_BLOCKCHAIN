<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 <i>Blockchain</i> es un libro mayor, compartido e inmutable para registrar transacciones, rastrear activos y generar confianza. Un activo puede ser tangible (una casa, un auto, dinero en efectivo, terrenos) o intangible (propiedad intelectual, patentes, derechos de autor, marcas). Prácticamente cualquier cosa de valor puede ser rastreada y comercializada en una red de <i>blockchain</i>, reduciendo el riesgo y los costos para todos los involucrados.

    p.mb-4 Los negocios funcionan con información. Cuanto más rápido la obtienen y más exacta es, y mejor. <i>Blockchain</i> es ideal para obtener esa información, puesto que proporciona datos inmediatos, compartidos y completamente transparentes almacenados en un libro mayor distribuido, es inalterable al que únicamente los miembros autorizados tienen acceso. Una red de <i>blockchain</i> puede hacer seguimiento de pedidos, pagos, cuentas, detalles de producción y mucho más. Además, debido a que los usuarios comparten una única fuente fidedigna de información, puede ver todos los detalles de una transacción de principio a fin, lo que le permite generar mayor confianza y eficiencia, además de obtener más oportunidades.

    p.mb-5 Un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa:


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
