export { log };

function log(message: Error | string) {
  if (message instanceof Error) eval(`console.error("${String(message)}")`);
  else eval(`console.log("${message}")`);
}
