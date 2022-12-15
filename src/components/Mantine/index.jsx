import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import "./styles.css";

const initialValue = "";

function Demo() {
  const [value, onChange] = useState(initialValue);
  return (
    <RichTextEditor
      value={value}
      onChange={onChange}
      id="rte"
      className="mantine min-h-[300px] w-full"
    />
  );
}

export default Demo;
