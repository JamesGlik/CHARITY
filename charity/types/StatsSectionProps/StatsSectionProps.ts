export type StatItem = {
    number: number;
    label1: string;
    label2: string;
};

export type StatsSectionProps = {
    stats: StatItem[];
    title: string;
};