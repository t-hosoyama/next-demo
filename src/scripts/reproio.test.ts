import reproio from "./reproio"

describe("reproio", () => {
  let consoleSpy: jest.SpyInstance<void, any[]>
  let dispatchEventSpy: jest.SpyInstance<boolean, [Event]>

  beforeEach(() => {
    window.reproio = jest.fn()
    consoleSpy = jest.spyOn(console, "log").mockImplementation((x) => x)
    dispatchEventSpy = jest.spyOn(window, "dispatchEvent")
  })

  afterEach(() => {
    delete window.reproio
    consoleSpy && consoleSpy.mockRestore()
    dispatchEventSpy && dispatchEventSpy.mockRestore()
  })

  test("reproio", () => {
    reproio("foo", "bar", "buz")
    expect(window.reproio).toBeCalledTimes(1)
    expect(dispatchEventSpy).not.toBeCalled()
    expect(console.log).toBeCalledTimes(1)
  })

  test("reproio.emit", () => {
    reproio("foo", "bar", "buz").emit()
    expect(window.reproio).toBeCalledTimes(1)
    expect(dispatchEventSpy).toBeCalledTimes(1)
    expect(console.log).toBeCalledTimes(2)
  })
})
