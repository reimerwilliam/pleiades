import createBus from './bus'

describe('bus', () => {
  it('handles a message on a topic', () => {
    const bus = createBus()
    const handlerFunc = jest.fn()
    const someMessage = {}
    bus.handle('someTopic', handlerFunc)
    bus.send('someTopic', someMessage)
    expect(handlerFunc).toHaveBeenCalledWith(someMessage)
  })
})