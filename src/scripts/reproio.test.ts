import reproio from "./reproio"

describe("reproio", () => {
  let consoleSpy: jest.SpyInstance<void, [any?, ...any[]]>

  beforeEach(() => {
    window.reproio = jest.fn()
    consoleSpy = jest.spyOn(console, "log").mockImplementation((x) => x)
  })

  afterEach(() => {
    delete window.reproio
    consoleSpy && consoleSpy.mockRestore()
  })

  test("reproio", () => {
    reproio("a", "b", "c")
    expect(window.reproio).toBeCalledTimes(1)
    expect(console.log).toBeCalledTimes(1)
  })

  test("reproio.emit", () => {
    reproio("a", "b", "c").emit()
    expect(window.reproio).toBeCalledTimes(1)
    expect(console.log).toBeCalledTimes(2)
  })
})
