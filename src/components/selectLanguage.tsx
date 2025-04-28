import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Javascript from "./javascript"
import Typescript from "./typescript"
import Rust from "./rust"
import Golang from "./golang"
import Cpp from "./cpp"

export default function SelectLanguage() {
  return <div>
    <DropdownMenu>
      <DropdownMenuTrigger>Select Language</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel><Javascript /></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Typescript /></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Cpp /></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Rust /></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Golang /></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

}
