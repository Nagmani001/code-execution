import { codeAtom, output } from "@/store/store";
import axios from "axios";
import SelectLanguage from "./selectLanguage";
import { Button } from "./ui/button";
import { useAtomValue, useSetAtom } from "jotai";
import { ModeToggle } from "./modeToggle";


export default function Nav() {
  const code = useAtomValue(codeAtom);
  const setOutput = useSetAtom(output);
  return <div className="flex justify-between p-2 px-2 w-full">
    <div className="flex items-center gap-x-2">
      <div className="font-extrabold ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      </div>
      <div className="font-extrabold text-xl ">
        CodeSphere
      </div>
    </div>
    <div>
      <Button
        variant="success"
        className="bg-green-500 hover:bg-green-400"
        onClick={async () => {
          const response = await axios.post("http://13.235.67.44:2358/submissions?base64_encoded=false&wait=true", code);
          console.log("request sent")
          //@ts-ignore
          setOutput(response.data);
          console.log("got response ")
        }}
      >Run</Button>
    </div>
    <div className="flex items-center gap-x-2">
      <ModeToggle />

      <Button variant="secondary">
        <SelectLanguage />
      </Button>
    </div>
  </div>
}
