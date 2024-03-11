import { FC, useEffect, useState } from "react";
import Prism from "prismjs";

export const SyntaxHighlight: FC<{ defaultCode: string }> = ({
  defaultCode,
}) => {
  const [code] = useState(defaultCode);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hi");
      Prism.highlightAll();
    });

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <pre className="line-numbers">
      <code className="language-js">{code}</code>
    </pre>
  );
};
// Prism.highlightAll();
