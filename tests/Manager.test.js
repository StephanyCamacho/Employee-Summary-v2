const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getTitle() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, 100);
  expect(e.getTitle()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
