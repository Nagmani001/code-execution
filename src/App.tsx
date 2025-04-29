import Nav from "./components/nav";
import { PanelGroup } from "react-resizable-panels";
import { Panel } from "react-resizable-panels";
import { PanelResizeHandle } from "react-resizable-panels";
import { useAtomValue } from "jotai";
import { output } from "./store/store";
import TerminalOutput from "./components/console";
import { useTheme } from "./components/themeProvider";
import ThemedEditor from "./components/editor";

export default function App() {
  const out = useAtomValue(output);
  const { theme } = useTheme();
  return <div className="flex flex-col gap-y-4">
    <div className="">
      <Nav />
    </div>
    <PanelGroup direction="horizontal">
      <Panel className="">
        <ThemedEditor theme={theme} />
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
