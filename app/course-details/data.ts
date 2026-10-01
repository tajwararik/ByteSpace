export const tabs = [
  { key: "about", label: "About" },
  { key: "lessons", label: "Lesson" },
  { key: "reviews", label: "Reviews" },
] as const;

export type TabKey = (typeof tabs)[number]["key"];

export const course = {
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "Module 4: User-Centric Design Strategies",
      text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 5: Interactive Media and Engagement",
      text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Module 6: Project Showcase and Critique",
      text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  reviews: {
    intro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    average: "4.7",

    breakdown: [
      { stars: 5, count: 720, pct: 92 },
      { stars: 5, count: 120, pct: 36 },
      { stars: 5, count: 21, pct: 9 },
      { stars: 5, count: 12, pct: 3.5 },
      { stars: 5, count: 16, pct: 5 },
    ],
    filters: ["All rating", "5", "4", "3", "2", "1"],
    items: [
      {
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/course/dp-one.png",
        when: "a year ago",
        text: "“The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!”",
      },
      {
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/course/dp-two.png",
        when: "a year ago",
        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/course/dp-three.png",
        when: "a year ago",
        text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/course/dp-four.png",
        when: "a year ago",
        text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
};
