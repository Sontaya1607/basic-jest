// test('two plus two equal four', () => {
//     expect(2+2).toBe(4);
    
// })

// test('two object with sane value', () => {
//     var o1 = { name: 'golf' }
//     var o2 = { name: 'golf' }
//     var o3 = o1

//     expect(o1).toEqual(o2)  //เทียบ value
//     expect(o1).not.toBe(o2) //เทียบ type
//     expect(o1).toBe(o3)
// })

//----------toEqual-------------
test('object assignment', () => {
    const data = {one: 1}
    data['two'] = 2   //OR data.two = 2

    expect(data).toEqual({one: 1, two: 2})
})

//------------Truthiness-----------
test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})

test('zero', () => {
    var z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

//------------Numbers--------------
test('two plus two', () => {
    const value = 4
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    expect(value).toBe(4)
    expect(value).toEqual(4)
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    expect(value).not.toBe(0.3)
    expect(value).toBeCloseTo(0.3)
})

//---------Array------------
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
    ]

test('contain', ()=> {
    expect(shoppingList).toContain('beer')
})