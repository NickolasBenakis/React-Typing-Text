import { useEffect, useRef, useState } from "react";
import "./index.css"
import { cn } from "./utils";

export type TypingTextProps = {
  text: string;
  speed?: number;
  className?: string;
  onEndAnimation?: () => void;
};

const TypingText = ({
  text,
  speed = 100,
  className,
  onEndAnimation,
  ...restProps
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (indexRef.current >= text.length) {
          clearInterval(interval);
          if (typeof onEndAnimation === "function" && indexRef.current !== 0) {
            onEndAnimation();
          }
          return text;
        }
        const nextTextChunk = text[indexRef.current++];
        const nextDisplayedText = prev + nextTextChunk;

        return nextDisplayedText;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <div className={cn("typing-text", className)} {...restProps}>{displayedText}</div>;
};

export default TypingText;
