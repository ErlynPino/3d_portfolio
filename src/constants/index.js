import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Sobre mi",
    },
    {
        id: "work",
        title: "Experiencia",
    },
    {
        id: "contact",
        title: "Contacto",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "FrontEnd Developer",
        icon: mobile,
    },
    {
        title: "Diseñador UX/UI",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "angular",
        icon: angular,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
    
];

const experiences = [
    {
        title: "Front End Developer",
        company_name: "Teleperformance Colombia",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Diciembre 2021 - Agosto 2023",
        points: [
            "Crear y mantener la interfaz de usuario del sitio web o aplicación.",
            "Traducir diseños en código utilizando HTML, CSS y JavaScript (React js, Next js, Angular js...)",
            "Colaborar con diseñadores y otros miembros del equipo para mejorar la experiencia del usuario.",
            "Mejorar el rendimiento de la interfaz para garantizar tiempos de carga rápidos.",
            "Conectar la interfaz de usuario con servicios y APIs backend para obtener y enviar datos.",
            "Trabajar estrechamente con diseñadores, desarrolladores backend y otros miembros del equipo."
        ],
    },
    {
        title: "Comercial Venta de Software",
        company_name: "Desystec SAS",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Octubre 2020 - Diciembre 2021",
        points: [
            "Realizar entrevistas y consultas con posibles clientes para comprender sus requisitos y desafíos específicos en la gestión de propiedades horizontales.",
            "Desarrollar presentaciones efectivas para destacar cómo el software puede abordar las necesidades y desafíos identificados, haciendo hincapié en los beneficios clave.",
            "Realizar demostraciones del software para los clientes potenciales, destacando las funciones clave y mostrando cómo puede facilitar sus operaciones diarias.",
            "Construir relaciones sólidas con los clientes, entender sus necesidades cambiantes y ofrecer soluciones adicionales a medida que evolucionan sus requisitos.",
            "Mantenerse actualizado sobre las tendencias del mercado, la competencia y las actualizaciones en el software para poder ofrecer información precisa y actualizada a los clientes."
            
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    
];

const projects = [
    {
        name: "Alquiler de carros",
        description:
            "Plataforma basada en web que permite a los usuarios buscar, reservar y administrar alquileres de automóviles de varios proveedores, brindando una solución conveniente y eficiente para las necesidades de transporte.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/ErlynPino",
    },
    {
        name: "Trabajo de TI",
        description:
            "Aplicación web que permite a los usuarios buscar ofertas de trabajo, ver rangos salariales estimados para puestos y localizar trabajos disponibles según su ubicación actual.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/ErlynPino",
    },
    {
        name: "Guía de viaje",
        description:
            "Una plataforma integral de reserva de viajes que permite a los usuarios reservar vuelos, hoteles y autos de alquiler, y ofrece recomendaciones seleccionadas para destinos populares.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/ErlynPino",
    },
];

export { services, technologies, experiences, testimonials, projects };