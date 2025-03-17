interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: {
    eng: {
      official: string;
      common: string;
    };
  };
}

export interface Country {
  flags: Flags;
  name: Name;
}

export interface LoadingCardProps {
  status: "loading" | "error" | "success" | "failed";
  title: string;
  description: string;
  next: string;
  animationPath: string;
}

export interface Instructor {
  name: string;
  description: string;
  image: string;
  role: string;
}
