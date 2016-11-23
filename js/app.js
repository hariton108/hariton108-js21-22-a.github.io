function calcExp(base, exp) {

	var res = 1;
	var result;

	for (var i = 0; i < Math.abs(exp); i++) {
		
		res *= base;	
	}

	if (exp >= 0) {

		result = res;

		console.log(result);

		return result;

	} else result = 1/res;
	
	console.log(result);

	return result;		
};

function startCalcExp() {

	var base = prompt('Введите целое число', '');

	if ((base != null) && ((base ^ 0) == base) && (base != NaN) && (base != '')) {

		var exp = prompt('Введите степень (целое число)', '');
		
		if ((exp != null) && ((exp ^ 0) == exp) && (exp != NaN) && (exp != '')) {

			calcExp(base, exp);
		}

	} else alert('Попробуйте еще раз');

	return false;
};

startCalcExp();
