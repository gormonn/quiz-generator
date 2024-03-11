import { useRef, useState } from "react";
import { MOCK } from "pages/main/MOCK";

export const MainPage = () => {
  const ref = useRef<HTMLElement>(null);
  const [code] = useState(MOCK);

  return (
    <div className="flex flex-col gap-3 border-2 rounded-2xl overflow-hidden text-left">
      <pre>
        <code ref={ref} className="language-js">
          {code}
        </code>
      </pre>
    </div>
  );
};
