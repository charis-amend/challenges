import { add, subtract, multiply, divide } from "./index.js"

// test add
test('testing add function, returns 5', () => {
    const result = add(2, 3)
    expect(result).toBe(5)
});

test('testing negative value if greater argument is negative', () => {
    // the "bigger" number (5) has to be negative
    const result = add(1, -5);
    expect(result).toBeLessThan(4);
});

test('returning value close to 0.3', () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3)
})


// test subtract
test('testing subtract, should return a-b', () => {
    const result = subtract(5, 5);
    expect(result).toBe(0)
})

test('testing subtract, should return a-b', () => {
    const result = subtract(2, 8);
    expect(result).toBeLessThan(6)
})


// test multiply
test('testing multiply should return a * b', () => {
    const result = multiply(2, 4);
    expect(result).toBe(8)
})
test('testing multiply should return a * b', () => {
    const result = multiply(-2, 2);
    expect(result).toBeLessThan(4)
})
test('testing multiply should return a * b', () => {
    const result = multiply(2, -4);
    expect(result).toBeLessThan(8)
})
test('testing multiply should return a * b', () => {
    const result = multiply(-4, -4);
    expect(result).toBe(16)
})

// test divide
test('testing divide should return a/b', () => {
    const result = divide(9, 3);
    expect(result).toBe(3);
})

test('testing divide return if 0 then error', () => {
    const result = divide(4, 0);
    expect(result).toBe("You should not do this!")
})