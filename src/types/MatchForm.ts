export type TMatchForm = {
    experience: "GROWTH_CAREER" | "CREATIVE_EXPRESSION" | "SOCIAL_RELAXATION" | "VALUE_ORIENTED";
    activityformat: "REGULAR" | "FLEXIBLE" | "ANY";
    recruitmethod: "ALWAYS" | "PERIODIC" | "ANY";
};

export type TMatchResult={
    id: number;
    name: string;
    tags: string[];
    matchLevel: '완벽 일치' | '일부 조건 일치';
};

export type Props = {
    step: number;
    setStep:(step: number)=> void;
};

export type StepArrowProps={
    step: number;
    onPrev: ()=> void;
};