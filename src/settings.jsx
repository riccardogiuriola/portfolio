/**
 * App Settings
 */
const settings = {
    /* nav_logo_path: require('../../common-assets/images/logo.svg'),
    nav_logo_white_path: require('../../common-assets/images/logo-white.svg'), */
    section: 'about',
    nav_logo_width: '45px',
    nav_logo_url: '/',
    theme: 'dark',
    navigation: [
        {
            id: 'about',
            name: 'About',
            icon: 'user',
        },
        {
            id: 'experience',
            name: 'Experience',
            icon: 'award',
        },
        {
            id: 'work',
            name: 'Work',
            icon: 'code',
        },
        {
            id: 'contacts',
            name: 'Contacts',
            icon: 'at-sign',
        },
    ],
    socials: [
        {
            name: 'LinkedIn',
            icon: 'SiLinkedin',
            vendor: 'ra',
            url: 'https://www.linkedin.com/in/riccardo-giuriola-67825715b/'
        },
        {
            name: 'GitHub',
            icon: 'SiGithub',
            vendor: 'ra',
            url: 'https://github.com/riccardogiuriola'
        },
        {
            name: 'GitLab',
            icon: 'SiGitlab',
            vendor: 'ra',
            url: 'https://gitlab.com/users/riccardo-giuriola/projects'
        },
        {
            name: 'TryHackMe',
            icon: 'SiTryhackme',
            vendor: 'ra',
            url: 'https://tryhackme.com/p/razor99'
        }
    ],
    particles: {
        "particles": {
            "number": {
                "value": 6,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#1b1e34"
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": [
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/110px-Python-logo-notext.svg.png",
                        "width": 100,
                        "height": 100
                    }, {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
                        "width": 100,
                        "height": 100
                    },
                    {
                        "src": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
                        "width": 711,
                        "height": 384
                    },
                    {
                        "src": "https://www.vectorlogo.zone/logos/java/java-icon.svg",
                        "width": 64,
                        "height": 64
                    }
                ]
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 78.91476416322726,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 7.192807192807193,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
};

export default settings;
