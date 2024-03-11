import { useState } from "react";
import { MOCK } from "pages/main/MOCK";
import { SyntaxHighlight } from "features/syntax-highlight";

export const MainPage = () => {
  const [code] = useState(MOCK);

  return (
    <div className="flex flex-col gap-3 border-2 rounded-2xl overflow-hidden text-left">
      <SyntaxHighlight defaultCode={code} />
    </div>
  );
};
