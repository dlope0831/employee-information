const Engineer = require('../lib/Engineer');


test('creates a new engineer object', () => {
    const testEngineer = new Engineer("test","5","test@gmail.com", "dlope@github");

    expect(typeof(testEngineer)).toBe("object");
    expect(testEngineer.name).toBe("test");
    expect(testEngineer.id).toBe("5");
    expect(testEngineer.email).toBe("test@gmail.com");
    expect(testEngineer.gitHub).toBe("dlope@github");
})