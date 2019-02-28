const currentKeys = Object.keys(this);
const validKeys = [
  'console',
  'DTRACE_NET_SERVER_CONNECTION',
  'DTRACE_NET_STREAM_END',
  'DTRACE_HTTP_SERVER_REQUEST',
  'DTRACE_HTTP_SERVER_RESPONSE',
  'DTRACE_HTTP_CLIENT_REQUEST',
  'DTRACE_HTTP_CLIENT_RESPONSE',
  'global',
  'process',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout',
  'module',
  'require'
];

var wire; // Find the wire.

for (let i = 0; i < currentKeys.length; i++) {
  if (!validKeys.includes(currentKeys[i])) {
    wire = currentKeys[i];
  }
}

CutTheWire(this[wire]);