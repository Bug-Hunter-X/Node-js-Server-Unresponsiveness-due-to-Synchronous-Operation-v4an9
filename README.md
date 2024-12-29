# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js servers: unresponsiveness caused by a long-running synchronous operation within the request handler.  The synchronous loop blocks the event loop, preventing the server from responding to new requests.

## Bug

The `bug.js` file contains a simple HTTP server.  The request handler includes a computationally intensive loop that simulates a long-running task. This blocks the event loop, making the server unresponsive.

## Solution

The `bugSolution.js` demonstrates how to resolve this issue by using asynchronous operations or offloading the intensive task to worker threads or other processes. Asynchronous operations allow other requests to be processed while the long-running task completes. 