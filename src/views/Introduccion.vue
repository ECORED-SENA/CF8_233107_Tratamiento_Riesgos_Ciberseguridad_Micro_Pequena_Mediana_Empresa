<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Muchas empresas realizan una auditoría de seguridad al menos una o dos veces al año. Pero también se pueden hacer mensual o trimestralmente. Los distintos departamentos pueden tener distintos calendarios de auditoría, según los sistemas, las aplicaciones y los datos que utilicen. Las auditorías de rutina, ya sean anuales o mensuales, pueden ayudar a identificar anomalías o patrones en un sistema.
        p.mb-0 Los factores determinantes de la frecuencia con la que una organización elige realizar auditorías de seguridad, dependen de la complejidad de los sistemas utilizados y del tipo y la importancia de los datos en ese sistema. Si los datos en un sistema se consideran esenciales, entonces ese sistema puede auditarse con más frecuencia, pero los sistemas complicados que requieren tiempo para auditarse pueden revisarse con menos frecuencia.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        .row.justify-content-center
          .col-10
            img(src="@/assets/curso/intro/img01.svg")

    .BGIMG01.p-4.mb-4
      .row.justify-content-center.align-items-center
        p Una organización debe realizar una auditoría de seguridad especial después de:
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          .row.justify-content-center
            .col-10
              img(src="@/assets/curso/intro/img02.svg")
        .col-lg-7.order-lg-1.order-2(data-aos="fade-left")
          ul.lista-ul--color
            li
              i.fas.fa-shield-virus(style="color= #583AE2")
              | Una violación de datos.
            li
              i.fas.fa-shield-virus(style="color= #583AE2")
              | Una actualización del sistema. 
            li
              i.fas.fa-shield-virus(style="color= #583AE2")
              | Una migración de datos. 
            li
              i.fas.fa-shield-virus(style="color= #583AE2")
              | Cuando se producen cambios en las leyes de cumplimiento.
            li
              i.fas.fa-shield-virus(style="color= #583AE2")
              | Cuando se implementa un nuevo sistema. 
            li
              i.fas.fa-shield-virus(style="color= #583AE2")
              | Cuando el negocio crece en más de una cantidad definida de usuarios. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Estas auditorías únicas pueden centrarse en un área específica donde el evento puede haber abierto vulnerabilidades de seguridad. Por ejemplo, si acaba de ocurrir una violación de datos, una auditoría de los sistemas afectados puede ayudar a determinar qué salió mal.
        p.mb-0 Someter la infraestructura de TI a una auditoría de seguridad puede ser una tarea desalentadora. Con su arquitectura compleja y cientos de amenazas de seguridad de las que protegerse, necesita una guía completa. Una metodología de auditoría de seguridad de TI consta de pasos a seguir para una evaluación general de la infraestructura de seguridad de la organización, incluidos los aspectos físicos y de #[em software]. Esto ayuda a realizar una auditoría adecuada basada en un marco estándar y siguiendo un proceso simplificado. Desde la recopilación de información hasta el informe final, una metodología de auditoría de seguridad ayuda a hacerlo de manera planificada mediante técnicas de auditorías. Puede ampliar la información a través del siguiente video:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro/img03.svg")

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x1gSQkGerpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
