const mobilityData = {
  delhi: {
    cabs: [
      {
        id: "uber",
        name: "Uber",
        icon: "../.././assets/services/uber.png",
        description:
          "Uber is a ride-hailing company that connects passengers with drivers through a mobile app.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.ubercab",
        iosLink: "https://apps.apple.com/us/app/uber/id368677368",
      },
      {
        id: "ola",
        name: "Ola",
        icon: "../.././assets/services/ola.png",
        description:
          "Ola Cabs is India's largest mobility platform and one of the world's largest ride-hailing companies.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.olacabs.customer",
        iosLink: "https://apps.apple.com/in/app/ola-cabs/id539179365",
      },
      {
        id: "meru",
        name: "Meru",
        icon: "../.././assets/services/meru.png",
        description:
          "Meru Cabs offers reliable taxi services across major cities in India.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.meru.passenger",
        iosLink: "https://apps.apple.com/in/app/meru-cabs/id794479461",
      },
    ],
    bikes: [
      {
        id: "rapido",
        name: "Rapido",
        icon: "../.././assets/services/rapido.jpeg",
        description: "Rapido is India's largest bike taxi service platform.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.rapido.passenger",
        iosLink: "https://apps.apple.com/in/app/rapido-bike-taxi/id1441609068",
      },
      {
        id: "bounce",
        name: "Bounce",
        icon: "../.././assets/services/bounce.png",
        description:
          "Bounce is a smart mobility solution making daily commute stress-free.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.bounce.infinity&hl=en_IN",
        iosLink:
          "https://apps.apple.com/in/app/bounce-bike-scooter-rental/id1457657061",
      },
    ],
    autos: [
      {
        id: "ola-auto",
        name: "Ola Auto",
        icon: "../.././assets/services/ola.png",
        description:
          "Ola Auto provides convenient and affordable auto-rickshaw rides.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.olacabs.customer",
        iosLink: "https://apps.apple.com/in/app/ola-cabs/id539179365",
      },
      {
        id: "jugnoo",
        name: "Jugnoo",
        icon: "../.././assets/services/jugnoo.jpeg",
        description:
          "Jugnoo offers auto-rickshaw services with transparent pricing.",
        androidLink:
          "https://play.google.com/store/apps/details?id=product.clicklabs.jugnoo&hl=en",
        iosLink:
          "https://apps.apple.com/in/app/jugnoo-savari-india-ki/id882391317",
      },
    ],
    porter: [
      {
        id: "porter",
        name: "Porter",
        icon: "../.././assets/services/porter.jpeg",
        description:
          "Porter provides mini-trucks and tempos for all your logistics needs.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.theporter.android.customer",
        iosLink:
          "https://apps.apple.com/in/app/porter-trucks-tempos-hire/id989209183",
      },
      {
        id: "blowhorn",
        name: "Blowhorn",
        icon: "../.././assets/services/blowhorn.webp",
        description:
          "Porter provides mini-trucks and tempos for all your logistics needs.",
        androidLink:
          "https://play.google.com/store/apps/details?id=net.blowhorn.driverapp&hl=en_IN",
        iosLink:
          "https://apps.apple.com/in/app/blowhorn-mini-trucks-on-hire/id1251408316",
      },
    ],
  },
  mumbai: {
    cabs: [
      {
        id: "uber",
        name: "Uber",
        icon: "../.././assets/services/uber.png",
        description:
          "Uber is a ride-hailing company that connects passengers with drivers through a mobile app.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.ubercab",
        iosLink: "https://apps.apple.com/us/app/uber/id368677368",
      },
      {
        id: "ola",
        name: "Ola",
        icon: "../.././assets/services/ola.png",
        description:
          "Ola Cabs is India's largest mobility platform and one of the world's largest ride-hailing companies.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.olacabs.customer",
        iosLink: "https://apps.apple.com/in/app/ola-cabs/id539179365",
      },
    ],
    bikes: [
      {
        id: "rapido",
        name: "Rapido",
        icon: "../.././assets/services/rapido.jpeg",
        description: "Rapido is India's largest bike taxi service platform.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.rapido.passenger",
        iosLink: "https://apps.apple.com/in/app/rapido-bike-taxi/id1441609068",
      },
    ],
    autos: [
      {
        id: "ola-auto",
        name: "Ola Auto",
        icon: "../.././assets/services/ola.png",
        description:
          "Ola Auto provides convenient and affordable auto-rickshaw rides.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.olacabs.customer",
        iosLink: "https://apps.apple.com/in/app/ola-cabs/id539179365",
      },
    ],
    porter: [
      {
        id: "porter",
        name: "Porter",
        icon: "../.././assets/services/porter.jpeg",
        description:
          "Porter provides mini-trucks and tempos for all your logistics needs.",
        androidLink:
          "https://play.google.com/store/apps/details?id=com.theporter.android.customer",
        iosLink:
          "https://apps.apple.com/in/app/porter-trucks-tempos-hire/id989209183",
      },
    ],
  },
  // Add more cities as needed
};

// Museum data
const museumData = {
  delhi: [
    {
      id: "penny-farthing",
      name: "Penny-Farthing Bicycle",
      image: "../.././assets/museum/penny-farthing.jpg",
      description: "A high-wheeled bicycle from the 19th century.",
    },
    {
      id: "tanga",
      name: "Tanga Cart",
      image: "../.././assets/museum/tanga.jpg",
      description:
        "A traditional horse-drawn carriage used for passenger transport in India.",
    },
  ],
  mumbai: [
    {
      id: "rickshaw",
      name: "Hand-Pulled Rickshaw",
      image: "../.././assets/museum/rickshaw.jpg",
      description: "An early form of rickshaw transport in Indian cities.",
    },
    {
      id: "tram",
      name: "Vintage Tram",
      image: "../.././assets/museum/tram.avif",
      description: "A historic tram used for public transport in urban areas.",
    },
    {
      id: "vintage-car",
      name: "Vintage Car",
      image: "../.././assets/museum/vintage-car.jpg",
      description: "Classic cars from the early 20th century.",
    },
  ],
  // Add more cities as needed
};
