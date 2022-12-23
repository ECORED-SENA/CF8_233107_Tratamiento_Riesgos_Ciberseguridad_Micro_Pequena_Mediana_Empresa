<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Hacking] ético
    
    .cajon-b.color-primario.cajon-end.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-between
        .col-lg-10
          p.mb-0 La piratería ética implica un intento autorizado de obtener acceso no autorizado a un sistema informático, aplicación o datos. Realizar un #[em hack] ético implica duplicar estrategias y acciones de atacantes malintencionados. Esta práctica ayuda a identificar vulnerabilidades de seguridad que luego pueden resolverse antes de que un atacante malicioso tenga la oportunidad de explotarlas. 
        .col-lg-2.col-3
          img(src='@/assets/curso/tema2/img01.svg')

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Qué es un #[em hacker] ético?
    
    .BGIMG03.p-lg-5.p-4.mb-5(data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img02.svg')
        .col-lg-7
          p.mb-0 También conocidos como “sombreros blancos”, los #[em hackers] éticos son expertos en seguridad que realizan estas evaluaciones de seguridad. El trabajo proactivo que realizan ayuda a mejorar la postura de seguridad de una organización. Con la aprobación previa de la organización o del propietario del activo de TI, la misión de la piratería ética es opuesta a la de la piratería maliciosa.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Cuáles son los conceptos clave del #[em hacking] ético?
    
    p Los expertos en piratería siguen cuatro conceptos clave de protocolo, a saber:

    .row.justify-content-center.mb-4
      .col-xl-3.col-md-6.col-8.mb-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema2/img03.svg')
        p.mb-0 Obtenga la aprobación adecuada antes de acceder y realizar una evaluación de seguridad.
      .col-xl-3.col-md-6.col-8.mb-4(data-aos="flip-right")
        figure.mb-4
          img(src='@/assets/curso/tema2/img04.svg')
        p.mb-0 Determine el alcance de la evaluación para que el trabajo del #[em hacker] ético siga siendo legal y dentro de los límites aprobados de la organización.
      .col-xl-3.col-md-6.col-8.mb-4(data-aos="flip-left")
        figure.mb-4
          img(src='@/assets/curso/tema2/img05.svg')
        p.mb-0 Notifique a la organización de todas las vulnerabilidades descubiertas durante la evaluación. Proporcione consejos de remediación para resolver estas vulnerabilidades.
      .col-xl-3.col-md-6.col-8.mb-4(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema2/img06.svg')
        p.mb-0 Dependiendo de la confidencialidad de los datos, los #[em hackers] éticos pueden tener que aceptar un acuerdo de confidencialidad, además de otros términos y condiciones requeridos por la organización evaluada. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿En qué se diferencian los #[em hackers] éticos de los #[em hackers] maliciosos?
    
    p Los #[em hackers] éticos utilizan su conocimiento para asegurar y mejorar la tecnología de las organizaciones. Brindan un servicio esencial al buscar vulnerabilidades que pueden conducir a una brecha de seguridad. En el siguiente video se puede conocer la diferente entre estos dos tipos de #[em hackers].

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/b4X4Rh4eNyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Qué problemas identifica el #[em hacking]?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Al evaluar la seguridad de los activos de TI de una organización, la piratería ética tiene como objetivo imitar a un atacante. Al hacerlo, buscan vectores de ataque contra el objetivo. El objetivo inicial es realizar un reconocimiento, obteniendo la mayor cantidad de información posible. Una vez que el #[em hacker] ético recopila suficiente información, la usa para buscar vulnerabilidades contra el activo. Realizan esta evaluación con una combinación de pruebas automatizadas y manuales. Incluso los sistemas sofisticados pueden tener tecnologías de contramedidas complejas que pueden ser vulnerables. No se detienen en descubrir vulnerabilidades. Los hackers éticos usan exploit contra las vulnerabilidades para probar cómo un atacante malintencionado podría explotarlas.
        p Algunas de las vulnerabilidades más comunes descubiertas por hackers éticos incluyen:
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Ataques de inyección.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Autenticación rota.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Configuraciones incorrectas de seguridad.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Uso de componentes con vulnerabilidades conocidas.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            | Exposición de datos confidenciales.
        p.mb-0 Después del período de prueba, los hackers éticos preparan un informe detallado. Esta documentación incluye pasos para comprometer las vulnerabilidades descubiertas y pasos para parchearlas o mitigarlas.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img07.png")
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Cuáles son algunas limitaciones del #[em hacking] ético?
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            p.mb-0 #[b Alcance limitado]. Los hackers éticos no pueden progresar más allá de un alcance definido para que un ataque tenga éxito. Sin embargo, no es descabellado discutir el potencial de ataque fuera del alcance con la organización.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            p.mb-0 #[b Restricciones de recursos]. Los piratas informáticos maliciosos no tienen las limitaciones de tiempo que suelen enfrentar los piratas informáticos éticos. El poder de cómputo y el presupuesto son restricciones adicionales de los hackers éticos.
          li
            i.fas.fa-check-circle(style="color: #583AE2")
            p.mb-0 #[b Métodos restringidos]. Algunas organizaciones piden a los expertos que eviten los casos de prueba que provocan la caída de los servidores (por ejemplo, ataques de denegación de servicio (DoS)).
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img08.png")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Etapas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p El #[em hacking] ético se ha convertido en un caballero de brillante armadura en el mundo del cibercriminal. Si bien los ataques cibernéticos siguen proliferando en las organizaciones, las industrias y el mundo, la piratería ética brinda a las empresas la solución para ayudarlas a combatir este problema cada vez mayor. Hay diferentes fases del #[em hacking] ético.
        p Las condiciones de seguridad de TI son tan graves que, en la mayoría de los casos, las organizaciones tardan hasta 6 meses en darse cuenta de que ha habido una infracción. Es por eso que necesitan trabajar con piratas informáticos éticos para actualizar sus medidas de ciberseguridad y proteger sus datos. 
        .BGR03.p-4
          .h5.mb-0 Las organizaciones necesitan medidas de seguridad de primer nivel para combatir con la gran cantidad de ataques que tienen lugar a diario. Se ha dicho que ocurre un ataque cibernético cada 39 segundos, y los sistemas antiguos no están lo suficientemente equipados para manejarlos a todos. Las actualizaciones periódicas y las actualizaciones de los sistemas de seguridad de TI son la mejor manera de proteger a las empresas contra este problema creciente.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img09.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 ¿Cuáles son las diferentes fases del #[em hacking] ético?
    
    .cajon-b.color-primario.cajon-end.p-3.mb-4(data-aos="fade-right")
      .row.justify-content-between
        .col-lg-10
          p.mb-0 Las organizaciones emplean #[em hackers] éticos para simular un ciberataque real en sus sistemas y redes. Este ataque viene en diferentes fases. Se necesita mucha habilidad y esfuerzo para que los piratas informáticos éticos identifiquen todas las vulnerabilidades y las exploten para su máximo beneficio. Este ataque simulado se utiliza para identificar todas las áreas de debilidad que enfrenta la organización para trabajar y fortalecerlas. Las fases del #[em hacking] ético son:
        .col-lg-2.col-3
          img(src='@/assets/curso/tema2/img10.svg')   
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="BGR05")
          .row.justify-content-around(titulo="1. La fase de reconocimiento")
            .col-lg-7.order-lg-1.order-2
              p Esta es la primera etapa en el proceso de piratería ética. El #[em hacker] de sombrero blanco recopila toda la información disponible sobre las redes y sistemas instalados, así como las medidas de seguridad que se han implementado. El #[em hacker] ético tiene dos tipos de reconocimiento que puede hacer en esta fase:
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle(style="color: #583AE2")
                  p.mb-0 #[b El reconocimiento activo] busca información sobre el sistema de red, el servidor o la aplicación de destino para aumentar las posibilidades de que se detecte al #[em hacker] en el sistema. Es mucho más arriesgado que el segundo tipo de reconocimiento, que es el reconocimiento pasivo.
                li
                  i.fas.fa-check-circle(style="color: #583AE2")
                  p.mb-0 #[b El reconocimiento pasivo] es la forma más sigilosa de obtener información sobre el objetivo. Esto se centra en la recopilación de información sobre los miembros clave de la empresa, datos esenciales sobre la empresa, averiguar sus direcciones IP y buscar otros tipos de información crítica. Dado que la mayoría de las organizaciones tienen casi toda su información pública, la recopilación pasiva de información puede ser muy fácil para un #[em hacker] ético.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img11.svg')
          .row.justify-content-around(titulo="2. La fase de exploración")
            .col-lg-7.order-lg-1.order-2
              p La segunda fase en la estrategia de un #[em hacker] ético es la fase de exploración. Este paso implica utilizar toda la información obtenida en la fase de reconocimiento y aplicarla para buscar vulnerabilidades en el área objetivo. Hay diferentes tipos de escaneos realizados por hackers éticos. Pueden buscar puertos abiertos o diferentes servicios que se ejecutan sin protección en la organización. 
              p Los #[em hackers] éticos también pueden: 
              ul.lista-ul--color
                li
                  i.fas.fa-check-circle(style="color: #583AE2")
                  | Realizar escaneos de vulnerabilidades para encontrar errores en los servidores de la empresa, que pueden ser explotadas, este proceso se ha automatizado porque hay muchas herramientas disponibles para que los piratas informáticos realicen análisis de vulnerabilidades. 
                li
                  i.fas.fa-check-circle(style="color: #583AE2")
                  p.mb-0 Crear varios 'mapas' de redes, este proceso de mapeo de red incluye encontrar el #[em firewall] utilizado por la organización y diferentes enrutadores y redes para ayudarlos durante su proceso de piratería.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img12.svg')
          .row.justify-content-around(titulo="3. La fase de obtención de acceso")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Aquí es donde el #[em hacker] ético hace el hackeo real, utiliza toda la información obtenida y analizada de las dos fases anteriores para lanzar un ataque completo contra el sistema o la red en la que él intenta infiltrarse. Explota todas las vulnerabilidades expuestas y obtiene el control del sistema que ha sido pirateado. Ahora el #[em hacker] puede robar todos los datos que tiene disponibles, corromper los sistemas, agregar virus u otras entidades maliciosas, o manipularlos en su beneficio.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img13.svg')
          .row.justify-content-around(titulo="4. La fase de mantenimiento del acceso")
            .col-lg-7.order-lg-1.order-2
              p.mb-0 Por lo general, los piratas informáticos tienen una misión que cumplir o un plan a seguir cuando piratean el sistema de una organización. Esto significa que simplemente ingresar o piratear el sistema no será suficiente. El #[em hacker] ético tiene que mantener su acceso al servidor hasta que cumpla su objetivo. Los #[em hackers] éticos suelen emplear troyanos y otras puertas traseras o #[em rootkits] para llevar a cabo esta fase. También pueden usar esta fase de acceso de mantenimiento para lanzar otros ataques para infligir más daño a la organización.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img14.svg')
          .row.justify-content-around(titulo="5. La fase de cubrimiento de huellas")
            .col-lg-7.order-lg-1.order-2
              p Este es el paso final para completar todo el proceso de piratería ética. Si esta fase se completa con éxito, el #[em hacker] ético ha logrado piratear un sistema o red. Él podría infligir el mayor daño posible y ha logrado dejar el sistema sin dejar rastro. Necesitan cubrir sus huellas en todo momento para evitar ser detectados al entrar y salir de la red o el servidor. Los sistemas de seguridad existentes no deberían poder identificar al atacante. La señal de un ciberataque simulado exitoso es si el sistema de seguridad nunca se dio cuenta de que se produjo un ataque por completo.
              p Esto incluye muchas de las siguientes medidas que un #[em hacker] ético toma para ocultar y eliminar su presencia por completo:
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img15.svg')
            .col-12.order-3
              .row.justify-content-center
                .col-lg-4.col-md-8.mb-4
                  .BGIMG03.p-3
                    .my-3.d-flex
                      .d-flex.flex-wrap.align-items-center
                        img(src='@/assets/curso/tema2/img16.svg' style="max-width: 90px;")
                        p.col.p-2.mb-0 Eliminación de todos los registros.
                .col-lg-4.col-md-8.mb-4
                  .BGIMG03.p-3
                    .my-3.d-flex
                      .d-flex.flex-wrap.align-items-center
                        img(src='@/assets/curso/tema2/img16.svg' style="max-width: 90px;")
                        p.col.p-2.mb-0 Corrupción de registros.
                .col-lg-4.col-md-8.mb-4
                  .BGIMG03.p-3
                    .my-3.d-flex
                      .d-flex.flex-wrap.align-items-center
                        img(src='@/assets/curso/tema2/img16.svg' style="max-width: 90px;")
                        p.col.p-2.mb-0 Modificar ciertos valores de logs o registros.
                .col-lg-4.col-md-8.mb-4
                  .BGIMG03.p-3
                    .my-3.d-flex
                      .d-flex.flex-wrap.align-items-center
                        img(src='@/assets/curso/tema2/img16.svg' style="max-width: 90px;")
                        p.col.p-2.mb-0 Eliminar todas las carpetas que ha creado el #[em hacker] ético.
                .col-lg-4.col-md-8.mb-4
                  .BGIMG03.p-3
                    .my-3.d-flex
                      .d-flex.flex-wrap.align-items-center
                        img(src='@/assets/curso/tema2/img16.svg' style="max-width: 90px;")
                        p.col.p-2.mb-0 Desinstalar todas las aplicaciones.
                .col-lg-4.col-md-8.mb-4
                  .BGIMG03.px-3.py-1
                    .my-3.d-flex
                      .d-flex.flex-wrap.align-items-center
                        img(src='@/assets/curso/tema2/img16.svg' style="max-width: 90px;")
                        p.col.p-2.mb-0 Eliminar todo rastro de cualquier actividad realizada por un #[em hacker] ético en el sistema o red.

    p El #[em hacking] ético es un proceso largo y difícil que involucra muchas fases. Los profesionales que trabajan deben tener la capacitación y la certificación necesarias en piratería ética y seguridad de TI para convertirse en piratas informáticos éticos exitosos. Las fases requieren mucho tiempo, conocimiento y experiencia para llevarse a cabo y deben tomarse en serio. Las organizaciones también optan por personas certificadas sobre sus contrapartes no certificadas, porque están a cargo de proteger los datos confidenciales y los activos digitales de la empresa.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Técnicas
    
    .bloque-texto-g.color-primario.bloque-40.p-md-4.p-sm-3.p-2.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img17.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El desarrollo de la tecnología se puede ver en todas partes. Nadie puede negar que la tecnología está creciendo a un ritmo acelerado. Sin embargo, a medida que avanza la tecnología, existen problemas técnicos. La piratería ética se utiliza para prevenir amenazas de fuentes desconocidas. Hay varios tipos de técnicas de piratería ética. Uno puede aprender herramientas y técnicas éticas a través de varios cursos en línea y fuera de línea. Las herramientas se proporcionan para garantizar la seguridad de la información confidencial en la red y el sistema.
    
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 #[em Hacking] ético: un entendimiento
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La piratería ética implica un sistema de piratería que depende de valores éticos o morales sin mala intención. Cualquier forma de piratería autorizada por el propietario del sistema de destino se conoce como piratería ética. Es el proceso de adaptar medidas de seguridad activas para defender los sistemas de piratas informáticos con malas intenciones con respecto a la privacidad de los datos.
        p.mb-0 Las técnicas de piratería ética proporcionan medidas de seguridad que un sistema aplica para buscar vulnerabilidades, infracciones y posibles amenazas a los datos. Un #[em hacker] ético piratea el sistema al que se ha dirigido antes que cualquier hacker. Por este motivo, se aplican parches de seguridad. Esto elimina y reduce efectivamente las posibilidades de que el atacante ejecute el #[em hack]. Utilizando herramientas y técnicas de #[em hacking] ético, un #[em hacker] puede superar las amenazas buscando los puntos débiles del sistema. Estas herramientas se pueden utilizar para proteger los datos y sistemas del usuario. Brindan seguridad y protección. Existen diferentes tipos de métodos de #[em hacking] ético; algunos de ellos son los siguientes:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img18.jpg")

    .row.justify-content-center.mb-4
      .col-xl-3.col-md-6.col-8.mb-xl-0.mb-4(data-aos="fade-right")
        .BGIMG07.hg-10.p-lg-5.p-4
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              img(src="@/assets/curso/tema2/img19.svg")
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              .h5.text-center.mb-0 #[em Hackers] de sombrero negro
      .col-xl-3.col-md-6.col-8.mb-xl-0.mb-4(data-aos="flip-right")
        .BGIMG07.hg-10.p-lg-5.p-4
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              img(src="@/assets/curso/tema2/img20.svg")
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              .h5.text-center.mb-0 #[em Hackers] de sombrero blanco
      .col-xl-3.col-md-6.col-8.mb-xl-0.mb-4(data-aos="flip-left")
        .BGIMG07.hg-10.p-lg-5.p-4
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              img(src="@/assets/curso/tema2/img21.svg")
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              .h5.text-center.mb-0 #[em Hackers] de sombrero gris
      .col-xl-3.col-md-6.col-8.mb-xl-0.mb-4(data-aos="fade-left")
        .BGIMG07.hg-10.p-lg-5.p-4
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              img(src="@/assets/curso/tema2/img22.svg")
          .row.justify-content-center.mb-4
            .col-lg-7.col-8
              .h5.text-center.mb-0 Varios piratas informáticos.

    p.mb-5 Los verificadores de sombrero blanco son piratas informáticos éticos, mientras que los piratas informáticos de sombrero negro se denominan piratas informáticos o #[em crackers] no autorizados. Utilizan diversas técnicas y métodos para proteger e interrumpir los sistemas de seguridad. Se puede recopilar la mayor cantidad de datos posible sobre sistemas y redes específicas a través de técnicas de huella y piratería ética. El paquete para un novato depende de la habilidad y el conocimiento. Un #[em hacker] experimentado puede obtener buenos ingresos. Existe una gran demanda de #[em ethical hacking] en el mercado, y se está volviendo cada vez más popular. Si alguien quiere sobresalir en este campo, puede elegir la capacitación en #[em hacking] ético en línea.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Las mejores técnicas de piratería ética

    p La piratería ética tiene el potencial de probar, escanear y asegurar sistemas y datos. Las técnicas de piratería ética se pueden aprender utilizando un PDF de piratería ética y algunas de las técnicas se enumeran a continuación:
    
    .BGIMG11.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-primario(text-small)
        .row(titulo="1")
          .col-lg-8.order-lg-1.order-2
            .h4 Suplantación de identidad
            p.mb-0 El phishing es un ataque de ciberseguridad en el que un #[em hacker] envía mensajes haciéndose pasar por una persona de confianza. Estos tipos de mensajes manipulan a un usuario, lo que hace que realice acciones como instalar un archivo malicioso y hacer clic en un enlace. Un phisher utiliza recursos públicos para recopilar información sobre la experiencia personal y laboral de la víctima. Luego usan esta información para crear un mensaje falso confiable.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img23.svg")
        .row(titulo="2")
          .col-lg-8.order-lg-1.order-2
            .h4 Rastrear
            p.mb-0 La detección es el proceso de realizar un seguimiento y capturar todos los paquetes que pasan a través de una red determinada. Esto se hace usando algunas herramientas de rastreo. También se conoce como escuchas telefónicas, ya que puede escuchar y conocer la conversación. Un sniffer cambia la NIC del sistema al modo promiscuo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img24.svg")
        .row(titulo="3")
          .col-lg-8.order-lg-1.order-2
            .h4 Ingeniería social
            p.mb-0 La ingeniería social se utiliza para convencer a las personas de que revelen su información confidencial. El atacante engaña a las personas aprovechándose de su confianza y falta de conocimiento. Hay tres tipos de ingeniería social: basada en humanos, en dispositivos móviles y en computadoras. Debido a las políticas de seguridad laxas y la ausencia de herramientas de hardware o software para evitarlo, es difícil detectar un ataque de ingeniería social.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img25.svg")
        .row(titulo="4")
          .col-lg-8.order-lg-1.order-2
            .h4 Huella
            p.mb-0 En esta técnica de piratería ética, el pirata informático recopila la mayor cantidad de datos posible sobre un sistema e infraestructura, para reconocer oportunidades para penetrarlos. El pirata informático puede usar varias herramientas y tecnologías para obtener información y descifrar un sistema completo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img26.svg")
        .row(titulo="5")
          .col-lg-8.order-lg-1.order-2
            .h4 Inyección SQL
            p.mb-0 La inyección SQL es un ataque en el que el atacante envía una consulta SQL, una declaración, a un servidor de base de datos que la modifica según sea necesario. Una inyección SQL ocurre cuando la entrada del usuario se sanea incorrectamente antes de usarla en una consulta SQL. SQL permite asegurar una respuesta de la base de datos. Ayudará al #[em hacker] a comprender la construcción de la base de datos, como los nombres de las tablas.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img27.svg")
        .row(titulo="6")
          .col-lg-8.order-lg-1.order-2
            .h4 Enumeración
            p.mb-0 Enumeración también significa recopilación de información. En este proceso, el atacante crea una conexión con la víctima para encontrar tantos vectores de ataque que se utilicen para explotar el sistema en el futuro. Un #[em hacker] necesita establecer una conexión activa con el host de destino. En primer lugar, se cuentan y evalúan las vulnerabilidades. Luego, se hace para buscar ataques y amenazas para apuntar al sistema. Esto se utiliza para recopilar el nombre de usuario, los nombres de host, las contraseñas y las direcciones IP.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img28.svg")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Herramientas para ejecutar las técnicas perfectas de piratería ética
    
    p Hay muchas herramientas de piratería ética disponibles para la comodidad del usuario. Además, las herramientas de piratería ética ayudan en las investigaciones de seguridad.

    .BGIMG21.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img29.svg')
        .col-lg-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6")
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img30.svg')
                .col-8
                  .h4 1. Ettercap
              p.mb-0 Ettercap incluye las funciones de análisis de host y red. Además, Ettercap tiene la capacidad de rastrear una conexión SSH. Permite crear complementos personalizados utilizando API. Además, permitirá inyectar algunos caracteres en el servidor o en la red del cliente; también admite un análisis detallado de la acción junto con protocolos pasivos. Uno puede solicitar un programa de certificado de seguridad cibernética en línea para aprender una gestión y control de seguridad efectivos.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img31.svg')
                .col-8
                  .h4 2. Netsparker
              p.mb-0 Netsparker es el escáner de seguridad de aplicaciones web más reciente que detecta automáticamente las vulnerabilidades en las aplicaciones web. Está disponible en forma de solución SAAS. Netsparker detecta vulnerabilidades muertas utilizando la última tecnología de escaneo. La herramienta requiere menos configuración; puede escanear más de 1.000 aplicaciones web en poco tiempo.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img32.svg')
                .col-8
                  .h4 3. Burp suite
              p.mb-0 Burp Suite es una de las herramientas de piratería ética que ayuda en las pruebas de seguridad. Esta característica es útil para probar aplicaciones web. Incluye una amplia gama de herramientas que ayudan en el proceso de prueba. La herramienta Burp Suite puede detectar el spam de alrededor de 2000 aplicaciones web. También puede escanear aplicaciones de software de código abierto. Se utilizan para detectar errores y malware con precisión con la ayuda de herramientas de análisis avanzadas.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img33.svg')
                .col-8
                  .h4 4. John the Ripper
              p.mb-0 John the Ripper es una de las herramientas más populares para descifrar contraseñas. La herramienta se utiliza para probar la seguridad de la contraseña. Esta herramienta utiliza tecnología de fuerza bruta para hackear contraseñas, puede detectar automáticamente el tipo de cifrado de la contraseña. Esta función la convierte en la mejor entre todas las demás herramientas para hackear claves. Esta herramienta utiliza algoritmos como MD4, LDAP, DES y Hash LM.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img34.svg')
                .col-8
                  .h4 5. Nmap
              p.mb-0 Nmap es una herramienta de seguridad de código abierto; esta se utiliza principalmente para gestionar y auditar la seguridad de redes y sistemas. Por lo general, los profesionales de seguridad de la información usan esta herramienta para encontrar malware, auditorías de red, mapeo de red y más para hosts locales y remotos.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img35.svg')
                .col-8
                  .h4 6. Wireshark
              p.mb-0 Wireshark se utiliza para analizar el tráfico de red en tiempo real. Esta herramienta es de código abierto para la piratería ética. Se incluyen diferentes funciones como GUI de potencia y navegador de paquetes, lo que da como resultado otros formatos. Además, la herramienta admite varios tipos de protocolos. Está disponible para diferentes sistemas operativos como Windows, Mac, etc.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img36.svg')
                .col-8
                  .h4 7. OpenVAS
              p.mb-0 Open VAS se utiliza para detectar vulnerabilidades en diferentes hosts. Es uno de los escáneres de red de código abierto. En esta herramienta se incluyen diferentes funciones, como una interfaz basada en web, escaneos programados y escaneo de múltiples hosts a la vez. Además, OpenVas está integrado con el software de monitoreo Nagios.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img37.svg')
                .col-8
                  .h4 8. Escáner Angry IP
              p.mb-0 El escáner Angry IP no requiere ninguna instalación. La herramienta escanea redes locales y web. Angry IP cuenta con las mejores técnicas de escaneo. La herramienta es de código abierto y gratuita, que admite diferentes plataformas. La herramienta ayuda a los piratas informáticos con soporte exclusivo.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img38.svg')
                .col-8
                  .h4 9. Iron
              p.mb-0 La herramienta Iron es útil para las pruebas de malware de aplicaciones web. Es de código abierto y gratuito. Además, la herramienta es una herramienta basada en GUI fácil de usar. Los lenguajes de programación como Python y Ruby son compatibles con él. Esta herramienta proporciona informes en diferentes formatos como HTML y RTF. Esta herramienta puede comprobar cerca de 30 aplicaciones web.
            .BGR04.hg-11.p-xl-3.p-2
              .row.justify-content-center.align-items-end.mb-4
                .col-4
                  img(src='@/assets/curso/tema2/img39.svg')
                .col-8
                  .h4 10. Acunetix
              p.mb-0 La herramienta Acunetix es una herramienta de piratería completamente automática. Esta herramienta se adelanta a cualquier intruso. Los problemas complejos relacionados con la web y la red se auditan en la herramienta. Varias características incluyen escanear diferentes variantes como inyección SQL, XSS, etc. Están disponibles tanto en las instalaciones como en plataformas en la nube.

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #40327B; border-radius: 0 15px 15px 0;" data-aos="fade-right")
        img(src='@/assets/curso/temas/img03.svg' style="max-width: 40px;")
        .h3.col.p-2.text-white.mb-0 Tipos de #[em hacking] ético 

    p A continuación, se muestra la lista de diferentes tipos de Hacking Ético el cual hace referencia a la práctica que hace una persona altamente formada y con grandes conocimientos sobre informática y ciberseguridad, para ayudar a una empresa a detectar vulnerabilidades y debilidades:

    .BGIMG15.p-4.mb-4(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Hackeo de aplicaciones web
            p.mb-0 Los métodos utilizados son ataques de inyección SQL, secuencias de comandos entre sitios, comunicaciones inseguras, etc.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img40.png")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 La ingeniería social
            p.mb-0 Se utiliza para convencer a las personas de que revelen su información confidencial. El atacante engaña a las personas aprovechándose de su confianza y falta de conocimiento.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img41.png")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Hackeo del sistema
            p.mb-0 La piratería del sistema es el sacrificio del software de la computadora para acceder y robar sus datos confidenciales. El #[em hacker] se aprovecha de las debilidades de un sistema informático para obtener la información y los datos y se aprovecha injustamente.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img42.png")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Hackeo de redes inalámbricas
            p.mb-0 La piratería inalámbrica ataca redes inalámbricas o puntos de acceso que ofrecen información confidencial, como ataques de autenticación, acceso al portal de administración, contraseña wifi y otros datos similares. Se realiza para acceder a una red wifi privada.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img43.png")
        .row.justify-content-around.align-items-center
          .col-lg-5.order-lg-1.order-2
            .h4 Hackeo de servidores web
            p.mb-0 Los piratas informáticos piratean servidores web para obtener ganancias financieras mediante el robo, el sabotaje, el chantaje, la extorsión, etc.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema2/img44.png")
    
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Consideraciones 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img45.png")
      .col-lg-8(data-aos="fade-left")
        p La piratería ética se ha convertido en una forma esencial para que las empresas identifiquen y aborden las exposiciones a la seguridad cibernética. En este aparte de piratería ética, los especialistas en seguridad cibernética con sede en el Reino Unido, Redscan, describen la práctica como la identificación y explotación de vulnerabilidades de seguridad cibernética en entornos de TI con fines legítimos y no maliciosos. 
        p.mb-0 La piratería ética es lo opuesto a la piratería de "sombrero negro", el tipo de piratería que aparece en los titulares de las noticias por las razones equivocadas. La piratería de sombrero negro es un delito y, si bien la piratería ética puede involucrar técnicas similares, generalmente la lleva a cabo una empresa profesional contratada para realizar pruebas y se adhiere a los más altos estándares. ¿Qué hace que la piratería ética sea "ética"? Veamos cómo la piratería ética puede ayudar a proteger a las empresas de los ataques, además de examinar las formas en que puede asegurarse de que está trabajando con piratas informáticos éticos genuinos.     

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      AcordionA(tipo="a" clase-tarjeta="BGR05")
        .row.justify-content-center(titulo="Realizado con consentimiento")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 El hacking ético siempre se realiza con consentimiento. Si bien el objetivo de los compromisos es reproducir con precisión las tácticas, técnicas y procedimientos utilizados por los ciberdelincuentes, nunca está diseñado para ser malicioso y tiene como objetivo evitar daños e interrupciones en las empresas. Antes de realizar una evaluación, una firma profesional de ciberseguridad se asegurará de que exista un acuerdo formal que defina claramente el alcance de las evaluaciones y mantenga la confidencialidad del cliente.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img46.png')
        .row.justify-content-center(titulo="Realizado por expertos")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 La piratería ética siempre debe ser realizada por profesionales capacitados que comprendan las últimas herramientas y técnicas de piratería y realicen evaluaciones con los más altos estándares técnicos, legales y éticos. Es importante buscar organizaciones que tengan las certificaciones de piratería ética adecuadas: uno de los organismos de acreditación más conocidos y reconocidos es Crest. También es recomendable buscar firmas que tengan personal certificado con una amplia gama de disciplinas de piratería ética; esto demuestra la capacidad de la organización para realizar una amplia gama de evaluaciones.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img47.png')
        .row.justify-content-center(titulo="Realizado por consultores con autorización de seguridad")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Al encargar una evaluación de piratería ética, es importante tener plena confianza en las personas involucradas. Cuando una prueba de penetración implica el acceso a información altamente confidencial y/o clasificada, las empresas pueden considerar salvaguardas adicionales, como el uso de evaluadores con autorización de seguridad de alto nivel.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img48.png')
        .row.justify-content-center(titulo="Realizado de acuerdo con las leyes vigentes")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Hay muchos aspectos legales que deben tenerse en cuenta al someterse a una piratería ética. Los evaluadores pueden, a través del proceso normal de un compromiso, acceder a datos altamente confidenciales. Para lograr un objetivo acordado, es posible que tengan la necesidad de filtrar esta información. Un negocio de piratería ética profesional considerará los problemas legales descritos en la legislación, incluidas las leyes en países/estados específicos y regulaciones como GDPR. Al programar cualquier forma de piratería ética, es aconsejable consultar al equipo legal de la organización para asegurarse de que las pruebas se mantengan dentro de lo permitido por la ley. Si bien ningún #[em hacker] ético tiene la intención de causar daños o interrupciones, existen riesgos inherentes a la realización de pruebas en sistemas en vivo: todas las partes deben ser conscientes de los riesgos y establecer las medidas de seguridad adecuadas.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img49.png')
        .row.justify-content-center(titulo="Realizado de forma transparente")
          .col-lg-7.order-lg-1.order-2
            p.mb-0 Es esencial que las evaluaciones de piratería ética sean lo más transparente posible. Un #[em hacker] ético siempre compartirá los hallazgos y ofrecerá consejos de reparación para garantizar que las vulnerabilidades se informen y aborden. Deben ser localizables a lo largo de los compromisos y proporcionar informes escritos claros para resumir los hallazgos y las recomendaciones. Hay muchas cosas a considerar al encargar la piratería ética para el negocio. En cualquier caso, es una buena idea trabajar con un proveedor con mucha experiencia que esté feliz de explicarle cualquier riesgo y asegurarse de que todo el proceso se lleve a cabo de la manera más segura posible y brinde resultados tangibles.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img50.png')

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
