import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import Nav from "./components/nav";
import Console from "./components/console";
import { PanelGroup } from "react-resizable-panels";
import { Panel } from "react-resizable-panels";
import { PanelResizeHandle } from "react-resizable-panels";

export default function App() {
  const [code, setCode] = useState("");
  console.log(code)
  return <div className="flex flex-col gap-y-4">
    <div className="">
      <Nav />
    </div>
    <PanelGroup direction="horizontal">
      <Panel className="">
        <Editor
          defaultLanguage="javascript"
          onChange={(value) => setCode(value || "")}
        />
      </Panel>
      <PanelResizeHandle>
        <div className="bg-slate-200 h-screen w-2"></div>
      </PanelResizeHandle>
      <Panel>
        <Console />
      </Panel>
    </PanelGroup>
  </div>
}
