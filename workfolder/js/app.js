//var name = "viktor";
//console.log(name);
//var num = 333;
//for(i=0; i<=10; i++) {
//	document.write(i);
//}
//добавляем стили к объекту все классы прописываем через дефис
//addClass добавляет класс к объекту toggleClass переключает классы
//$ это как вызов функции в JS на . методы

//Добавление и удаление классов
// $('.box').click(function() {
// 	$(this).toggleClass('big-blue');
// });

// $('.box1').mouseenter(function() {
// 	$(this).addClass('big-blue');
// });
// $('.box1').mouseleave(function() {
// 	$(this).removeClass('big-blue');
// });

// function toggleVisibility(){
// 	$('.modal, .overlay').toggleClass('show'); //принцип DRY
// }
//создание модального окна
//открытие окна по кнопке
// $('#openModal').click(function() {
// 	toggleVisibility();
// // стандартный принцип(только удаляем функцию toggl..)	$('.modal, .overlay').addClass('show');
// });

//закрытие окна
// $('.close, #closeModal').click(function() {
// 	toggleVisibility();
// //	стандартный принцип (только удаляем функцию toggl..) $('.modal, .overlay').removeClass('show');
// });

//создание анимации для html - элементов
// $(window).scroll(function() {
// 	var windowPosy = $(this).scrollTop();
// 	var windowHeight = window.innerHeight;

// 	$('.animate-container').each(function() {
// 		var btnOffsetTop = $(this).offset().top;
// 		var offsety = 10;

// 		if(windowHeight + windowPosy + offsety >= btnOffsetTop) {
// 			$(this).addClass('animated zoomIn');
// 		}
		
// 	});

// });

//Создание плавающей шапки


 $(window).scroll(function() {
	var windowPosy = $(this).scrollTop();
	var headerOffsetTop = $('.content-block').offset().top;

	if(windowPosy >= headerOffsetTop) {
 			$('.header').removeClass('sticky');
		}
		else {
			$('.header').addClass('sticky');
	}
		
	});

//гамбургер
$('.toggle').on('click', function() {
	$('.menu').slideToggle();
});