export default {
  global: {
    componenteFormativo: 'Evaluación de las estrategias de seguridad',
    descripcionCurso:
      'Las estrategias de ciberseguridad implementadas en una organización, deben siempre estar acordes a las necesidades del mercado, por lo que se requiere permanentemente de evaluaciones que permitan tomar decisiones de cambio, actualización o simplemente confirmar la efectividad de la estrategia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de auditoría',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características y aplicación',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Técnicas de recopilación de información',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Recomendaciones',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Hacking Ético',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Etapas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Consideraciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mejoramiento continuo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Socialización de resultados del tratamiento de riesgo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Informe técnico de hallazgos y recomendaciones',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bitsight. (2019). The Importance of Continuous Improvement in Security Performance Management.',
      link:
        'https://www.bitsight.com/blog/importance-continuous-improvement-security-performance-management',
    },
    {
      referencia: 'Eccouncil (s.f). What is Ethical Hacking?',
      link: 'https://www.eccouncil.org/ethical-hacking/',
    },
    {
      referencia:
        'GlobalSign Blog. (2022). Comment (et pourquoi) mener des audits de cybersécurité dans votre entreprise.',
      link:
        'https://www.globalsign.com/fr/blog/comment-et-pourquoi-mener-des-audits-de-cybersecurite',
    },
    {
      referencia:
        'Howard Poston. (2019) Information Collection in Cybersecurity.',
      link:
        'https://resources.infosecinstitute.com/topic/information-collection-in-cybersecurity/',
    },
    {
      referencia:
        'Incibe. (s. f.). Glosario de términos de ciberseguridad. Gobierno de España.',
      link:
        'https://www.incibe.es/sites/default/files/contenidos/guias/doc/guia_glosario_ciberseguridad_2021.pdf',
    },
    {
      referencia: 'Ingrid Horvath (2022). The Five Phases of Ethical Hacking. ',
      link: 'https://www.invensislearning.com/blog/phases-of-ethical-hacking/',
    },
    {
      referencia:
        'Mon-infra. (s. f.). Quelles sont les étapes d’un audit informatique?',
      link:
        'https://mon-infra.fr/quelles-sont-les-etapes-dun-audit-informatique/',
    },
    {
      referencia:
        'Premier IT Solution. (2022). External IT Security Audit - What It Is and Why You Need On.',
      link:
        'https://securityboulevard.com/2022/08/what-is-a-cybersecurity-audit-and-why-is-it-important/',
    },
    {
      referencia: 'Synopsys. (2022). Ethical Hacking.',
      link: 'https://www.synopsys.com/glossary/what-is-ethical-hacking.html',
    },
    {
      referencia:
        'Zevenet. (2021). 10 Importance of Information Security Audit.',
      link:
        'https://www.zevenet.com/blog/10-importance-of-information-security-audit/',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría de seguridad',
      significado:
        'consiste en el análisis y gestión de sistemas llevado a cabo por profesionales en tecnologías de la información (ti) principalmente para identificar, enumerar y describir las diversas vulnerabilidades que pudieran presentarse en una revisión exhaustiva de las estaciones de trabajo, redes de comunicaciones, servidores o aplicaciones.',
    },
    {
      termino: 'Agujero de seguridad',
      significado:
        'fallo en un sistema de información que se puede explotar para violar la seguridad del sistema.',
    },
    {
      termino: '<em>Adware</em>',
      significado:
        'software que se apoya en anuncios (normalmente para financiarse) como parte del propio programa. en algunos casos se les considera malware. Es común en las versiones gratuitas en las aplicaciones.',
    },
    {
      termino: 'Amenaza',
      significado:
        'circunstancia desfavorable que puede ocurrir y que cuando sucede tiene consecuencias negativas sobre los activos provocando su indisponibilidad, funcionamiento incorrecto o pérdida de valor.',
    },
    {
      termino: 'Análisis de riesgos',
      significado:
        'proceso que comprende la identificación de activos de información, sus vulnerabilidades y las amenazas a los que se encuentran expuestos, así como la probabilidad de ocurrencia y el impacto de las mismas para determinar los controles adecuados para tratar el riesgo.',
    },
    {
      termino: '<em>Antispyware</em>',
      significado:
        'herramienta de software diseñada para detectar y eliminar programas maliciosos del tipo spyware cuyo objetivo es espiar y obtener de forma sigilosa información personal presente en el dispositivo sin consentimiento del usuario.',
    },
    {
      termino: '<em>Backup</em>',
      significado:
        'copia de seguridad que se realiza sobre ficheros o aplicaciones contenidas en un ordenador con la finalidad de recuperar los datos en el caso de que el sistema de información sufra daños o pérdidas accidentales de los datos almacenados.',
    },
    {
      termino: 'Biometría',
      significado:
        'método de reconocimiento de personas basado en sus características fisiológicas (huellas dactilares, retinas, iris, cara, etc.) o de comportamiento (firma, forma de andar, tecleo, etc.).',
    },
    {
      termino: '<em>Botnet</em>',
      significado:
        'conjunto de ordenadores (denominados bots) controlados remotamente por un atacante que pueden ser utilizados en conjunto para realizar actividades maliciosas como envío de spam, ataques de DDOS, etc.',
    },
    {
      termino: 'Captcha',
      significado:
        'acrónimo en inglés de Completely Automated Public Turing Test To Tell Computers and Humans Apart; en español, prueba de turing completamente automática y pública para diferenciar ordenadores de humanos, es un tipo de medida de seguridad que consiste en la realización de pruebas desafío-respuesta controladas por máquinas que sirven para determinar cuándo el usuario es un humano o un bot según la respuesta a dicho desafío.',
    },
    {
      termino: 'Cortafuegos',
      significado:
        'la funcionalidad básica de un cortafuego es asegurar que todas las comunicaciones entre la red e internet se realicen conforme a las políticas de seguridad de la organización o corporación.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'capacidad de un servicio, un sistema o una información, a ser accesible y utilizable por los usuarios o procesos autorizados cuando estos lo requieran.',
    },
    {
      termino: 'Gestión de incidentes',
      significado:
        'listado de procedimientos previamente documentados sobre los pasos a seguir en caso de detectar una amenaza de ciberseguridad en la empresa.',
    },
  ],
  complementario: [
    {
      tema: 'Pruebas de Penetración',
      referencia:
        'Mike James (2022). <em>Ethical hacking (also referred to as white hat hacking) has become an essential way for businesses to identify and address cybersecurity exposures</em>. Stay Safe Online.',
      tipo: 'Página Web',
      link:
        'https://staysafeonline.org/cybersecurity-for-business/how-can-ethical-hacking-be-ethical/#:~:text=Ethical%20hacking%20is%20always%20performed,damage%20and%20disruption%20to%20businesses',
    },
    {
      tema: 'Técnicas en la Auditoría',
      referencia:
        'Currentware. (2022). 7 <em>Tips for Passing Your Next Cybersecurity Audit (Meet Compliance)</em>. Currentware.',
      tipo: 'Página Web',
      link: 'https://www.currentware.com/blog/it-security-audit-tips/',
    },
    {
      tema: 'Características de una buena auditoria',
      referencia:
        'Immunebytes. (2022). <em>Características de un buen auditor de seguridad cibernética</em>. Immunebytes.',
      tipo: 'Página Web',
      link: 'https://www.immunebytes.com/blog/traits-cyber-security-auditor/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Ronald Alexander Vacca Ascanio',
        cargo: 'Experto temático',
        centro:
          'Regional Norte de Santander - Centro de la industria, la empresa y los servicios.',
      },
      {
        nombre: 'Javier Ricardo Luna Pineda',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la industria, la empresa y los servicios.',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la industria, la empresa y los servicios.',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora pedagógica y metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
