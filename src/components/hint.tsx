"use client";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/components/ui/tooltip";

interface HintProps {
    children: React.ReactNode;
    text: string;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
};

export const Hint = ({
    children,
    text,
    align = "center",
    side = "top",
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p>{text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};
