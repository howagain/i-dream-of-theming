import { useEffect, useState } from "preact/hooks";

const cssVarsToCheck = ["--theme-bg", "--theme-text"];

const CodeBlock = () => {
  const [cssVariables, setCssVariables] = useState({});

  useEffect(() => {
    const updateCssVariables = () => {
      const root = document.documentElement;
      const variables: any = {};
      cssVarsToCheck.forEach((cssVar) => {
        const value = getComputedStyle(root).getPropertyValue(cssVar);
        variables[cssVar] = value;
      });
      setCssVariables(variables);
    };
    updateCssVariables();
    window.addEventListener("click", updateCssVariables);
    return () => {
      window.removeEventListener("click", updateCssVariables);
    };
  }, []);

  return (
    <pre>
      {Object.entries(cssVariables).map(([name, value]) => (
        <code key={name}>
          {name}: {value};
        </code>
      ))}
    </pre>
  );
};

export default CodeBlock;
