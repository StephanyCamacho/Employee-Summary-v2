const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, testValue);
  expect(e.school).toBe(testValue);
});

test("getTitle() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "UCLA");
  expect(e.getTitle()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, testValue);
  expect(e.getSchool()).toBe(testValue);
});
