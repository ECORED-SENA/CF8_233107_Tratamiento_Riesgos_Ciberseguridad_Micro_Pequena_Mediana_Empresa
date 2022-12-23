<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de auditoría
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Las pequeñas empresas generalmente no tienen grandes equipos de TI para mantenerse al tanto y monitorear la infraestructura de TI y los problemas de seguridad a diario, lo que significa que es más fácil para los piratas informáticos obtener acceso mientras está ocupado haciendo lo que hace día a día. Si es una pequeña empresa y aún no está trabajando con una empresa de TI externa para sus necesidades de TI diarias, vale la pena contratar una para revisar y auditar la seguridad de TI. Esto lo ayudará a comprender dónde debe tomar medidas para mejorar o disponer del presupuesto para invertir en el monitoreo activo de las áreas que tienen más probabilidades de sufrir violaciones de seguridad.
        p.mb-0 La frecuencia con la que una organización realiza sus auditorías de seguridad depende de la industria en la que se encuentre, las demandas de su estructura comercial y corporativa, y la cantidad de sistemas y aplicaciones que se deben auditar.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img01.png")
      
    .row.justify-content-center.mb-4
      .col-xl-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-right")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BGIMG02.hg-01.pe-4
            img(src='@/assets/curso/tema1/img02.svg' style="max-width: 120px;")
            p.col.p-2.mb-0 Las organizaciones que manejan una gran cantidad de datos confidenciales, como servicios financieros y proveedores de atención médica, es probable que realicen auditorías con mayor frecuencia.
            img.img-01(src='@/assets/curso/temas/img01.svg' style="max-width: 40px; margin-right: -20px")
      .col-xl-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-up")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BGIMG02.hg-01.pe-4
            img(src='@/assets/curso/tema1/img03.svg' style="max-width: 120px;")
            p.col.p-2.mb-0 Las organizaciones que manejan solo una o dos aplicaciones les resultará más fácil realizar auditorías de seguridad y es posible que las realicen con menor. frecuencia.
            img.img-01(src='@/assets/curso/temas/img01.svg' style="max-width: 40px; margin-right: -20px")
      .col-xl-4.col-md-8(data-aos="fade-left")
        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.BGIMG02.hg-01.pe-4
            img(src='@/assets/curso/tema1/img04.svg' style="max-width: 120px;")
            p.col.p-2.mb-0 Los factores externos, como los requisitos reglamentarios, también afectan la frecuencia de las auditorías.
            img.img-01(src='@/assets/curso/temas/img01.svg' style="max-width: 40px; margin-right: -20px")

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipos
    
    .bloque-texto-g.color-primario.bloque-inv.p-md-4.p-sm-3.p-2.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img05.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las auditorías de ciberseguridad consisten en evaluar el cumplimiento. Las agencias que realizan una auditoría de seguridad cibernética podrán evaluar si cuentan o no con los mecanismos de seguridad adecuados y, al mismo tiempo, asegurarse de que cumplen con las regulaciones pertinentes.<br><br>Las organizaciones que realizan auditorías de seguridad cibernética pueden adoptar "#[b un enfoque proactivo]'' al diseñar políticas de seguridad cibernética, lo que da como resultado una gestión de amenazas más dinámica. Las auditorías de ciberseguridad son realizadas por proveedores externos para eliminar cualquier conflicto de intereses. Sin embargo, también pueden ser administrados por un equipo interno, siempre que actúen independientemente de su organización matriz.
 
    p El universo de auditoría de ciberseguridad incluye todos los conjuntos de:

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-3(data-aos="fade-right")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/temas/img02.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 Control.
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-3(data-aos="fade-up")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/temas/img02.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 Prácticas de gestión y disposiciones de gobierno.
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-3(data-aos="fade-left")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/temas/img02.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 Riesgo y cumplimiento vigentes a nivel empresarial. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img06.png")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 En algunos casos, el universo de auditoría ampliado puede incluir a terceros vinculados por un contrato que contiene derechos de auditoría; con el creciente número de amenazas cibernéticas, se está volviendo fundamental que el #[b plan de auditoría de cada organización incluya la seguridad cibernética]. Como resultado, se requiere cada vez más que los auditores auditen los procesos, las políticas y las herramientas de ciberseguridad para garantizar que la empresa cuenta con los controles adecuados. Las vulnerabilidades en la seguridad cibernética pueden plantear riesgos graves para toda la organización, lo que hace que la necesidad de auditores de ciber y de TI bien versados en auditorías de seguridad cibernética sea mayor que nunca. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Auditoría interna
      
    .BGIMG04.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img07.svg")
        .col-lg-8(data-aos="fade-left")
          p Una de las trampas comunes para las empresas es asumir que sus soluciones de ciberseguridad se mantienen y administran a través de evaluaciones de riesgo estándar. Este tipo de suposición puede conducir a importantes problemas organizativos. Hoy, de hecho, el desarrollo de tecnologías y su uso en las empresas va mucho más allá del marco de una evaluación general. 
          p.mb-0 En este aparte se cubrirán los pasos para configurar una evaluación de riesgos de seguridad amplia y profunda específica para el negocio. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Qué es una auditoría interna y por qué es necesaria?
    
    p Una evaluación de ciberseguridad es un paso absolutamente crucial para determinar por qué y cómo la empresa utiliza ciertas tecnologías. Esto le permite establecer objetivos y crear parámetros para los siguientes propósitos: 

    .BGIMG01.p-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img08.svg")
        .col-lg-7
          .BGIMG03.mb-4(data-aos="fade-left")
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center
                img(src='@/assets/curso/tema1/img09.svg' style="max-width: 90px;")
                p.col.p-2.mb-0 #[b Definición de estándares de seguridad]<br> La auditoría interna permitirá decidir cuáles son los principios de seguridad y elegir cómo comunicarse sobre el tema con todos los empleados de la organización.
          .BGIMG03.mb-4(data-aos="fade-left")
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center
                img(src='@/assets/curso/tema1/img10.svg' style="max-width: 90px;")
                p.col.p-2.mb-0 #[b Cumplir con las normas y reglamentos]<br> La auditoría mostrará si las soluciones cibernéticas cumplen con sus propios estándares, pero también con los reglamentos externos obligatorios.
          .BGIMG03.mb-4(data-aos="fade-left")
            .mb-0.d-flex
              .d-flex.flex-wrap.align-items-center
                img(src='@/assets/curso/tema1/img11.svg' style="max-width: 90px;")
                p.col.p-2.mb-0 #[b Rellenar los vacíos]<br>  Una auditoría en profundidad permitirá identificar los vacíos en sus medidas de seguridad. Podrá realizar las correcciones necesarias para mejorar su sistema actual e identificar los niveles de rendimiento de sus soluciones implementadas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img12.svg")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 La auditoría interna es útil para hacer un balance de la eficacia de la ciber infraestructura actual, o prepararse para una auditoría externa profesional. Durante la primera mitad de 2019, el sitio Forbes.com informó de más de 3.800 infracciones de seguridad que salieron a la luz y resultaron en el compromiso de 4.100 millones de documentos. Además, al realizar al menos una auditoría integral de ciberseguridad cada trimestre, se mantiene al tanto de las últimas tecnologías de ciberseguridad para evitar que esto suceda.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Fundamentos de un plan de auditoría interna de ciberseguridad 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p La evaluación de los riesgos cibernéticos respalda tanto el análisis de madurez presentado al comité de auditoría y a la junta directiva, como el desarrollo de un plan de auditoría interna de ciberseguridad basado en los riesgos de varios años. El plan plurianual se puede establecer en función de los resultados de la evaluación, realizándose algunas auditorías con más frecuencia que otras, según la urgencia y la naturaleza de otras actividades de evaluación y pruebas realizadas dentro de la organización.
        .BG01.p-4
          p.mb-0 El plan de auditoría interna de ciberseguridad no está grabado en piedra, puede ajustarse en función de la aparición de nuevos riesgos, los cambios en la intensidad relativa, la importancia de las amenazas actuales y otros cambios organizativos.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img13.png")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 El papel de la auditoría interna en el fortalecimiento de la ciberseguridad
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img14.svg")
      .col-lg-8(data-aos="fade-left")
        p La frecuencia y variedad de los riesgos cibernéticos y el daño potencial que pueden causar a las empresas, sus socios comerciales y sus clientes están en constante crecimiento. La mayoría de las empresas se toman en serio estos riesgos, pero se necesitan mayores esfuerzos para abordar los peligros y mantener informados a los líderes empresariales sobre la preparación en ciberseguridad.
        .BG02.p-4
          p.mb-0 La auditoría interna desempeña un papel crucial en el apoyo a las empresas en la lucha constante por gestionar las amenazas cibernéticas, proporcionando una evaluación independiente de los controles existentes o necesarios, y permitiendo que el comité de auditoría y la junta directiva comprendan mejor y mitiguen los diversos riesgos asociados con el mundo digital.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Auditoría externa
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Las auditorías externas de ciberseguridad son una excelente manera de revisar sistemáticamente la situación actual de una empresa con respecto a la seguridad de los datos, redes y dispositivos; para averiguar si existen posibles problemas de seguridad y cómo resolverlos antes de que ocurran violaciones de seguridad dañinas. 
        p Las amenazas a la seguridad incluyen prácticas de los empleados, desastres naturales y ataques maliciosos como #[em malware], virus y ataques de #[em phishing]. Asegurarse de contar con medidas de protección y monitoreo resilientes en los correos electrónicos, archivos de datos, monitoreo de red, copias de seguridad de datos y actualizaciones de #[em software] debería garantizar que la empresa permanezca segura y en línea.
        p.mb-0 Para guiarlo a través del proceso de revisión del estado de las medidas de seguridad, en este ítem explicamos qué es una auditoría y por qué la empresa necesita una, además de cubrir algunas de las preguntas más frecuentes sobre las auditorías de seguridad. 
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img15.svg")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img16.svg")
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Mantener segura la red de TI, incluido el #[em software], aplicaciones, datos y dispositivos #[b es imprescindible] para que el negocio funcione sin problemas y cumpla con las normas. No detectar y resolver posibles lagunas de seguridad puede ser un error costoso que requiere habilidades especializadas para resolver, que la mayoría de personas no tiene en casa. Por esta razón, una auditoría externa de seguridad de TI es algo muy recomendable para que todas las pequeñas empresas consideren dentro del proceso anual de planificación y presupuestación.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Cuál es el proceso para una auditoría externa de ciberseguridad?
    
    p Ya sea que esté realizando una auditoría internamente o esté solicitando la ayuda de una empresa de TI externa, el proceso de la auditoría de seguridad de TI generalmente seguirá los seis pasos que se describen a continuación; recopilación de datos, definición de la auditoría, definición de las amenazas, evaluación de las medidas de seguridad existentes, priorización y elaboración de una lista de acciones lista para la implementación. 

    .BGIMG05.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Recopilación de datos, comunicación y discusión
            p.mb-0 Sus equipos internos deberán estar abiertos a compartir sus métodos y prácticas para realizar su trabajo con el equipo de TI encargado de realizar su auditoría. A menudo, es mejor nombrar uno o dos portavoces de cada equipo que tengan experiencia en el trabajo y los procesos del departamento para canalizar la información clave al equipo de auditoría de manera eficiente. 
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img17.svg")
        .row.justify-content-around.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Definición de la auditoría
            p.mb-0 El alcance de la auditoría, será necesario compilar una lista de todos los activos que requerirían tiempo y dinero para reparar en caso de una brecha de seguridad. Esto incluirá computadoras y teléfonos móviles, hasta cosas más sutiles, como datos almacenados en sus unidades compartidas, correos electrónicos y carpetas de archivo. Una vez que tenga esta lista, deberá decidir qué activos son los más importantes para su negocio para proteger, y esto formará la base para su auditoría de seguridad. 
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img18.svg")
        .row.justify-content-around.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Definición de sus amenazas
            p.mb-0 Usando su lista de activos prioritarios para proteger, enumere las amenazas potenciales para cada uno. Las amenazas pueden ser desde desastres naturales como inundaciones, negligencia de los empleados como contraseñas débiles, traer sus propios dispositivos no seguros al trabajo o dejar una computadora portátil en el tren hasta amenazas externas como piratas informáticos, #[em malware] y virus. 
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img19.svg")
        .row.justify-content-around.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Evaluar las medidas de seguridad existentes
            p.mb-0 Aquí es donde realmente vale la pena usar un equipo externo para evitar cualquier sesgo o pasar por alto áreas clave internamente. ¿Están sus empleados actualizados sobre los últimos métodos de piratería utilizados? ¿A menudo dejan sus dispositivos desbloqueados y muestran datos confidenciales? ¿Se cambian las contraseñas regularmente? Al final de este paso, tendrá una buena idea de qué tan bueno es su negocio para defender sus activos más importantes. 
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img20.svg")
        .row.justify-content-around.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Priorizando
            p.mb-0 Una vez que sepa cuáles son sus activos más importantes para proteger y dónde están sus debilidades para protegerlos, puede formar una lista de prioridades para abordar con su lista de acciones de auditoría de seguridad. Para priorizar su lista de acciones, debe considerar la probabilidad de que se produzca una infracción contra cada activo y equilibrar esto con el daño que sería para su negocio si ocurriera. 
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img21.svg")
        .row.justify-content-around.align-items-center
          .col-lg-6.order-lg-1.order-2
            .h4 Lista de Acción
            p.mb-0 Ahora se ha hecho el trabajo duro y es hora de que la empresa de TI enumere las formas en que reducirá la amenaza de las brechas de seguridad identificadas. Esto podría ser con nuevo #[em software], capacitación del personal o mejores prácticas para reducir la probabilidad de que se produzcan ataques dañinos o infracciones. 
          .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img22.svg")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Auditoría interna vs. externa: ¿cuál es la diferencia?
    
    p No hay garantía de que la empresa evite un ataque; sin embargo, hacer que un auditor analice las prácticas y herramientas de TI podría ser la diferencia entre que la organización sea la próxima víctima o se mantenga segura. A continuación, se presentan las diferencias entre cada una:

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGIMG06.hg-02.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src="@/assets/curso/tema1/img23.svg")
          .h4.text-center Las auditorías externas
          p Utilizan una amplia gama de herramientas de #[em software] para encontrar brechas en sus sistemas de seguridad.
          p Son profesionales altamente calificados y no son baratos.
          p Puede resultar complicado encontrar un profesional que reúna las cualificaciones necesarias.
          p.mb-0 Se deben realizar una vez al año.
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .BGIMG07.hg-02.p-4
          .row.justify-content-center.mb-4
            .col-6
              img(src="@/assets/curso/tema1/img24.svg")
          .h4.text-center Las auditorías internas
          p Son menos costosas y más fáciles de administrar.
          p Permiten a las empresas recopilar datos y establecer sus propios puntos de referencia en el proceso de auditoría.
          p Una auditoría interna puede generar sesgos en el proceso de revisión.
          p Muchos comités de auditoría y juntas han establecido expectativas para que la auditoría interna comprenda y evalúe los riesgos potenciales
          p.mb-0 Se debe realizar trimestralmente.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Cómo realizar una auditoría exhaustiva de ciberseguridad? 

    p Hay varias formas de recopilar los datos necesarios, pero primero tendrá que elegir entre una auditoría interna o externa. Con conocimiento y amplia experiencia en el tema, los auditores externos son capaces de identificar #[b fallas y brechas de seguridad en la ciberinfraestructura].

    .BGIMG08.p-4.mb-5
      .row.justify-content-end
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img25.svg')
        .col-lg-9.p-4
          p.mb-0 #[b La trampa]: su alto precio y el hecho de que es difícil identificar profesionales que tengan las habilidades y la experiencia requerida. Sin embargo, el éxito de la auditoría dependerá en gran medida de la capacidad para comunicarse con el auditor. Si el auditor no puede acceder rápidamente a los datos que necesita, la auditoría llevará más tiempo, aumentando innecesariamente la factura y arriesgándose a obtener resultados incorrectos; todos estos factores se combinan para que sea más un lujo que una necesidad, de ahí la propensión de los grandes grupos a considerar la auditoría como un gasto corriente.<br><br>Otra posibilidad son las auditorías internas que, para la mayoría de las pequeñas y medianas empresas, son una solución mucho más viable. El jefe de una pyme ya conoce los procesos de la empresa, y puede recopilar los datos que necesita sin alterar los hábitos de trabajo. Este no es el caso de un auditor externo que primero debe dedicar tiempo a estos puntos antes de poder comenzar la misión.
        .col-lg-1.d-none.d-lg-flex(style="position: absolute; margin-right: -5%")
          img.img-02(src='@/assets/curso/temas/img04.svg' style="max-width: 85px;")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Cinco preguntas para incluir en la auditoría de ciberseguridad
    
    p.mb-5 A pesar de su aparente complejidad y de la idea de que una auditoría interna requiere una enorme cantidad de trabajo, en realidad no es más que definir objetivos e indicadores clave de rendimiento (KPI), y luego verificar la adecuación de las políticas de la empresa con estos objetivos. Las siguientes preguntas arrojan más luz sobre esto.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number01.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 ¿Cuáles son las configuraciones de seguridad?

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p De acuerdo con algunas prácticas y reglamentos generales de protección de datos, cualquier empresa que trate con ciudadanos de Latinoamérica está legalmente obligada a designar un Oficial de Protección de Datos para supervisar toda la información interna y externa. La persona que designe para esta misión tendrá un papel central que desempeñar en su auditoría: comenzará por determinar qué podría representar un riesgo para el negocio diario. Evidentemente, tendrá que elaborar una lista de los activos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Equipamiento informático.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Información sensible (datos de la empresa y del cliente).
          li 
            .lista-ol--cuadro__vineta
              span c
            | Cualquier cosa que sea crítica y que lleve tiempo o dinero arreglar en caso de que surja un problema.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img26.svg")
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img27.png')
      .col-lg-7(data-aos="fade-left")
        p Una vez que se hayan identificado los activos, debe decidir sobre el alcance de la configuración de seguridad. Puede dividir aproximadamente los activos en dos grupos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Ítems incluidos en la auditoría
          li 
            .lista-ol--cuadro__vineta
              span b
            | Elementos que no se incluirán en la auditoría
        p.mb-0 Naturalmente, es imposible controlarlo todo. Por lo tanto, debe colocar los activos más importantes en el centro de la auditoría y luego ampliar gradualmente el círculo para determinar qué es realmente esencial. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number02.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 ¿Cuáles son las amenazas que se ciernen?
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p una vez que se haya identificado los activos más importantes, se debe identificar qué representa una amenaza para ellos. Este paso es fundamental, porque los problemas que se pueden encontrar son de todo tipo: desde contraseñas insuficientemente protegidas por parte de los empleados y filtraciones de datos, hasta incendios e inundaciones, entre posibles desastres. 
        p La auditoría debe tener en cuenta todas las amenazas, la lista puede ser ilimitada, ya que es imposible protegerse contra todas las amenazas imaginables. Sin embargo, siempre que se priorice lo que es absolutamente crucial para el funcionamiento diario del negocio, esto permite tomar todas las medidas razonables para proteger a los empleados y al negocio de posibles amenazas cibernéticas.
        p.mb-0 En la siguiente infografía se presentan los peligros más comunes:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img28.png")
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/img29.svg')
        .BGR03.p-3(x="12%" y="6%" numero="+")
          .h5.mb-2 Empleados
          p.mb-0 La fuerza de una cadena se mide por su eslabón más débil. Si los empleados no son la primera línea de defensa, eso es suficiente para amenazar la integridad de toda su infraestructura. Pregúntese si los empleados están capacitados en ciberseguridad.
        .BGR03.p-3(x="4%" y="30%" numero="+")
          .h5.mb-2 Suplantación de identidad
          p.mb-0 Los ataques de #[em phishing] son la raíz de la mayoría de las filtraciones de datos. Muchos intentos de #[em phishing] incluso eluden las medidas de seguridad predeterminadas, de ahí la importancia de capacitar a los empleados para detectar este tipo de actividad.
        .BGR03.p-3(x="4%" y="55%" numero="+")
          .h5.mb-2 Amenazas internas
          p.mb-0 Nadie quiere imaginar que un colaborador interno pueda perjudicar a su empresa, por pura malicia o por accidente. Infortunadamente, sucede, y es un problema bastante común.
        .BGR03.p-3(x="18%" y="78%" numero="+")
          .h5.mb-2 Ataques distribuidos de denegación de servicio
          p.mb-0 Una falla DDoS esencialmente ataca a un objetivo (generalmente un servidor <em>web</em>), lo sobrecarga y evita que funcione normalmente. Este es particularmente el caso de los sitios comerciales.
        .BGR03.p-3(x="88%" y="6%" numero="+")
          .h5.mb-2 Contraseñas vulnerables
          p.mb-0 La adquisición de contraseñas débiles o la compra ilegal de contraseñas son las técnicas más empleadas por los piratas informáticos para acceder a una red.
        .BGR03.p-3(x="96%" y="30%" numero="+")
          .h5.mb-2 #[em Malware]
          p.mb-0 El #[em software] malicioso o #[em malware] puede presentarse de diferentes formas: caballos de Troya, spyware y gusanos, sin olvidar el ransomware cuya peligrosidad es cada vez más preocupante.
        .BGR03.p-3(x="96%" y="55%" numero="+")
          .h5.mb-2 Robos y desastres
          p.mb-0 Aunque ninguno de estos eventos es probable, las consecuencias financieras de no estar preparado podrían ser graves para la empresa.
        .BGR03.p-3(x="82%" y="78%" numero="+")
          .h5.mb-2 Equipo de terceros
          p.mb-0 Al permitir que los empleados conecten sus dispositivos personales a su wifi o usen unidades USB, corre el riesgo de debilitar involuntariamente sus protocolos de seguridad.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number03.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 ¿Están funcionando las medidas de seguridad actuales?
      
    p una vez que haya identificado las amenazas que podría enfrentar, deberá hacer un balance para evaluar si las medidas de seguridad actuales están a la altura de la tarea de defender la ciberinfraestructura. En esta etapa, evaluará todas las medidas de seguridad para identificar debilidades:

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGIMG09.hg-03.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img30.png")
          .h4.mb-0 ¿Ciertos procesos de seguridad están desactualizados y deben mejorarse?
      .col-lg-5.col-10(data-aos="fade-left")
        .BGIMG09.hg-03.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img31.png")
          .h4.mb-0 ¿La organización sufre de falta de conocimiento o es negligente en el tema de ciberseguridad?
    
    p.mb-5 Esta es un área en la que sería útil recurrir a un auditor externo ya que ningún sesgo interferiría con las conclusiones. La auditoría de seguridad debe abstraerse de sus posibles predisposiciones con respecto a los empleados que ocupan determinadas funciones o incluso del desempeño. Si una persona es más capaz de realizar una función de seguridad cibernética, se le debe asignar esa función para garantizar la protección continua.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number04.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 ¿Cómo clasificar los riesgos?
    
    p en la auditoría, la priorización de riesgos es posiblemente el paso más importante de todo el proceso. Primero se debe tomar la lista de amenazas potenciales que discutidas anteriormente, después comparar el daño potencial con la probabilidad de que esas amenazas se materialicen. Luego se asigna una puntuación de riesgo a cada uno. Por tanto, considere un incendio que probablemente destruya su equipo y sus instalaciones. Tal incendio impediría a la empresa continuar con sus actividades por tiempo indefinido. El riesgo puede describirse como “alto”. Dado que un incendio es menos probable que un ataque de #[em malware], esta puntuación puede reducirse; al priorizar los riesgos para la evaluación, es importante considerar los siguientes puntos que se presentan a continuación:
    
    .row.justify-content-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 en la auditoría, la priorización de riesgos es posiblemente el paso más importante de todo el proceso. Primero se debe tomar la lista de amenazas potenciales que discutidas anteriormente, después comparar el daño potencial con la probabilidad de que esas amenazas se materialicen. Luego se asigna una puntuación de riesgo a cada uno. Por tanto, considere un incendio que probablemente destruya su equipo y sus instalaciones. Tal incendio impediría a la empresa continuar con sus actividades por tiempo indefinido. El riesgo puede describirse como “alto”. Dado que un incendio es menos probable que un ataque de #[em malware], esta puntuación puede reducirse; al priorizar los riesgos para la evaluación, es importante considerar los siguientes puntos que se presentan a continuación: 
      .col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img32.svg")
    
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-6.col-10.mb-xl-0.mb-4(data-aos="fade-right")
        .BGIMG10.hg-04.p-4
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img33.svg' style="max-width: 65px; position: absolute")
              .h5.col.ps-4.p-2.ms-5.mb-0 Tendencias recientes
          p.mb-0 ¿Qué métodos utilizan actualmente los piratas informáticos para acceder a los datos? ¿Cuáles son las amenazas cuyo nivel de peligrosidad va en aumento? ¿Hay alguna innovación que proporciona más protección?
      .col-xl-3.col-md-6.col-10.mb-xl-0.mb-4(data-aos="flip-right")
        .BGIMG10.hg-04.p-4
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img34.svg' style="max-width: 65px; position: absolute")
              .h5.col.ps-4.p-2.ms-5.mb-0 Tendencias relacionadas con su industria
          p.mb-0 Si la empresa opera en el sector médico o financiero, es más probable que sea víctima de un intento de violación de su seguridad. ¿Cuáles son las tendencias predominantes en su industria y cómo puede protegerse de ellas de manera más proactiva?
      .col-xl-3.col-md-6.col-10.mb-xl-0.mb-4(data-aos="flip-left")
        .BGIMG10.hg-04.p-4
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img35.svg' style="max-width: 65px; position: absolute")
              .h5.col.ps-4.p-2.ms-5.mb-0 Violaciones históricas
          p.mb-0 ¿La organización ha sido hackeada alguna vez? ¿Ha habido alguna vez una violación de la seguridad física en el pasado? ¿Tienen medidas para evitar que esto vuelva a suceder?
      .col-xl-3.col-md-6.col-10.mb-xl-0.mb-4(data-aos="fade-left")
        .BGIMG10.hg-04.p-4
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img36.svg' style="max-width: 65px; position: absolute")
              .h5.col.ps-4.p-2.ms-5.mb-0 Legislación y cumplimiento
          p.mb-0 ¿Es una empresa privada o una organización pública? ¿Quién tiene acceso a estos datos? Por ejemplo, si es una empresa privada y maneja información financiera accesible por un gran número de empleados, el factor de riesgo será alto.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number05.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 ¿Cómo explotar los resultados de la auditoría?

    .BGIMG11.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center(titulo="1")
          .col-lg-5.order-lg-1.order-2
            .h4 Talleres de formación
            p Incluso las acciones modestas de concientización y capacitación en seguridad pueden contribuir en gran medida a reducir el impacto de un ataque cibernético. Los empleados son seres humanos, entonces cometerá errores. Sin embargo, la implementación de talleres de capacitación y la organización periódica de sesiones de reactivación de conocimientos, permitirá aumentar la conciencia de los empleados sobre la ciberseguridad y minimizar los errores.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img37.png")
        .row.justify-content-center(titulo="2")
          .col-lg-5.order-lg-1.order-2
            .h4 Copias de seguridad
            p Con el papel cada vez mayor de la tecnología en el lugar de trabajo, muchas empresas ahora están completamente basadas en la nube, por lo que la carga se traslada al almacenamiento y las copias de seguridad en línea. Se estima que casi la mitad de las pequeñas y medianas empresas no tienen un plan de respaldo y recuperación de datos, y el 60 % de esas empresas cierran dentro de los seis meses posteriores a la pérdida de sus datos. Si se realizan copias de seguridad de los datos, con regularidad fuera de la red principal, siempre se tendrá algo a lo que recurrir en caso de crisis.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img38.png")
        .row.justify-content-center(titulo="3")
          .col-lg-5.order-lg-1.order-2
            .h4 Protección de correo electrónico
            p Como se mencionó anteriormente, los ataques de #[em phishing] van en aumento, en parte debido a su creciente sofisticación y la dificultad para detectarlos. Todo lo que necesita es un clic en un correo electrónico de #[em phishing] para que el atacante obtenga acceso a sus datos. Es cierto que existen filtros antispam para ayudar a eliminar este tipo de correo electrónico, pero nada supera a los empleados capacitados para reconocerlos.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img39.png")
        .row.justify-content-center(titulo="4")
          .col-lg-5.order-lg-1.order-2
            .h4 Actualizaciones de software
            p Todos han experimentado este tipo de situaciones: si se enciende la computadora se está instalando y actualizando el #[em software]. Tan molesto como puede ser, también es de suma importancia. Estas actualizaciones de #[em software] a menudo contienen los últimos parches de seguridad esenciales para proteger la máquina. Por lo tanto, es muy importante aplicar las actualizaciones manuales del plan de seguridad para que todas las máquinas de la red estén actualizadas.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img40.png")
        .row.justify-content-center(titulo="5")
          .col-lg-5.order-lg-1.order-2
            .h4 Administrador de contraseñas
            p Los seres humanos no están hechos para recordar cientos de contraseñas únicas y complejas. Es por eso por lo que a menudo se usan variaciones de las mismas contraseñas una y otra vez. El #[em software] de administración de contraseñas guarda contraseñas únicas y complicadas. Permite a los usuarios conectarse fácilmente a un sitio o una aplicación. Esto elimina el riesgo de compartir archivos con las contraseñas y las hace mucho más difíciles de adivinar.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img41.png")
        .row.justify-content-center(titulo="6")
          .col-lg-5.order-lg-1.order-2
            .h4 Monitoreo de red
            p Los ciberdelincuentes no tendrán que esperar una segunda vez para obtener acceso a la red. Para combatir esto, puede valer la pena investigar el mejor #[em software] de monitoreo de red que pueda alertar sobre actividades sospechosas, como intentos de acceso de fuentes dudosas.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img42.png")

    .row.justify-content-end.align-items-end.pt-lg-5.mb-4
      .col-lg-3.col-6.img-03(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img43.png")
      .col-lg-10.BGR03.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-10
            p.mb-0 #[b Puntos para recordar]: se presentan las herramientas y los conocimientos necesarios para realizar una auditoría de ciberseguridad. No obstante, estos controles internos deben realizarse periódicamente, y no de forma aislada y discontinua. La primera auditoría le permitirá establecer la línea de base para todos los controles futuros, para medir más adelante lo que funcionó y lo que necesita mejorar. Al actualizar continuamente los procesos e invertir en las últimas tecnologías, se está creando una cultura que se enfoca en el impacto de la ciberseguridad y destaca los peligros de no contar con las medidas de seguridad adecuadas.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Métodos
    
    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Las unidades de negocio y los departamentos de tecnología de la información integran la gestión del riesgo cibernético en los procesos de toma de decisiones y las operaciones diarias. Son la primera línea de defensa de una organización. La segunda línea incluye administradores de riesgos de tecnología e información, quienes establecen mecanismos de gobernanza y supervisión, supervisan las operaciones de seguridad e implementan medidas según sea necesario, a menudo bajo el liderazgo del Director de Seguridad de la Información. Cada vez más empresas reconocen la necesidad de una tercera línea de defensa cibernética: una revisión independiente de las medidas de seguridad y su desempeño por parte de la función de auditoría interna. 
        p.mb-0 La auditoría interna debe desempeñar un papel central en la evaluación e identificación de oportunidades para fortalecer la seguridad empresarial. Al mismo tiempo, los profesionales de auditoría interna tienen el deber de informar al comité de auditoría y al directorio que los mecanismos de control a su cargo están establecidos y funcionando adecuadamente, lo cual es una preocupación creciente dentro de los directorios, siendo los directores capaces de hacer frente a las obligaciones legales y financieras.        
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img44.png")
    
    p #[b Método de evaluación del riesgo cibernético y mecanismos de defensa]: el examen del riesgo cibernético de una organización comienza con tres preguntas clave.

    .BGIMG12.p-4.mb-4
      .row.justify-content-center
        .col-lg-5.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center.align-items-center
              .col-3
                figure.mb-4
                  img(src="@/assets/curso/tema1/img45.svg")
              .col.p-2
                p.mb-0 ¿Quién puede atacar?
        .col-lg-5.mb-4(data-aos="fade-left")
          .BGR04A
            .row.justify-content-center
              .col-3
                figure.mb-4
                  img(src="@/assets/curso/tema1/img45.svg")
              .col.p-2
                p.mb-0 ¿Los atacantes son delincuentes, competidores, proveedores independientes, empleados internos descontentos, piratas informáticos motivados por diversos intereses o alguien más?
        .col-lg-5.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center
              .col-3
                figure.mb-4
                  img(src="@/assets/curso/tema1/img45.svg")
              .col.p-2
                p.mb-0 ¿Qué están buscando y cuáles son los riesgos comerciales que deben mitigarse?
        .col-lg-5.mb-4(data-aos="fade-left")
          .BGR04A
            .row.justify-content-center
              .col-3
                figure.mb-4
                  img(src="@/assets/curso/tema1/img45.svg")
              .col.p-2
                p.mb-0 ¿Quieren dinero o propiedad intelectual?
        .col-lg-5.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center
              .col-3
                figure.mb-4
                  img(src="@/assets/curso/tema1/img45.svg")
              .col.p-2
                p.mb-0 ¿Tienen la intención de interrumpir el negocio o arruinar la reputación de la empresa?
        .col-lg-5.mb-4(data-aos="fade-left")
          .BGR04A
            .row.justify-content-center
              .col-3
                figure.mb-4
                  img(src="@/assets/curso/tema1/img45.svg")
              .col.p-2
                p.mb-0 ¿Podrían sus acciones generar riesgos para la salud y la seguridad?
        .col-lg-5.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center
              .col-3
                figure.mb-4
                  img(src="@/assets/curso/tema1/img45.svg")
              .col.p-2
                p.mb-0 ¿Qué tácticas pueden emplear?

    p Las empresas deben establecer un enfoque triple para ayudarse y poder abordar las amenazas identificadas en la revisión de las preguntas mencionadas anteriormente, por ello deben tener en cuenta los siguientes métodos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-primario
          p(numero="1" titulo="Seguridad") La mayoría de las organizaciones cuentan con mecanismos de control, como defensas perimetrales, gestión de identidades y medidas de protección de datos, para protegerse contra amenazas conocidas y emergentes. Los programas basados en la gestión de riesgos permiten priorizar los controles relacionados con los principales riesgos del negocio.
          p(numero="2" titulo="Vigilancia") La inteligencia de amenazas, los sistemas de monitoreo de seguridad y los análisis de comportamiento y riesgo ayudan a detectar actividades maliciosas o no autorizadas, como cambios en la configuración de aplicaciones o transferencias de datos inusuales, y ayudan a la organización a adaptarse al entorno cambiante de amenazas cibernéticas.
          p(numero="3" titulo="Resiliencia") La implantación de protocolos de respuesta a incidentes, herramientas de investigación y planes de continuidad y recuperación del negocio permite rectificar la situación en el menor tiempo posible y reducir el impacto. Permite a una organización segura, vigilante y resiliente establecer las bases para su marco general de evaluación y auditoría interna de seguridad cibernética.
          p(numero="4" titulo="Marco de evaluación de la ciberseguridad") La auditoría interna también debe aplicar un enfoque global para obtener una visión general del mecanismo de ciberseguridad y evitar dar una falsa sensación de seguridad al realizar solo auditorías específicas como parte de una evaluación de preparación para la seguridad cibernética.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img46.svg")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características y aplicación
    
    p Las auditorías resaltan los puntos débiles, como las puertas traseras que utilizan los ciberdelincuentes para tipos comunes de estafas. El objetivo principal de la auditoría de seguridad es doble:

    .row.justify-content-center.mb-4
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BGIMG03.p-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img47.svg")
            .col-lg
              p.mb-0 Para lograr el cumplimiento con las entidades reguladoras y validar estándares certificables en la industria.
      .col-lg-6.col-10(data-aos="fade-left")
        .BGIMG03.p-4
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src="@/assets/curso/tema1/img47.svg")
            .col-lg
              p.mb-0 Proporcionar al personal directivo, clientes y proveedores una evaluación detallada de la postura de seguridad de la empresa.

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img48.png')
      .col-lg-7
        p El propósito principal de cualquier auditoría de seguridad es comprender #[b cuántos datos tiene y cómo están protegidos]. Por tanto, ofrece información sobre qué conjuntos de datos son críticos y los protocolos que necesita para protegerlos. Una auditoría de seguridad de la red ayuda a comprender todos los riesgos de ciberseguridad que amenazan a la empresa. Estas evaluaciones mejoran la destreza del equipo de TI frente a un ciberataque. 
        p.mb-0 Esto se puede lograr con un proceso de evaluación eficaz, como las auditorías de seguridad, que ayuda a determinar amenazas, establecer controles de seguridad y mejorar aún más la seguridad general de la infraestructura y las operaciones comerciales. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Estándares populares de auditoría de seguridad de la información
    
    .cajon-b.color-primario.cajon-end.p-3.mb-4(data-aos="fade-right")
      .row.justify-content-between
        .col-lg-10
          p.mb-0 Abordando la creciente necesidad de sólidos estándares de seguridad de TI, los órganos rectores y los reguladores de todo el mundo han establecido un sólido estándar de seguridad de la información que es un mandato en la región. Si bien algunos de ellos se aplican ampliamente a toda la industria de TI, muchos de los estándares de auditoría de seguridad de la información que se desarrollan son específicos de la industria:
        .col-lg-1.col-2
          img(src='@/assets/curso/tema1/img49.svg')

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        img(src='@/assets/curso/tema1/img50.svg')

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Importancia de la auditoría de ciberseguridad

    .BGIMG01.p-4.mb-4(data-aos="flip-up")
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8
          img(src='@/assets/curso/tema1/img51.svg')
        .col-lg-7
          p.mb-0 Una auditoría de seguridad de la información es un proceso de evaluación que ayuda a identificar vulnerabilidades y riesgos de seguridad en la infraestructura de TI de una organización. La exposición al riesgo no solo afecta la seguridad de los sistemas y la infraestructura, sino que también afecta la operación comercial general. La seguridad de la información no se trata solo de la seguridad de TI, sino también de la seguridad de la información/datos. Entonces, esta es la razón por la que se cree firmemente que la auditoría de seguridad de la información es esencial para todas las organizaciones y debe ser una práctica habitual adoptada por las empresas para mantenerse seguras y en cumplimiento.
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="BGR05")
          .row.justify-content-around(titulo="Determina la postura de seguridad actual")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 La auditoría de seguridad de la información claramente ayuda a la organización a determinar el estado de seguridad actual. Los resultados de la auditoría de las organizaciones sabrán si su defensa de seguridad es eficaz o no contra las amenazas. Con esto, la organización puede obtener una mejor comprensión de sus prácticas y sistemas de TI internos y externos. Los informes de auditoría comprenden una lista detallada de hallazgos, destacando áreas débiles y ciertas soluciones propuestas. El informe guiará aún más a las empresas para mejorar sus políticas, procedimientos, controles y prácticas de seguridad.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img52.svg')
          .row.justify-content-around(titulo="Determina la necesidad de cambio en las políticas y estándares")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 El proceso de auditoría de la información ayuda a descubrir áreas débiles y lagunas en los sistemas y controles de seguridad. Destaca la eficacia del sistema de seguridad de TI de la organización. Los informes generados a partir de los hallazgos de la auditoría sugerirán si las políticas, los procedimientos y el control de seguridad implementados son adecuados para proteger a la organización. Las soluciones propuestas y los comentarios guiarán a las organizaciones para realizar los cambios necesarios en el sistema, los estándares y las políticas de seguridad.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img53.svg')
          .row.justify-content-around(titulo="Proteger el sistema y la infraestructura de TI contra ataques")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 La auditoría de seguridad de la información es una forma para que las organizaciones evalúen sus sistemas de seguridad e identifiquen fallas en ellos. La evaluación ayuda a identificar vulnerabilidades y descubrir posibles puntos de entrada y fallas de seguridad que los piratas informáticos pueden comprometer para obtener acceso a sistemas y redes. De esta manera, la auditoría ayuda a mantener un control regular sobre la efectividad de las medidas de seguridad que, a su vez, mantienen seguros los datos valiosos.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img54.svg')
          .row.justify-content-around(titulo="Evalúa la seguridad del flujo de datos")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 La auditoría de seguridad de la información no solo controla la seguridad de los sistemas y redes, sino que también garantiza la seguridad de los datos críticos para el negocio. Los datos son hoy en día un activo esencial de cualquier organización. Dado el valor que tiene, proteger los datos es hoy en día la principal prioridad de todas las organizaciones. Dicho esto, la auditoría de seguridad determina el flujo de datos en toda la organización. Además, los resultados o hallazgos obtenidos del informe ayudan a las organizaciones a sentar las bases para cualquier mejora o aplicación de la seguridad en la red. Esto ayuda a establecer sólidas medidas de seguridad contra ataques y filtraciones de datos.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img55.svg')
          .row.justify-content-around(titulo="Verifica el cumplimiento")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 La mayoría de los organismos reguladores y gubernamentales de todo el mundo han establecido sólidas medidas, requisitos y estándares de seguridad a los que deben adherirse las empresas para protegerse contra las amenazas de seguridad cibernética prevalecientes. Se espera que las organizaciones aseguren el cumplimiento de varios estándares y proporcionen evidencia de estos. Entonces, aquí es cuando la auditoría de seguridad de la información juega un papel clave para ayudar a las organizaciones a cumplir. La realización de auditorías periódicas ayudará a la organización a determinar si cuenta o no con las medidas adecuadas implementadas para lograr el cumplimiento de diversos estándares y certificaciones de seguridad. La auditoría le da a la organización una dirección para implementar medidas y lograr el cumplimiento.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img56.svg')
          .row.justify-content-around(titulo="Mantiene actualizadas las medidas de seguridad")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Las auditorías de seguridad periódicas determinarán si las medidas actuales están implementadas y son adecuadas para protegerse contra las diversas amenazas de seguridad. La auditoría brinda una imagen realista de cuán efectivas son las medidas de seguridad y si pueden resistir el panorama de amenazas en evolución. De esta manera mantiene las medidas de seguridad de las organizaciones avanzadas y actualizadas.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img57.svg')
          .row.justify-content-around(titulo="Formular nuevas políticas y procedimientos de seguridad")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Dependiendo del resultado de la auditoría de seguridad de la información, las empresas pueden trabajar en áreas de mejora para corregir la brecha en los sistemas. Con eso, pueden formular una nueva política y procedimiento de seguridad para abordar el panorama de amenazas en evolución. La auditoría funciona como una guía para que las organizaciones desarrollen estrategias para implementar controles de seguridad y políticas y procedimientos relacionados para garantizar el cumplimiento. En general, ayuda a la organización a tomar una decisión informada sobre la actualización de sus medidas de seguridad.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img58.svg')
          .row.justify-content-around(titulo="Efectividad de la capacitación y concientización sobre seguridad")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 La auditoría de seguridad de la información destaca fallas en sistemas, procesos y personas. Entonces, con eso, destaca la efectividad de los programas regulares de capacitación y concientización sobre seguridad que lleva a cabo la organización. Esto les da a las organizaciones una verificación de la realidad sobre sus esfuerzos para realizar capacitaciones de seguridad periódicas y si necesitan o no mejorar el programa de alguna manera.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img59.svg')
          .row.justify-content-around(titulo="Gestión de respuesta a incidentes")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Las auditorías de seguridad de la información determinarán la efectividad de la gestión de respuesta a incidentes de una organización. Destaca la falla en el proceso y prepara a la organización para una situación imprevista. Los informes de auditoría también destacarán si la respuesta a incidentes actual es efectiva o no y, si las organizaciones están preparadas para una emergencia como una brecha de seguridad cibernética.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img60.svg')
          .row.justify-content-around(titulo="Complementa la infraestructura con la seguridad de TI")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Para cualquier organización determinada, su infraestructura y tecnología de TI deben coincidir con el nivel de seguridad que implementan. Por lo tanto, una auditoría de TI puede ayudar a las organizaciones a comprender las herramientas de seguridad adecuadas para su negocio. La auditoría ayuda a determinar si la empresa necesita soluciones de seguridad centralizadas o #[em software] específico para abordar diferentes riesgos y amenazas. La auditoría de seguridad de la información realizada por un experto en seguridad brinda un hallazgo detallado de la auditoría con áreas débiles que deben abordarse y soluciones propuestas para mitigar el riesgo y proteger el negocio en general.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img61.svg')

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿La organización necesita una auditoría de ciberseguridad?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Si una empresa quiere evitar una violación de datos, necesita una auditoría de seguridad cibernética. Estas auditorías ayudan a la empresa a cumplir con los requisitos legales, reglamentarios y contractuales de ciberseguridad. 
        p.mb-0 Una vez que se auditen las prácticas de ciberseguridad de la organización, comprenderá mejor las capacidades de gestión de riesgos. Las auditorías de ciberseguridad también aumentan su reputación como titular de datos. Tienen la oportunidad de aprender sobre la gestión de riesgos y la importancia de la formación de los empleados. También asegura operaciones continuas mientras optimiza los mejores protocolos de gestión de crisis de la organización. Es de recordar que los piratas informáticos apuntan a más que las vulnerabilidades del sistema: también explotan los procesos, procedimientos y empleados de ciberseguridad. Una auditoría de ciberseguridad ofrece una vista panorámica de las debilidades, amenazas y riesgos de ciberseguridad de la empresa, así como el impacto de cada uno.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img62.png")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Cuáles son los beneficios de una auditoría de ciberseguridad?
    
    p Cuando realiza una auditoría de seguridad cibernética, puede mejorar los sistemas y abordar cualquier debilidad. Estos son algunos de los beneficios más visibles:

    .BGIMG13.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-6.py-5
          img(src="@/assets/curso/tema1/img63.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Qué cubre una auditoría de ciberseguridad?
    
    p Para mantener los datos seguros, es mejor comprender qué cubre una auditoría de seguridad cibernética. El alcance de estas evaluaciones detecta vulnerabilidades y riesgos en toda la infraestructura de TI. Los auditores suelen abordar lo siguiente:

    .row.justify-content-center.mb-4(data-aos="zoom-out")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .BGIMG14.hg-05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema1/img64.svg' alt='AvatarTop')
          .text-white
            h4.text-center Seguridad de datos
            p.text-center.mb-0 Una auditoría de seguridad de datos comienza con una revisión completa del control de acceso de la red. Los auditores identifican si hay alguna forma de encriptación, la protección en reposo y la transmisión de datos.
        .BGIMG14.hg-05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema1/img65.svg' alt='AvatarTop')
          .text-white
            h4.text-center Seguridad operacional
            p.text-center.mb-0 Una auditoría de seguridad analiza todas las políticas de seguridad que tiene implementadas. También examina cada procedimiento, proceso y control en la estrategia de prevención de pérdida de datos.
        .BGIMG14.hg-05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema1/img66.svg' alt='AvatarTop')
          .text-white
            h4.text-center Seguridad de la red
            p.text-center.mb-0 Los auditores revisan todos los controles de red y protocolos de seguridad. Examinan si el centro de operaciones de seguridad está funcionando y verifican si el antivirus está configurado correctamente.
        .BGIMG14.hg-05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema1/img67.svg' alt='AvatarTop')
          .text-white
            h4.text-center Sistema de seguridad
            p.text-center.mb-0 Los auditores se aseguran de que el proceso de fortalecimiento de los datos funcione correctamente, verifican que los parches de seguridad estén actualizados y que el acceso privilegiado se administre.
        .BGIMG14.hg-05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema1/img68.svg' alt='AvatarTop')
          .text-white
            h4.text-center Seguridad física
            p.text-center.mb-0 Los auditores verifican el estado de todos los dispositivos físicos utilizados para acceder a la red. Analizan el cifrado de disco y todos los controles basados en roles. 
        .BGIMG14.hg-05.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/tema1/img69.svg' alt='AvatarTop')
          .text-white
            h4.text-center Auditorías internas y externas
            p.text-center.mb-0 Si se desea realizar una auditoría de seguridad cibernética, el departamento de TI normalmente se puede hacer. Sin embargo, existe una pequeña posibilidad de que no tengan todas las herramientas para realizar dicha tarea correctamente.

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img70.svg')
      .col-lg-8
        p La subcontratación puede ser bastante costosa si dirige una pequeña empresa sin departamento de TI. Pero aún puede aprender a auditar la seguridad cibernética de la red. Dicho esto, los auditores externos ofrecen una mirada objetiva e imparcial a los sistemas, identificando hábilmente las debilidades y los problemas. También son los críticos más duros, ya que el análisis imparcial puede descubrir todas las vulnerabilidades de la ciberseguridad. Al final, ofrecerán informes completos con soluciones detalladas para cada problema que encuentren.
        p.mb-0 Si bien no es la métrica óptima, la elección de auditorías internas o externas finalmente se reduce al presupuesto. La función de auditoría interna en ciberseguridad es analizar y reparar un sistema con el que el equipo de TI está familiarizado. Sin embargo, esto puede generar sesgos o incluso pasar por alto aspectos de la ciberseguridad que tienen el potencial de afectar a la empresa. Los auditores externos, sin embargo, no tienen reparos en dejar saber exactamente dónde se encuentran las debilidades del sistema.

    p Una auditoría de seguridad cibernética generalmente tiene siete procesos para garantizar el éxito, estos se presentan a continuación:

    .row.justify-content-center.mb-5(data-aos="zoom-out")
      AcordionA(tipo="a" clase-tarjeta="BGR05")
        .row.justify-content-center(titulo="Definir el alcance de la auditoría")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Para una auditoría de seguridad óptima, se enumeran los activos y se agrupan los datos confidenciales. También se necesita conocer el stock de hardware: ¿cuántos dispositivos hay disponibles y operativos? Después del rodeo, se define el perímetro de seguridad para todo. De esa manera, los auditores sabrán qué incluir en el proceso de auditoría y qué dejar de lado.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img71.png')
        .row.justify-content-center(titulo="Compartir los recursos con los auditores")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Los auditores necesitan conocer a todos los miembros de los equipos, especialmente a aquellos que trabajan en áreas sensibles. Para realizar una auditoría de ciberseguridad más detallada, el equipo de evaluación debe conocer todos los puntos de contacto con el sistema. Necesitan comprender cómo trabaja cada persona, las herramientas que utilizan y cómo acceden a la red. Así es como los auditores obtienen una mejor comprensión de las políticas de ciberseguridad.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img72.png')
        .row.justify-content-center(titulo="Revisar los estándares de cumplimiento")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Antes de pasar por los movimientos de una auditoría de seguridad cibernética, se debe analizar los requisitos de cumplimiento. Estas reglas y regulaciones varían según el estado o país en el que se encuentre. Los auditores necesitan todos los detalles de cumplimiento. Si no se tienen actualizados, ofrecerán un tutorial para garantizar que el negocio se alinee con los requisitos de la industria que realice.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img73.png')
        .row.justify-content-center(titulo="Mostrar la estructura de red")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Cuando los dueños de negocios preguntan cuál es el objetivo principal de una auditoría de seguridad, todo se reduce a la divulgación completa de las brechas de seguridad en sus empresas. Los auditores necesitan una visión completa de la estructura de la red. Deben tener acceso al equipo de TI que apoya al equipo de auditoría en cualquier procedimiento para identificar vulnerabilidades. Una vez que encuentran puertas traseras o brechas en su infraestructura, pueden averiguar si está protegido contra ellos o no.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img74.png')
        .row.justify-content-center(titulo="Comprender las vulnerabilidades del sistema")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 La mayoría de los propietarios de negocios desconocen los riesgos a los que están expuestos antes de realizar una auditoría de seguridad cibernética. Una auditoría es esencialmente una revelación. Puede ver todos los problemas con sus defensas (si los hay). Comprenderá los riesgos que enfrenta en línea y las leyes y regulaciones que se aplican al negocio. También ayuda a que los auditores sepan exactamente qué partes de la red necesitan protección.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img75.png')
        .row.justify-content-center(titulo="Evaluar la gestión de riesgos cibernéticos")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Una auditoría de seguridad cibernética ofrece una descripción completa de cada vulnerabilidad en el sistema y cómo los piratas informáticos pueden explotarlas. Esto ayuda a actualizar el plan de gestión de riesgos cibernéticos. Si las políticas de defensa actuales son ineficaces, es hora de una actualización. Se pueden instalar herramientas de análisis mejoradas e implementar una nueva estrategia DLP.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img76.png')
        .row.justify-content-center(titulo="Priorizar respuestas")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Una vez finalizada la auditoría de seguridad cibernética, se puede decidir qué hacer a continuación con un mejor sentido de prioridad. La auditoría identifica qué parte de la red está más expuesta y ofrece soluciones para resolver estos problemas. Al priorizar las amenazas más apremiantes, se asegurará de que los datos de la empresa estén seguros mientras evita la mayoría de los ataques cibernéticos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img77.png')
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Lista de verificación de auditoría de ciberseguridad

    p Una lista de verificación de auditoría de seguridad cibernética incluye los requisitos básicos que deben evaluar los auditores. La mayoría de los elementos de la lista de verificación se adaptan a cada empresa según la industria y el tamaño del negocio. Sin embargo, en cada auditoría se incluye un conjunto básico de categorías. Estos son los elementos esenciales que debe solicitar independientemente de su nicho:

    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
        h5 Tabla 1
        span Lista de chequeo
      
      .tabla-a.color-acento-contenido(data-aos="zoom-in")
        table
          thead
            tr
              th(style="background-color: #E8E8E8; width: 60%").text-center ITEM
              th(style="background-color: #E8E8E8; width: 20%").text-center SÍ
              th(style="background-color: #E8E8E8; width: 20%").text-center NO
          tbody    
            tr
              td Un inventario de todos los activos de #[em hardware].
              td
              td
            tr
              td Un inventario de todo el #[em software] utilizado en la empresa.
              td
              td
            tr
              td Herramientas para la gestión continua de vulnerabilidades.
              td
              td
            tr
              td Controles de privilegios administrativos.
              td
              td
            tr
              td Configuración de seguridad de #[em hardware] y #[em software] en todos los dispositivos, como portátiles, terminales, servidores y #[em Smartphone].
              td
              td
            tr
              td  Horarios de mantenimiento y monitoreo, así como registros de auditoría.
              td
              td
            tr
              td Protección de correo electrónico y navegador.
              td
              td
            tr
              td Defensas contra #[em malware].
              td
              td
            tr
              td Acceso controlado a los puertos de red, incluidos todos los protocolos y datos del servidor.
              td
              td

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Con qué frecuencia se realiza una auditoría de ciberseguridad?
    
    p.mb-5 Una vez que aprenda a auditar la seguridad cibernética, debe responder otra pregunta: ¿con qué frecuencia debe ejecutar estas auditorías en los sistemas? La respuesta es engañosa. Depende del tamaño de la empresa y presupuesto. Las grandes multinacionales realizan auditorías de seguridad cibernética mensualmente ya que manejan grandes centros de datos. Una empresa mediana requiere estas auditorías dos veces al año, dependiendo del volumen de las operaciones. Las pequeñas empresas solo necesitan una auditoría anual.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Pensamientos finales
    
    p Como propietario de un negocio, se debe comprender los riesgos y amenazas en internet. La red no está exenta de actores maliciosos. Las auditorías de ciberseguridad están diseñadas para ayudar a comprender las vulnerabilidades del sistema. Las auditorías periódicas pueden ayudar a aumentar la seguridad de los datos mientras mejoran la reputación con los clientes y socios comerciales. Una auditoría de ciberseguridad adecuada se centra en los datos y las operaciones en curso. Destaca las partes débiles de la infraestructura y red. Las auditorías de seguridad ayudan a mejorar la seguridad con informes detallados que indican lo que se debe mejorar. Las auditorías analizan todos sus activos y garantizan que sus procesos de seguridad funcionen de manera eficiente con actualizaciones y rectificaciones recomendadas.

    .BGIMG08.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-end
        .col-lg-3.col-6.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img78.svg')
        .col-lg-9.p-4
          p.mb-0 Las auditorías de seguridad garantizan una auditoría en profundidad de la infraestructura de una organización y sus posturas de seguridad. Ayuda a determinar la exposición al riesgo, detecta vulnerabilidades y fallas de seguridad que pueden afectar la seguridad de la organización. En general, la auditoría de seguridad de la información facilita la gestión de riesgos, el gobierno de riesgos, la continuidad del negocio y la gestión de incidentes, la gestión de riesgos de terceros y el cumplimiento de los mejores estándares y regulaciones de la industria establecidos por los órganos rectores y reguladores mundiales de la industria.
        .col-lg-1.d-none.d-lg-flex(style="position: absolute; margin-right: -5%")
          img.img-04(src='@/assets/curso/temas/img04.svg' style="max-width: 85px;")

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Técnicas de recopilación de información
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Las auditorías de ciberseguridad ayudan a las organizaciones a establecer si sus prácticas, políticas y herramientas de ciberseguridad actuales están a la altura de la tarea de mantener los datos y sistemas seguros. Sin embargo, las auditorías de seguridad cibernética pueden ser difíciles de realizar con regularidad cuando no se está seguro de qué buscar exactamente. Aunque técnicamente no es un requisito para realizar una auditoría de seguridad cibernética, el uso de las herramientas y tecnologías adecuadas facilitará mucho el proceso. Por ejemplo, el uso de una solución de descubrimiento y clasificación de datos le dará una mejor comprensión de qué datos tiene, dónde se encuentran y qué tan confidenciales son los datos. Con este entendimiento, puede desarrollar una política de seguridad de la información que sea más relevante para los datos.
        p.mb-0 El uso de una plataforma de seguridad de datos automatizada y en tiempo real le permitirá generar informes personalizados, que se pueden presentar a los auditores para darles una idea de los controles que tiene implementados y cuán efectivos son. Por ejemplo, puede generar un informe que enumera todas las cuentas de usuario (incluidas las cuentas de usuario inactivas) y los privilegios asociados. Una solución de auditoría en tiempo real proporcionará un desglose completo de exactamente quién accede a qué datos, cuándo, desde dónde y desde qué dispositivo.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img79.png")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Recolección de Información en ciberseguridad
    
    p El marco NICE está diseñado por NIST para proporcionar un vocabulario y definiciones comunes para varios trabajos y conjuntos de habilidades de ciberseguridad. Dentro del marco, se definen varios trabajos  diferentes y se describen las tareas asociadas y los conjuntos de habilidades. Una tarea importante dentro de la ciberseguridad es recopilar y analizar datos. En esta sesión del tema sobre ciberseguridad y sus auditorías, se describen algunos de los roles de trabajo que realizan esta tarea dentro del dominio cibernético, los conocimientos y habilidades necesarios para hacerlo y cómo obtener este conjunto de conocimientos y habilidades.

    .BGIMG15.p-4.mb-5(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            .h4 Creación de requerimientos de cobranza
            p.mb-0 El primer paso en el proceso de recopilación de datos es identificar qué datos deben recopilarse. Lograr esto requiere la capacidad de identificar brechas en los datos recopilados actualmente, determinar qué datos deben recopilarse y saber dónde se pueden encontrar esos datos. Una habilidad importante para lograr este paso es conocer las posibles fuentes de datos. Por ejemplo, saber qué datos se pueden recopilar de puntos finales, redes, datos de código abierto, bases de datos, etc.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img80.png")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            .h4 Recopilación de datos
            p.mb-0 Una vez que se ha definido el esfuerzo de recopilación, el siguiente paso es realizar la recopilación real de los datos. Esta etapa del proceso también requiere el conocimiento de las fuentes de datos, pero se centra en los métodos y herramientas necesarios para realizar la recopilación sin introducir artefactos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img81.png")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            .h4 Preprocesamiento
            p.mb-0 Los datos recopilados rara vez son perfectos. Antes de realizar cualquier análisis, a menudo es necesario realizar un preprocesamiento. Esto permite que el analista elimine cualquier error o artefacto obvio en los datos, identifique los vacíos de recopilación que deben llenarse y estandarice o transforme los datos en un formato utilizable. En esta etapa del proceso, un analista se beneficiaría de una experiencia en análisis de datos, ya que se necesitan herramientas y técnicas específicas para completarlo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img82.png")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            .h4 Análisis
            p.mb-0 La etapa de análisis del proceso es donde la experiencia en ciencia de datos es más valiosa. En esta etapa, el analista debe estar familiarizado con las herramientas y técnicas estadísticas y de extracción de datos necesarias para convertir los datos sin procesar en inteligencia utilizable que pueda probar o refutar las hipótesis del analista. El analista también debe tener habilidades de programación y secuencias de comandos para realizar esfuerzos de análisis a escala y de manera eficiente.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img83.png")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            .h4 Informes
            p.mb-0 Una etapa final e importante en el proceso es la presentación de informes. En esta etapa, el analista desarrolla visualizaciones e informes que permiten a las partes interesadas comprender los esfuerzos de recopilación y análisis y los resultados y conclusiones extraídos del análisis.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img84.png")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Quién recopila la información cibernética?
      
    p.mb-5 Dentro del marco NICE, NIST define tres roles de trabajo diferentes que realizan la recopilación de información cibernética: analista de explotación, analista de red objetivo y operador cibernético. Si bien estos trabajos pueden realizar tareas muy diferentes, utilizan muchas de las mismas herramientas, técnicas y procedimientos en la etapa de recopilación de datos del trabajo.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .BGIMG16.hg-06.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img85.png")
          .h4.text-center Un analista de explotación 
          p.mb-0 Es un profesional de la ciberseguridad que se enfoca en identificar debilidades y vulnerabilidades potencialmente explotables en una red objetivo. Se centra en la recopilación de datos útiles sobre la red de destino, analizándolos, buscando debilidades y determinando si existe o no un vector de ataque potencial.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-up")
        .BGIMG16.hg-06.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img86.png")
          .h4.text-center Un analista de red 
          p.mb-0 Como objetivo aprovecha la tecnología para recopilar datos y rastrear un objetivo humano. Este tipo de analista utilizará datos de fuente abierta y todo lo que pueda recopilarse de los dispositivos del objetivo, para crear un perfil sobre un individuo y determinar sus patrones habituales, redes y más.
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .BGIMG16.hg-06.p-4
          figure.mb-4
            img(src="@/assets/curso/tema1/img87.png")
          .h4.text-center Un operador cibernético 
          p.mb-0  Es similar a un analista de explotación, pero se enfoca en la amplitud en lugar de la profundidad. El objetivo de un operador cibernético es recopilar datos de una variedad de fuentes para encontrar, rastrear y explotar objetivos potenciales. La mayor parte de esta función es la recopilación y el procesamiento de datos.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Qué se necesita saber?
    
    p Si bien estos son tres trabajos muy diferentes, funcionan de manera similar. Los tres necesitarán algunos conocimientos fundamentales, la capacidad de realizar la recopilación, el procesamiento de datos y la comprensión de las implicaciones legales de su función:

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            p.mb-0 #[b Fundamentos]: para desempeñar con eficacia cualquiera de los roles laborales que realizan, es necesario conocer los fundamentos de la informática. Los datos importantes pueden almacenarse en una variedad de medios diferentes, y un analista necesita saber cómo recopilarlos independientemente de la ubicación. Las principales fuentes de datos para un analista de ciberinformación son los puntos finales y la red. Un analista debe estar familiarizado con los principales sistemas operativos (Windows, Linux, Mac, Android e iOS), dónde se pueden almacenar datos útiles en estos dispositivos (sistema de archivos, RAM, etc.) y cómo navegar por estos dispositivos y extraer los datos. Los analistas también deben ser competentes en la recopilación de datos de red. Esto podría incluir configurar dispositivos de monitoreo, analizar los datos recopilados y saber qué buscar (estadísticas, datos ocultos, etc.).
          li 
            .lista-ol--cuadro__vineta
              span a
            p.mb-0 #[b Recopilación y procesamiento de datos]: un analista de datos cibernéticos tiene la responsabilidad de realizar de manera efectiva cada paso en el proceso de análisis de datos. Cada uno de estos pasos requiere ciertos conocimientos, destrezas y habilidades.
          li 
            .lista-ol--cuadro__vineta
              span a
            p.mb-0 #[b Aspectos legales - leyes]: una consideración importante a lo largo del proceso de recopilación de datos son las leyes y reglamentos en torno a la recopilación de datos. Un recopilador de datos de seguridad cibernética debe estar familiarizado con todas y cada una de las leyes y regulaciones que limitan qué datos se pueden recopilar, cómo se pueden recopilar y cómo se pueden utilizar.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img88.png")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Cómo se empieza?

    .cajon-b.color-primario.cajon-end.p-3.mb-4(data-aos="fade-right")
      .row.justify-content-between
        .col-lg-10
          p.mb-0 Como se describió anteriormente, los tres roles laborales utilizan herramientas y técnicas similares para lograr sus objetivos. Un solicitante debe tener una base amplia en las técnicas necesarias, con profundidad en ciertas áreas determinadas por el rol específico. El conocimiento general necesario para todos los roles es una formación en #[b informática, análisis de datos y ciberseguridad].
        .col-lg-1.col-2
          img(src='@/assets/curso/tema1/img89.svg')
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-2(data-aos="fade-right")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img90.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 La informática enseña los fundamentos y las posibles fuentes de datos.
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-2(data-aos="fade-up")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img90.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 La ciencia de datos ayuda con el procesamiento y el análisis.
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-2(data-aos="fade-left")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img90.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 La ciberseguridad puede ser necesaria para recopilar, comprender y actuar sobre los datos recopilados.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img91.png")
      .col-lg-8(data-aos="fade-left")
        p Existen buenos recursos para obtener estos antecedentes, y puede ser una buena idea investigar el examen #[b #[em Certified Ethical Hacker]] (CEH), ya que demuestra que un solicitante tiene los conocimientos de informática y seguridad cibernética para el puesto. Más allá de los antecedentes generales, puede ser conveniente centrarse en ciertas áreas de la función específica que respalda la recopilación de datos.
        .BG02.p-4
          p.mb-0 #[b Por ejemplo], un analista de explotación debe centrarse en comprender las vulnerabilidades de la red y el punto final, un analista de la red objetivo puede centrarse en la inteligencia de código abierto y, un operador cibernético puede especializarse en el reconocimiento.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Las diferentes etapas recopilación de una auditoría
    
    p Para cada fase, se describe el propósito de esa fase y el papel de la gestión de TI:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-primario
          .row(numero="a" titulo="Etapa de anuncio")
            p Esta es la etapa durante la cual los auditores anuncian su intención de auditar grupos, características, sistemas, etc. La mayoría de los departamentos de auditoría interna intentan planificar su trabajo por adelantado. Incluso pueden conocer su horario planificado con un año completo de anticipación. No pueden divulgar más detalles que los nombres y fechas preliminares de la auditoría, auditor líder o líder del equipo. Cuanto mayor sea la demora, más suave será el plan. Al igual que cualquier otro equipo de operaciones, las personas, el clima, la tecnología y otros factores comerciales retrasan los cronogramas de revisión.
            p.mb-0 A veces las auditorías son cíclicas y se tienen que hacer trimestralmente, cada dos años, etc. Estas auditorías son más fáciles de planificar. Se conoce la carga de trabajo asociada y tendrá un plan de dotación de personal para cumplir con los recursos necesarios para la auditoría. Sin embargo, a veces los oyentes aparecen sin previo aviso. Esto suele suceder cuando las cosas no salen según lo planeado.
          .row(numero="b" titulo="Carta de compromiso")
            p Los equipos de auditoría utilizan cartas de compromiso comercial para describir los objetivos específicos de la empresa. Tal vez quieran evaluar el cumplimiento de HIPAA o revisar la efectividad de sus controles de administración de acceso e identidad. Deben definir claramente la intención y el cronograma propuesto para cada fase del compromiso. También es una oportunidad para que el equipo de auditoría se presente a la empresa. Comprender el equipo de auditoría y el papel de cada uno ayudará a que todo el proyecto funcione sin problemas.
            p Además de establecer los objetivos de la auditoría, la carta de compromiso comercial describe el alcance de la auditoría. Esto implica determinar qué sistemas se pueden revisar y el período de exploración (rango de fechas para la revisión) y otros detalles.
            .BG02.p-4
              p.mb-0 La información del alcance suele ser solo una estimación de los auditores, ya que es posible que no tengan el conocimiento específico del sistema, para saber si el alcance es demasiado grande o pequeño para lograr los objetivos establecidos.
          .row(numero="c" titulo="Actividad de alcance y brechas auto identificadas")
            p durante el ejercicio de alcance, el auditor le dirá qué sistemas planea examinar, el período de análisis, la cantidad de muestras que planea tomar, el tamaño de la muestra, etc. Parte de esta información se basará en la experiencia previa con la organización o sistema. Si un grupo interno lleva varios años realizando la misma auditoría, el alcance inicial puede ser correcto. Sin embargo, si esta es la primera vez que se realiza una auditoría, si la composición del equipo ha cambiado o si el sistema se ha sometido a una revisión, es posible que este no sea el caso.
            .BG02.p-4.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-10
                  p.mb-0 Su fase de anuncio debe incluir una autoevaluación y un análisis de brechas. La mayoría de los auditores le permitirán proporcionarles información sobre defectos conocidos por adelantado. Si tiene un plan de acción y ha completado un proceso de planificación importante, puede ayudar a mejorar su puntaje de auditoría.
                .col-lg-2.col-4
                  img(src="@/assets/curso/tema1/img94.svg")
            p.mb-0 Los auditores están más preocupados por asegurarse de que las cosas se hagan bien que por saber quién recibe el crédito, por detectar brechas y hacer cambios. La fase de alcance es un buen momento para revelar las lagunas en la auto identificación. Algunos auditores prefieren que esto suceda durante las negociaciones del compromiso, así que es importante asegurarse de verificar las expectativas.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img92.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img93.png")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="d" titulo="Trabajo de campo y pruebas de control")
            p Aquí es donde se llevará a cabo la mayor parte del trabajo pesado. El auditor primero pedirá que se proporcione información sobre los procesos y procedimientos. Los auditores entrevistarán a los administradores del sistema para ver cómo llevan a cabo sus tareas diarias y luego verificarán la documentación de respaldo. 
            p.mb-0 Los procedimientos operativos escritos son siempre los mejores. Incluso si se hace lo correcto, si no está documentado, puede esperar que el problema se note durante la auditoría final. Sin documentación escrita, no hay garantía de que el proceso se repite de la misma manera cada vez. Si no se documentan, las transiciones o los desastres de los empleados pueden impedir que los administradores habituales realicen sus funciones y provocar cambios en los procesos.
          .row(numero="e" titulo="Pruebas de control")
            p Una vez que el auditor ha identificado todos los controles, verifica su eficacia. Antes de examinar el sistema, los auditores tratan de determinar si los controles cumplen con los objetivos estratégicos. Revisarán el control y asumirán que se ha implementado correcta y consistentemente. También examinarán los aspectos técnicos del control y los sistemas que se supone que debe proteger. Si existe un riesgo significativo de violaciones de la política, incluso si se implementan los controles, es posible que no se consideren efectivos y deben revisarse. A veces, esto simplemente significa modificar la documentación escrita del control para reflejar mejor su diseño. A veces tendrá que borrar los comandos y empezar de nuevo.
            .BG02.p-4.mb-4
              p.mb-0 Una vez que los auditores han evaluado la efectividad de los controles, los revisan. Aquí es donde se ve que algo está funcionando bien. Aunque los controles pueden considerarse efectivos, es posible que no lo sean en la implementación real. Es posible que el procedimiento se haya realizado incorrectamente o no se haya seguido.
          .row(numero="f" titulo="Informes")
            p Los informes suelen tener dos partes principales:
            .BG02.p-4.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-4
                  img(src="@/assets/curso/tema1/img95.svg")
                .col-lg-10
                  .h5 Sección 1: declaración de opinión
                  p.mb-0 El informe del auditor comienza con una declaración de su opinión sobre la eficacia y eficiencia generales de los controles de la organización. Esto debe ser sucinto si todo va bien y no hay problemas importantes que informar.
            .BG02.p-4.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-2.col-4
                  img(src="@/assets/curso/tema1/img96.svg")
                .col-lg-10
                  .h5 Sección 2: recomendaciones
                  p.mb-0 La segunda parte del informe contiene recomendaciones. Los auditores no pueden ser demasiado específicos aquí, ya que esto daría lugar a un conflicto de intereses al revisar los controles. Si lo guían paso a paso sobre cómo arreglar el cheque y luego lo aprueban en la siguiente ronda, sus motivos serán cuestionables. Por lo tanto, dirán qué debe corregirse, pero no cómo.

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Recomendaciones

    .bloque-texto-g.color-primario.p-md-4.p-sm-3.p-2.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img97.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las auditorías internas regulares son esenciales para garantizar que la organización cumpla con los estándares de cumplimiento antes de ser evaluada por un auditor externo. Las auditorías internas periódicas son un requisito para algunos marcos de seguridad. El análisis de riesgos debe ser un proceso continuo, en el cual una entidad cubierta revisa regularmente los registros para rastrear el acceso a la e-PHI y detectar incidentes de seguridad, evalúa periódicamente la efectividad de las medidas de seguridad implementadas y reevalúa periódicamente los riesgos potenciales para la e-PHI. Estas auditorías están destinadas a realizar una evaluación precisa y exhaustiva de los riesgos y vulnerabilidades potenciales para la confidencialidad, integridad y disponibilidad de la información de salud electrónica protegida en poder de la organización.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Documentación requerida
    
    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 La documentación completa es fundamental para demostrarle a un auditor de cumplimiento que la organización está tomando las medidas necesarias para cumplir con los requisitos. Dependiendo de su marco, es posible que deba proporcionar a los auditores pruebas de cumplimiento que se remontan a varios años. Esto podría incluir informes de #[em firewall], resultados de pruebas de penetración, registros de eventos de seguridad, políticas de la empresa, evaluaciones de riesgos anteriores, lo que sea. Mantener estos sólidos informes bien organizados junto con las listas de verificación y otra documentación hará que la realización de evaluaciones de riesgos de TI regulares y auditorías internas sea mucho más fácil. 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img98.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number01.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 Hacer un inventario de los activos existentes
    
    .row.justify-content-center.align-items-center.BGIMG01.p-4.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img99.png")
      .col-lg-7(data-aos="fade-left")
        p.mb-0 Al realizar una auditoría de seguridad, el primer paso es hacer un inventario de los activos de la organización. Tener una comprensión clara de lo que está actualmente en uso proporcionará una imagen clara de qué activos deben protegerse, cualquier vulnerabilidad asociada y qué controles tiene la organización para protegerlos. Durante este paso, querrá asegurarse de encontrar y documentar todos los activos de TI de la organización. Un análisis de riesgo adecuado debe cubrir todos los activos relevantes, incluido el software, los datos regulados, las bases de datos, los servidores, las estaciones de trabajo, los dispositivos de seguridad y los procesos comerciales asociados. Según el tamaño de la organización, es posible que este proceso deba facilitarse con el #[em software] de gestión de activos de TI (ITAM).
      
    .BGIMG17.p-4.mb-4
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col-xl-4.col-md-6.BGR06.p-2
          .row.justify-content-center.mb-2
            .col-lg-3.col-4
              img(src="@/assets/curso/tema1/img100.svg")
          .h5.text-white.text-center Consejos para la gestión de activos de TI
      .row.justify-content-center
        .col-xl-8.col-md-10.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center.align-items-center
              .col-2
                figure.mb-4
                  img(src="@/assets/curso/tema1/img101.svg")
              .col.p-2
                p.mb-0 Revisar las órdenes de compra, los registros de inventario existentes, los informes de Itam y las instalaciones para el #[em hardware] y el #[em software] existentes.
        .col-xl-8.col-md-10.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center.align-items-center
              .col-2
                figure.mb-4
                  img(src="@/assets/curso/tema1/img102.svg")
              .col.p-2
                p.mb-0 Supervisar el uso del #[em software] y la actividad de internet para identificar los programas de TI en la sombra y los servicios en la nube que se pueden reemplazar con alternativas sancionadas.
        .col-xl-8.col-md-10.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center.align-items-center
              .col-2
                figure.mb-4
                  img(src="@/assets/curso/tema1/img103.svg")
              .col.p-2
                p.mb-0 Consultar con la alta gerencia para rastrear cualquier activo que se haya adquirido sin saberlo desde la última verificación de inventario.
        .col-xl-8.col-md-10.mb-4(data-aos="fade-right")
          .BGR04A
            .row.justify-content-center.align-items-center
              .col-2
                figure.mb-4
                  img(src="@/assets/curso/tema1/img104.svg")
              .col.p-2
                p.mb-0 Revisar las políticas de traiga su propio dispositivo (BYOD) de su organización para comprender cómo se utilizan los dispositivos personales dentro de la infraestructura.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number02.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 Identificar las amenazas y vulnerabilidades potenciales para cada activo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p La gran mayoría de las organizaciones afirman que almacenan datos confidenciales y regulados solo en ubicaciones seguras. Sin embargo, esta confianza está claramente fuera de lugar, aproximadamente el mismo porcentaje de ellos informó que el personal de TI concedió acceso directo a datos confidenciales y regulados, basándose únicamente en una solicitud del usuario en el último año. No es sorprendente que el 54% de estas organizaciones sufrieran hallazgos de auditoría y multas por incumplimiento. Ahora que se tiene un inventario detallado de los activos existentes, es hora de comprender las amenazas y vulnerabilidades que tienen. 
        p.mb-0 Cada riesgo de seguridad que enfrenta la organización tendrá:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img105.svg")

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-2(data-aos="fade-right")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img106.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 Un activo para proteger.
      .col-lg-4.col-md-8.mb-lg-0.mb-4
        .BGIMG03.p-2(data-aos="flip-up")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img106.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 Una amenaza que podría explotar los activos.
      .col-lg-4.col-md-8
        .BGIMG03.p-2(data-aos="fade-left")
          .my-3.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img106.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 Vulnerabilidades que hacen factible un #[em exploit].

    p Comprender cómo la infraestructura existente podría dañarse o explotarse es esencial para mitigar cualquier riesgo potencial. El uso de un marco de seguridad cibernética como el NIST RMF (Marco de Gestión de Riesgos del Instituto Nacional de Estándares y Tecnología) es valioso para garantizar que las evaluaciones y auditorías internas aborden los elementos clave de riesgo que la organización podría enfrentar. El RMF consta de #[b 7 pasos] para ayudar a una organización a seleccionar los controles de seguridad apropiados, estos son los siguientes:

    .row.justify-content-center.mb-5
      PasosA.color-acento-contenido(tipo="n")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            p.mb-0 Preparar a la organización para gestionar los riesgos de seguridad y privacidad.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img107.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img108.png")
          .col-lg-8(data-aos="fade-left")
            p.mb-0 Categorizar el sistema y la información procesada, almacenada y transmitida en base a un análisis de impacto.
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            p.mb-0 Seleccionar el conjunto de controles NIST para proteger el sistema en función de la(s) evaluación (es) de riesgos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img109.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img110.png")
          .col-lg-8(data-aos="fade-left")
            p.mb-0 Implementar los controles y documentar cómo se implementan los controles.
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            p.mb-0 Evaluar para determinar si los controles están en su lugar, funcionando según lo previsto y produciendo los resultados deseados.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img111.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img112.png")
          .col-lg-8(data-aos="fade-left")
            p.mb-0 Autorizar el funcionamiento del sistema (después de una decisión basada en el riesgo de un alto funcionario).
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
            p.mb-0 Monitorear continuamente la implementación del control y los riesgos para el sistema.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img113.png")

    p Si bien el NIST RMF no indica cómo lograr los pasos recomendados, proporciona una guía valiosa para ayudar a la organización a concentrarse en las consideraciones de seguridad más críticas. 
    p Beneficios de seguir un marco de ciberseguridad:

    .row.justify-content-center.mb-5
      .col-xl-3.col-md-6.col-10.mb-lx-0.mb-4(data-aos="fade-right")
        .BGIMG18.hg-07.p-4
          .row.justify-content-center.mb-4
            .col-4
              img(src="@/assets/curso/tema1/img114.svg")
          p.mb-5 Proporciona una mejor comprensión de los riesgos aceptados y aquellos que serán remediados.
      .col-xl-3.col-md-6.col-10.mb-lx-0.mb-4(data-aos="flip-right")
        .BGIMG18.hg-07.p-4
          .row.justify-content-center.mb-4
            .col-4
              img(src="@/assets/curso/tema1/img114.svg")
          p.mb-5 Mejora el enfoque en las áreas más importantes para la seguridad de la organización.
      .col-xl-3.col-md-6.col-10.mb-lx-0.mb-4(data-aos="flip-left")
        .BGIMG18.hg-07.p-4
          .row.justify-content-center.mb-4
            .col-4
              img(src="@/assets/curso/tema1/img114.svg")
          p.mb-5 Facilita las decisiones de gestión de riesgos de TI.
      .col-xl-3.col-md-6.col-10.mb-lx-0(data-aos="fade-left")
        .BGIMG18.hg-07.p-4
          .row.justify-content-center.mb-4
            .col-4
              img(src="@/assets/curso/tema1/img114.svg")
          p.mb-5 Ayuda a una organización a cumplir con los requisitos de cumplimiento de seguridad y privacidad.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Qué son las amenazas y vulnerabilidades?

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Una vulnerabilidad es una falla que podría ser aprovechada por una amenaza para comprometer un activo. Se puede pensar en una vulnerabilidad como el "por qué" o el "cómo" en una evaluación de riesgos. Una amenaza es cualquier actor que podría explotar una vulnerabilidad para afectar negativamente la confidencialidad, integridad o disponibilidad de un activo. Por ejemplo, la investigación realizada por varios #[em software] encontró que los empleados que se marcharon fueron responsables del 39 % de los incidentes de robo de propiedad intelectual en 2018. Ese mismo informe señala que el 44% de los encuestados no saben qué están haciendo sus empleados con los datos confidenciales. Un #[b empleado descontento es una amenaza importante], ya que puede explotar una vulnerabilidad, como el acceso sin restricciones al #[em hardware] de almacenamiento portátil, para robar información confidencial después de un despido involuntario. Otros ejemplos de amenazas y vulnerabilidades son:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img115.png")
      
    .BGIMG19.p-4.mb-4
      .row.justify-content-around.align-items-center.mb-4
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img116.svg")
        .col-lg-7(data-aos="fade-left")
          ul.lista-ul--color
            li
              i.fas.fa-check-circle(style="color: #583AE2")
              | La falta de políticas, procesos y procedimientos de seguridad hace que la organización sea vulnerable a amenazas internas negligentes.
            li
              i.fas.fa-check-circle(style="color: #583AE2")
              | La falta de copias de seguridad fuera del sitio hace que la organización sea vulnerable a amenazas físicas como inundaciones e incendios.
            li
              i.fas.fa-check-circle(style="color: #583AE2")
              | Un punto final móvil en un automóvil desbloqueado es una importante vulnerabilidad de seguridad física, ya que un actor de amenazas podría robarlo fácilmente.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number03.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 Identificar los controles de seguridad existentes y las áreas de mejora
    
    p Si se está esperando una auditoría de seguridad cibernética, no hay duda de que la organización ya cuenta con salvaguardas existentes para proteger la confidencialidad, integridad y disponibilidad de los sistemas e información. La verdadera pregunta es si los controles de seguridad existentes son suficientes para cumplir con los requisitos de cumplimiento. Según el Informe de riesgos de TI de Netwrix de 2018, se debe considera esto:

    .row.justify-content-center.mb-4    
      .col-lg-4.col-10.mb-4(data-aos="fade-right")
        .BGR04A.hg-08
          .row.justify-content-center
            .col-3
              figure.mb-4
                img(src="@/assets/curso/tema1/img117.svg")
            .col.p-2
              p.mb-0 De las organizaciones ignoran la mejor práctica de seguridad de revisar los derechos de acceso a los datos de forma regular.
      .col-lg-4.col-10.mb-4(data-aos="flip-up")
        .BGR04A.hg-08
          .row.justify-content-center
            .col-3
              figure.mb-4
                img(src="@/assets/curso/tema1/img118.svg")
            .col.p-2
              p.mb-0 Entre las organizaciones que no verifican los derechos de acceso a los datos archivados con regularidad, reportó un compromiso de esos datos durante los últimos 12 meses.
      .col-lg-4.col-10(data-aos="fade-left")
        .BGR04A.hg-08
          .row.justify-content-center
            .col-3
              figure.mb-4
                img(src="@/assets/curso/tema1/img119.svg")
            .col.p-2
              p.mb-0 De las organizaciones tienen un plan de respuesta a incidentes aprobado y se aseguran de que este funcione mediante la realización de pruebas y la capacitación de los empleados.
    
    p En este próximo paso, tomará las amenazas y vulnerabilidades descritas en el paso anterior, identificará los controles de seguridad existentes y priorizará cualquier reparación necesaria.
    
    .cajon-b.color-primario.cajon-end.p-3.mb-4(data-aos="flip-up")
      .row.justify-content-between
        .col-lg-10
          p.mb-0 A medida que avanza en este proceso, descubrirá qué riesgos de seguridad se están abordando de manera efectiva y qué capacidades deben agregarse para garantizar que se mitiguen las amenazas pendientes. Su marco de gestión de riesgos y los requisitos de cumplimiento de seguridad dictarán aún más las medidas que debe tomar. Una vulnerabilidad es una falla que podría ser aprovechada por una amenaza para comprometer un activo. Puede pensar en una vulnerabilidad como el "por qué" o el "cómo" en una evaluación de riesgos. Algunos de estos ejemplos son:
        .col-lg-1.col-2
          img(src='@/assets/curso/tema1/img120.svg')
    

    .row.justify-content-center.mb-5(data-aos="zoom-out")
      AcordionA(tipo="a" clase-tarjeta="BGR05")
        .row.justify-content-around(titulo="Robo de datos internos")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 #[em Software] de control de dispositivos y prevención de pérdida de datos (DLP) para monitorear y restringir la exfiltración de datos.
          .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img121.svg')
        .row.justify-content-around(titulo="<em>Phishing</em> e ingeniería social")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Capacitación en concientización sobre seguridad para usuarios, puertas de enlace de seguridad de correo electrónico y salvaguardas administrativas, como políticas, procesos y procedimientos.
          .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img122.svg')
        .row.justify-content-around(titulo="Navegación por internet de alto riesgo y otras amenazas basadas en la <em>web</em>")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Filtros #[em web] y #[em firewalls] para restringir el tráfico de internet, soluciones de monitoreo de la actividad del usuario para garantizar que los sistemas se utilicen de manera segura y adecuada.
          .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img123.svg')
        .row.justify-content-around(titulo="Empleados fuera del sitio con acceso remoto a los recursos internos")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Autenticación de múltiples factores basada en riesgos, una VPN con funciones de evaluación de postura y controles para evitar la transferencia de datos a terminales móviles.
          .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img124.svg')
        .row.justify-content-around(titulo="Herramientas, proveedores y/o contratistas de terceros con una conexión a nuestros sistemas internos")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Un Acuerdo de Socios Comerciales (BAA) que estipula los requisitos de seguridad de terceros, soluciones de monitoreo para alertar sobre actividades sospechosas, limitando el acceso a activos sensibles tanto como sea posible.
          .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img125.svg')
        .row.justify-content-around(titulo="Credenciales de usuario comprometidas")
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Autenticación multifactorial basada en riesgos, limitando los privilegios de los usuarios tanto como sea posible, monitoreando la actividad de los usuarios.
          .col-lg-1.col-2.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img126.svg')
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Cómo priorizar nuevos controles de seguridad
     
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p No hay duda de que la evaluación de riesgos encontrará una gran cantidad de vulnerabilidades potenciales, no se podrá mitigar todos los riesgos posibles para la organización; ahí es donde entra la priorización. Dado que no se puede proteger de manera realista contra todo, se debe estar preparado para demostrar a los auditores de seguridad que se ha tomado todas las medidas razonables necesarias para proteger los datos confidenciales bajo custodia. 
        p.mb-0 Las medidas razonables implican la identificación de riesgos plausibles, la evaluación de la probabilidad e impacto y la garantía de que ha abordado los riesgos de mayor prioridad. Cualquier riesgo que no pueda eliminarse por completo debe documentarse con una razón legítima para la limitación en el plan de seguridad. Una matriz de riesgos es una herramienta útil para priorizar los riesgos; le permite describir los factores de riesgo de la organización, los resultados previstos de la estrategia de seguridad y cómo los controles de seguridad existentes cumplen o no los resultados de la estrategia. En la matriz de riesgos, se describen todas las vulnerabilidades y amenazas potenciales, así como los controles de seguridad disponibles para abordarlas. 
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img127.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img128.png")
      .col-lg-7(data-aos="fade-right")
        p La categoría de riesgo de un determinado activo se clasifica en función de:
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | La gravedad del impacto en caso de verse comprometida.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | La probabilidad de que el dispositivo se vea comprometido.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Los controles que están disponibles para mitigar el riesgo.
        .BGR03.p-4
          p.mb-0 Una lista de verificación para prevenir el robo de datos por empleados que se van es necesaria. ¿Le preocupa el daño que podría causar un empleado despedido con el acceso a información corporativa confidencial, contraseñas de cuentas y otros datos confidenciales?
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number04.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 Entender lo que busca el auditor

    p El papel de un auditor de seguridad es ofrecer una perspectiva objetiva de las prácticas de seguridad de la organización. Trabajarán con los ejecutivos internos, gerentes y profesionales de TI para garantizar que la organización sea lo más segura y compatible posible. Lo que busca un auditor de seguridad no debería ser una gran sorpresa. Tener una comprensión clara de los marcos y regulaciones de la organización contribuirá en gran medida a anticipar lo que estarán buscando.
    p Esto es lo que un auditor externo querrá saber:

    .row.justify-content-center.mb-4
      .col-lg-4.col-8(data-aos="fade-right")
        .BGIMG03.hg-08.mb-4
          .mb-0.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img09.svg' style="max-width: 90px;")
              p.col.p-2.mt-4.mb-0 ¿De qué datos sensibles es responsable? (PII, PHI, información de tarjeta de crédito, etc.).
      .col-lg-4.col-8(data-aos="flip-up")
        .BGIMG03.hg-08.mb-4
          .mb-0.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img09.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 ¿Qué medidas toma actualmente para proteger los datos confidenciales a lo largo de su ciclo de vida (creación, almacenamiento, uso, archivo y eliminación)?
      .col-lg-4.col-8(data-aos="fade-left")
        .BGIMG03.hg-08.mb-4
          .mb-0.d-flex
            .d-flex.flex-wrap.align-items-center
              img(src='@/assets/curso/tema1/img09.svg' style="max-width: 90px;")
              p.col.p-2.mb-0 ¿Cómo cumplen sus controles de seguridad actuales con los requisitos de seguridad y privacidad de los activos protegidos?

    p.mb-5 Para mejorar la eficacia de las evaluaciones internas, es importante comunicarse con el auditor por adelantado. Es posible que estén dispuestos a proporcionarle las listas de verificación de evaluación de riesgos y otros documentos que utilizarán como parte del proceso.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number05.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 Convertir las evaluaciones de riesgos de TI en un proceso continuo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img129.svg")
      .col-lg-7(data-aos="fade-right")
        p Las investigaciones de #[em software] especializadas en la materia arrojaron un promedio en sus investigaciones, aunque el 70% de las empresas ya están realizando evaluaciones de riesgos, la mayoría de ellas no lo hace con regularidad. Cumplir los estándares de seguridad debe ser una prioridad en toda la organización. Las evaluaciones de riesgos simplemente no son un trato único; identificar y mitigar los riesgos debe ser un proceso continuo para garantizar que la organización esté preparada para abordar nuevas amenazas a medida que surjan.
        .BG02.p-4
          .h5 ¿Con qué frecuencia se deben realizar evaluaciones de riesgos de TI? 
          p.mb-0 La mejor práctica recomendada es volver a evaluar los riesgos al menos cada uno o tres años. Esto garantiza que sus controles de seguridad sigan siendo adecuados a medida que cambian sus activos de TI y surgen nuevas amenazas y vulnerabilidades. 

    p Si los líderes empresariales no priorizan la seguridad, cumplir con los estándares de cumplimiento será una batalla cuesta arriba.

    .BGIMG20.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color
            li
              i.fas.fa-check-circle(style="color: #583AE2")
              | Los empleados siguen el ejemplo de los líderes senior; si la seguridad no es una prioridad para sus jefes, es mucho más probable que tampoco lo sea para ellos.
            li
              i.fas.fa-check-circle(style="color: #583AE2")
              | Si el departamento de TI se trata como un centro de costos (en lugar de un multiplicador de ingresos/capacidad), las actualizaciones de seguridad críticas no obtendrán el soporte que necesitan para implementar y administrar correctamente.
            li
              i.fas.fa-check-circle(style="color: #583AE2")
              | Si los requisitos de cumplimiento de seguridad se tratan como una obligación legal y una casilla de verificación, la organización corre el riesgo de quedarse atrás en la mitigación de las últimas vulnerabilidades y amenazas.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img130.svg")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number06.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 Considere aprovechar los proveedores externos
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img131.png")
      .col-lg-7(data-aos="fade-left")
        p Dependiendo de las necesidades y los recursos de la organización, es posible que se desee considerar contratar a un proveedor de servicios de seguridad administrados (MSSP) que esté familiarizado con los controles de seguridad requeridos por los marcos y regulaciones de la organización. El principal beneficio de los servicios de TI internos es contar con empleados que comprendan las necesidades únicas de la organización. 
        p.mb-0 Si bien el personal dedicado es muy deseable, no siempre es factible, especialmente para tareas especializadas como auditorías de cumplimiento interno e interpretación de registros de soluciones de administración de eventos e información de seguridad (SIEM). Incluso si la organización ya tiene capacidades internas para ayudar a administrar las operaciones diarias, aprovechar las capacidades y la experiencia de un tercero puede proporcionar beneficios significativos. Las ventajas de terceros:     

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Una auditoría de un tercero desinteresado proporcionará opiniones más objetivas que una de una parte interesada interna.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Los consultores de seguridad de terceros pueden solucionar problemas específicos de manera eficiente, lo que permite que el personal se concentre en sus competencias principales. 
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Un auditor de seguridad experimentado puede ayudar a garantizar que la organización implemente una auditoría exitosa.
        p.mb-0 Independientemente de si usa capacidades internas o externas, al final del día, alguien debe ser responsable de garantizar que la organización tenga las capacidades para cumplir con los requisitos de seguridad; en última instancia, este deber recae en la administración. Los equipos de seguridad de TI son un recurso valioso para implementar controles y mantener activos, pero necesitan el apoyo de la administración para que esto suceda. La subcontratación de la seguridad tampoco elimina la responsabilidad de la administración. Una vez que los controles de seguridad están en el lugar, la gerencia aún debe tomar medidas para garantizar que todo el personal siga las indicaciones del reglamento interno.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img132.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #C4BAF5; border-radius: 0 15px 15px 0; border: 2px solid #261E49" data-aos="fade-right")
        img(src='@/assets/curso/temas/number07.svg' style="max-width: 28px; margin-left: -16px; position: absolute")
        .h5.col.p-2.ms-4.mb-0 Asegurarse de que el personal sea consciente de sus responsabilidades de seguridad
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img133.svg")
      .col-lg-8(data-aos="fade-left")
        p Las políticas, los procesos y los procedimientos de seguridad simplemente no son negociables. Cuando están equipados con la capacitación y el soporte adecuados, los empleados son un activo valioso para proteger los datos confidenciales. Si bien el tipo y los detalles de la capacitación pueden variar según el nivel de riesgo de sus funciones, todos los miembros del personal con acceso a los activos de TI necesitan algún tipo de capacitación sobre seguridad. La organización también necesita procesos y procedimientos que dicten las mejores prácticas que debe seguir el personal. #[b ¿Por qué las políticas, los procesos y los procedimientos de seguridad son tan críticos?] Tener personal bien capacitado reduce en gran medida la probabilidad de vulnerabilidades de seguridad, como procedimientos inadecuados de manejo de datos, participar en actividades informáticas de alto riesgo y caer en trucos de ingeniería social de actores de amenazas maliciosos.

    ul.lista-ul--color.mb-4
      li
        i.fas.fa-check-circle(style="color: #583AE2")
        | Los empleados informados no solo cometen muchos menos errores de seguridad, sino que también ayudan a identificar actividades sospechosas para que puedan abordarse antes de que conduzcan a una violación de datos. 
      li
        i.fas.fa-check-circle(style="color: #583AE2")
        | Priorizar la seguridad de esta manera también es esencial para cultivar una cultura de cumplimiento dentro de la empresa. 
      li
        i.fas.fa-check-circle(style="color: #583AE2")
        | Invertir en capacitación regular en seguridad (y adherirse a los requisitos) comunica la importancia del cumplimiento a todos los involucrados. 

    p El liderazgo es responsable de garantizar que el personal se tome en serio sus responsabilidades de seguridad. Debe quedar claro desde el día uno a qué estándares se adhiere la organización, por qué esos estándares son críticos y el papel del personal para garantizar que se cumplan estos estándares. 
    p Las mejores prácticas para proporcionar a los usuarios finales formación en seguridad son:

    .row.justify-content-center.mb-4(data-aos="zoom-out")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .row.justify-content-center.p-2
          .BGIMG07.hg-09.p-3
            .row.justify-content-center
              .col-8.mb-4
                img(src="@/assets/curso/tema1/img134.svg")
              .col-10
                p.mb-0 Asigne a alguien para que sea directamente responsable de garantizar que el personal esté informado sobre sus responsabilidades de seguridad.
        .row.justify-content-center.p-2
          .BGIMG07.hg-09.p-3
            .row.justify-content-center
              .col-8.mb-4
                img(src="@/assets/curso/tema1/img135.svg")
              .col-10
                p.mb-0 Si la experiencia en seguridad no está disponible internamente, contrate a un consultor de capacitación en concientización sobre seguridad cibernética.
        .row.justify-content-center.p-2
          .BGIMG07.hg-09.p-3
            .row.justify-content-center
              .col-6.mb-4
                img(src="@/assets/curso/tema1/img136.svg")
              .col-10
                p.mb-0 Asegúrese de que cualquier capacitación en seguridad incluya algún tipo de prueba para identificar las áreas en las que el personal puede necesitar capacitación adicional.
        .row.justify-content-center.p-2
          .BGIMG07.hg-09.p-3
            .row.justify-content-center
              .col-8.mb-4
                img(src="@/assets/curso/tema1/img137.svg")
              .col-10
                p.mb-0 Proporcione capacitación al personal cada 4 a 6 meses para garantizar que sigan siendo conscientes de sus riesgos y responsabilidades.
        .row.justify-content-center.p-2
          .BGIMG07.hg-09.p-3
            .row.justify-content-center
              .col-8.mb-4
                img(src="@/assets/curso/tema1/img138.svg")
              .col-10
                p.mb-0 Mantenga una política de comunicación abierta que permita a los empleados hacer preguntas cuando no estén seguros del mejor curso de acción.

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Plantilla de política de medios extraíbles:
        ul.lista-ul--color.mb-4
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Establecer estándares de seguridad de datos para el almacenamiento portátil.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Definir el uso aceptable de los medios extraíbles.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Informe a los usuarios sobre sus responsabilidades de seguridad.
        p Las grandes empresas de auditoría recomiendan que las auditorías de seguridad cibernética definan el tema y el objetivo de la auditoría antes de iniciarla. La organización dice que los límites y las limitaciones a considerar para las auditorías de seguridad cibernética incluyen la empresa frente a una esfera de control privada y, si se debe considerar el uso de dispositivos y aplicaciones que no son de agencias. Otro elemento que puede limitar el alcance de la auditoría es si se centrará en la infraestructura de TI interna frente a la infraestructura externa.
        p Por regla general, el uso de TI se extiende más allá de la red organizacional interna, como en el uso de viajes, entornos de uso doméstico o la adopción de la nube, Si bien esto puede crear un riesgo de seguridad cibernética adicional, se ha convertido en una práctica común en la mayoría de las empresas. Eso es especialmente cierto con tantos empleados que continúan trabajando desde casa.
        p.mb-0 Desde la perspectiva de un auditor, es recomendable adoptar una visión basada en el riesgo y definir los objetivos en consecuencia. Además, los objetivos de la auditoría deben limitarse a un alcance razonable y también deben corresponder a los objetivos de ciberseguridad y protección definidos por la empresa.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img139.png")
                


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
