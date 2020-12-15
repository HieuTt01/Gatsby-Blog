import React,{ useEffect, useRef } from "react";
import Prism from "prismjs";
function PrismCode(props) {

  const ref = useRef(null);
    useEffect(() => {
      highlight()
    })
  const highlight = () => {
    if (ref && ref.current) {
      Prism.highlightElement(ref.current)
    }
  }
    const { code, plugins, language } = props
    return (
      <pre className={!plugins ? "" : plugins.join(" ")}>
        <code ref={ref} className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    )
}
export default PrismCode;