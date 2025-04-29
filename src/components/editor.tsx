import { codeAtom, language } from "@/store/store";
import { Editor } from "@monaco-editor/react"
import { useAtomValue, useSetAtom } from "jotai";

export default function ThemedEditor({ theme }: {
  theme: string
}) {

  const setCode = useSetAtom(codeAtom);
  const lang = useAtomValue(language);
  if (theme === "dark") {
    return <Editor
      defaultLanguage="javascript"
      theme="vs-dark"
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

  } else {
    return <Editor
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

  }

}
