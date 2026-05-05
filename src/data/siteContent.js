const baseUrl = import.meta.env.BASE_URL;
const imagePath = (fileName) => `${baseUrl}images/${fileName}`;

const siteContent = {
  meta: {
    teamName: "Edmond United MTB Team",
    location: "Edmond, Oklahoma",
    pageTitle: "Edmond United Youth Mountain Bike Team"
  },
  theme: {
    primary: "#497a56",
    accentRed: "#d33a2b",
    accentBlue: "#2f4f94",
    accentGold: "#edad42",
    white: "#ffffff",
    text: "#1f2a1f",
    surface: "#f5f8f4"
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "League Info", href: "#leagueinfo" },
    { label: "Practices", href: "#practices" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    headline: "Ride Strong With Edmond United",
    supportingText:
      "A youth mountain bike team building confidence, skills, and community on every trail. A part of the Oklahoma Interscholastic Cycling League.",
    ctaLabel: "Join Our Team",
    ctaHref: "#contact",
    image: imagePath("hero_image0.jpg"),
    imageAlt: "Youth mountain bike riders in a race",
    rotationIntervalMs: 7000,
    images: [
      {
        src: imagePath("hero_image0.jpg"),
        alt: "Youth mountain bike riders in a race"
      },
      {
        src: imagePath("hero_image1.jpg"),
        alt: "Youth female mountain bike rider in a race"
      },
      {
        src: imagePath("hero_image2.jpg"),
        alt: "Youth mountain bike rider in a race"
      },
    ]
  },
  about: {
    id: "about",
    title: "About Edmond United",
    text: [
      "Edmond United is a welcoming mountain bike team for student-athletes in grades 6th-12th, based out of Edmond, Oklahoma.",
      "Our mission is to help every rider grow through encouragement, safe coaching, and a team-first culture where every rider belongs.",
      "We are a member of the Oklahoma Interscholastic Cycling League, a chapter of the National Interscholastic Cycling League."
    ]
  },
  league: {
    id: "leagueinfo",
    title: "League Information",
    intro:
      "Curious about what NICA is all about? Watch this short video below to find out more!"
  },
  practice: {
    id: "practices",
    title: "Team Practice",
    intro:
      "Practices kick off after our season officially starts on July 1st and are normally held at Arcadia Lake Mountain Bike Trails.",
    items: [
      "Skill sessions focused on bike handling, cornering, and braking, with guided progression for all levels.",  
      "Trail rides that build confidence and teamwork",
      "Endurance ride blocks to improve fitness and race readiness",
      "Bike games and friendship building"
    ]
  },
  join: {
    id: "join",
    title: "Who Can Join",
    requirements: [
      "Open to both male and female riders in 6th through 12th grade",
      "Beginners are welcome",
      "No race experience required"
    ]
  },
  needs: {
    id: "needs",
    title: "What Riders Need",
    items: [
      "A mountain bike in safe working condition",
      "A properly fitting helmet",
      "Water or hydration pack",
      "Basic riding gear suited for weather and trail conditions"
    ]
  },
  coaches: {
    id: "coaches",
    title: "Coaches",
    intro:
      "Our coach group includes trained volunteer and parent coaches committed to rider growth and safety.",
    members: [
      {
        name: "Coach Graham",
        role: "Head Coach",
        type: "Volunteer Coach",
        image: imagePath("coach-graham.svg"),
        imageAlt: "Portrait of Coach Graham"
      },
      {
        name: "Coach Matt",
        role: "Team Director",
        type: "Parent Coach",
        image: imagePath("coach-matt.svg"),
        imageAlt: "Portrait of Coach Matt"
      },
      {
        name: "Coach Chad",
        role: "Team Director",
        type: "Parent Coach",
        image: imagePath("coach-chad.svg"),
        imageAlt: "Portrait of Coach Chad"
      },
      {
        name: "Coach John",
        role: "Skills Coach",
        type: "Parent Coach",
        image: imagePath("coach-john.svg"),
        imageAlt: "Portrait of Coach John"
      },
      {
        name: "Coach Steph",
        role: "GRiT Coordinator/Coach",
        type: "Parent Coach",
        image: imagePath("coach-steph.svg"),
        imageAlt: "Portrait of Coach Steph"
      }
    ]
  },
  faq: {
    id: "faq",
    title: "FAQ",
    items: [
      {
        question: "Who can join?",
        answer:
          "NICA is open to both male and female riders in 6th through 12th grade."
      },
      {
        question: "Do riders need to be experienced mountain bikers?",
        answer:
          "No. We welcome beginners and provide coaching for all skill levels."
      },
      {
        question: "How often does the team practice?",
        answer:
          "Our team offers practices twice a week in the evenings once the season starts on July 1, and is looking to add an optional Saturday practice."
      },
      {
        question: "Do riders have to participate in races?",
        answer:
          "Not at all! NICA is more than just racing. We offer several programs to engage students on and off the bike during the season."
      },
      {
        question: "Can parents be involved?",
        answer:
          "Yes. Parents are encouraged to join to support rides and can serve as trained parent coaches."
      },
      {
        question: "What should riders bring to practice?",
        answer:
          "Bring a mountain bike, helmet, water, bug spray and basic riding gear for the weather."
      },
      {
        question: "What does it cost to sign up?",
        answer:
          "$165 for League Fees, Insurance, and Practices + $175 for the Race Weekend Package"
      }
    ]
  },
  contact: {
    id: "contact",
    title: "Ready To Ride With Edmond United?",
    text: "Reach out to learn about registration, events, and upcoming practice nights.",
    ctaLabel: "Email The Team",
    ctaHref: "mailto:edmondok.nica@gmail.com",
    supportText: "Part of the Oklahoma Interscholastic Cycling League"
  }
};

export default siteContent;
