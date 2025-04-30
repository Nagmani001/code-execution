export const cppDefaultCode = `#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`;

export const golangDefaultCode = `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
`;

export const rustDefaultcode = `fn main() {
    println!("Hello, World!");
}
`;

export const javascriptDefaultCode = `function main (){
    console.log("Hello world");
}

main()
`;

export const typeScriptDefaultCode = `function sum (a:number, b:number){
   return a+b;
}

const result :number = sum(1,2);
console.log(result)
`;

export const defaultConsole = `
┌──────────────────────────────────────────────────────┐
│               🚀 Welcome to CodeRunner!              │
│                                                      │
│  Write your code in the editor above, then:          │
│  - Click 'Run' ▶️  (or press Ctrl+Enter)              │
│  - See instant results here                          │
│  - Use Clear 🧹  to reset                            │
│                                                      │
│  💡 Pro Tip: Try our quick examples from the toolbar │
└──────────────────────────────────────────────────────┘
➤ Your output will appear below this line
──────────────────────────────────────────────────────────
`



export const javascriptConsole = `
╭─────────────────── JavaScript ───────────────────╮
│  • Language: JavaScript                          │
│  • Runtime: Node.js                              │
│  • Version: 12.14.0                              │
╰──────────────────────────────────────────────────╯
`
export const typescriptConsole = `
╭─────────────────── TypeScript ───────────────────╮
│  • Language: TypeScript                          │
│  • Compiler: tsc                                 │
│  • Version: 3.7.4                                │
╰──────────────────────────────────────────────────╯
`
export const cppConsole = `
╭───────────────────── C++ (GCC) ──────────────────╮
│  • Language: C++                                 │
│  • Compiler: GCC                                 │
│  • Version: 9.2.0                                │
╰──────────────────────────────────────────────────╯
`
export const rustConsole = `
╭───────────────────── Rust ───────────────────────╮
│  • Language: Rust                                │
│  • Toolchain: rustc                              │
│  • Version: 1.40.0                               │
╰──────────────────────────────────────────────────╯
`
export const golangConsole = `
╭───────────────────── Golang ─────────────────────╮
│  • Language: Go                                  │
│  • Runtime: go                                   │
│  • Version: 1.13.5                               │
╰──────────────────────────────────────────────────╯
`
