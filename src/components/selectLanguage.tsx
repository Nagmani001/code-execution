import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Javascript from "./javascript"
import Typescript from "./typescript"
import Rust from "./rust"
import Golang from "./golang"
import Cpp from "./cpp"
import { Button } from "./ui/button"
import { useAtom, useSetAtom } from "jotai"
import { codeAtom, language } from "@/store/store"


export default function SelectLanguage() {
  const setCode = useSetAtom(codeAtom);
  const [lang, setLang] = useAtom(language);

  function onClick(id: number) {
    setCode((prev) => {
      return {
        ...prev,
        language_id: id
      }
    })

  }
  function renderLang(lang: string) {
    switch (lang) {
      case "javascript":
        return <Javascript />
      case "typescript":
        return <Typescript />
      case "rust":
        return <Rust />
      case "go":
        return <Golang />
      case "cpp":
        return <Cpp />
      default:
        return <div>Select Language</div>
    }
  }
  return <div>
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">{renderLang(lang)}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <Button className="w-full pr-10 " variant="secondary" onClick={() => {
          onClick(63)
          setLang("javascript")
        }}>
          <DropdownMenuItem><Javascript /></DropdownMenuItem>
        </Button>
        <DropdownMenuSeparator />
        <Button className="w-full pr-10 " variant="secondary" onClick={() => {
          onClick(74)
          setLang("typescript")
        }}>
          <DropdownMenuItem><Typescript /></DropdownMenuItem>
        </Button>
        <DropdownMenuSeparator />
        <Button className="w-full pr-20" variant="secondary" onClick={() => {
          onClick(54)
          setLang("cpp")
        }}>
          <DropdownMenuItem><Cpp /></DropdownMenuItem>
        </Button>
        <DropdownMenuSeparator />
        <Button className="w-full pr-20" variant="secondary" onClick={() => {
          onClick(73)
          setLang("rust")
        }}>
          <DropdownMenuItem><Rust /></DropdownMenuItem>
        </Button>
        <DropdownMenuSeparator />
        <Button className="w-full pr-15 " variant="secondary" onClick={() => {
          onClick(60)
          setLang("go")
        }}>
          <DropdownMenuItem><Golang /></DropdownMenuItem>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

}
