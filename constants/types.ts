/*
 * value: the percentage of the progress
 * width: the width of the progress
 */
export interface ProgressProps {
  value: number;
  width: number;
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
