/*
setTimeout(function() {
	console.log('I promised to run after 1s')
	setTimeout(function(){
		console.log('I promised to run after 2s')
	}, 1000)
}, 1000)




const wait = () => new Promise((resolve, reject) => {
	setTimeout(resolve, 2000)
})

wait().then(() => {
	console.log('I promised to run after 1S')
	return wait()
})
.then(() => console.log('I promised to run after 2S'))



const k = {test: (n1, n2) => n1 + n2 }

document.write(k.test(1,2))

for (const [i,v] of ['a','b','c'].entries()) {
	console.log(i, v);
}

function doSomethingAsync() {
	return new Promise(resolve => {
		setTimeout(() => resolve('I did something'), 3000)
	})
}

async function doSomething(){
	const something = await doSomethingAsync()
	return something + ' and I wachted'
}

async function watchOverSomeoneWatchingSomeoneDoingSomething() {
	const something = await doSomething()
	return something + ' and I wached as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(response => {
	console.log(response)
})



const numbers = [1,2,3,4,5]
const sum = (a,b,c,d,e) => a + b + c + d + e
const sum1 = sum(...numbers)
console.log(sum1)
*/


$(function(){

	$('#displayImg').on('click', function(){
		$('#wrap').css('display', 'block');
		$("#bigImg").attr('src', this.src);
		$('#close').on('click', function(){
			$('#wrap').css('display', 'none');
		})
	})

	$('#displayImg2').on('click', function(){
		$('#wrap').css('display', 'block');
		$("#bigImg").attr('src', this.src);
		$('#close').on('click', function(){
			$('#wrap').css('display', 'none');
		})
	})
    $('#displayImg3').on('click', function(){
		$('#wrap').css('display', 'block');
		$("#bigImg").attr('src', this.src);
		$('#close').on('click', function(){
			$('#wrap').css('display', 'none');
		})
	})
    $('#displayImg4').on('click', function(){
		$('#wrap').css('display', 'block');
		$("#bigImg").attr('src', this.src);
		$('#close').on('click', function(){
			$('#wrap').css('display', 'none');
		})
	})
    $('#displayImg5').on('click', function(){
		$('#wrap').css('display', 'block');
		$("#bigImg").attr('src', this.src);
		$('#close').on('click', function(){
			$('#wrap').css('display', 'none');
		})
	})

})




