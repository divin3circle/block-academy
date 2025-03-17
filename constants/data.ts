import { Instructor } from "@/utils/types";
import { ContinueLearning, Course, Friend, Game } from "./types";

export const continueLearningCourses: ContinueLearning[] = [
  {
    title: "Blockchain Basics",
    units: 5,
    bgColor: "#E3F2FD", // light blue background
    image: require("../assets/images/c1.webp"),
    progress: { value: 50, color: "#4CAF50" }, // 50% progress, green indicator
    btnColor: "#2196F3", // blue button
  },
  {
    title: "AI for Beginners",
    units: 7,
    bgColor: "#FFF3E0", // light orange background
    image: require("../assets/images/c2.webp"),
    progress: { value: 30, color: "#FF9800" }, // 30% progress, orange indicator
    btnColor: "#FF5722", // deep orange button
  },
  {
    title: "DeFi Essentials",
    units: 6,
    bgColor: "#D3E6D5FF", // light green background
    image: require("../assets/images/c3.webp"),
    progress: { value: 80, color: "#ECEF0EFF" }, // 80% progress, lime green indicator
    btnColor: "#00BCD4", // cyan button
  },
];

export const friends: Friend[] = [
  {
    name: "Lyle",
    image: require("../assets/images/f1.avif"),
  },
  {
    name: "James",
    image: require("../assets/images/f2.avif"),
  },
  {
    name: "Kate",
    image: require("../assets/images/f7.avif"),
  },
  {
    name: "Moses",
    image: require("../assets/images/f3.avif"),
  },
  {
    name: "Rose",
    image: require("../assets/images/f8.jpg"),
  },
  {
    name: "Sylus",
    image: require("../assets/images/f4.avif"),
  },
  {
    name: "Lenny",
    image: require("../assets/images/f6.avif"),
  },
  {
    name: "Add",
    image: require("../assets/images/plus.svg"),
  },
];

export const introToBlockchain: Course = {
  id: "1",
  name: "Intro to Blockchain",
  logo: require("../assets/images/blocklogo.png"),
  enrolledUsers: 1200,
  enrollmentFee: "FREE",
  bountyPoints: 50,
  rating: 4.5,
  topic: "Blockchain",
  bountyQuiz: [
    {
      name: "Blockchain Quiz 1",
      maxPoints: 20,
      questions: [
        {
          question: "What is a blockchain?",
          context: "An overview of blockchain technology.",
          image: require("../assets/images/blockchainquiz1.svg"),
          answer: "A decentralized ledger",
          options: [
            { option: "A centralized database" },
            { option: "A decentralized ledger" },
            { option: "A type of network protocol" },
          ],
        },
      ],
    },
    {
      name: "Blockchain Quiz 2",
      maxPoints: 20,
      questions: [
        {
          question: "Which consensus mechanism is widely used?",
          context: "Understanding consensus in blockchain.",
          image: "",
          answer: "Proof of Work",
          options: [
            { option: "Proof of Stake" },
            { option: "Proof of Work" },
            { option: "Proof of Concept" },
          ],
        },
      ],
    },
    {
      name: "Blockchain Quiz 3",
      maxPoints: 20,
      questions: [
        {
          question: "What ensures immutability in blockchain?",
          context: "Learn how data integrity is maintained.",
          image: "https://example.com/images/quiz3_q.png",
          answer: "Cryptographic hashing",
          options: [
            { option: "Data replication" },
            { option: "Cryptographic hashing" },
            { option: "Consensus protocols" },
          ],
        },
      ],
    },
    {
      name: "Blockchain Quiz 4",
      maxPoints: 20,
      questions: [
        {
          question: "Which of these is a blockchain use-case?",
          context: "Examples of real-world blockchain applications.",
          image: "https://example.com/images/quiz4_q.png",
          answer: "Supply chain management",
          options: [
            { option: "Social media networking" },
            { option: "Supply chain management" },
            { option: "Cloud storage" },
          ],
        },
      ],
    },
    {
      name: "Blockchain Quiz 5",
      maxPoints: 20,
      questions: [
        {
          question: "What is a smart contract?",
          context: "Understanding self-executing agreements.",
          image: "https://example.com/images/quiz5_q.png",
          answer:
            "A self-executing contract with the terms directly written into code",
          options: [
            { option: "A legal paper contract" },
            {
              option:
                "A self-executing contract with the terms directly written into code",
            },
            { option: "A digital signature" },
          ],
        },
      ],
    },
  ],
  modules: [
    {
      name: "Fundamentals",
      bannerImage: require("../assets/images/blockchainquiz1.svg"),
      about: "Get introduced to the core concepts of blockchain technology.",
      slides: [
        {
          title: "What is Blockchain?",
          summary: "A basic definition of blockchain technology.",
          content: [
            {
              introductionParagraph:
                "Blockchain is a decentralized ledger that records transactions securely.",
              exampleImage: require("../assets/images/blockchainbasics.webp"),
              AdditionalParagraph:
                "This slide covers the basic definition and importance of decentralization.",
            },
          ],
        },
        {
          title: "Components of Blockchain",
          summary: "Learn about blocks, chains, and nodes.",
          content: [
            {
              introductionParagraph:
                "Blocks store data, and chains link blocks using cryptography.",
              exampleImage: require("../assets/images/componentsofblockchain.svg"),
              AdditionalParagraph:
                "Nodes in a network help verify and store blockchain data.",
            },
          ],
        },
        {
          title: "Decentralization Explained",
          summary: "Understand the concept of decentralization.",
          content: [
            {
              introductionParagraph:
                "Decentralization removes the need for a central authority.",
              exampleImage: require("../assets/images/decentralization.svg"),
              AdditionalParagraph:
                "This ensures that no single entity controls the entire network.",
            },
          ],
        },
        {
          title: "Security through Cryptography",
          summary: "Explore how cryptography secures blockchain data.",
          content: [
            {
              introductionParagraph:
                "Cryptographic techniques secure data integrity and authenticity.",
              exampleImage: require("../assets/images/security.webp"),
              AdditionalParagraph:
                "This slide introduces hash functions and digital signatures.",
            },
          ],
        },
        {
          title: "Blockchain Benefits",
          summary: "Review the key benefits of using blockchain.",
          content: [
            {
              introductionParagraph:
                "Blockchain offers transparency, security, and traceability.",
              exampleImage: require("../assets/images/c1.webp"),
              AdditionalParagraph:
                "These benefits drive its adoption across various industries.",
            },
          ],
        },
      ],
    },
    {
      name: "Key Concepts",
      bannerImage: require("../assets/images/keyconcepts.png"),
      about: "Dive deeper into the key technical concepts behind blockchain.",
      slides: [
        {
          title: "Consensus Mechanisms",
          summary: "Understand how consensus is achieved in a network.",
          content: [
            {
              introductionParagraph:
                "Consensus mechanisms ensure all nodes agree on the blockchain state.",
              exampleImage: require("../assets/images/consensus.webp"),
              AdditionalParagraph:
                "Examples include Proof of Work and Proof of Stake.",
            },
          ],
        },
        {
          title: "Smart Contracts",
          summary: "Learn what smart contracts are and how they function.",
          content: [
            {
              introductionParagraph:
                "Smart contracts are self-executing agreements coded on the blockchain.",
              exampleImage: require("../assets/images/smartcontract.webp"),
              AdditionalParagraph:
                "They automatically enforce and execute contract terms.",
            },
          ],
        },
        {
          title: "Tokenization",
          summary: "Explore the process of tokenizing assets on a blockchain.",
          content: [
            {
              introductionParagraph:
                "Tokenization converts physical and digital assets into tradable tokens.",
              exampleImage: require("../assets/images/tokenization.webp"),
              AdditionalParagraph:
                "It enables fractional ownership and liquidity in new markets.",
            },
          ],
        },
        {
          title: "Public vs. Private Blockchains",
          summary:
            "Compare the differences between public and private blockchains.",
          content: [
            {
              introductionParagraph:
                "Public blockchains are open to anyone, while private ones restrict access.",
              exampleImage: require("../assets/images/publicblockchain.webp"),
              AdditionalParagraph:
                "Each type offers different levels of security and control.",
            },
          ],
        },
        {
          title: "Scalability Challenges",
          summary: "Discuss the scalability issues facing blockchain networks.",
          content: [
            {
              introductionParagraph:
                "Scalability remains a challenge as networks grow.",
              exampleImage: require("../assets/images/keyconcepts.png"),
              AdditionalParagraph:
                "Solutions like sharding and layer-two protocols are being developed.",
            },
          ],
        },
      ],
    },
    {
      name: "Practical Applications",
      bannerImage: require("../assets/images/practical.webp"),
      about: "See how blockchain is applied in various real-world scenarios.",
      slides: [
        {
          title: " : Supply Chain Management",
          summary: "Learn how blockchain enhances supply chain transparency.",
          content: [
            {
              introductionParagraph:
                "Blockchain can track products from origin to consumer.",
              exampleImage: require("../assets/images/supply.webp"),
              AdditionalParagraph:
                "This improves transparency and reduces fraud.",
            },
          ],
        },
        {
          title: " : Finance and Payments",
          summary: "Discover blockchain applications in finance.",
          content: [
            {
              introductionParagraph:
                "Blockchain enables faster, cheaper cross-border payments.",
              exampleImage: require("../assets/images/payments.webp"),
              AdditionalParagraph:
                "It also underpins cryptocurrencies and digital assets.",
            },
          ],
        },
        {
          title: "Healthcare",
          summary: "Explore how blockchain secures medical records.",
          content: [
            {
              introductionParagraph:
                "Blockchain ensures that patient data remains secure and tamper-proof.",
              exampleImage: require("../assets/images/health.webp"),
              AdditionalParagraph:
                "It can also streamline billing and insurance processes.",
            },
          ],
        },
        {
          title: " : Digital Identity",
          summary:
            "Understand blockchain's role in managing digital identities.",
          content: [
            {
              introductionParagraph:
                "Digital identity solutions on blockchain provide secure authentication.",
              exampleImage: require("../assets/images/identity.webp"),
              AdditionalParagraph:
                "They reduce identity theft and streamline verification.",
            },
          ],
        },
        {
          title: "Voting Systems",
          summary: "Examine how blockchain can enhance election security.",
          content: [
            {
              introductionParagraph:
                "Blockchain-based voting can ensure transparency and prevent fraud.",
              exampleImage: require("../assets/images/vote.webp"),
              AdditionalParagraph:
                "It promotes trust in the electoral process through immutability.",
            },
          ],
        },
      ],
    },
    {
      name: "Security & Challenges",
      bannerImage: require("../assets/images/securityandchallenges.webp"),
      about:
        "Examine the security challenges and potential solutions in blockchain.",
      slides: [
        {
          title: "Cryptographic Security",
          summary: "Learn how cryptography underpins blockchain security.",
          content: [
            {
              introductionParagraph:
                "Encryption and hashing secure data on the blockchain.",
              exampleImage: require("../assets/images/cryptographic.webp"),
              AdditionalParagraph:
                "This is fundamental to ensuring data integrity and authenticity.",
            },
          ],
        },
        {
          title: "Common Vulnerabilities",
          summary: "Discuss potential vulnerabilities in blockchain systems.",
          content: [
            {
              introductionParagraph:
                "Understanding vulnerabilities like 51% attacks is key.",
              exampleImage: require("../assets/images/vulnerability.webp"),
              AdditionalParagraph:
                "We also look at smart contract bugs and network attacks.",
            },
          ],
        },
        {
          title: "Mitigation Strategies",
          summary: "Explore strategies to mitigate security risks.",
          content: [
            {
              introductionParagraph:
                "Security audits and robust testing are critical.",
              exampleImage: require("../assets/images/mitigate.webp"),
              AdditionalParagraph:
                "Layer-two solutions and consensus improvements also help.",
            },
          ],
        },
        {
          title: "Regulatory Challenges",
          summary: "Examine the regulatory landscape for blockchain.",
          content: [
            {
              introductionParagraph:
                "Regulations vary globally and can impact blockchain adoption.",
              exampleImage: require("../assets/images/regulation.webp"),
              AdditionalParagraph:
                "Understanding compliance is crucial for mainstream use.",
            },
          ],
        },
        {
          title: "Future Security Innovations",
          summary: "Look at upcoming innovations in blockchain security.",
          content: [
            {
              introductionParagraph:
                "New cryptographic techniques and protocols are emerging.",
              exampleImage: require("../assets/images/future.webp"),
              AdditionalParagraph:
                "These innovations aim to further secure decentralized networks.",
            },
          ],
        },
      ],
    },
    {
      name: "Future Trends",
      bannerImage: require("../assets/images/futureblockchain.webp"),
      about:
        "Explore the future potential and emerging trends in blockchain technology.",
      slides: [
        {
          title: "Emerging Use Cases",
          summary: "Discover new industries adopting blockchain.",
          content: [
            {
              introductionParagraph:
                "From IoT to renewable energy, blockchain is finding new applications.",
              exampleImage: require("../assets/images/iot.webp"),
              AdditionalParagraph:
                "Innovation continues to drive blockchain adoption across sectors.",
            },
          ],
        },
        {
          title: "Scalability Solutions",
          summary: "Understand approaches to overcome scalability issues.",
          content: [
            {
              introductionParagraph:
                "Techniques like sharding and layer-two protocols are evolving.",
              exampleImage: require("../assets/images/scalability.webp"),
              AdditionalParagraph:
                "These solutions aim to increase throughput and reduce fees.",
            },
          ],
        },
        {
          title: "Interoperability",
          summary: "Examine the importance of blockchain interoperability.",
          content: [
            {
              introductionParagraph:
                "Interoperability allows different blockchains to communicate.",
              exampleImage: require("../assets/images/inter.svg"),
              AdditionalParagraph:
                "This can lead to more unified and efficient ecosystems.",
            },
          ],
        },
        {
          title: "Institutional Adoption",
          summary: "Look at how institutions are embracing blockchain.",
          content: [
            {
              introductionParagraph:
                "Banks, governments, and large corporations are exploring blockchain.",
              exampleImage: require("../assets/images/banks.webp"),
              AdditionalParagraph:
                "Institutional backing could drive mainstream adoption.",
            },
          ],
        },
        {
          title: "The Road Ahead",
          summary: "A visionary look at the future of blockchain.",
          content: [
            {
              introductionParagraph:
                "Predicting future trends based on current technological advancements.",
              exampleImage: require("../assets/images/c1.webp"),
              AdditionalParagraph:
                "This slide encapsulates the potential long-term impact of blockchain.",
            },
          ],
        },
      ],
    },
  ],
};

export const courses: Course[] = [
  introToBlockchain,
  introToBlockchain,
  introToBlockchain,
  introToBlockchain,
];

export const bugBusterPython: Game = {
  id: "wk1-py-1",
  title: "Bug Buster - Python Edition",
  players: ["sylusabel1@gmail.com", "mihh.x44@gmail.com"],
  bannerImage: require("../assets/images/pybug.png"),
  description:
    "Debug Python code and fix common mistakes to progress through different levels of difficulty.",
  supportedLanguages: "Python",
  levels: [
    {
      name: "Ant",
      points: 10,
      bug: {
        question: "What's wrong with this Python code?\n",
        answer: "Nothing, the code is correct.",
        code: "print('Hello World!')",
        explanation: "This is a correct print statement in Python 3.",
      },
      bgColor: "#FF9800",
      color: "#000",
      image: require("../assets/images/Ant.png"),
    },
    {
      name: "Ladybug",
      points: 20,
      bug: {
        question: "Fix the error in this code:",
        code: "x = input('Enter a number: ')\nprint(x + 5)",
        answer: "Convert input to int: `print(int(x) + 5)`",
        explanation:
          "Python treats `input()` as a string by default. We need to convert it to an integer.",
      },
      bgColor: "#4CAF50",
      color: "#f6f7f9",
      image: require("../assets/images/Ladybug.png"),
    },
    {
      name: "Fly",
      points: 30,
      bug: {
        question: "Why does this code give an error?",
        code: "for i in range(5):\n    print(i)\n  print('Done')",
        answer:
          "IndentationError: `print('Done')` should be aligned with `for`.",
        explanation:
          "Python relies on indentation to define code blocks. Misaligned code will cause an error.",
      },
      bgColor: "#00BCD4",
      color: "#000",
      image: require("../assets/images/Fly.png"),
    },
    {
      name: "Cockroach",
      points: 40,
      bug: {
        question: "What will be printed?",
        code: "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
        answer: "`[1, 2, 3, 4]`",
        explanation:
          "Lists in Python are mutable and assigned by reference, so modifying `y` also modifies `x`.",
      },
      bgColor: "#ECEF0EFF",
      color: "#000",
      image: require("../assets/images/Cockroach.png"),
    },
    {
      name: "Spider",
      points: 50,
      bug: {
        question: "Fix this recursive function:",
        code: "def factorial(n):\n  if n == 0:\n    return 1\n  return n * factorial(n - 1)\nprint(factorial(-1))",
        answer:
          "Add a base case: `if n < 0: raise ValueError('Negative not allowed')`",
        explanation:
          "Recursive functions need a stopping condition for invalid input like negative numbers.",
      },
      bgColor: "#D3E6D5FF",
      color: "#000",
      image: require("../assets/images/Spider.png"),
    },
    {
      name: "DragonFly",
      points: 60,
      bug: {
        question: "Fix memory inefficiency in this function:",
        code: "def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n-1) + fibonacci(n-2)",
        answer: "Use memoization: `@lru_cache` or an iterative approach.",
        explanation:
          "Recursive Fibonacci without memoization repeats calculations, making it inefficient.",
      },
      bgColor: "#414040FF",
      color: "#f6f7f9",
      image: require("../assets/images/DragonFly.png"),
    },
  ],
};

export const instructors: Instructor[] = [
  {
    name: "Sylus Abel",
    description:
      "Sylus is Frontend and Blockchain Developer with 3 years of experience in building React and Web3 Applications",
    image: require("../assets/images/f1.avif"),
    role: "Frontend Engineer - StratosphereX",
  },
  {
    name: "Jane Doe",
    description:
      "Jane Done has been an active face in the Web3 space for more than 5 fives with several startups launched across the country.",
    image: require("../assets/images/f6.avif"),
    role: "CTO - UniqueLabs",
  },
];
