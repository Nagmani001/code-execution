import SelectLanguage from "./selectLanguage";
import { Button } from "./ui/button";

export default function Nav() {
  return <div className="flex justify-between p-3 w-full">
    <div className="flex gap-x-2">
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
        onClick={() => {

        }}
      >Run</Button>
    </div>
    <div>
      <Button>hi</Button>
      <Button variant="secondary">
        <SelectLanguage />
      </Button>
    </div>
  </div>
}
