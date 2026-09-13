const TAGLINES = [
  "Worth Reading.",
  "Worth Sharing.",
  "Worth Remembering."
];

const CATEGORIES = [
  "All Topics",
  "Technology",
  "Design",
  "Creativity",
  "AI & Future",
  "Productivity"
];

const FEATURED_POSTS = [
  {
    id: 1,
    category: "AI & Future",
    title: "The Quiet Revolution of AI-Assisted Creativity",
    excerpt:
      "How intelligent tools are reshaping the way we think, create, and bring ideas to life.",
    readTime: "6 min read",
    views: "12.4K",
    likes: 842,
    author: {
      name: "Sarah Chen",
      role: "AI Researcher",
      avatar:
        "https://i.pravatar.cc/150?img=47"
    },
    draftSnippet:
      "const future = await creativity\n  .enhance({\n    human: true,\n    ai: true\n  });"
  },
  {
    id: 2,
    category: "Technology",
    title: "Building Digital Experiences That Feel Human",
    excerpt:
      "A practical look at designing interfaces that connect with people instead of overwhelming them.",
    readTime: "8 min read",
    views: "9.8K",
    likes: 621,
    author: {
      name: "Alex Morgan",
      role: "Product Designer",
      avatar:
        "https://i.pravatar.cc/150?img=12"
    },
    draftSnippet:
      "function experience(user) {\n  return design\n    .withEmpathy(user)\n    .withPurpose();\n}"
  },
  {
    id: 3,
    category: "Creativity",
    title: "Why Your Best Ideas Need Room to Breathe",
    excerpt:
      "Sometimes the most productive thing you can do is step away and let your mind wander.",
    readTime: "5 min read",
    views: "7.2K",
    likes: 493,
    author: {
      name: "James Wilson",
      role: "Writer & Creator",
      avatar:
        "https://i.pravatar.cc/150?img=33"
    },
    draftSnippet:
      "let ideas = collect();\n\nideas\n  .rest()\n  .wander()\n  .becomeSomethingMore();"
  }
];

const TEAM_MEMBERS = [
  {
    name: "Dr. Elena Rostova",
    role: "Editor-in-Chief & Co-Founder",
    bio: "Former AI researcher passionate about democratizing technical writing and long-form intellectual discussion.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    tags: ["Artificial Intelligence", "Cognitive Sci"]
  },
  {
    name: "Marcus Chen",
    role: "Head of Product & Design",
    bio: "Pioneer in modern web typography, micro-interactions, and spatial interface architecture.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    tags: ["UI/UX", "Design Systems"]
  },
  {
    name: "Sophia Al-Mansoor",
    role: "Lead Editorial Curator",
    bio: "Curator of deep-work philosophy, startup culture, and modern digital journalism.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    tags: ["Productivity", "Essays"]
  },
  {
    name: "David Vance",
    role: "Engineering Director",
    bio: "Architecting real-time publishing systems and collaborative rich-text engine infrastructure.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    tags: ["Systems Architecture", "Web3"]
  }
];

const MILESTONES = [
  {
    year: "2023",
    title: "The Genesis",
    description:
      "NexusInk was born as a minimal markdown blogging platform for tech enthusiasts."
  },
  {
    year: "2024",
    title: "10,000 Authors Strong",
    description:
      "Expanded into dynamic writer tools, real-time collaboration, and curated newsletters."
  },
  {
    year: "2025",
    title: "AI & Synthesis Suite",
    description:
      "Introduced generative typography aids, intelligent tag discovery, and automated flow metrics."
  },
  {
    year: "2026",
    title: "Global Intellectual Hub",
    description:
      "Over 650K+ monthly readers across 140 countries connecting through high-caliber essays."
  }
];

export {
  TAGLINES,
  CATEGORIES,
  FEATURED_POSTS,
  TEAM_MEMBERS,
  MILESTONES
};