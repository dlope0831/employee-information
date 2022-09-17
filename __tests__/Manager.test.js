const Manager = require('../lib/Manager');


test('creates a new manager object', () => {
const testManager = new Manager("test","5","test@gmail.com", ["123-123-123"]);

    expect(typeof(testManager)).toBe("object");
    expect(testManager.name).toBe("test");
    expect(testManager.id).toBe("5");
    expect(testManager.email).toBe("test@gmail.com");
    expect(testManager.officeNumber).toEqual(expect.any(Array));
})