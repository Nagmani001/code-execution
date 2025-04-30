import { cppDefaultCode, golangDefaultCode, javascriptDefaultCode, rustDefaultcode, typeScriptDefaultCode } from "@/config";
import { codeAtom, language } from "@/store/store";
import { Editor } from "@monaco-editor/react"
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";

export default function ThemedEditor({ theme }: {
  theme: string
}) {
  const setCode = useSetAtom(codeAtom);
  const lang = useAtomValue(language);
  const [defCode, setDefaultCode] = useState("");
  useEffect(() => {
    switch (lang) {
      case "javascript":
        setDefaultCode(javascriptDefaultCode);
        break;
      case "typescript":
        setDefaultCode(typeScriptDefaultCode);
        break;
      case "rust":
        setDefaultCode(rustDefaultcode);
        break;
      case "go":
        setDefaultCode(golangDefaultCode);
        break;
      case "cpp":
        setDefaultCode(cppDefaultCode);
        break;
      default:
        setDefaultCode(javascriptDefaultCode);
    }
  }, [lang])
  if (theme === "dark") {
    setCode((prev) => {
      return {
        ...prev,
        source_code: defCode
      }

    })
    return <Editor
      defaultLanguage="javascript"
      value={defCode}
      theme="vs-dark"
      language={lang}
      onChange={(value) => {
        console.log(value);
        return setCode((prev) => {
          return {
            ...prev,
            source_code: value || ""
          }
        })
      }
      }
      options={{
        minimap: { enabled: false },
        automaticLayout: true,
      }}
    />
  } else {
    setCode((prev) => {
      return {
        ...prev,
        source_code: defCode
      }

    })
    return <Editor
      defaultLanguage="javascript"
      value={defCode}
      language={lang}
      onChange={(value) => {
        console.log(value);
        return setCode((prev) => {
          return {
            ...prev,
            source_code: value || ""
          }
        })
      }
      }
      options={{
        minimap: { enabled: false },
        automaticLayout: true,
      }}
    />
  }
}
