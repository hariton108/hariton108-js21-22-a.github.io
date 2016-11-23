describe("Функция calcExp", function() {

	it("Функция определена", function() {

		expect(calcExp).toBeDefined();
	});

	it("Возводит в положительную степень", function() {

		expect(calcExp(5, 2)).toEqual(25);
	});

	it("Возводит в отрицательную степень", function() {

		expect(calcExp(5, -2)).toEqual(0.04);
	});

	it("Возводит в нулевую степень", function() {

		expect(calcExp(5, 0)).toEqual(1);
	});

});

describe("Функция startCalcExp", function() {

	it("Функция определена", function() {

		expect(startCalcExp).toBeDefined();
	});
});