export default function createBus() {
  const handlers = {}
  return {
    handle: function(topic, handlerFunc) {
      handlers[topic] = handlerFunc
    },
    send: function(topic, message) {
      handlers[topic](message)
    }
  }
}