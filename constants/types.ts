/*
 * value: the percentage of the progress
 * width: the width of the progress
 */
export interface ProgressProps {
  value: number;
  width: number;
  height?: number;
  fillColor?: string;
}

interface Progress {
  value: number;
  color: string;
}
/*
 * @notice: interface for the data of a user's current learning modules
 */
export interface ContinueLearning {
  title: string;
  units: number;
  bgColor: string;
  image: string;
  progress: Progress;
  btnColor: string;
}

/*
 * @notice: interface for the data of a user's friends
 */
export interface Friend {
  name: string;
  image: string;
}

export interface Option {
  option: string;
}

export interface Questions {
  question: string;
  context: string;
  image: string;
  answer: string;
  options: Option[];
}

export interface Quiz {
  name: string;
  maxPoints: number;
  questions: Questions[];
}

export interface Content {
  introductionParagraph: string;
  exampleImage: string;
  AdditionalParagraph: string;
}

export interface Slide {
  title: string;
  summary: string;
  content: Content[];
}

export interface Module {
  name: string;
  bannerImage: string;
  about: string;
  slides: Slide[];
}

/*
 * @notice: interface for upcoming courses
 */
export interface Course {
  name: string;
  logo: string;
  enrolledUsers: number;
  enrollmentFee: "FREE" | number;
  bountyPoints: number;
  rating: number;
  topic: string;
  bountyQuiz: Quiz[];
  modules: Module[];
}
