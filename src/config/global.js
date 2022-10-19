export default {
  global: {
    componenteFormativo: 'Arquitectura de Blockchain',
    descripcionCurso:
      'Mediante el presente componente, se identifican los elementos que componen una arquitectura de blockchain, así como las diferentes capas que se involucran en una transacción de información, teniendo en cuenta la cadena de bloques que contiene la información, y su vinculación en red.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
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
        titulo: 'Sistema distribuido y red extendida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Arquitectura de blockchain',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Capas de la arquitectura (aplicación, ledger o base de datos distribuida, red de igual a igual)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plataforma Ethereum',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis de etapas de Ethereum',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Instalación y Configuración',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Contratos Inteligentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Conceptos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aplicación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Interacción con otras aplicaciones.',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tendencias de blockchain',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Visualización de blockchain',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Modelos de negocio de blockchain',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Aplicaciones, casos de estudio',
            hash: 't_5_3',
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
        'Arroyo Guardeño, D. Díaz Vico, J. & Hernández Encinas, L. (2019). Blockchain. Editorial CSIC Consejo Superior de Investigaciones Científicas.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111431 ',
    },
    {
      referencia:
        'García-Morales, E. (2018). Luces y sombras sobre el impacto del blockchain en la gestión de documentos. Anuario ThinkEPI, 12, 345–351.',
      link: 'https://doi.org/10.3145/thinkepi.2018.58  ',
    },
    {
      referencia:
        'Grupo Garatú (2018).  ¿Qué tipos de Blockchain o Cadenas de Bloques existen?. ',
      link:
        'https://grupogaratu.com/cuales-son-los-diferentes-tipos-de-blockchains-o-cadena-de-bloques/',
    },
    {
      referencia:
        'Herrera, J. (2021). Propuesta de un mecanismo de gestión de pagos públicos mediante cadena de bloques (blockchain). Revista de derecho de la Hacienda Pública, ISSN-e 2215-3624, Nº. 17, 2021, págs. 22-39.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8072557  ',
    },
    {
      referencia:
        'MINTIC. (2022) Guía de referencia de blockchain para la adopción e implementación de proyectos en el estado colombiano.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf ',
    },
    {
      referencia:
        'Pacheco Jiménez, M. (2019). De la tecnología blockchain a la economía del token.',
      link: 'https://dx.doi.org/10.18800/derechopucp.201902.003',
    },
    {
      referencia:
        'Shashank (2019).  What are Smart Contracts? A Beginner’s Guide To Smart Contracts.',
      link: 'https://www.edureka.co/blog/smart-contracts/ ',
    },
    {
      referencia:
        'Tapscott, D., & Tapscott, A. (2017). La revolución blockchain. Descubre cómo esta nueva tecnología transformará la economía global. ediciones Deusco. séptima edición.',
      link:
        'https://static0planetadelibroscommx.cdnstatics.com/libros_contenido_extra/35/34781_La_revolucion_blockchain.pdf ',
    },
    {
      referencia:
        'Tudela, L (2019) Arquitectura blockchain para la securización de dispositivos IOT mediante smart contracts.',
      link: 'http://castor.det.uvigo.es:8080/xmlui/handle/123456789/345 ',
    },
    {
      referencia:
        'Vega Maza, M. (2019). El auge de blockchain y sus posibilidades reales de aplicación en los registros de las administraciones públicas. Revista de Internet, Derecho y Política.',
      link: 'https://doi.org/10.7238/idp.v0i28.3154 ',
    },
    {
      referencia:
        'Zhang, R. Xue, R. Liu, L. (2019). Security and Privacy on Blockchain. ACM Comput. Surv. 52, 3, Article 51 (May 2020).',
      link: 'https://doi.org/10.1145/3316481',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo de consenso',
      significado:
        'Es el mecanismo utilizado por una red Blockchain, para determinar el estado correcto de un registro después de realizar una transacción.',
    },
    {
      termino: 'Arquitectura',
      significado: 'Sistema de software construido con procesos comunicantes.',
    },
    {
      termino: 'Hash',
      significado:
        'Resultado de la aplicación de un algoritmo matemático a una cadena de información, obteniendo una serie de caracteres con una longitud fija.',
    },
    {
      termino: 'P2P',
      significado:
        'Son redes conformadas por personas o dispositivos que operan de manera descentralizada y sin responder a un nodo central.',
    },
    {
      termino: 'Web 3.0',
      significado:
        'La web 3.0 es la tercera generación de servicios de Internet que se centrará en la comprensión y análisis de los datos para proporcionar una web semántica. Su objetivo es el de crear webs más inteligentes, conectadas, abiertas, descentralizadas y soportadas bajo redes de blockchain y adaptadas a cada usuario.',
    },
    {
      termino: 'DApp',
      significado:
        'Conocidas también como aplicaciones descentralizadas, son aplicaciones cuyo funcionamiento se basa en una red descentralizada de nodos interactuando unos con otros sin depender de un nodo central.',
    },
    {
      termino: 'Gas',
      significado:
        'Es la comisión necesaria para llevar a cabo una transacción en una red de blockchain.',
    },
    {
      termino: 'Token',
      significado:
        'Es una unidad de valor que una organización crea para gobernar su modelo de negocio y dar más poder a sus usuarios para interactuar con sus productos, al tiempo que facilita la distribución y reparto de beneficios entre todos sus accionistas.',
    },
    {
      termino: 'Web 3.0',
      significado:
        'Tercera generación de servicios de Internet para páginas web y aplicaciones. Se centrará en el uso de una comprensión de datos basada en máquinas para proporcionar una Web semántica y datificada. Su objetivo es el de crear sitios web más inteligentes, conectados y abiertos',
    },
    {
      termino: 'Whitepaper',
      significado:
        'Documento que define un proyecto, su estructura, monetización, reglas de negocio y cronograma de desarrollo',
    },
  ],
  complementario: [
    {
      tema: 'Arquitectura de Blockchain- Conceptos',
      referencia:
        'MinTic. (2020) Guía de referencia de blockchain para la adopción e implementación de proyectos en el estado colombiano.',
      tipo: 'Documento',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf',
    },
    {
      tema:
        'Capas de la arquitectura (aplicación, ledger o base de datos distribuida, red de igual a igual)',
      referencia:
        'Tudela Díaz, I. (2019). Arquitectura blockchain para la securización de dispositivos IOT mediante smart contracts. [Tesis de pregrado,  Ingenieria en Tecnologías de la Telecomunicación. Universidad de Vigo, para optar al título de +',
      tipo: 'Tesis de grado',
      link:
        'http://castor.det.uvigo.es:8080/xmlui/bitstream/handle/123456789/345/TFG%20Iago%20Tudela%20D%c3%adaz.pdf?sequence=1&isAllowed=y ',
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
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
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
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
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
