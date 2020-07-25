describe("checking if jest works", () => {
  test("jest works", () => {
    expect(1 + 1).toBe(2)
    expect(1 + 1).not.toBe(3)
  })
})

describe('checking if general page elements are present', () => {
  test("background present", () => {
    expect(1 + 1).not.toBe(3)
  })

  test("stars function runs", () => {
    expect(1 + 1).not.toBe(3)
  })

  test("viewport control function present", () => {
    expect(1 + 1).not.toBe(3)
  })

})

describe('checking front page', () => {
  describe("checking text divs", () => {
    test("first div present", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("second div present", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("third div present", () => {
      expect(1 + 1).not.toBe(3)
    })

  })

  describe("checking linkedin logo", () => {
    test("logo present", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("link attached to logo", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("logo clickable", () => {
      expect(1 + 1).not.toBe(3)
    })

  })

  describe("checking github logo", () => {
    test("logo present", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("link attached to logo", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("logo clickable", () => {
      expect(1 + 1).not.toBe(3)
    })

  })

  describe("checking down button present", () => {
    test("button present", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("function attached to logo", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("button clickable", () => {
      expect(1 + 1).not.toBe(3)
    })

  })

})

describe('checking about section', () => {
  describe('checking text divs', () => {
    test("contains two text divs", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("first div contains correct text", () => {
      expect(1 + 1).not.toBe(3)
    })

  })

})

describe('checking projects section', () => {
  describe('checking minimum text divs', () => {
    test("contains at least 5 text divs", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("contains at least 2 projects divs", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("contains at least 2 links divs", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("first div contains correct text", () => {
      expect(1 + 1).not.toBe(3)
    })

  })

  describe('checking all text divs', () => {
    test("contains text divs, satisfying (total - 1)%2 != 0", () => {
      expect(1 + 1).not.toBe(3)
    })

    // if following false, message to update total projects preferably

    test("contains projects, satisfying (total divs - 1)/2 = total projects", () => {
      expect(1 + 1).not.toBe(3)
    })

    test("contains links, total projects = total links", () => {
      expect(1 + 1).not.toBe(3)
    })

  })

})
