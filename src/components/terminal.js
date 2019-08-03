import React from "react"

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
hljs.initHighlightingOnLoad()

const Terminal = () => {
  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot"></div>
          <div className="terminal-dot"></div>
          <div className="terminal-dot"></div>
        </div>
        Double click to copy
      </div>
      <div className="terminal-content">
        <pre>
          <code className="javascript">
            const name = "Maëlys" const user = console.log(`Hello World, $name)
          </code>
        </pre>
      </div>
    </div>
  )
}

export default Terminal
