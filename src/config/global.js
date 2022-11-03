export default {
  global: {
    componenteFormativo: 'Arquitectura de <i><i>Blockchain</i></i>',
    descripcionCurso:
      'Mediante el presente componente, se identifican los elementos que componen una arquitectura de <i>blockchain</i>, así como las diferentes capas que se involucran en una transacción de información, teniendo en cuenta la cadena de bloques que contiene la información, y su vinculación en red. ',
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
        titulo: 'Arquitectura de <i>blockchain</i>',
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
              'Capas de la arquitectura (aplicación, <i>ledger</i> o base de datos distribuida, red de igual a igual)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plataforma <i>Ethereum</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Análisis de etapas de <i>Ethereum</i>',
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
        titulo: 'Tendencias de <i>blockchain</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Visualización de <i>blockchain</i>',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Modelos de negocio de <i>blockchain</i>',
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
        'Arroyo Guardeño, D. Díaz Vico, J. & Hernández Encinas, L. (2019). <i><i>Blockchain</i></i>. Editorial CSIC Consejo Superior de Investigaciones Científicas.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111431 ',
    },
    {
      referencia:
        'García-Morales, E. (2018). Luces y sombras sobre el impacto del <i>blockchain</i> en la gestión de documentos. Anuario ThinkEPI, 12, 345–351.',
      link: 'https://doi.org/10.3145/thinkepi.2018.58  ',
    },
    {
      referencia:
        'Grupo Garatú (2018).  ¿Qué tipos de <i><i>Blockchain</i></i> o Cadenas de Bloques existen?. ',
      link:
        'https://grupogaratu.com/cuales-son-los-diferentes-tipos-de-blockchains-o-cadena-de-bloques/',
    },
    {
      referencia:
        'Herrera, J. (2021). Propuesta de un mecanismo de gestión de pagos públicos mediante cadena de bloques (<i>blockchain</i>). Revista de derecho de la Hacienda Pública, ISSN-e 2215-3624, Nº. 17, 2021, págs. 22-39.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8072557  ',
    },
    {
      referencia:
        'MINTIC. (2022) Guía de referencia de <i>blockchain</i> para la adopción e implementación de proyectos en el estado colombiano.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf ',
    },
    {
      referencia:
        'Pacheco Jiménez, M. (2019). De la tecnología <i>blockchain</i> a la economía del <i>token</i>.',
      link: 'https://dx.doi.org/10.18800/derechopucp.201902.003',
    },
    {
      referencia:
        'Shashank (2019).  What are <i>Smart Contracts</i>? A Beginner’s Guide To <i>Smart Contracts</i>.',
      link: 'https://www.edureka.co/blog/smart-contracts/ ',
    },
    {
      referencia:
        'Tapscott, D., & Tapscott, A. (2017). La revolución <i>blockchain</i>. Descubre cómo esta nueva tecnología transformará la economía global. ediciones Deusco. séptima edición.',
      link:
        'https://static0planetadelibroscommx.cdnstatics.com/libros_contenido_extra/35/34781_La_revolucion_blockchain.pdf ',
    },
    {
      referencia:
        'Tudela, L (2019) Arquitectura <i>blockchain</i> para la securización de dispositivos <i>IOT</i> mediante <i>smart contracts</i>.',
      link: 'http://castor.det.uvigo.es:8080/xmlui/handle/123456789/345 ',
    },
    {
      referencia:
        'Vega Maza, M. (2019). El auge de <i>blockchain</i> y sus posibilidades reales de aplicación en los registros de las administraciones públicas. Revista de <i>Internet</i>, Derecho y Política.',
      link: 'https://doi.org/10.7238/idp.v0i28.3154 ',
    },
    {
      referencia:
        'Zhang, R. Xue, R. Liu, L. (2019). Security and Privacy on <i><i>Blockchain</i></i>. ACM Comput. Surv. 52, 3, Article 51 (May 2020).',
      link: 'https://doi.org/10.1145/3316481',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo de consenso',
      significado:
        'Es el mecanismo utilizado por una red <i><i>Blockchain</i></i>, para determinar el estado correcto de un registro después de realizar una transacción.',
    },
    {
      termino: 'Arquitectura',
      significado:
        'Sistema de <i>software </i>construido con procesos comunicantes.',
    },
    {
      termino: '<i>Hash</i>',
      significado:
        'Resultado de la aplicación de un algoritmo matemático a una cadena de información, obteniendo una serie de caracteres con una longitud fija.',
    },
    {
      termino: '<i>P2P</i>',
      significado:
        'Son redes conformadas por personas o dispositivos que operan de manera descentralizada y sin responder a un nodo central.',
    },
    {
      termino: '<i>Web 3.0</i>',
      significado:
        'La <i>web 3.0</i> es la tercera generación de servicios de <i>Internet</i> que se centrará en la comprensión y análisis de los datos para proporcionar una web semántica. Su objetivo es el de crear webs más inteligentes, conectadas, abiertas, descentralizadas y soportadas bajo redes de <i>blockchain</i> y adaptadas a cada usuario.',
    },
    {
      termino: '<i>DApp</i>',
      significado:
        'Conocidas también como aplicaciones descentralizadas, son aplicaciones cuyo funcionamiento se basa en una red descentralizada de nodos interactuando unos con otros sin depender de un nodo central.',
    },
    {
      termino: '<i>Gas</i>',
      significado:
        'Es la comisión necesaria para llevar a cabo una transacción en una red de <i>blockchain</i>.',
    },
    {
      termino: '<i>Token</i>',
      significado:
        'Es una unidad de valor que una organización crea para gobernar su modelo de negocio y dar más poder a sus usuarios para interactuar con sus productos, al tiempo que facilita la distribución y reparto de beneficios entre todos sus accionistas.',
    },
    {
      termino: '<i>Whitepaper</i>',
      significado:
        'Documento que define un proyecto, su estructura, monetización, reglas de negocio y cronograma de desarrollo.',
    },
  ],
  complementario: [
    {
      tema: 'Arquitectura de <i><i>Blockchain</i></i>- Conceptos',
      referencia:
        'MinTic. (2020) Guía de referencia de <i>blockchain</i> para la adopción e implementación de proyectos en el estado colombiano.',
      tipo: 'Documento',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-161810_Ley_2052_2020.pdf',
    },
    {
      tema:
        'Capas de la arquitectura (aplicación, <i>ledger</i> o base de datos distribuida, red de igual a igual)',
      referencia:
        'Montoya, B. (2021). Propuestas del uso de blockchain con enfoque de aplicación a internet de las cosas (Proyecto de grado, Universidad Tecnológica de Pereira, Pereira).',
      tipo: 'Repositorio UTP',
      link:
        'https://repositorio.utp.edu.co/server/api/core/bitstreams/0f803508-22bc-4bac-9dcb-c829573d12b2/content',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto Temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jesús Antonio Vecino',
        cargo: 'Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea Botello',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
