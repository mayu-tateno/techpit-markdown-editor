const worker: Worker = self as any

worker.addEventListener('message', (event) => {
  console.log('Worker Recieved:', event.data)
  worker.postMessage({ result: event.data })
})