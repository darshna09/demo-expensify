// This is an example file.
const sum = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

// Test cases are disabled.

xtest('should add two numbers', () => {
    const result = sum(3, 5);
    expect(result).toBe(8);
});

xtest('should generate greetings with name', () => {
    const greeting = generateGreeting('Ana');
    expect(greeting).toBe('Hello Ana!');
});

xtest('should generate greetings with no name', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!');
});
