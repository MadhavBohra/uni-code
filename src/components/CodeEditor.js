import React from 'react'
import { Editor } from '@monaco-editor/react'
import './CodeEditor.css'

const CodeEditor = () => {
  return (

      <div className='code-container'>
        <div className='code-bar'>
        {/* <div class="dropdown">
        <select id="language-select">
          <option value="" disabled selected>Select Language</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="ruby">Ruby</option>
          <option value="php">PHP</option>
        </select>
      </div> */}
        </div>
        <div
      style={{
        borderRadius: "10px", // Change this to your desired radius
        overflow: "hidden", // Ensures the border radius is applied to the content inside
        backgroundColor: "#1e1e1e", // Your custom background color
      }}
    >
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        defaultValue="// Type your code here..."
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
        }}
      />
    </div>
    </div>

  )
}

export default CodeEditor