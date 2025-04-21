import baklajan from './image/baklajan.jpg'
import julien from './image/julien.jpg'
import krabov from './image/krabov.jpg'
import kupata from './image/kupata.jpg'
import oladia from './image/oladia.jpg'
import perecFarsh from './image/perecFarsh.jpg'
import riet from './image/riet.jpg'
import salo from './image/salo.jpg'
import scheki from './image/scheki.jpg'
import sGravlars from './image/sGravlars.jpg'
import sKilkoj from './image/sKilkoj.jpg'
import sOkorokom from './image/sOkorokom.jpg'
import solisa from './image/solisa.jpg'
import sPercem from './image/sPercem.jpg'
import sRosbifom from './image/sRosbifom.jpg'
import sSeledkoj from './image/sSeledkoj.jpg'
import sShprotoj from './image/sShprotoj.jpg'
import stolichnij from './image/stolichnij.jpg'
import tefteli from './image/tefteli.jpg'


export const dishes = {
	// station1
	// Сосиска в тесте
	dish101: {
		id: 'dish101',
		name: 'Сосиска в тесте',
		image: solisa,
		ingredients: [
			{
				name: 'Тесто для сосиски пф',
				weight: '100г',
				isDish: true,
				dishId: 'dish457',
			},
			{ name: 'Сулугуни', weight: '20г' },
			{ name: 'Сосиска', weight: '1шт' },
		],
		preparation: '',
		station: 'station1',
	},
	// station2
	// Бутер с грибным жульеном +
	dish201: {
		id: 'dish201',
		name: 'С грибным жульеном',
		image: julien,
		ingredients: [
			{
				name: 'Грибной жульен пф',
				weight: '50г',
				isDish: true,
				dishId: 'dish416',
			},
			{ name: 'Сулугуни', weight: '15г' },
			{ name: 'Хлеб тартин', weight: '60г' },
		],
		preparation: 'Подготовить ингредиенты. Собрать бутерброд.',
		station: 'station2',
	},
	// Гороховый суп +
	dish202: {
		id: 'dish202',
		name: 'Гороховый суп',
		image: null,
		ingredients: [
			{
				name: 'Гороховый суп пф',
				weight: '300г',
				isDish: true,
				dishId: 'dish420',
			},
			{
				name: 'Куриный бульон пф',
				weight: '50г',
				isDish: true,
				dishId: 'dish445',
			},
			{ name: 'Гренки пф', weight: '25г', isDish: true, dishId: 'dish444' },
			{ name: 'Укроп пф', weight: '5г', isDish: true, dishId: 'dish437' },
		],
		preparation: '',
		station: 'station2',
	},
	// Фрикадельки ++
	dish203: {
		id: 'dish203',
		name: 'Фрикалельки',
		image: tefteli,
		ingredients: [
			{
				name: 'Фрикадельки пф',
				weight: '175г',
				isDish: true,
				dishId: 'dish428',
			},
			{
				name: 'Соус на фрикадельки пф',
				weight: '90г',
				isDish: true,
				dishId: 'dish422',
			},
			{
				name: 'Малиновое варенье пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish423',
			},
			{
				name: 'Маринованный огурец пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish405',
			},
		],
		preparation: '',
		station: 'station2',
	},
	// Оладушки с икрой
	dish204: {
		id: 'dish204',
		name: 'Оладушки с икрой',
		image: oladia,
		ingredients: [
			{
				name: 'Оладушки под икру пф',
				weight: '125г',
				isDish: true,
				dishId: 'dish446',
			},
			{ name: 'Икра красная', weight: '20г' },
			{
				name: 'Лаймовый крем чиз пф',
				weight: '20г',
				isDish: true,
				dishId: 'dish410',
			},
			{
				name: 'Зеленое масло пф',
				weight: '3г',
				isDish: true,
				dishId: 'dish438',
			},
		],
		preparation: '',
		station: 'station2',
	},
	// Крабовый салат ++
	dish205: {
		id: 'dish205',
		name: 'Крабовый салат',
		image: krabov,
		ingredients: [
			{
				name: 'Крабовый салат пф',
				weight: '250г',
				isDish: true,
				dishId: 'dish447',
			},
			{
				name: 'Укроп пф',
				weight: '2г',
				isDish: true,
				dishId: 'dish437',
			},
		],
		preparation: '',
		station: 'station2',
	},
	// Столичный ++
	dish206: {
		id: 'dish206',
		name: 'Столичный',
		image: stolichnij,
		ingredients: [
			{
				name: 'Столичный пф',
				weight: '250г',
				isDish: true,
				dishId: 'dish452',
			},
			{
				name: 'Укроп пф',
				weight: '2г',
				isDish: true,
				dishId: 'dish437',
			},
		],
		preparation: '',
		station: 'station2',
	},
	// Щеки
	dish207: {
		id: 'dish207',
		name: 'Щеки',
		image: scheki,
		ingredients: [
			{
				name: 'Щеки пф',
				weight: '140г',
				isDish: true,
				dishId: 'dish427',
			},
			{
				name: 'Макароны пф',
				weight: '150г',
				isDish: true,
				dishId: 'dish462',
			},
			{
				name: 'Огурец малосольный пф',
				weight: '50г',
				isDish: true,
				dishId: 'dish459',
			},
			{
				name: 'Петрушка пф',
				weight: '5г',
				isDish: true,
				dishId: 'dish451',
			},
		],
		preparation: '',
		station: 'station2',
	},

	// station3
	// Бутер с окороком, огурцом, фисташкой +
	dish301: {
		id: 'dish301',
		name: 'С окороком, фисташкой',
		image: sOkorokom,
		ingredients: [
			{ name: 'окорок', weight: '40г' },
			{
				name: 'свежий огурец пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish401',
			},
			{ name: 'айоли пф', weight: '30г', isDish: true, dishId: 'dish402' },
			{ name: 'фисташка', weight: '5г' },
			{ name: 'хлеб тартин', weight: '60г' },
		],
		preparation: 'Намазать айоли, выложить огурец, окорок и фисташки.',
		station: 'station3',
	},
	// Бутер с ростбифом +
	dish302: {
		id: 'dish302',
		name: 'С ростбифом',
		image: sRosbifom,
		ingredients: [
			{ name: 'Ростбиф пф', weight: '30г', isDish: true, dishId: 'dish404' },
			{
				name: 'Маринованый огурец пф',
				weight: '15г',
				isDish: true,
				dishId: 'dish405',
			},
			{
				name: 'Маринованый лук пф',
				weight: '15г',
				isDish: true,
				dishId: 'dish407',
			},
			{
				name: 'Горчичный соус пф',
				weight: '15г',
				isDish: true,
				dishId: 'dish406',
			},
			{ name: 'Хлеб тартин', weight: '60г' },
		],
		preparation: '',
		station: 'station3',
	},
	// Бутер с сельдью и свеклой +
	dish303: {
		id: 'dish303',
		name: 'С сельдью и свеклой',
		image: sSeledkoj,
		ingredients: [
			{
				name: 'Свекла с майонезом пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish408',
			},
			{ name: 'Селедка', weight: '30г' },
			{
				name: 'Маринованный лук пф',
				weight: '10г',
				isDish: true,
				dishId: 'dish407',
			},
			{
				name: 'Хлеб бородинский',
				weight: '60г',
			},
		],
		preparation: '',
		station: 'station3',
	},
	// Бутер с килькой и сальсой +
	dish304: {
		id: 'dish304',
		name: 'С килькой и сальсой',
		image: sKilkoj,
		ingredients: [
			{
				name: 'Лаймовый крем-чиз пф',
				weight: '20г',
				isDish: true,
				dishId: 'dish410',
			},
			{
				name: 'Томатная сальса пф',
				weight: '25г',
				isDish: true,
				dishId: 'dish411',
			},
			{ name: 'Килька', weight: '30г' },
			{ name: 'Хлеб тартин', weight: '60г' },
		],
		preparation: '',
		station: 'station3',
	},
	// Бутер с печеными перцами и фетой +
	dish305: {
		id: 'dish305',
		name: 'С печеными перцами',
		image: sPercem,
		ingredients: [
			{
				name: 'Печеные перцы пф',
				weight: '40г',
				isDish: true,
				dishId: 'dish412',
			},
			{ name: 'Фета', weight: '20г' },
			{
				name: 'Песто из петрушки пф',
				weight: '10г',
				isDish: true,
				dishId: 'dish413',
			},
			{ name: 'Кедровый орех', weight: '3г' },
			{ name: 'Хлеб тартин', weight: '60г' },
		],
		preparation: '',
		station: 'station3',
	},
	// Бутер с сулугуни и докторской +
	dish306: {
		id: 'dish306',
		name: 'С сулугуни и докторской',
		image: null,
		ingredients: [
			{
				name: 'Сулугуни с докторской пф',
				weight: '60г',
				isDish: true,
				dishId: 'dish431',
			},
			{ name: 'Хлеб тартин', weight: '60г' },
		],
		preparation: '',
		station: 'station3',
	},
	// Бутер с шпротами ++
	dish307: {
		id: 'dish307',
		name: 'Со шпротами',
		image: sShprotoj,
		ingredients: [
			{
				name: 'Яйцо по майонезом пф',
				weight: '35г',
				isDish: true,
				dishId: 'dish429',
			},
			{ name: 'Шпроты', weight: '30г' },
			{
				name: 'Маринованное яблоко пф',
				weight: '15г',
				isDish: true,
				dishId: 'dish417',
			},
			{ name: 'Хлеб бородинский', weight: '60г' },
		],
		preparation: '',
		station: 'station3',
	},
	// Бутер с Гравлаксом +
	dish308: {
		id: 'dish308',
		name: 'С гравлаксом',
		image: sGravlars,
		ingredients: [
			{ name: 'Гравлакс пф', weight: '45г', isDish: true, dishId: 'dish414' },
			{ name: 'Редис пф', weight: '20г', isDish: true, dishId: 'dish434' },
			{
				name: 'Лаймовый крем чиз пф',
				weight: '25г',
				isDish: true,
				dishId: 'dish410',
			},
			{
				name: 'Красное масло пф',
				weight: '5г',
				isDish: true,
				dishId: 'dish415',
			},
			{
				name: 'Хлеб бородинский',
				weight: '50г',
			},
		],
		preparation:
			'1. Нарезать хлеб. 2. Намазать крем-чиз. 3. Выложить гравлакс и остальные ингредиенты.',
		station: 'station3',
	},
	// Риет из копченой скумбрии (порция) +
	dish309: {
		id: 'dish309',
		name: 'Риет из копченой скумбрии',
		image: riet,
		ingredients: [
			{
				name: 'Риет из копченой скумбрии пф',
				weight: '100г',
				isDish: true,
				dishId: 'dish435',
			},
			{
				name: 'Маринованный огурец пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish405',
			},
			{
				name: 'Зеленое масло пф',
				weight: '10г',
				isDish: true,
				dishId: 'dish438',
			},
			{
				name: 'Хлеб бородинский',
				weight: '50г',
			},
		],
		preparation: '',
		station: 'station3',
	},
	// Сметанник +
	dish310: {
		id: 'dish310',
		name: 'Сметанник',
		image: null,
		description: 'сметанник',
		ingredients: [
			{ name: 'Сметанник пф', weight: '200г', isDish: true, dishId: 'dish418' },
			{ name: 'Сахар трасниковый', weight: '5г' },
		],
		preparation: '',
		station: 'station3',
	},
	// Тарелка с салом +
	dish311: {
		id: 'dish311',
		name: 'Тарелка с салом',
		image: salo,
		ingredients: [
			{
				name: 'Сало резаное белое пф',
				weight: '35г',
				isDish: true,
				dishId: 'dish424',
			},
			{
				name: 'Сало резаное красное пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish425',
			},
			{ name: 'Лук зеленый', weight: '20г' },
			{
				name: 'Лук красный пф',
				weight: '20г',
				isDish: true,
				dishId: 'dish440',
			},
			{
				name: 'Чеснок печеный пф',
				weight: '15г',
				isDish: true,
				dishId: 'dish403',
			},
			{
				name: 'Хрен столовый пф',
				weight: '25г',
				isDish: true,
				dishId: 'dish441',
			},
			{
				name: 'Хлеб бородинский',
				weight: '125г',
			},
		],
		preparation: '',
		station: 'station3',
	},
	// Шоколадная колбаса
	dish312: {
		id: 'dish312',
		name: 'Шоколадная колбаса',
		image: null,
		description: 'Шоколадная колбаса',
		ingredients: [
			{
				name: 'Масло сливочное',
				weight: '100г',
			},
			{
				name: 'Какао порошок',
				weight: '30г',
			},
			{ name: 'Молоко', weight: '50г' },
			{ name: 'Печенье юбилейное', weight: '220г' },
			{
				name: 'Сгущенное молоко',
				weight: '100г',
			},
			{ name: 'Орех грецкий', weight: '32г' },
		],
		preparation: '',
		station: 'station3',
	},
	// Мимоза
	dish313: {
		id: 'dish313',
		name: 'Мимоза',
		image: null,
		ingredients: [
			{
				name: 'Мимоза пф',
				weight: '200г',
				isDish: true,
				dishId: 'dish461',
			},
		],
		preparation: '',
		station: 'station3',
	},

	// station4
	// Cвежий огурец пф
	dish401: {
		id: 'dish401',
		name: 'Свежий огурец пф',
		image: null,
		description: 'Бутерброд с окороком и фисташками',
		ingredients: [
			{ name: 'огурец', weight: '1000г' },
			{ name: 'вода чистая', weight: '700г' },
		],
		preparation: 'Огурец нарезать слайсами и положить в воду',
		station: 'station4',
	},
	// Айоли пф
	dish402: {
		id: 'dish402',
		name: 'Айоли пф',
		image: null,
		ingredients: [
			{
				name: 'чеснок печеный пф',
				weight: '0.05г',
				isDish: true,
				dishId: 'dish403',
			},
			{ name: 'Горчица дижонская', weight: '15г' },
			{ name: 'Яйцо', weight: '3шт' },
			{ name: 'Ворчестер', weight: '5г' },
			{ name: 'Уксус винный белый', weight: '15г' },
			{ name: 'Масло растительное', weight: '650г' },
		],
		preparation: '1. Смешать все ингредиенты. 2. Взбить до однородности.',
		station: 'station4',
	},
	// Чеснок печеный пф +
	dish403: {
		id: 'dish403',
		name: 'Чеснок печеный пф',
		image: null,
		description: 'Чеснок печеный пф',
		ingredients: [
			{ name: 'чеснок пф', weight: '100г', isDish: true, dishId: 'dish430' },
			{ name: 'масло растительное', weight: '300г' },
		],
		preparation: 'Залить маслом и запечь',
		station: 'station4',
	},
	// Ростбиф пф
	dish404: {
		id: 'dish404',
		name: 'Ростбиф пф',
		image: null,
		description: 'Ростбиф пф',
		ingredients: [
			{
				name: 'Говядина глазной мускул пф',
				weight: '1606г',
				isDish: true,
				dishId: 'dishX',
			},
			{ name: 'Тимьян', weight: '5г' },
			{ name: 'Соль', weight: '20г' },
			{ name: 'Перец черн мол', weight: '5г' },
			{ name: 'Ворчестер', weight: '20г' },
			{ name: 'горчица зернистая', weight: '75г' },
		],
		preparation:
			'Говядина зачищаем от жил, пленки, маринуем на 2 часа в горчице, ворчестере, соль, перец, тимьян, обжариваем со всех сторон на растительном масле, вакуумируем, готовим в сювиде при температуре 58 градусов 3 часа',
		station: 'station4',
	},
	// Маринованный огурец пф
	dish405: {
		id: 'dish405',
		name: 'Маринованный огурец пф',
		image: null,
		ingredients: [
			{ name: 'Огурец', weight: '260г' },
			{ name: 'Вода', weight: '40г' },
			{ name: 'Уксус винный белый', weight: '60г' },
			{ name: 'Сахар', weight: '60г' },
			{ name: 'Соль', weight: '30г' },
			{
				name: 'Укроп пф',
				weight: '5г',
				isDish: true,
				dishId: 'dish437',
			},
		],
		preparation:
			'Огурец нарезаем на слайсере, в отдельный таре смешиваем вода, соль, сахар, уксус, заливаем лук, компресируем через вакуум',
		station: 'station4',
	},
	// Горчичный соус пф
	dish406: {
		id: 'dish406',
		name: 'Горчичный соус пф',
		image: null,
		description: 'Горчичный соус пф',
		ingredients: [
			{ name: 'Горчица зернистая', weight: '100г' },
			{ name: 'Масло растительное', weight: '170г' },
			{ name: 'Ворчестер', weight: '15г' },
			{ name: 'Мед', weight: '60г' },
		],
		preparation: 'В таре все смешиваем до однородности',
		station: 'station4',
	},
	// Маринованный лук пф
	dish407: {
		id: 'dish407',
		name: 'Маринованный лук пф',
		image: null,
		description: 'Маринованный лук пф',
		ingredients: [
			{ name: 'Лук красный пф', weight: '260г', isDish: true, dishId: 'dishX' },
			{ name: 'Вода', weight: '40г' },
			{ name: 'Уксус винный белый', weight: '60г' },
			{ name: 'Сахар', weight: '60г' },
			{ name: 'Соль', weight: '30г' },
		],
		preparation:
			'Лук нарезаем на слайсере, в отдельный таре смешиваем вода, соль, сахар, уксус, заливаем лук, компресируем через вакуум',
		station: 'station4',
	},
	// Свекла с майонезом пф
	dish408: {
		id: 'dish408',
		name: 'Свекла с майонезом пф',
		image: null,
		ingredients: [
			{ name: 'Свекла', weight: '164г' },
			{ name: 'Майонез пф', weight: '30г', isDish: true, dishId: 'dish409' },
			{ name: 'Сливочный сыр', weight: '60г' },
			{ name: 'Чеснок пф', weight: '5г', isDish: true, dishId: 'dish430' },
			{ name: 'Сахар', weight: '3г' },
			{ name: 'Соль', weight: '3г' },
		],
		preparation: '',
		station: 'station4',
	},
	// Майонез пф +
	dish409: {
		id: 'dish409',
		name: 'Майонез пф',
		image: null,
		ingredients: [
			{ name: 'Яйцо куриное (желток)', weight: '40г' },
			{ name: 'Уксус винный белый', weight: '4г' },
			{ name: 'Соль', weight: '2г' },
			{ name: 'Горчица дижонская', weight: '6г' },
			{ name: 'Масло растительное', weight: '230г' },
		],
		preparation:
			'Желтки смешать с уксусом, солью и горчицей взбить блендером затем вливать масло тонкой струйкой',
		station: 'station4',
	},
	// Лаймовый крем чиз пф
	dish410: {
		id: 'dish410',
		name: 'Лаймовый крем чиз пф',
		image: null,
		ingredients: [
			{ name: 'Творожный сыр', weight: '200г' },
			{ name: 'Цедра лайма', weight: '2г' },
			{ name: 'Соль', weight: '2г' },
			{ name: 'Молоко 3.2%', weight: '30г' },
			{ name: 'Сок лайма', weight: '2г' },
			{ name: 'Сахар песок', weight: '2г' },
		],
		preparation: 'Все ингридиенты смешать до однородной массы',
		station: 'station4',
	},
	// Томатная сальса пф
	dish411: {
		id: 'dish411',
		name: 'Томатная сальса пф',
		image: null,
		ingredients: [
			{ name: 'Томаты розовые', weight: '250г' },
			{
				name: 'Зелень петрушка пф',
				weight: '25г',
				isDish: true,
				dishId: 'dishX',
			},
			{ name: 'чеснок пф', weight: '5г', isDish: true, dishId: 'dishX' },
			{ name: 'соль', weight: '5г' },
			{ name: 'Сахар', weight: '10г' },
			{ name: 'Каперсы пф', weight: '10г', isDish: true, dishId: 'dishX' },
			{ name: 'масло растительное', weight: '10г' },
		],
		preparation:
			'Мелко нарезаем томаты, зелень, каперсы, чеснок, заправляем маслом, доводим до вкуса соль, перец',
		station: 'station4',
	},
	// Печеные перцы пф
	dish412: {
		id: 'dish412',
		name: 'Печеные перцы пф',
		image: null,
		description: 'Печеные перцы пф',
		ingredients: [
			{ name: 'Перец болгарский', weight: '270г' },
			{ name: 'Масло растительное', weight: '30г' },
			{ name: 'Прованские травы', weight: '3г' },
			{ name: 'Соль', weight: '3г' },
			{ name: 'Перец черный молотый', weight: '1г' },
		],
		preparation:
			'Перцы заворачиваем в фольгу, запекаем в пароконвектомате до готовности, даем остыть, снимаем шкурку, нарезаем слай',
		station: 'station4',
	},
	// Песто пф
	dish413: {
		id: 'dish413',
		name: 'Песто пф',
		image: null,
		description: 'Песто пф',
		ingredients: [
			{ name: 'Петрушка листья', weight: '30г' },
			{ name: 'Масло растительное', weight: '15г' },
			{ name: 'Масло растительное (нераф.)', weight: '8г' },
			{ name: 'Соль', weight: '2г' },
			{ name: 'Сулугуни сыр', weight: '8г' },
			{ name: 'Грецкий орех', weight: '6г' },
			{ name: 'Перец черный молотый', weight: '1г' },
			{ name: 'Чеснок пф', weight: '2г', isDish: true, dishId: 'dish403' },
			{ name: 'Уксус яблочный', weight: '2г' },
		],
		preparation: 'добавить',
		station: 'station4',
	},
	// Гравлакс пф
	dish414: {
		id: 'dish414',
		name: 'Гравлакс пф',
		image: null,
		description: 'Гравлакс пф',
		ingredients: [
			{ name: 'Форель пф', weight: '1700г', isDish: true, dishId: 'dishX' },
			{ name: 'Хрен корень', weight: '10г' },
			{ name: 'Лимон', weight: '7г' },
			{ name: 'Сахар', weight: '70г' },
			{ name: 'Соль', weight: '70г' },
			{ name: 'Укроп дистилят (бар)', weight: '50г' },
			{ name: 'Свекла пф', weight: '450г', isDish: true, dishId: 'dish432' },
			{ name: 'Укроп', weight: '50г' },
		],
		preparation:
			'В тару натираем свеклу, корень хрена, цедру лимона, смешиваем с солью, сахаром, укропным дистилятом, выкладываем форели ровным слоем, убираем в холодильник на 24 часа, снимаем шубу и вытаскиваем кости, нарезаем тонким слайсом, храним только в плюсе',
		station: 'station4',
	},
	// Красное масло пф
	dish415: {
		id: 'dish415',
		name: 'Красное масло пф',
		image: null,
		ingredients: [
			{ name: 'Масло растительное', weight: '100г' },
			{ name: 'Паприка сушеная', weight: '20г' },
		],
		preparation:
			'Все смешать, довести до кипения, настоять и процедить через ветошь',
		station: 'station4',
	},
	// Грибной жульен пф
	dish416: {
		id: 'dish416',
		name: 'Грибной жульен пф',
		image: null,
		ingredients: [
			{ name: 'Шампиньоны', weight: '100г' },
			{
				name: 'Лук репчатый пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish436',
			},
			{ name: 'Чеснок пф', weight: '3г', isDish: true, dishId: 'dish430' },
			{ name: 'Масло растительное', weight: '20г' },
			{ name: 'Соль', weight: '3г' },
			{ name: 'Перец черный мол.', weight: '3г' },
			{ name: 'Сметана', weight: '90г' },
			{
				name: 'Укроп пф',
				weight: '5г',
				isDish: true,
				dishId: 'dish437',
			},
		],
		preparation:
			'Шампиньоны режим слайсами, лук, чеснок мелким кубиком, обжариваем до готовности, выпариваем лишную жидкость, добавляем сметану, затягиваем до состояния густой сметаны, добавляем зелень, доводим до вкуса соль, перец',
		station: 'station4',
	},
	// Маринованное яблоко пф
	dish417: {
		id: 'dish417',
		name: 'Маринованное яблоко пф',
		image: null,
		description: 'Маринованное яблоко пф',
		ingredients: [
			{ name: 'Яблоко', weight: '180г' },
			{ name: 'Тархун', weight: '5г' },
			{ name: 'Уксус винный белый', weight: '100г' },
			{ name: 'Сахар', weight: '60г' },
			{ name: 'Соль', weight: '30г' },
			{ name: 'Масло растительное', weight: '60г' },
		],
		preparation:
			'Чистим яблоко от шкурки, нарезаем мелким кубиком, добавляем мелко резаный тархун, в отдельный таре смешиваем соль, сахар, уксус, растительное масло, заливаем яблоко',
		station: 'station4',
	},
	// Сметанник пф
	dish418: {
		id: 'dish418',
		name: 'Сметанник пф',
		image: null,
		ingredients: [
			{ name: 'Яйцо', weight: '8шт' },
			{ name: 'Сахар', weight: '200г' },
			{ name: 'Сметана', weight: '1200г' },
			{
				name: 'Песочное тесто пф',
				weight: '800г',
				isDish: true,
				dishId: 'dish439',
			},
		],
		preparation:
			'Сметанник выпекаем при температуре 180 градусов, 1 час, режем на 12 частей',
		station: 'station4',
	},
	// Риет из копченой скумбрии пф
	dish419: {
		id: 'dish419',
		name: 'Риет из копченой скумбрии пф',
		image: null,
		description: 'Риет из копченой скумбрии пф',
		ingredients: [
			{ name: 'Копченая скумбрия', weight: '213г' },
			{ name: 'лук репчатый пф', weight: '30г', isDish: true, dishId: 'dishX' },
			{ name: 'перец черн мол', weight: '3г' },
			{ name: 'яйцо', weight: '200г' }, // 2.0 кг в файле вероятно опечатка, указал 200г
			{ name: 'зелень укроп пф', weight: '10г', isDish: true, dishId: 'dishX' },
			{ name: 'соль', weight: '3г' },
		],
		preparation:
			'Копченую скумбрию чистим от костей и кожи, разминаем вилкой, лук репчатый нарезаем мелким кубиком, яйцо натираем на терке, добавляем соль, перец черн мол, резаный укроп',
		station: 'station4',
	},
	// Гороховый суп пф
	dish420: {
		id: 'dish420',
		name: 'Гороховый суп пф',
		image: null,
		description: 'Гороховый суп пф',
		ingredients: [
			{ name: 'Грудинка вк', weight: '400г' },
			{
				name: 'Окорок томбовский обрезь',
				weight: '250г',
			},
			{
				name: 'Лук репчатый пф',
				weight: '600г',
				isDish: true,
				dishId: 'dish436',
			},
			{ name: 'Морковь пф', weight: '300г', isDish: true, dishId: 'dish442' },
			{ name: 'Горох колотый', weight: '900г' },
			{ name: 'Картофель пф', weight: '600г', isDish: true, dishId: 'dish443' },
			{
				name: 'Куриный бульон пф',
				weight: '3000г',
				isDish: true,
				dishId: 'dish445',
			},
			{ name: 'Жидкий дым (специя)', weight: '15г' },
			{ name: 'Копченая паприка', weight: '10г' },
			{ name: 'Сахар', weight: '5г' },
			{ name: 'Соль', weight: '13г' },
			{ name: 'Перец черный молотый', weight: '5г' },
		],
		preparation:
			'Нарезаем грудинку, окорок кубиком, обжариваем, добавляем нарезаный кубиком лук, морковь, добавляем замоченный и промытый горох, забиваем бульоном, варим пока горох полностью не свариться, добавляем нарезаную кубиком картошку, специи, доводим до вкуса соль, перец',
		station: 'station4',
	},
	// Соус на фрикадельки пф
	dish422: {
		id: 'dish422',
		name: 'Соус на фрикадельки пф',
		image: null,
		ingredients: [
			{ name: 'Демигляс сухой', weight: '80г' },
			{ name: 'Вода', weight: '1000г' },
			{ name: 'Соевый соус', weight: '20г' },
			{ name: 'Горчица', weight: '20г' },
			{ name: 'Сливки 10%', weight: '200г' },
		],
		preparation: '',
		station: 'station4',
	},
	// Малиновое варенье пф
	dish423: {
		id: 'dish423',
		name: 'Малиновое варенье пф',
		image: null,
		description: 'Малиновое варенье пф',
		ingredients: [
			{ name: 'Малина', weight: '200г' },
			{ name: 'Сахар', weight: '50г' },
			{ name: 'Лимон сок', weight: '10г' },
		],
		preparation: '',
		station: 'station4',
	},
	// Сало белое резаное пф
	dish424: {
		id: 'dish424',
		name: 'Сало резаное белое пф',
		image: null,
		description: 'Сало белое резаное пф',
		ingredients: [{ name: 'Сало Белое', weight: '640г' }],
		preparation: '',
		station: 'station4',
	},
	// Сало резаное красное пф
	dish425: {
		id: 'dish425',
		name: 'Сало резаное красное пф',
		image: null,
		description: 'Сало резаное красное пф',
		ingredients: [{ name: 'Сало красное', weight: '447г' }],
		preparation: '',
		station: 'station4',
	},
	// Капуста квашеная пф
	dish426: {
		id: 'dish426',
		name: 'Капуста квашеная пф',
		image: null,
		description: 'Капуста квашеная пф',
		ingredients: [
			{ name: 'Капуста квашеная', weight: '110г' },
			{ name: 'Масло растительное нераф.', weight: '32г' },
			{ name: 'Укроп', weight: '5г' },
			{ name: 'Лук репчатый', weight: '14г' },
			{ name: 'Соль', weight: '2г' },
			{ name: 'Сахар', weight: '4г' },
		],
		preparation:
			'Лук нарезать, смешать с капустой, заправить маслом и специями',
		station: 'station4',
	},
	// Щеки пф
	dish427: {
		id: 'dish427',
		name: 'Щеки пф',
		image: null,
		description: 'Щеки пф',
		ingredients: [
			{ name: 'Щеки говядина', weight: '4500г' },
			{ name: 'Вино красное сухое.', weight: '100г' },
			{ name: 'Демигляс сухой', weight: '40г' },
			{ name: 'Лук репчатый', weight: '1600г' },
			{ name: 'Соль', weight: '15г' },
			{ name: 'Лавровый лист', weight: '1г' },
			{
				name: 'Куриный бульон пф',
				weight: '500г',
				isDish: true,
				dishId: 'dishX',
			},
		],
		preparation: '',
		station: 'station4',
	},
	// Фрикадельки пф
	dish428: {
		id: 'dish428',
		name: 'Фрикадельки пф',
		image: null,
		ingredients: [
			{ name: 'Говядина', weight: '750г' },
			{ name: 'Яйцо', weight: '1шт' },
			{ name: 'Сухари панировочные', weight: '100г' },
			{ name: 'Молоко', weight: '75г' },
			{ name: 'Сахар', weight: '5г' },
			{ name: 'Соль', weight: '10г' },
			{ name: 'Перец черный молотый', weight: '5г' },
		],
		preparation:
			'Все вымешиваем до однородности, оставляем в холодильнике на 1 час, крутим шарики по 25 гр',
		station: 'station4',
	},
	// Яйцо по майонезом пф +
	dish429: {
		id: 'dish429',
		name: 'Яйцо по майонезом пф',
		image: null,
		ingredients: [
			{ name: 'Яйцо', weight: '2шт' },
			{ name: 'Майонез пф', weight: '50г', isDish: true, dishId: 'dish409' },
			{ name: 'Чеснок пф', weight: '5г', isDish: true, dishId: 'dish430' },
			{ name: 'Соль', weight: '5г' },
		],
		preparation:
			'Яйцо отварное, чеснок натираем на мелкой терке, смешиваем с майонезом, доводим до вкуса солью',
		station: 'station4',
	},
	// Чеснок пф +
	dish430: {
		id: 'dish430',
		name: 'Чеснок пф',
		image: null,
		ingredients: [{ name: 'чеснок', weight: '1000г' }],
		preparation: 'Чеснок очистить',
		station: 'station4',
	},
	// Сулугуни с докторской пф +
	dish431: {
		id: 'dish431',
		name: 'Сулугуни с докторской пф',
		image: null,
		ingredients: [
			{ name: 'Колбаса докторская', weight: '680г' },
			{ name: 'Сулугуни сыр', weight: '680г' },
			{ name: 'Майонез пф', weight: '260г', isDish: true, dishId: 'dish409' },
			{ name: 'Ким чи соус', weight: '80г' },
		],
		preparation: 'Чеснок очистить',
		station: 'station4',
	},
	// Свекла пф
	dish432: {
		id: 'dish432',
		name: 'Свекла пф',
		image: null,
		ingredients: [{ name: 'Свекла', weight: '1000г' }],
		preparation: 'Свекла чищеная',
		station: 'station4',
	},
	// Форель пф
	dish433: {
		id: 'dish433',
		name: 'Форель пф',
		image: null,
		ingredients: [{ name: 'Форель', weight: '1000г' }],
		preparation: '',
		station: 'station4',
	},
	// Редис пф
	dish434: {
		id: 'dish434',
		name: 'Редис пф',
		image: null,
		ingredients: [{ name: 'Редис', weight: '100г' }],
		preparation: 'нарезать слайсами',
		station: 'station4',
	},
	// Риет из копченой скумбрии пф
	dish435: {
		id: 'dish435',
		name: 'Риет из копченой скумбрии пф',
		image: null,
		ingredients: [
			{ name: 'Копченая скумбрия', weight: '213г' },
			{
				name: 'Лук репчатый пф',
				weight: '30г',
				isDish: true,
				dishId: 'dish436',
			},
			{ name: 'Перец черный молотый', weight: '3г' },
			{ name: 'Яйцо', weight: '2шт' },
			{ name: 'Укроп пф', weight: '10г', isDish: true, dishId: 'dish437' },
			{ name: 'Соль', weight: '3г' },
		],
		preparation:
			'Копченую скумбрию чистим от костей и кожи, разминаем вилкой, лук репчатый нарезаем мелким кубиком, яйцо натираем на терке, добавляем соль, перец черн мол, резаный укроп',
		station: 'station4',
	},
	// Лук репчатый пф
	dish436: {
		id: 'dish436',
		name: 'Лук репчатый пф',
		image: null,
		ingredients: [{ name: 'лук репчатый', weight: '1000г' }],
		preparation: 'Лук очистить',
		station: 'station4',
	},
	// Укроп пф
	dish437: {
		id: 'dish437',
		name: 'Укроп пф',
		image: null,
		ingredients: [{ name: 'Укроп', weight: '1000г' }],
		preparation: 'Укроп очистить',
		station: 'station4',
	},
	// Зеленое масло пф
	dish438: {
		id: 'dish438',
		name: 'Зеленое масло пф',
		image: null,
		ingredients: [
			{ name: 'Петрушка (листья)', weight: '100г' },
			{ name: 'Укроп', weight: '100г' },
			{ name: 'Масло растительное', weight: '600г' },
			{ name: 'Соль', weight: '4г' },
		],
		preparation:
			'Листья поместить в мерный стакан, посолить, залить маслом и пробить блендером, прогреть, процедить',
		station: 'station4',
	},
	// Песочное тесто пф
	dish439: {
		id: 'dish439',
		name: 'Песочное тесто пф',
		image: null,
		ingredients: [
			{ name: 'Масло сливочное', weight: '200г' },
			{ name: 'Сахар', weight: '100г' },
			{ name: 'Мука', weight: '400г' },
			{ name: 'Яйцо', weight: '2шт' },
		],
		preparation: 'Все смешать до однородности',
		station: 'station4',
	},
	// Лук красный пф
	dish440: {
		id: 'dish440',
		name: 'Лук красный пф',
		image: null,
		ingredients: [{ name: 'Лук красный', weight: '1000г' }],
		preparation: 'Лук очистить',
		station: 'station4',
	},
	// Хрен столовый пф
	dish441: {
		id: 'dish441',
		name: 'Хрен столовый пф',
		image: null,
		ingredients: [{ name: 'Хрен столовый пф', weight: '1000г' }],
		preparation: '',
		station: 'station4',
	},
	// Морковь пф
	dish442: {
		id: 'dish442',
		name: 'Морковь пф',
		image: null,
		ingredients: [{ name: 'Морковь', weight: '1000г' }],
		preparation: 'Морковь очистить',
		station: 'station4',
	},
	// Картофель пф
	dish443: {
		id: 'dish443',
		name: 'Картофель пф',
		image: null,
		ingredients: [{ name: 'Картофель', weight: '1000г' }],
		preparation: 'Картофель очистить',
		station: 'station4',
	},
	// Гренки пф
	dish444: {
		id: 'dish444',
		name: 'Гренки пф',
		image: null,
		ingredients: [{ name: 'Гренки', weight: '1000г' }],
		preparation:
			'Белый хлеб нарезать кубиком и запечь в духовке до приятного колера',
		station: 'station4',
	},
	// Куриный бульон пф
	dish445: {
		id: 'dish445',
		name: 'Куриный бульон пф',
		image: null,
		ingredients: [
			{ name: 'Курица целая', weight: '2шт' },
			{
				name: 'Лук репчатый пф',
				weight: '1000г',
				isDish: true,
				dishId: 'dish436',
			},
			{ name: 'Морковь пф', weight: '1000г', isDish: true, dishId: 'dish442' },
			{ name: 'Соль', weight: '5г' },
			{ name: 'Перец', weight: '5г' },
		],
		preparation: '',
		station: 'station4',
	},
	// Оладушки под икру пф
	dish446: {
		id: 'dish446',
		name: 'Оладушки под икру пф',
		image: null,
		ingredients: [
			{ name: 'Яйцо', weight: '1шт' },
			{ name: 'Молоко', weight: '250г' },
			{ name: 'Мука', weight: '250г' },
			{ name: 'Дрожжи', weight: '5г' },
			{ name: 'Соль', weight: '5г' },
			{ name: 'Сахар', weight: '40г' },
		],
		preparation:
			'Все ингредиенты смешиваем до однородности, даем набухнуть дрожжам 15-20 мин',
		station: 'station4',
	},
	// Крабовый салат пф
	dish447: {
		id: 'dish447',
		name: 'Крабовый салат пф',
		image: null,
		ingredients: [
			{ name: 'Крабовые палочки', weight: '300г' },
			{ name: 'Кукуруза консервированная', weight: '280г' },
			{ name: 'Яйцо', weight: '3шт' },
			{
				name: 'Рис отварной пф',
				weight: '50г',
				isDish: true,
				dishId: 'dish449',
			},
			{ name: 'Майонез пф', weight: '100г', isDish: true, dishId: 'dish409' },
			{
				name: 'Огурец длинноплодный пф',
				weight: '170г',
				isDish: true,
				dishId: 'dish448',
			},
			{
				name: 'Лук репчатый пф',
				weight: '25г',
				isDish: true,
				dishId: 'dish436',
			},
			{ name: 'Соль', weight: '3г' },
			{ name: 'Перец', weight: '1г' },
		],
		preparation:
			'Крабовые палочки, яйцо, лук нарезаем кубиком, огурец свежий чистим от семечек и нарезаем кубиком, добавляем к общей массе рис, заправляем майонезом, соль, перец',
		station: 'station4',
	},
	// Огурец длинноплодный пф
	dish448: {
		id: 'dish448',
		name: 'Огурец длинноплодный пф',
		image: null,
		ingredients: [{ name: 'Огурец длинноплодный', weight: '1000г' }],
		preparation: 'Огурец зачистить от семян',
		station: 'station4',
	},
	// Рис отварной пф
	dish449: {
		id: 'dish449',
		name: 'Рис отварной пф',
		image: null,
		ingredients: [
			{ name: 'Рис отварной пф', weight: '500г' },
			{ name: 'Вода', weight: '550г' },
		],
		preparation: '',
		station: 'station4',
	},
	// Начинка на рулеты из баклажан пф
	dish450: {
		id: 'dish450',
		name: 'Начинка на баклажан пф',
		image: null,
		ingredients: [
			{ name: 'Орех грецкий', weight: '70г' },
			{
				name: 'Петрушка пф',
				weight: '25г',
				isDish: true,
				dishId: 'dish451',
			},
			{
				name: 'Чеснок печеный пф',
				weight: '20г',
				isDish: true,
				dishId: 'dish403',
			},
			{ name: 'сливочный сыр', weight: '150г' },
			{ name: 'соль', weight: '5г' },
			{ name: 'перец черный молотый', weight: '3г' },
		],
		preparation:
			'Грецкий орех, зелень, чеснок режем в кашу, смешиваем с сливочным сыром, доводим до вкуса соль, перец',
		station: 'station4',
	},
	// Зелень петрушка пф
	dish451: {
		id: 'dish451',
		name: 'Петрушка пф',
		image: null,
		ingredients: [{ name: 'Петрушка', weight: '1000г' }],
		preparation: 'Петрушку очистить до листьев и мелко порезать',
		station: 'station4',
	},
	// Столичный пф
	dish452: {
		id: 'dish452',
		name: 'Столичный пф',
		image: null,
		ingredients: [
			{ name: 'Яйцо', weight: '4шт' },
			{
				name: 'Морковь отварная пф',
				weight: '500г',
				isDish: true,
				dishId: 'dish454',
			},
			{
				name: 'Картофель отварной пф',
				weight: '400г',
				isDish: true,
				dishId: 'dish453',
			},
			{ name: 'Копченая курица', weight: '300г' },
			{ name: 'Горошек консервированный', weight: '125г' },
			{
				name: 'Лук репчатый пф',
				weight: '50г',
				isDish: true,
				dishId: 'dish436',
			},
			{
				name: 'Соленый огурец',
				weight: '200г',
			},
			{ name: 'Майонез пф', weight: '180г', isDish: true, dishId: 'dish409' },
			{ name: 'Соль', weight: '10г' },
			{ name: 'Перец черный молотый', weight: '6г' },
		],
		preparation:
			'Отварные овощи, куру, яйцо, лук нарезаем кубиком, заправляем майонезом, соль, перец, горошек',
		station: 'station4',
	},
	// Картофель отварной пф
	dish453: {
		id: 'dish453',
		name: 'Картофель отварной пф',
		image: null,
		ingredients: [
			{
				name: 'Картофель пф',
				weight: '1000г',
				isDish: true,
				dishId: 'dish443',
			},
		],
		preparation: 'Отварить',
		station: 'station4',
	},
	// Морковь отварная пф
	dish454: {
		id: 'dish454',
		name: 'Морковь отварная пф',
		image: null,
		ingredients: [
			{ name: 'Морковь пф', weight: '1000г', isDish: true, dishId: 'dish442' },
		],
		preparation: 'Отварить',
		station: 'station4',
	},
	// Печеные перцы пф
	dish455: {
		id: 'dish455',
		name: 'Печеные перцы пф',
		image: null,
		ingredients: [
			{ name: 'Перец болгарский', weight: '270г' },
			{ name: 'Масло растительное', weight: '30г' },
			{ name: 'Прованские травы', weight: '3г' },
			{ name: 'Соль', weight: '3г' },
			{ name: 'Перец черный молотый', weight: '1г' },
		],
		preparation:
			'Перцы заворачиваем в фольгу, запекаем в пароконвектомате до готовности, даем остыть, снимаем шкурку, нарезаем слайсами и заправляем маслом с солью, перцем, прованскими травами',
		station: 'station4',
	},
	// Запеченный баклажан пф
	dish456: {
		id: 'dish456',
		name: 'Запеченный баклажан пф',
		image: null,
		ingredients: [
			{ name: 'Баклажан', weight: '623г' },
			{ name: 'Соль', weight: '5г' },
			{ name: 'Перец черный молотый', weight: '3г' },
			{ name: 'Масло растительное', weight: '50г' },
		],
		preparation:
			'Баклажан режем на слайсере, соль, перец, обжариваем на растительном масле с двух сторон',
		station: 'station4',
	},
	// Тесто для сосиски пф
	dish457: {
		id: 'dish457',
		name: 'Тесто для сосиски пф',
		image: null,
		ingredients: [
			{ name: 'Масло сливочное', weight: '100г' },
			{ name: 'Мука', weight: '600г' },
			{ name: 'Соль', weight: '14г' },
			{ name: 'Сахар', weight: '80г' },
			{ name: 'Дрожжи', weight: '20г' },
			{ name: 'Вода', weight: '300г' },
		],
		preparation:
			'смешать дрожжи, сахар и воду, дать дрожжам подойти. Муку и масло смешать с солью и добавить дрожжи с водой дать настояться',
		station: 'station4',
	},
	// Луковый соус пф
	dish458: {
		id: 'dish458',
		name: 'Луковый соус пф',
		image: null,
		ingredients: [
			{
				name: 'Лук репчатый пф',
				weight: '300г',
				isDish: true,
				dishId: 'dish436',
			},
			{ name: 'Сахар', weight: '10г' },
			{ name: 'Куриный бульон сухой', weight: '10г' },
			{ name: 'Вода', weight: '300г' },
			{ name: 'Сливочное масло', weight: '25г' },
			{ name: 'Мука', weight: '10г' },
			{ name: 'Петрушка пф', weight: '25г', isDish: true, dishId: 'dish451' },
		],
		preparation: '',
		station: 'station4',
	},
	// Огурец малосольный пф
	dish459: {
		id: 'dish459',
		name: 'Огурец малосольный пф',
		image: null,
		ingredients: [
			{ name: 'Огурец длинноплодный', weight: '2500г' },
			{ name: 'Вода', weight: '2000г' },
			{ name: 'Сахар', weight: '30г' },
			{ name: 'Соль', weight: '60г' },
			{ name: 'Чеснок пф', weight: '20г', isDish: true, dishId: 'dish430' },
			{ name: 'Укроп', weight: '80г', isDish: true, dishId: 'dish437' },
			{ name: 'Лавровый лист', weight: '2г' },
			{ name: 'Перец черный молотый', weight: '5г' },
		],
		preparation: '',
		station: 'station4',
	},
	// Сайра с майонезом пф
	dish460: {
		id: 'dish460',
		name: 'Сайра с майонезом пф',
		image: null,
		ingredients: [
			{ name: 'Сайра', weight: '850г' },
			{
				name: 'Маринованный лук пф',
				weight: '200г',
				isDish: true,
				dishId: 'dish407',
			},
			{ name: 'Перец черный молотый', weight: '1г' },
			{ name: 'Майонез пф', weight: '35г', isDish: true, dishId: 'dish409' },
		],
		preparation: '',
		station: 'station4',
	},
	// Мимоза пф
	dish461: {
		id: 'dish461',
		name: 'Мимоза пф',
		image: null,
		ingredients: [
			{
				name: 'Картофель отварной пф',
				weight: '400г',
				isDish: true,
				dishId: 'dish453',
			},
			{
				name: 'Майонез пф',
				weight: '500г',
				isDish: true,
				dishId: 'dish409',
			},
			{
				name: 'Сайра с майонезом пф',
				weight: '600г',
				isDish: true,
				dishId: 'dish460',
			},
			{ name: 'Яйцо отварное', weight: '12шт' },
			{
				name: 'Сыр российский',
				weight: '150г',
			},
			{
				name: 'Морковь отварная пф',
				weight: '300г',
				isDish: true,
				dishId: 'dish454',
			},
		],
		preparation: '',
		station: 'station4',
	},
	// Макароны пф
	dish462: {
		id: 'dish462',
		name: 'Макароны пф',
		image: null,
		ingredients: [
			{ name: 'Макароны', weight: '1000г' },
			{ name: 'Вода', weight: '2000г' },
			{ name: 'Соль', weight: '10г' },
			{ name: 'Масло растительное', weight: '20г' },
		],
		preparation: 'Отварить промыть холодной водой',
		station: 'station4',
	},

	// station5
	// Вишневая пф
	dish502: {
		id: 'dish502',
		name: 'Вишневая пф',
		image: null,
		ingredients: [
			{ name: 'Вишня см', weight: '750г' }, // 0.75 кг → 750г
			{ name: 'Водка хаус', weight: '1000мл' }, // 1000г → 1000мл (для жидкостей)
			{ name: 'Амаретто', weight: '100мл' },
			{ name: 'Сироп', weight: '250г' }, // 0.25 кг → 250г
			{ name: 'Вода', weight: '250мл' },
			{ name: 'Лимонная кислота', weight: '10г' },
		],
		preparation:
			'Настаиваем ягоду с водкой в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, сироп, кислоту и амаретто.',
		station: 'station5', // Фиксированная станция
	},
	dish503: {
		id: 'dish503',
		name: 'Малиновая пф',
		image: null,
		ingredients: [
			{ name: 'Малина см', weight: '750г' },
			{ name: 'Водка хаус', weight: '1000мл' },
			{ name: 'Вермут Мартини Россо', weight: '100мл' },
			{ name: 'Сироп', weight: '300г' }, // 0.3 кг → 300г
			{ name: 'Вода', weight: '200мл' }, // 0.2 кг → 200мл (так как вода)
			{ name: 'Лимонная кислота', weight: '12г' },
		],
		preparation:
			'Настаиваем ягоду с водкой в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, кислоту, сироп и вермут.',
		station: 'station5',
	},
	dish504: {
		id: 'dish504',
		name: 'Облепиха с вермутом пф',
		image: null,
		ingredients: [
			{ name: 'Облепиха', weight: '750г' },
			{ name: 'Водка', weight: '1000мл' },
			{ name: 'Вода', weight: '200мл' },
			{ name: 'Сироп', weight: '300г' },
			{ name: 'Вермут Мартини Бьянко', weight: '100мл' },
			{ name: 'Лимонная кислота', weight: '13г' },
		],
		preparation:
			'Настаиваем ягоду с водкой в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, сироп, кислоту и вермут.',
		station: 'station5',
	},
	dish505: {
		id: 'dish505',
		name: 'Маракуйя пф',
		image: null,
		ingredients: [
			{ name: 'Маракуйя', weight: '10000г' }, // 10 кг → 10000г
			{ name: 'Водка', weight: '6000мл' }, // 6 л → 6000мл
			{ name: 'Сироп', weight: '3000г' }, // 3 кг → 3000г
			{ name: 'Кислота', weight: '80г' },
			{ name: 'Вода', weight: '1000мл' }, // 1 л → 1000мл
		],
		preparation: 'Смешиваем все ингредиенты.',
		station: 'station5',
	},
	dish506: {
		id: 'dish506',
		name: 'Вяленые томаты пф',
		image: null,
		ingredients: [
			{ name: 'Вяленые томаты', weight: '3200г' }, // 3.2 кг → 3200г
			{ name: 'Чеснок', weight: '160г' }, // 0.16 кг → 160г
			{ name: 'Водка', weight: '12000мл' }, // 12 л → 12000мл
			{ name: 'Сироп', weight: '700г' }, // 0.7 кг → 700г
			{ name: 'Вода', weight: '6000мл' }, // 6 л → 6000мл
			{ name: 'Соль', weight: '20г' },
		],
		preparation:
			'Запекаем чеснок в фольге. В пакет сувид кладем слитые и отжатые от масла томаты и чеснок. Сувидим при температуре 58 градусов в течение 10 часов.',
		station: 'station5',
	},
	dish507: {
		id: 'dish507',
		name: 'Клюквенная с хлебом пф',
		image: null,
		ingredients: [
			{ name: 'Ржаной солод', weight: '50г' },
			{ name: 'Клюква', weight: '750г' },
			{ name: 'Лимонная кислота', weight: '14г' },
			{ name: 'Водка', weight: '1000мл' },
			{ name: 'Сироп', weight: '250г' }, // 0.25 кг → 250г
			{ name: 'Вода', weight: '250мл' }, // 0.25 кг → 250мл
		],
		preparation:
			'Настаиваем ягоду с водкой и солодом в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, кислоту, сироп.',
		station: 'station5',
	},
	dish508: {
		id: 'dish508',
		name: 'Касис пф',
		image: null,
		ingredients: [
			{ name: 'Черная смородина', weight: '750г' }, // 0.75 кг → 750г
			{ name: 'Водка', weight: '1000мл' },
			{ name: 'Вода', weight: '350мл' }, // 0.35 кг → 350мл
			{ name: 'Сироп', weight: '350г' }, // 0.35 кг → 350г
			{ name: 'Лимонная кислота', weight: '13г' },
		],
		preparation:
			'Настаиваем ягоду с водкой в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, кислоту, сироп.',
		station: 'station5',
		// yield: '1750мл'  // Раскомментировать при необходимости
	},
	dish509: {
		id: 'dish509',
		name: 'Крыжовник-эстрагон пф',
		image: null,
		ingredients: [
			{ name: 'Водка хаус', weight: '1000мл' },
			{ name: 'Крыжовник с/м', weight: '750г' }, // 0.75 кг → 750г
			{ name: 'Тархун', weight: '50г' },
			{ name: 'Лимонная кислота', weight: '13г' },
			{ name: 'Сироп', weight: '300г' }, // 0.3 кг → 300г
			{ name: 'Вода', weight: '300мл' }, // 0.3 кг → 300мл
		],
		preparation:
			'Настаиваем ягоду с водкой и тархуном в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, кислоту и сироп.',
		station: 'station5',
		// yield: '1770мл'  // Раскомментируйте при необходимости
	},
	dish510: {
		id: 'dish510',
		name: 'Клубника-греча пф',
		image: null,
		ingredients: [
			{ name: 'Водка хаус', weight: '1000мл' },
			{ name: 'Клубника с/м', weight: '750г' },
			{ name: 'Греча', weight: '70г' },
			{ name: 'Сироп', weight: '300г' },
			{ name: 'Вода', weight: '100мл' },
			{ name: 'Лимонная кислота', weight: '10г' },
		],
		preparation:
			'Настаиваем клубнику и гречу с водкой в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, сироп и лимонную кислоту.',
		station: 'station5',
		// yield: '' // Добавьте выход при необходимости
	},
	dish511: {
		id: 'dish511',
		name: 'Фундук-карамель пф',
		image: null,
		ingredients: [
			{ name: 'Водка', weight: '6000мл' },
			{ name: 'Фундук', weight: '2000г' },
			{ name: 'Молоко топленое', weight: '6000мл' },
			{ name: 'Сливки 22%', weight: '2000мл' },
			{ name: 'Сливки 11%', weight: '1000мл' },
			{ name: 'Сахар', weight: '4000г' },
			{ name: 'Масло сливочное', weight: '200г' }, // 0.2 кг → 200г
			{ name: 'Соль', weight: '80г' }, // 0.08 кг → 80г
		],
		preparation:
			'1. Жарим орехи в конвектомате до золотистого цвета\n' +
			'2. Перемалываем орехи блендером\n' +
			'3. Варим карамель из орехов, масла, сливок 22% и соли\n' +
			'4. После остывания соединяем карамель с водкой, оставшимися сливками и топленым молоком\n' +
			'5. Перемешиваем и цедим через супербэг',
		station: 'station5',
	},
	dish512: {
		id: 'dish512',
		name: 'Манго-кинза пф',
		image: null,
		ingredients: [
			{ name: 'Водка', weight: '8000мл' },
			{ name: 'Кинза', weight: '500г' },
			{ name: 'Вода', weight: '2000мл' },
			{ name: 'Сахар сироп', weight: '2000г' },
			{ name: 'Манго пюре', weight: '4000г' },
			{ name: 'Кислота', weight: '120г' },
			{ name: 'Соль', weight: '2г' },
		],
		preparation:
			'1. Бланшировать кинзу\n' +
			'2. Смешать водку и кинзу в контейнере, оставить на 12 часов\n' +
			'3. Отцедить кинзу\n' +
			'4. Смешать все компоненты\n' +
			'5. Оставить на 2 часа',
		station: 'station5',
	},
	dish513: {
		id: 'dish513',
		name: 'Черноплодная пф',
		image: null,
		ingredients: [
			{ name: 'Водка хаус', weight: '1000мл' },
			{ name: 'Рябина с/м', weight: '750г' }, // 0.75 кг → 750г
			{ name: 'Вода', weight: '250мл' }, // 0.25 кг → 250мл
			{ name: 'Сироп', weight: '300г' }, // 0.3 кг → 300г
			{ name: 'Лимонная кислота', weight: '14г' },
		],
		preparation:
			'Настаиваем ягоду с водкой в течение месяца и более. Далее цедим через пресс и супербег. Добавляем воду, кислоту, сироп.',
		station: 'station5',
	},
	dish514: {
		id: 'dish514',
		name: 'Брусника-ваниль пф',
		image: null,
		ingredients: [
			{ name: 'Брусника', weight: '750г' }, // 0.75 кг → 750г
			{ name: 'Водка', weight: '1000мл' },
			{ name: 'Вода', weight: '350мл' }, // 0.35 кг → 350мл
			{ name: 'Сироп', weight: '300г' }, // 0.3 кг → 300г
			{ name: 'Лимонная кислота', weight: '14г' },
			{ name: 'Ванилин', weight: '8г' },
		],
		preparation:
			'1. Настаиваем ягоду с водкой в течение месяца и более\n' +
			'2. Цедим через пресс и супербег\n' +
			'3. Добавляем воду, кислоту, сироп и ванилин',
		station: 'station5',
	},
	dish515: {
		id: 'dish515',
		name: 'Сливочная малина пф',
		image: null,
		ingredients: [
			{ name: 'Малина', weight: '6000г' }, // 6 кг → 6000г
			{ name: 'Водка', weight: '4500мл' }, // 4.5 л → 4500мл
			{ name: 'Сливки 11%', weight: '5000мл' }, // 5 л → 5000мл
			{ name: 'Сахар', weight: '4000г' }, // 4 кг → 4000г
			{ name: 'Вода', weight: '300мл' }, // 0.3 кг → 300мл
		],
		preparation:
			'1. Варим малину с сахаром и водой\n' +
			'2. Даем остыть\n' +
			'3. Цедим через мелкое сито (удаляем косточки)\n' +
			'4. Соединяем с водкой и сливками\n' +
			'5. Блендерим до однородности',
		station: 'station5',
	},
	dish516: {
		id: 'dish516',
		name: 'Адвокат пф',
		image: null,
		ingredients: [
			{ name: 'Яичные желтки', weight: '4000г' },
			{ name: 'Водка', weight: '4000мл' },
			{ name: 'Ванилин', weight: '20г' }, // 0.02 кг → 20г
			{ name: 'Сахар', weight: '3000г' },
		],
		preparation:
			'1. Взбиваем желтки с сахаром и ванилином блендером-венчиком 15 минут до получения пены\n' +
			'2. Добавляем водку\n' +
			'3. Взбиваем еще 5 минут\n' +
			'4. Цедим через сито для удаления комочков',
		station: 'station5',
	},
	dish517: {
		id: 'dish517',
		name: 'Шоколад пф',
		image: null,
		ingredients: [
			{ name: 'Какао "Золотой ярлык"', weight: '1200г' },
			{ name: 'Сухие желтки', weight: '120г' }, // 0.12 кг → 120г
			{ name: 'Вода', weight: '4300мл' }, // 4.3 л → 4300мл
			{ name: 'Кардамон', weight: '10г' },
			{ name: 'Сахар сироп', weight: '2000г' },
			{ name: 'Водка', weight: '2300мл' },
			{ name: 'Ванилин', weight: '10г' }, // Добавлен, т.к. упомянут в процессе
		],
		preparation:
			'1. В 200л воды кипятим кардамон 12 мин на медленном огне, цедим\n' +
			'2. Берем 3.6л воды, доводим до кипения\n' +
			'3. Добавляем какао, сухие желтки, ванилин и кардамоновый экстракт\n' +
			'4. Взбиваем блендером\n' +
			'5. Остужаем\n' +
			'6. Добавляем водку, остаток воды (0.5л) и сироп\n' +
			'7. Цедим через супербэг',
		station: 'station5',
	},
	dish518: {
		id: 'dish518',
		name: 'Ром-баба',
		image: null,
		ingredients: [
			{ name: 'Ром', weight: '9000мл' },
			{ name: 'Изюм светлый', weight: '3000г' },
			{ name: 'Вода', weight: '5000мл' },
			{ name: 'Ванилин', weight: '40г' },
			{ name: 'Сироп', weight: '1.9л' }, // Можно уточнить единицы (л/кг) при необходимости
		],
		preparation:
			'1. Изюм замочить на 12 часов в воде\n' +
			'2. Настаивать на роме 2 недели\n' +
			'3. Альтернатива: сувид 58°C 10 часов\n' +
			'4. Добавить ванилин, воду и сироп',
		station: 'station5',
	},
	dish519: {
		id: 'dish519',
		name: 'Красная смородина джин',
		image: null,
		ingredients: [
			{ name: 'Джин', weight: '1л' },
			{ name: 'Вода', weight: '300мл' },
			{ name: 'Сироп', weight: '300мл' },
			{ name: 'Красная смородина', weight: '800г' },
			{ name: 'Кислота', weight: '11г' },
		],
		preparation:
			'1. Настаивать ягоду с джином 1+ месяц\n' +
			'2. Процедить через пресс и супербег\n' +
			'3. Добавить воду, сироп, кислоту',
		station: 'station5',
	},
	dish520: {
		id: 'dish520',
		name: 'Лимончелло',
		image: null,
		ingredients: [
			{ name: 'Водка', weight: '8л' },
			{ name: 'Лимоны', weight: '6шт' },
			{ name: 'Лавровый лист', weight: '24шт' },
			{ name: 'Сахар', weight: '4кг' },
			{ name: 'Сироп', weight: '1л' },
			{ name: 'Соль', weight: '15г' },
			{ name: 'Кислота', weight: '80г' },
		],
		preparation:
			'1. Замочить лимоны в кипятке на 10 мин\n' +
			'2. Очистить пиллером цедру (без альбедо)\n' +
			'3. Настаивать цедру с лавровым листом 2 недели\n' +
			'4. Выжать из лимонов сок, проварить с сахаром и остудить\n' +
			'5. Соединить настоянную водку с сиропом\n' +
			'6. Добавить сахарный сироп, соль и кислоту',
		station: 'station5',
	},

	// station6
	// Коктейли
	dish601: {
		id: 'dish601',
		name: 'Негрони пф',
		image: null,
		ingredients: [
			{ name: 'Джин хаус', weight: '200мл' },
			{ name: 'Мартини Россо', weight: '200мл' },
			{ name: 'Кампари', weight: '200мл' },
			{ name: 'Вода', weight: '150мл' },
		],
		preparation: 'Смешать все ингредиенты и подавать с льдом',
		station: 'station6',
	},
	dish602: {
		id: 'dish602',
		name: 'Грязный пф',
		image: null,
		ingredients: [
			{ name: 'Водка хаус', weight: '400мл' },
			{ name: 'Вермут Мартини Драй', weight: '250мл' },
			{ name: 'Скинос Мастика', weight: '125мл' },
			{ name: 'Рассол оливок черных', weight: '75мл' },
			{ name: 'Рассол черемши', weight: '50мл' },
			{ name: 'Вода фильтр', weight: '100мл' },
		],
		preparation:
			'1. Смешать все компоненты в бутылке\n' +
			'2. Отправить в морозилку для охлаждения\n' +
			'3. Сервировать порцией 50мл с маринованным томатом',
		station: 'station6',
	},
	dish603: {
		id: 'dish603',
		name: 'Гимлет пф',
		image: null,
		ingredients: [
			{ name: 'Джин хаус', weight: '250мл' },
			{ name: 'Кордиал лайм', weight: '250мл' },
			{ name: 'Вода', weight: '100мл' },
		],
		preparation: 'Смешать все ингредиенты и охладить перед подачей',
		station: 'station6',
	},
	dish604: {
		id: 'dish604',
		name: 'Крёстный отец',
		image: null,
		ingredients: [
			{ name: 'Амаретто', weight: '20мл' },
			{ name: 'Dewars White Label', weight: '15мл' },
			{ name: 'Вода', weight: '5мл' },
			{ name: 'Апельсиновый биттер', weight: '1 дэш' },
		],
		preparation:
			'Смешать все ингредиенты в стакане для смешивания со льдом, процедить в охлаждённый бокал',
		station: 'station6',
	},
	dish605: {
		id: 'dish605',
		name: 'Яблочный',
		image: null,
		ingredients: [
			{ name: 'Белая березка белый налив', weight: '20мл' },
			{ name: 'Мартини Драй', weight: '40мл' },
			{ name: 'Мартини Бьянко', weight: '15мл' },
			{ name: 'Скинос', weight: '10мл' },
			{ name: 'Абсент', weight: '1мл' },
			{ name: 'Лимонная вербена', weight: 'по вкусу' },
		],
		preparation:
			'Смешать все ингредиенты в шейкере со льдом, процедить в охлаждённый бокал',
		station: 'station6',
	},
	dish606: {
		id: 'dish606',
		name: 'Сухой',
		image: null,
		ingredients: [
			{ name: 'Джин хаус', weight: '150мл' },
			{ name: 'Мартини Драй', weight: '150мл' },
			{ name: 'Крыжовник эстрагон', weight: '75мл' },
			{ name: 'Вода', weight: '75мл' },
		],
		preparation:
			'1. Смешать все ингредиенты в смесительном стакане\n' +
			'2. Охладить и отфильтровать\n' +
			'3. Сервировать порцией 45мл с оливкой',
		station: 'station6',
	},
	dish607: {
		id: 'dish607',
		name: 'Шорт Айленд',
		image: null,
		ingredients: [
			{ name: 'Белая берёзка классика', weight: '5мл' },
			{ name: 'Хопперс Драй', weight: '5мл' },
			{ name: 'Corralejo Blanco', weight: '5мл' },
			{ name: 'Трипл Сек', weight: '5мл' },
			{
				name: 'П/Ф кордиал лайм',
				weight: '10мл',
				isDish: true,
				dishId: 'dish706',
			},
			{
				name: 'П/Ф сироп Кола',
				weight: '10мл',
				isDish: true,
				dishId: 'dish707',
			},
			{ name: 'Вода', weight: '10мл' },
		],
		preparation:
			'1. Смешать все ингредиенты в шейкере со льдом\n' +
			'2. Тщательно встряхнуть\n' +
			'3. Процедить в охлажденный стоп-бокал',
		station: 'station6',
	},
	dish608: {
		id: 'dish608',
		name: 'Кузнечик',
		image: null,
		ingredients: [
			{ name: 'Ликёр Картрон Какао', weight: '15мл' },
			{ name: 'Ликёр Картрон Мята', weight: '10мл' },
			{ name: 'Сливки 10%', weight: '15мл' },
		],
		preparation:
			'1. Взбить все ингредиенты в шейкере со льдом\n' +
			'2. Процедить в охлаждённый коктейльный бокал\n' +
			'3. Украсить листиком мяты',
		station: 'station6',
	},
	dish609: {
		id: 'dish609',
		name: 'Эспрессо Мартини',
		image: null,
		ingredients: [
			{ name: 'Белая Берёзка', weight: '200мл' },
			{ name: 'Кофе', weight: '200мл' },
			{
				name: 'П/Ф кофейный ликёр',
				weight: '100мл',
			},
			{ name: 'Ванильный экстракт', weight: '5 капель' },
			{ name: 'Альбумин', weight: '1г' },
		],
		preparation:
			'1. Взбить все ингредиенты в шейкере со льдом\n' +
			'2. Двойное процеживание в охлаждённый коктейльный бокал\n' +
			'3. Украсить кофейными зёрнами',
		station: 'station6',
	},
	dish610: {
		id: 'dish610',
		name: 'Апероль сприц',
		image: null,
		ingredients: [
			{ name: 'Апероль', weight: '1760мл' },
			{ name: 'Игристое вино', weight: '4400мл' },
			{ name: 'Вода', weight: '880мл' },
		],
		preparation:
			'1. В охлаждённый бокал добавить лёд\n' +
			'2. Влить Апероль и воду\n' +
			'3. Долить игристое вино\n' +
			'4. Аккуратно размешать барной ложкой',
		station: 'station6',
	},
	dish611: {
		id: 'dish611',
		name: 'Близость на Некрасова',
		image: null,
		ingredients: [
			{ name: 'Сок ананаса', weight: '60мл' },
			{ name: 'Клюква березка', weight: '20мл' },
			{ name: 'Брусника', weight: '20мл' },
			{ name: 'Мартини Фьеро', weight: '20мл' },
			{ name: 'Априкот Мари Бризар', weight: '10мл' },
		],
		preparation:
			'1. Смешать все ингредиенты в шейкере со льдом\n' +
			'2. Встряхнуть и процедить в охлаждённый бокал\n' +
			'3. Украсить ягодами брусники',
		station: 'station6',
	},
	dish612: {
		id: 'dish612',
		name: 'Красная Москва',
		image: null,
		ingredients: [
			{ name: 'Белая берёзка клюква', weight: '15мл' },
			{ name: 'П/Ф Лимончелло', weight: '15мл' },
			{
				name: 'П/Ф Кордиал лайм',
				weight: '30мл',
				isDish: true,
				dishId: 'dish706',
			},
			{ name: 'Мартини Фиеро', weight: '15мл' },
			{ name: 'Кампари', weight: '10мл' },
			{ name: 'П/Ф Морс клюквенный', weight: '50мл' },
		],
		preparation:
			'1. Смешать все ингредиенты в шейкере со льдом\n' +
			'2. Встряхнуть и процедить в охлаждённый бокал\n' +
			'3. Украсить долькой апельсина и ягодами клюквы',
		station: 'station6',
	},

	// station6
	// Заготовки бар
	dish701: {
		id: 'dish701',
		name: 'Пф водка ряженка',
		image: null,
		ingredients: [
			{ name: 'Водка хаус', weight: '500мл' },
			{ name: 'Топлёное молоко', weight: '500мл' },
		],
		preparation:
			'1. Смешать водку и топлёное молоко в ёмкости\n' +
			'2. Тщательно перемешать до однородности\n' +
			'3. Охладить перед подачей',
		station: 'station7',
	},
	dish702: {
		id: 'dish702',
		name: 'Кофе пф',
		image: null,
		ingredients: [
			{ name: 'Кофе молотый', weight: '60г' },
			{ name: 'Вода', weight: '1000мл' },
		],
		preparation:
			'1. Приготовить кофе предпочитаемым методом (френч-пресс, фильтр и др.)\n' +
			'2. Охладить до нужной температуры',
		station: 'station7',
	},
	dish703: {
		id: 'dish703',
		name: 'Пф соленая карамель',
		image: null,
		ingredients: [
			{ name: 'Сливки 22%', weight: '100мл' },
			{ name: 'Фундук', weight: '100г' },
			{ name: 'Сливки 10%', weight: '100мл' },
			{ name: 'Молоко', weight: '300мл' },
			{ name: 'Сахар', weight: '200г' },
			{ name: 'Сливочное масло', weight: '12г' },
			{ name: 'Соль морская', weight: '9г' },
		],
		preparation:
			'1. Прокалить фундук в печи 10 минут при 150°C, очистить от кожуры\n' +
			'2. Измельчить фундук в блендере\n' +
			'3. В кастрюле соединить фундук, масло и сахар\n' +
			'4. Варить до состояния карамели\n' +
			'5. Добавить остальные ингредиенты и довести до готовности',
		station: 'station7',
	},
	dish704: {
		id: 'dish704',
		name: 'Пф водка кинза',
		image: null,
		ingredients: [
			{ name: 'Водка', weight: '600мл' },
			{ name: 'Кинза', weight: '90г' },
		],
		preparation:
			'1. Поместить водку и кинзу в контейнер\n' +
			'2. Провести 5 циклов вакуумирования\n' +
			'3. Обработать в жидкотной машине "Золушка" в течение 1 часа\n' +
			'4. Профильтровать полученную смесь',
		station: 'station7',
	},
	dish705: {
		id: 'dish705',
		name: 'Медовый сироп',
		image: null,
		ingredients: [
			{ name: 'Мёд', weight: '300г' },
			{ name: 'Вода', weight: '100мл' },
		],
		preparation:
			'1. Смешать мёд и воду в сотейнике\n' +
			'2. Нагревать на медленном огне до полного растворения\n' +
			'3. Остудить до комнатной температуры\n' +
			'4. Перелить в чистую ёмкость для хранения',
		station: 'station7',
	},
	dish706: {
		id: 'dish706',
		name: 'ПФ Кордиал Лайм',
		image: null,
		ingredients: [
			{ name: 'Вода', weight: '1л' },
			{ name: 'Сахар песок', weight: '1кг' },
			{ name: 'Лайм', weight: '400г' },
			{ name: 'ПФ Лимонная кислота', weight: '3.7л' },
		],
		preparation:
			'1. Снять цедру с лаймов микроплейном (без альбедо)\n' +
			'2. Смешать цедру с водой и сахаром, довести до кипения\n' +
			'3. Остудить под крышкой/пергаментом (контактное охлаждение)\n' +
			'4. Отфильтровать и смешать с раствором лимонной кислоты',
		station: 'station7',
	},
	dish707: {
		id: 'dish707',
		name: 'ПФ сироп Кола',
		image: null,
		ingredients: [{ name: 'Кола хаус', weight: '1л' }],
		preparation:
			'1. Выпарить колу на индукционной плите в 5 раз\n' +
			'2. Остудить полученный сироп до комнатной температуры\n' +
			'3. Перелить в чистую ёмкость для хранения',
		station: 'station7',
	},
	dish708: {
		id: 'dish708',
		name: 'Сангрита',
		image: null,
		ingredients: [
			{ name: 'Сок томатный Rich', weight: '800мл' },
			{ name: 'Медовый сироп', weight: '100мл' },
			{ name: 'Ворчестер соус', weight: '80мл' },
			{ name: 'Чили перец свежий', weight: '10г' },
			{ name: 'Чёрный перец', weight: '3г' },
			{ name: 'Хрен столовый сливочный', weight: '40г' },
			{ name: 'Черемша маринованная', weight: '20г' },
			{ name: 'Соль', weight: '2г' },
		],
		preparation:
			'1. Смешать все ингредиенты в блендере\n' +
			'2. Тщательно взбить до однородной консистенции\n' +
			'3. Процедить через сито\n' +
			'4. Добавить рассол от черемши по вкусу (не калькулируется)',
		station: 'station7',
	},
	dish709: {
		id: 'dish709',
		name: 'ПФ Лимонная кислота',
		image: null,
		ingredients: [
			{ name: 'Лимонная кислота', weight: '35г' },
			{ name: 'Вода', weight: '1л' },
		],
		preparation:
			'1. Смешать лимонную кислоту с водой\n' +
			'2. Размешивать до полного растворения кристаллов\n' +
			'3. Перелить в чистую ёмкость для хранения',
		station: 'station7',
	},

	// // Русский Север
	// dish601: {
	// 	id: 'dish601',
	// 	name: 'Русский Север: треска, кёж и поморская уха',
	// 	image: null,
	// 	ingredients: [
	// 		{
	// 			name: 'Из-за суровых зим и короткого холодного лета на Русском Севере не было такого изобилия овощей, грибов и ягод, как в средней полосе. Главным блюдом здесь служила рыба, особенно треска: считалось, что ее можно есть каждый день и она никогда не приедается.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'С давних пор поморы ели мороженую рыбу сырой, нарезая ее тонкими ломтиками и обмакивая в соль. Такое блюдо называлось строганиной. Но чаще рыбу все-таки готовили разными способами: навагу жарили, треску и пикшу запекали или отваривали, корюшку солили. Одним из популярных блюд была треска, запеченная с творогом. Рыбу сначала варили или обжаривали отдельными кусочками, потом выкладывали на слой нарезанного лука, покрывали растертым творогом с растительным маслом и отправляли в печь.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Самым известным блюдом северной кухни стала поморская уха. Ее всегда варили из свежепойманной рыбы. В бульон добавляли молоко, лук и пряности: лавровый лист, черный перец, лимонный сок. Эти приправы завозили сюда английские купцы, поэтому поморы научились использовать их раньше, чем все остальные жители России. К ухе традиционно подавали открытую кулебяку. По будням поморские хозяйки запекали щуку или язя в тесте целиком, а по праздникам ставили на стол «красные рыбники» — пироги с семгой, кетой или горбушей.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Несмотря на изобилие пирогов, сам хлеб в этих краях ели редко. Выращивать зерно в суровом климате было сложно, покупать — дорого. У поморов была поговорка: «Безрыбье хуже бесхлебья».',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Основным видом мяса на поморском столе была оленина. Ее жарили, запекали, добавляли в супы, вялили на зиму. К мясу часто подавали соусы из брусники, клюквы, морошки или шиповника. Назывались они «воложи». Такой соус не только делал блюдо вкуснее, но и служил источником витаминов, спасал от простуды и цинги. Из ягодного сока готовили густой горячий кисель — кёж. В него добавляли любые травы и пряности, которые были под рукой.',
	// 			weight: '',
	// 		},
	// 		{ name: 'Еда на стол, спешл настойка, афиша', weight: '' },
	// 	],
	// 	preparation: '',
	// 	station: 'station6',
	// },
	// // Кухня Сибири
	// dish602: {
	// 	id: 'dish602',
	// 	name: 'Кухня Сибири: пельмени, шаньги и чай',
	// 	image: null,
	// 	ingredients: [
	// 		{
	// 			name: 'Как и у северных народов, в Сибири одним из основных блюд была рыба. Правда, в этих краях предпочитали другие сорта: осетровых, лососевых, сиговых. Некоторые виды совсем не считали за рыбу. Налимов отдавали собакам, а лещами и язями кормили свиней.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Готовили рыбу тоже иначе, чем на Севере. Омуля, сига, муксуна или нельму солили, другие виды запекали в сметане, фаршировали кашей с грибами и луком, сушили на воздухе или в печи. Из малосольной рыбы особенно ценился мелкий тугунок: если его правильно готовили, то он пах свежими огурцами. В XIX веке его называли сосьвинской сельдью и поставляли в Петербург — к императорскому столу и в лучшие столичные рестораны. Коптить рыбу начали только в XIX столетии',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Самым популярным мясным блюдом в Сибири были пельмени. Для начинки обычно смешивали несколько видов мяса: птицу, говядину, свинину, оленину или лосятину. Тесто замешивали не на воде, а на чае, чтобы замороженные пельмени дольше хранились и оставались сочными. Их часто брали с собой в дорогу, чтобы быстро сварить на костре или прямо в самоваре.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Хлеб был обязательной частью сибирской трапезы. До XVII века его привозили из-за Урала, затем стали выращивать сами. Кроме хлеба к столу подавали и другую выпечку: открытые шаньги с сытной или сладкой начинкой, защипанные по краям сгибни, обжаренный в масле хрустящий хворост.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Каждый прием пищи сопровождался чаепитием. Купцы и другие обеспеченные люди предпочитали «цветочный» чай, который готовили из верхних листьев чайного куста. Такой напиток имел приятный вкус и тонкий аромат. Из более дешевых сортов был распространен «кирпичный» чай: его продавали прессованными плитками.',
	// 			weight: '',
	// 		},
	// 	],
	// 	preparation: '',
	// 	station: 'station6',
	// },
	// // Дальний Восток
	// dish603: {
	// 	id: 'dish603',
	// 	name: 'Дальний Восток: пян-се, хё и борщ из морской капусты',
	// 	image: null,
	// 	ingredients: [
	// 		{
	// 			name: 'Ни в одной традиционной кухне России не было такого изобилия морепродуктов, как в дальневосточной. На побережье Тихого океана в пищу шли не только многочисленные сорта рыбы и икры, но и крабы, кальмары, осьминоги, морские гребешки. Рецепты блюд первые русские переселенцы заимствовали у коренных дальневосточных народов: нивхов , удэгейцев, эвенков. Они научились готовить вяленую рыбу ситми, которую ели с брусникой и черемшой, жарить на костре мясо изюбрей и другую дичь, солить на зиму съедобные побеги папоротника.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'В конце XIX века на Дальнем Востоке поселились крестьяне из украинских губерний. Они сохранили рецепты своей традиционной кухни, но изменили их под новые условия жизни. Так появились борщ из морской капусты, уха с лососем, пельмени с кальмарами и другие блюда, необычные для остальной части России.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'На кулинарные традиции Приморья повлияла и кухня соседних стран — Китая, Кореи, Японии. Самыми популярными блюдами на Дальнем Востоке стали корейская рыба хё, маринованная в уксусе, японские шашлычки из курицы якитори, корейские пирожки пян-се, которые готовили на паровой бане. Начинка у таких пирожков могла быть любой — мясной, овощной или сладкой.',
	// 			weight: '',
	// 		},
	// 	],
	// 	preparation: '',
	// 	station: 'station6',
	// },
	// // Урал
	// dish604: {
	// 	id: 'dish604',
	// 	name: 'Урал: эчпочмак, груздянка и посекунчики',
	// 	image: null,
	// 	ingredients: [
	// 		{
	// 			name: 'Уральская кухня всегда славилась изобилием выпечки. В окрестностях Екатеринбурга и Перми готовили маленькие, чуть больше пельменя, пирожки-посекунчики. Их название произошло от слова «сечь» — мелко рубить: именно так резали мясо для начинки. В Оренбургской губернии «царем пирогов» называли курник, который часто подавали на свадьбах﻿. В начинку для такого пирога шли разные виды мяса, грибы, яйца, квашеная капуста. Слои разных начинок разделяли тонкими блинчиками. В каждой семье был собственный рецепт курника, который передавали из поколения в поколение.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Урал — многонациональный регион, поэтому здесь смешались кулинарные традиции разных народов. Русские жители научились готовить тюркский бешбармак — блюдо из тушеного мяса и кусочков теста. В него клали баранину, как было принято у башкир, или говядину и картофель, как у казахов. У татар переняли рецепт пирога эчпочмак с мясом, луком и картошкой. Начинку для него не готовили заранее, а клали в тесто сырой.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Еще одним популярным продуктом в уральской кухне были грибы. Их жарили с луком и ели как отдельное блюдо, добавляли в начинку для пирогов и пельменей, подавали к каше и мясу, сушили и солили на зиму. Уральские хозяйки часто готовили суп-груздянку со свежими или солеными лесными грибами. Несмотря на название, в такое блюдо клали не только грузди, но и лисички, подосиновики, опята, сыроежки — любые грибы, которые можно было найти в ближайшем лесу.',
	// 			weight: '',
	// 		},
	// 	],
	// 	preparation: '',
	// 	station: 'station6',
	// },
	// // Поволжье
	// dish605: {
	// 	id: 'dish605',
	// 	name: 'Поволжье: кулага, плов и штрудель',
	// 	image: null,
	// 	ingredients: [
	// 		{
	// 			name: 'На берегах Волги  жили разные народы России: чуваши, татары, горные и луговые марийцы , эрзя, мокша. У каждого из них сохранились старинные кулинарные традиции, которые постепенно перенимали и русские. Некоторые рецепты переходили из одной кухни в другую в первоначальном виде, в других же заменяли некоторые продукты или способы готовки на более привычные.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Из среднерусских кулинарных традиций в этом регионе сохранились многочисленные виды щей и каш, блюда из отварной или запеченной речной рыбы, овощей и лесных ягод. Из малины, черники и земляники готовили холодные молочные супы, калину и черемуху добавляли в начинки для пирогов или горячее сладкое блюдо кулагу.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Главными блюдами марийцев были супы и каши. В щи вместо капусты часто клали сныть, щавель, крапиву или другие травы. Супы готовили с рыбой или мясом, добавляли в них картофель, калину, грибы. Из картофеля и гороха марийцы жарили оладьи, похожие на белорусские драники.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Из татарской кухни в Поволжье были популярны пироги с разнообразными начинками, бешбармак, плов. Традиционно их готовили с зайчатиной, бараниной или кониной. Свинины татары-мусульмане не ели. Однако в русской кухне вскоре появились рецепты этих блюд со свининой, говядиной и курицей. Пряностями и приправами, кроме укропа, петрушки и лука, в Поволжье почти не пользовались.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Во второй половине XVIII века в Поволжье появились немецкие поселения. В них придерживались собственных кулинарных традиций. Немецкие хозяйки готовили картофельное пюре и шницели из свинины, клецки из теста и куриные супы с лапшой. На праздничный стол обязательно подавали домашние колбасы и запеченного гуся. В отличие от других народов Поволжья немцы пили много кофе﻿, иногда заменяя его суррогатом из цикория или злаков.',
	// 			weight: '',
	// 		},
	// 	],
	// 	preparation: '',
	// 	station: 'station6',
	// },
	// // Юг России
	// dish606: {
	// 	id: 'dish606',
	// 	name: 'Юг России: кубанский борщ, долма, шашлык',
	// 	image: null,
	// 	ingredients: [
	// 		{
	// 			name: 'Основой южнороссийской кухни стали кулинарные традиции Кубани. На плодородных землях в изобилии росли злаки, картофель, разные овощи и фрукты, которых почти не было в других регионах: баклажаны, борщевая свекла, абрикосы, персики, виноград. Поэтому на кубанском столе всегда было много овощных блюд. В качестве закуски к мясу подавали свежие помидоры, огурцы или редис, из тыквы варили кашу, из капустных листьев и мясной начинки готовили голубцы. Позже кубанские хозяйки переняли из кавказской кухни долму, в которой мясо заворачивали в листья винограда.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'С Кавказа на Юг России пришли и другие рецепты. В отличие от других регионов, здесь мясо, рыбу, овощи часто готовили на открытом огне. Одним из самых популярных блюд стал шашлык. Его подавали к столу со свежими овощами, луком, тонким лавашом, который пекли по армянским рецептам. Мусульманские народы Кавказа чаще всего готовили шашлык из баранины. На Кубани ее заменяли свининой, говядиной, иногда курицей. Вместе с мясом на вертелах жарили баклажаны, грибы, помидоры, сладкий перец. Традиционно мясные блюда дополняли острыми кавказскими соусами: грузинским ткемали из кислой алычи, чахохбили с большим количеством лука, аджикой с острым перцем и рубленой зеленью.',
	// 			weight: '',
	// 		},
	// 		{
	// 			name: 'Голубцы, борщ, вареники с разными начинками появились на Кубани из украинской кухни. В среднерусский борщ всегда клали много свеклы, а иногда добавляли свекольный сок, чтобы блюдо было насыщенного красного цвета. На Кубани этот овощ могли не добавлять совсем, а «правильный» борщ был ярко-оранжевым: цвет ему придавали помидоры и сладкий перец.',
	// 			weight: '',
	// 		},
	// 	],
	// 	preparation: '',
	// 	station: 'station6',
	// },
}