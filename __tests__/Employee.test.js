const Employee = require('../lib/Employee');
// const Engineer = requre('.../Engineer');
// const Intern = require('.../Intern');
// const Manager = require('.../Manager');

test('creates a new employee object', () => {
    const testEmployee = new Employee("test","5","test@gmail.com");

    expect(typeof(testEmployee)).toBe("object");
    expect(testEmployee.name).toBe("test");
    expect(testEmployee.id).toBe("5");
    expect(testEmployee.email).toBe("test@gmail.com");
})