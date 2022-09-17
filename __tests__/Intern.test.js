const Intern = require('../lib/Intern');


test('creates a new intern object', () => {
    const testIntern = new Intern ("test","5","test@gmail.com", "utsa");

    expect(typeof(testIntern)).toBe("object");
    expect(testIntern.name).toBe("test");
    expect(testIntern.id).toBe("5");
    expect(testIntern.email).toBe("test@gmail.com");
    expect(testIntern.school).toBe("utsa");
})