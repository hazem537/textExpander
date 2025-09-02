import { useState } from "react";

// import "./styles.css";
const TextExpander = ({ defaultExpand = false, limit = 20, expandText = "expand", collapText = "collap", children }) => {
  const [expaned, setExpanded] = useState(defaultExpand)
  const toggleExpandeState = () => {
    setExpanded(s => !s)
  }
  let displayText = expaned ? children : `${children.toString().slice(0, limit)}...`
  return (
    <div>
      <p>{displayText}</p>
      <button onClick={toggleExpandeState} type="button"> {expaned ? expandText : collapText}</button>
    </div>
  )
}
export default function App() {
  return (
    <div className="App">
      <TextExpander limit={60} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem in quae iusto cum, optio labore ex debitis beatae commodi architecto dolores, omnis culpa magni voluptates voluptatibus quidem saepe aspernatur sunt!
      </TextExpander>
    </div>
  );
}
