import { MonacoLanguageClient } from 'monaco-languageclient';
import { createWebSocket } from 'vscode-ws-jsonrpc';

export const ts = (monaco: any) => {
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    allowNonTsExtensions: true,
    lib: ['esnext']
  });

  monaco.languages.typescript.javascriptDefaults.addExtraLib(
    `declare module 'fs'; declare module 'path';`,
    'node.d.ts'
  );
}


const setupCppLSP = async (monaco) => {
  const client = new MonacoLanguageClient({
    name: 'C++ Language Client',
    clientOptions: { documentSelector: ['cpp'] },
    connectionProvider: {
      get: () => createWebSocket(new WebSocket('ws://localhost:3000/cpp'))
    }
  });

  client.start();
  return client;
};
export async function Cpp(monaco: any) {
  await setupCppLSP(monaco);
}
