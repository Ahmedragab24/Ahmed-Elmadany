import { useEffect, useState } from "react";

interface CustomTypewriterProps {
  strings: string[];
  delay?: number;
  loop?: boolean;
}

const CustomTypewriter: React.FC<CustomTypewriterProps> = ({
  strings,
  delay = 100,
  loop = true,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentStringIndex, setCurrentStringIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const type = () => {
      const currentString = strings[currentStringIndex];
      const updatedText = isDeleting
        ? currentString.slice(0, Math.max(0, charIndex - 1))
        : currentString.slice(0, charIndex + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText.length === currentString.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText.length === 0) {
        setIsDeleting(false);
        setCharIndex(0);
        setCurrentStringIndex((prev) =>
          loop
            ? (prev + 1) % strings.length
            : Math.min(prev + 1, strings.length - 1)
        );
      }

      setCharIndex((prev) => (isDeleting ? Math.max(0, prev - 1) : prev + 1));
    };

    const timer = setTimeout(type, isDeleting ? delay / 2 : delay);
    return () => clearTimeout(timer);
  }, [charIndex, currentStringIndex, isDeleting, strings, delay, loop]);

  return currentText;
};

export default CustomTypewriter;
