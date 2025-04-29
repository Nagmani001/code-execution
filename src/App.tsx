import { Editor } from "@monaco-editor/react";
import Nav from "./components/nav";
import { PanelGroup } from "react-resizable-panels";
import { Panel } from "react-resizable-panels";
import { PanelResizeHandle } from "react-resizable-panels";
import { useAtomValue, useSetAtom } from "jotai";
import { codeAtom, language, output } from "./store/store";
import TerminalOutput from "./components/console";

export default function App() {
  const out = useAtomValue(output);
  const setCode = useSetAtom(codeAtom);
  const lang = useAtomValue(language);
  return <div className="flex flex-col gap-y-4">
    <div className="">
      <Nav />
    </div>
    <PanelGroup direction="horizontal">
      <Panel className="">
        <Editor
          defaultLanguage="javascript"
          language={lang}
          onChange={(value) => setCode((prev) => {
            return {
              ...prev,
              source_code: value || ""
            }
          })}
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </Panel>
      <PanelResizeHandle>
        <div className="bg-slate-200 h-screen w-2"></div>
      </PanelResizeHandle>
      <Panel>
        <div className="h-ull">
          {Object.keys(out).length === 0 ? <div>nothing</div> :
            <TerminalOutput result={out} />
          }
        </div>
      </Panel>
    </PanelGroup>
  </div>
}
