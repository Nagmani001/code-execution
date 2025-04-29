export default function TerminalOutput({ result }: any) {

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-4 font-mono text-sm">
      {/* Main output section */}
      <div className="text-white whitespace-pre-wrap">
        {result.compile_output && (
          <div className="text-red-500">{result.compile_output}</div>
        )}
        {result.stderr && (
          <div className="text-red-500">{result.stderr}</div>
        )}
        {result.stdout && result.stdout}

        {result.message && (
          <div className="text-yellow-500">{result.message}</div>
        )}
      </div>

    </div>
  );
}
