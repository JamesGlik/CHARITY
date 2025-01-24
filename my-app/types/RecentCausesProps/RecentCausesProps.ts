export type RecentCausesProps = {
    causes: {
      category: string;
      title: string;
      raised: number;
      goal: number;
      imageSrc: string;
    }[];
  };