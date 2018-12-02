import * as index from './index'

describe('express app', () => {
  let spy

  beforeEach(() => {
    spy = jest.spyOn(index, 'helloWorld')
    index.run()
  })

  it('should load', () => {
    expect(spy).toHaveBeenCalled()
  })
})
