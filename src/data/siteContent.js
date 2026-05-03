const siteContent = {
  meta: {
    teamName: "Edmond United",
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
    { label: "Practices", href: "#practices" },
    { label: "Join", href: "#join" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    headline: "Ride Strong With Edmond United",
    supportingText:
      "A youth mountain bike team building confidence, skills, and community on every trail.",
    ctaLabel: "Join Our Team",
    ctaHref: "#contact",
    image: "./images/hero_image.jpg",
    imageAlt: "Youth mountain bike riders in a race"
  },
  about: {
    id: "about",
    title: "About Edmond United",
    text: [
      "Edmond United is a welcoming mountain bike team for student-athletes in Edmond, Oklahoma.",
      "Our mission is to help every rider grow through encouragement, safe coaching, and a team-first culture where every rider belongs."
    ]
  },
  practice: {
    id: "practices",
    title: "Practice Information",
    intro:
      "Practices are held Tuesdays and Thursdays from 6:00-8:00 PM, with guided progression for all levels.",
    items: [
      "Skill sessions focused on bike handling, cornering, braking, and trail awareness",
      "Trail rides that build confidence and teamwork",
      "Endurance ride blocks to improve fitness and race readiness"
    ]
  },
  join: {
    id: "join",
    title: "Who Can Join",
    requirements: [
      "Open to 6th-12th grade riders",
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
      "Our coach group includes trained volunteer coaches and parent coaches committed to rider growth and safety.",
    members: [
      {
        name: "Coach Graham",
        role: "Head Coach",
        type: "Volunteer Coach",
        image: "/images/coach-graham.svg",
        imageAlt: "Portrait of Coach Graham"
      },
      {
        name: "Coach Matt",
        role: "Team Director",
        type: "Parent Coach",
        image: "/images/coach-matt.svg",
        imageAlt: "Portrait of Coach Matt"
      },
      {
        name: "Coach John",
        role: "Skills Coach",
        type: "Parent Coach",
        image: "/images/coach-john.svg",
        imageAlt: "Portrait of Coach John"
      },
      // {
      //   name: "Coach Steph",
      //   role: "GRiT Coordinator/Coach",
      //   type: "Parent Coach",
      //   image: "/images/coach-steph.svg",
      //   imageAlt: "Portrait of Coach Steph"
      // }
    ]
  },
  faq: {
    id: "faq",
    title: "FAQ",
    items: [
      {
        question: "Do riders need to be experienced mountain bikers?",
        answer:
          "No. We welcome beginners and provide coaching for all skill levels."
      },
      {
        question: "How often does the team practice?",
        answer:
          "Our team practices on Tuesdays and Thursdays from 6:00-8:00 PM."
      },
      {
        question: "Can parents be involved?",
        answer:
          "Yes. Parents are encouraged to support rides and can serve as trained parent coaches."
      },
      {
        question: "What should riders bring to practice?",
        answer:
          "Bring a mountain bike, helmet, water, and basic riding gear for the weather."
      }
    ]
  },
  contact: {
    id: "contact",
    title: "Ready To Ride With Edmond United?",
    text: "Reach out to learn about registration, events, and upcoming practice nights.",
    ctaLabel: "Email The Team",
    ctaHref: "mailto:edmondunitedmtb@example.com",
    supportText: "Edmond United • Edmond, Oklahoma"
  }
};

export default siteContent;
