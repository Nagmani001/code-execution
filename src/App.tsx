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
  return <div className="flex flex-col min-h-screen ">
    <div className="">
      <Nav />
    </div>
    <div className="h-[calc(100vh-80px)] ">
      <PanelGroup direction="horizontal">
        <Panel className="">
          <ThemedEditor theme={theme} />
        </Panel>
        <PanelResizeHandle>
          <div className="h-screen w-1 bg-slate-400 dark:bg-slate-200"></div>
        </PanelResizeHandle>
        <Panel>
          <div className="h-screen">
            {Object.keys(out).length === 0 ? <div>write some code and press on the run button to get output</div> :
              <TerminalOutput result={out} />
            }
          </div>
        </Panel>
      </PanelGroup>
    </div>
  </div>
}
