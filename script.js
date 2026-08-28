/* KAZPOLIMER-LTD — лэндинг. Чистая статика, без зависимостей. */
(function () {
  'use strict';

  /* ═══════════ I18N ═══════════ */
  var I18N = {
    ru: {
      'meta.title': 'KAZPOLIMER-LTD — изделия из полиуретана в Актобе | футеровка, гуммирование, 3D-печать',
      'meta.desc': 'Производство полиуретановых изделий по чертежам и образцам от 1 шт. и от 1 дня: футеровка оборудования, гуммирование роликов и валов, сайлентблоки и автокомпоненты, 3D-печать пластиком. Актобе, с 2012 года. Отгрузка по Казахстану, в Россию и СНГ.',
      'skip': 'К содержанию',
      'brandAria': 'KAZPOLIMER-LTD — на главную',
      'navAria': 'Основные разделы',
      'langAria': 'Язык сайта',
      'burgerAria': 'Открыть меню',
      'mobNavAria': 'Мобильное меню',
      'nav.izdeliya': 'Изделия', 'nav.futerovka': 'Футеровка', 'nav.gummirovanie': 'Гуммирование',
      'nav.zakaz': 'Как заказать', 'nav.klienty': 'Клиенты', 'nav.kontakty': 'Контакты',
      'cta.call': 'Позвонить', 'cta.wa': 'Написать в WhatsApp', 'more': 'Подробнее',
      'mob.note': 'Актобе · пр. Санкибай батыра, 14Б · Пн–Пт 09:00–18:00, Сб 09:00–13:00',
      'hero.over': 'ТОО «KAZPOLIMER-LTD» · Актобе · на рынке с 2012 года',
      'hero.h1': 'Изделия из полиуретана для промышленности Казахстана',
      'hero.lead': 'Изготавливаем по чертежам и образцам от 1 штуки и от 1 дня, футеруем оборудование полиуретаном, гуммируем ролики и валы, печатаем детали из пластика на 3D-принтере. Собственное производство в Актобе, отгрузка по Казахстану, в Россию и страны СНГ.',
      'fact.f1': 'год начала работы', 'fact.f2': 'наименований продукции',
      'fact.f3v': '1 шт.', 'fact.f3': 'минимальный заказ',
      'fact.f4v': 'от 1 дня', 'fact.f4': 'срок изготовления',
      'hero.c1': 'полиуретановое покрытие', 'hero.c2': 'стальное основание',
      'mq.1': 'опорные части', 'mq.2': 'сальники', 'mq.3': 'манжеты', 'mq.4': 'сита',
      'mq.5': 'мягкие соединения', 'mq.6': 'валы', 'mq.7': 'промышленные катки',
      'mq.8': 'колёса для спецтехники', 'mq.9': 'шестерёнки', 'mq.10': 'пластины',
      'mq.11': 'брус', 'mq.12': 'патрубки', 'mq.13': 'скребки', 'mq.14': 'нестандартные изделия',
      'mq.15': 'сайлентблоки', 'mq.16': 'сито грохота', 'mq.17': 'крыльчатки',
      'mq.18': 'виброподушки', 'mq.19': '3D-печать пластиком',
      'nm.prokl': 'прокладки', 'nm.porshen': 'поршни', 'nm.freza': 'фрезы',
      'nm.bashmak': 'башмаки асфальтоукладчика', 'nm.shar': 'шаровые опоры',
      'nm.motor': 'моторные подушки', 'nm.sergi': 'серьги рессор',
      'nm.tyagi': 'реактивные тяги', 'nm.stab': 'втулки стабилизатора',
      'dir.kicker': 'Направления', 'dir.h2': 'Четыре направления работы',
      'dir.lead': 'Полный цикл на собственном производстве: от литья изделия по чертежу и 3D-печати пластиковой детали до восстановления изношенного покрытия.',
      'dir.c1t': 'Изделия на заказ',
      'dir.c1x': 'Серийные и нестандартные полиуретановые изделия по вашим чертежам и образцам — от 1 штуки.',
      'dir.c2t': 'Полиуретановая футеровка',
      'dir.c2x': 'Защита накопительного, сортировочного, пересыпного и бункерного оборудования от абразивного износа.',
      'dir.c3t': 'Гуммирование роликов и валов',
      'dir.c3x': 'Нанесение и восстановление защитного полиуретанового слоя — вместо замены изношенного оборудования.',
      'dir.c4t': 'Пластик и 3D-печать',
      'dir.c4x': 'Печатаем детали и корпуса из пластика на 3D-принтере: прототип, мелкая серия, замена детали, которой нет в продаже.',
      'prod.kicker': '01 · Производство на заказ',
      'prod.h2': 'Полиуретановые изделия по вашим чертежам и образцам',
      'prod.lead': 'Более 300 наименований — от манжеты до рабочего колеса насоса. Возьмём в работу чертёж, эскиз или физический образец; минимальный объём заказа — 1 штука.',
      'prod.g1': 'Полиуретановые сита', 'prod.g2': 'Промышленные катки', 'prod.g3': 'Колёса для спецтехники',
      'prod.g4': 'Рабочие колёса насосов', 'prod.g5': 'Улитки насосов', 'prod.g6': 'Скребки',
      'prod.g7': 'Брус с пазами', 'prod.g8': 'Гидроциклоны и патрубки',
      'prod.also': 'Также изготавливаем:',
      'prod.g.ind': 'Для промышленности', 'prod.g.auto': 'Автокомпоненты из полиуретана', 'prod.g.any': 'И нестандарт',
      'prod.ctaTxt': 'Пришлите чертёж или фото образца — посчитаем изготовление.',
      'prod.ctaBtn': 'Отправить в WhatsApp',
      'fut.kicker': '02 · Футеровка', 'fut.h2': 'Полиуретановая футеровка оборудования',
      'fut.lead': 'Защищаем от абразивного износа и агрессивных сред накопительное, разделительно-сортировочное, пересыпное и бункерное оборудование.',
      'fut.s1': 'дольше служит футерованное оборудование',
      'fut.s2': 'реже ремонты — как минимум',
      'fut.b1t': 'Меньше затрат на ремонт',
      'fut.b1x': 'Экономия по сравнению со стальным нефутерованным оборудованием и резиновой футеровкой.',
      'fut.b2t': 'Держит ударные нагрузки',
      'fut.b2x': 'Полиуретан эластичен и прочен на разрыв и порез — повреждения снижаются вплоть до полного исключения.',
      'fut.b3t': 'Без налипания и намерзания',
      'fut.b3x': 'Гладкая непористая поверхность с низким коэффициентом сцепления — материал не налипает и не намерзает.',
      'fut.b4t': 'Тише работает',
      'fut.b4x': 'Полиуретановый слой заметно снижает шум оборудования.',
      'fut.p1': 'Бункер с футеровкой', 'fut.p2': 'Футерованный патрубок',
      'fut.p3': 'Труба с внутренней футеровкой', 'fut.p4': 'Футеровочные плиты',
      'gum.kicker': '03 · Гуммирование', 'gum.h2': 'Гуммирование роликов и валов полиуретаном',
      'gum.lead': 'Нанесение и восстановление защитного слоя — экономически оправданная альтернатива ремонту или замене изношенного оборудования: ниже затраты, короче простой, в разы дольше срок эксплуатации. Покрытие можно обновлять неоднократно.',
      'gum.b1t': 'Однородное эластичное покрытие',
      'gum.b1x': 'Высокая износостойкость и стойкость к порезам по всей толщине слоя.',
      'gum.b2t': 'Высокая адгезия',
      'gum.b2x': 'Надёжное сцепление покрытия с металлической поверхностью вала.',
      'gum.b3t': 'Малый внутренний разогрев',
      'gum.b3x': 'Низкое внутреннее тепловыделение при работе покрытия.',
      'gum.b4t': 'Держит переменные нагрузки',
      'gum.b4x': 'Выдерживает высокие динамические и знакопеременные нагрузки.',
      'ind.kicker': 'Отрасли', 'ind.h2': 'Отрасли применения',
      'ind.lead': 'Полиуретан работает там, где резина и сталь сдаются: абразив, удары, агрессивные среды.',
      'ind.1': 'нефтегазодобыча', 'ind.2': 'горнодобыча', 'ind.3': 'металлургия', 'ind.4': 'химия',
      'ind.5': 'строительство', 'ind.6': 'электротехника', 'ind.7': 'пищевая промышленность', 'ind.8': 'сельское хозяйство',
      'ind.9': 'автомобилестроение', 'ind.10': 'медицина', 'ind.11': 'текстиль', 'ind.12': 'полиграфия',
      'ind.13': 'металлообработка',
      'how.kicker': 'Как заказать', 'how.h2': 'От чертежа до отгрузки',
      'how.s1t': 'Заявка',
      'how.s1x': 'Позвоните или напишите в WhatsApp: опишите задачу, приложите чертёж, эскиз или фото образца.',
      'how.s2t': 'Проработка',
      'how.s2x': 'Согласуем конструкцию, материал, стоимость и сроки. Условия оплаты — гибкие.',
      'how.s3t': 'Производство',
      'how.s3x': 'Изготавливаем на собственном производстве в Актобе — серийно или от 1 штуки, срок от 1 дня.',
      'how.s4t': 'Доставка',
      'how.s4x': 'Отгружаем в любой регион Казахстана, а также в Россию и страны СНГ.',
      'adv.kicker': 'Почему KAZPOLIMER-LTD',
      'adv.h2': 'Производство, которому доверяют промышленные предприятия',
      'adv.a1t': 'Собственное производство', 'adv.a1x': 'Полный производственный цикл в Актобе.',
      'adv.a2t': 'Изготовление от 1 дня', 'adv.a2x': 'Собственная площадка — без очередей подрядчиков.',
      'adv.a3t': 'Гибкие условия оплаты', 'adv.a3x': 'Условия согласуем под задачу и объём.',
      'adv.a4t': 'Высокое качество продукции', 'adv.a4x': 'Продукция со знаком «Сделано в Казахстане».',
      'adv.a5t': 'Казахстан, Россия, СНГ', 'adv.a5x': 'Отгружаем в любой регион Казахстана, в Россию и страны СНГ.',
      'adv.a6t': 'Минимальный заказ — 1 шт.', 'adv.a6x': 'Берём и единичные, и серийные заказы.',
      'adv.a7t': 'Собственный товарный знак', 'adv.a7x': 'Логотип и название KAZPOLIMER-LTD — зарегистрированный товарный знак.',
      'adv.rate': 'рейтинг в каталоге 2ГИС · 36 отзывов',
      'adv.badge': 'Продукция производится в Казахстане',
      'cl.kicker': 'Клиенты', 'cl.h2': 'Достоинства нашей продукции оценили',
      'cl.lead': 'КазМунайГаз, ERG, Казхром, Казцинк, Казфосфат, KAZ Minerals, KMK Munai и другие промышленные предприятия Казахстана.',
      'cl.more': 'Также среди заказчиков:',
      'cl.x1': 'ТОО «Восход Хром»', 'cl.x2': 'ТОО «ДИНА»', 'cl.x3': '«АНВАР»', 'cl.x4': '«ШЕБЕР»',
      'p3.kicker': '04 · Пластик и 3D-печать',
      'p3.h2': 'Пластиковые изделия и печать на 3D-принтере',
      'p3.lead': 'Помимо полиуретана у нас есть собственное производство изделий из пластика на 3D-принтере. Печатаем детали, корпуса и оснастку по вашей модели, чертежу или образцу — прототип, мелкая серия или одна деталь, которой уже нет в продаже.',
      'p3.b1t': 'Деталь, которой нет в продаже',
      'p3.b1x': 'Снятая с производства или редкая пластиковая деталь — печатаем по образцу или обмерам.',
      'p3.b2t': 'Прототип перед литьём',
      'p3.b2x': 'Проверяем геометрию и посадочные места на пластиковом образце до изготовления полиуретановой оснастки.',
      'p3.b3t': 'Сложная геометрия без оснастки',
      'p3.b3x': 'Внутренние каналы, тонкие рёбра, нестандартные формы — печать не требует пресс-формы.',
      'p3.b4t': 'Единичный заказ и мелкая серия',
      'p3.b4x': 'От 1 штуки, срок — от 1 дня в зависимости от размера и загрузки принтера.',
      'p3.ctaTxt': 'Пришлите модель, чертёж или фото детали — посчитаем печать.',
      'p3.cta': 'Обсудить печать в WhatsApp',
      'doc.kicker': 'Документы', 'doc.h2': 'Официально в реестре казахстанских товаропроизводителей',
      'doc.lead': '18 наименований нашей продукции внесены в государственный реестр отечественных товаропроизводителей с долей внутристрановой ценности 86,12%. Реестр подтверждает казахстанское происхождение изделий — это важно при закупках с требованием местного содержания.',
      'doc.st1': 'наименований продукции в реестре',
      'doc.st2': 'доля внутристрановой ценности (ДВЦ)',
      'doc.st3': 'благодарственное письмо палаты «Атамекен»',
      'doc.d1a': 'Открыть выписку из реестра', 'doc.d1p': '2 страницы',
      'doc.d1m': 'БИН 151040025562 · выписка от 02.08.2026',
      'doc.d1t': 'Выписка из реестра казахстанских товаропроизводителей',
      'doc.d1x': 'В реестр внесены манжеты, валы, катки, шестерни, пластины, опорные части, сальники, мягкие соединения, брус, патрубки, сита, конвейерные ролики, сайлентблоки и колёса — с заявленной производственной мощностью по каждой позиции.',
      'doc.d2a': 'Открыть благодарственное письмо «Атамекен»',
      'doc.d2m': 'Актюбинская область · 2022 год',
      'doc.d2t': 'Алғыс хат Палаты предпринимателей «Атамекен»',
      'doc.d2x': 'Благодарственное письмо Палаты предпринимателей Актюбинской области — за активное участие в региональной выставке-конкурсе «Қазақстанның үздік тауары» («Лучший товар Казахстана»). Подписано директором палаты Д. Бекбауовой.',
      'doc.view': 'Смотреть', 'doc.pdf': 'Скачать PDF',
      'lbx.close': 'Закрыть', 'lbx.prev': 'Предыдущая страница', 'lbx.next': 'Следующая страница',
      'ct.kicker': 'Контакты', 'ct.h2': 'Обсудим вашу задачу',
      'ct.phone': 'Телефон', 'ct.addr': 'Адреса',
      'ct.addr1': 'Актобе, пр. Санкибай батыра, 14Б — производство',
      'ct.addr2': 'Астана, ул. Аксай, 9/10',
      'ct.hours': 'График',
      'ct.hours1': 'Пн–Пт 09:00–18:00 · Сб 09:00–13:00',
      'ct.hours2': 'Воскресенье — выходной',
      'ct.gis': 'Мы в 2ГИС: 5,0 · 36 отзывов',
      'fm.t': 'Оставьте заявку',
      'fm.sub': 'Сообщение придёт нам в WhatsApp — ответим в рабочее время.',
      'fm.name': 'Ваше имя', 'fm.nameP': 'Как к вам обращаться',
      'fm.phone': 'Телефон', 'fm.msg': 'Задача',
      'fm.msgP': 'Например: футеровка бункера, гуммирование вала, изделие по чертежу…',
      'fm.send': 'Отправить в WhatsApp',
      'fm.thanks': 'Спасибо! Сообщение сформировано — WhatsApp откроется в соседней вкладке. Если не открылся, напишите нам напрямую: +7 707 287 13 13.',
      'ft.org': 'ТОО «KAZPOLIMER-LTD» · изделия из полиуретана · Актобе — Астана',
      'ft.tm': 'Логотип и название KAZPOLIMER-LTD — зарегистрированный товарный знак.',
      'ft.c': '© 2012–',
      'wa.greet': 'Здравствуйте! Заявка с сайта kazpolimer-ltd.kz.',
      'wa.name': 'Имя', 'wa.phone': 'Телефон', 'wa.task': 'Задача'
    },
    kk: {
      'meta.title': 'KAZPOLIMER-LTD — Ақтөбедегі полиуретан бұйымдары | футерлеу, гуммирлеу, 3D-басып шығару',
      'meta.desc': 'Сызбалар мен үлгілер бойынша 1 данадан және 1 күннен полиуретан бұйымдарын өндіру: жабдықты футерлеу, роликтер мен біліктерді гуммирлеу, сайлентблоктар мен автокомпоненттер, пластикпен 3D-басып шығару. Ақтөбе, 2012 жылдан бері. Қазақстан, Ресей және ТМД елдеріне жөнелту.',
      'skip': 'Мазмұнға өту',
      'brandAria': 'KAZPOLIMER-LTD — басты бетке',
      'navAria': 'Негізгі бөлімдер',
      'langAria': 'Сайт тілі',
      'burgerAria': 'Мәзірді ашу',
      'mobNavAria': 'Мобильді мәзір',
      'nav.izdeliya': 'Бұйымдар', 'nav.futerovka': 'Футерлеу', 'nav.gummirovanie': 'Гуммирлеу',
      'nav.zakaz': 'Тапсырыс беру', 'nav.klienty': 'Клиенттер', 'nav.kontakty': 'Байланыс',
      'cta.call': 'Қоңырау шалу', 'cta.wa': 'WhatsApp арқылы жазу', 'more': 'Толығырақ',
      'mob.note': 'Ақтөбе · Сәңкібай батыр даңғылы, 14Б · Дс–Жм 09:00–18:00, Сб 09:00–13:00',
      'hero.over': '«KAZPOLIMER-LTD» ЖШС · Ақтөбе · нарықта 2012 жылдан бері',
      'hero.h1': 'Қазақстан өнеркәсібіне арналған полиуретан бұйымдары',
      'hero.lead': 'Сызбалар мен үлгілер бойынша 1 данадан және 1 күннен дайындаймыз, жабдықты полиуретанмен футерлейміз, роликтер мен біліктерді гуммирлейміз, пластик бөлшектерді 3D-принтерде басып шығарамыз. Ақтөбедегі өз өндірісіміз, Қазақстанға, Ресейге және ТМД елдеріне жөнелтеміз.',
      'fact.f1': 'жылдан бері жұмыс істейміз', 'fact.f2': 'өнім атауы',
      'fact.f3v': '1 дана', 'fact.f3': 'ең аз тапсырыс',
      'fact.f4v': '1 күннен', 'fact.f4': 'дайындау мерзімі',
      'hero.c1': 'полиуретан қабаты', 'hero.c2': 'болат негіз',
      'mq.1': 'тірек бөлшектері', 'mq.2': 'сальниктер', 'mq.3': 'манжеттер', 'mq.4': 'електер',
      'mq.5': 'жұмсақ жалғастырғыштар', 'mq.6': 'біліктер', 'mq.7': 'өнеркәсіптік катоктар',
      'mq.8': 'арнайы техника дөңгелектері', 'mq.9': 'тісті дөңгелектер', 'mq.10': 'пластиналар',
      'mq.11': 'брус', 'mq.12': 'келте құбырлар', 'mq.13': 'қырғыштар', 'mq.14': 'бейстандарт бұйымдар',
      'mq.15': 'сайлентблоктар', 'mq.16': 'елеуіш елегі', 'mq.17': 'қалақшалар',
      'mq.18': 'діріл жастықтары', 'mq.19': 'пластикпен 3D-басып шығару',
      'nm.prokl': 'төсемдер', 'nm.porshen': 'поршеньдер', 'nm.freza': 'фрезалар',
      'nm.bashmak': 'асфальт төсегіш табандары', 'nm.shar': 'шар тіректер',
      'nm.motor': 'қозғалтқыш жастықтары', 'nm.sergi': 'рессора сырғалары',
      'nm.tyagi': 'реактивті тартқыштар', 'nm.stab': 'тұрақтандырғыш төлкелері',
      'dir.kicker': 'Бағыттар', 'dir.h2': 'Жұмыстың төрт бағыты',
      'dir.lead': 'Өз өндірісіміздегі толық цикл: сызба бойынша бұйым құюдан және пластик бөлшекті 3D-басып шығарудан бастап тозған қабатты қалпына келтіруге дейін.',
      'dir.c1t': 'Тапсырыспен жасалатын бұйымдар',
      'dir.c1x': 'Сіздің сызбаларыңыз бен үлгілеріңіз бойынша сериялық және бейстандарт полиуретан бұйымдары — 1 данадан бастап.',
      'dir.c2t': 'Полиуретанмен футерлеу',
      'dir.c2x': 'Жинақтау, сұрыптау, қайта тиеу және бункер жабдығын абразивтік тозудан қорғау.',
      'dir.c3t': 'Роликтер мен біліктерді гуммирлеу',
      'dir.c3x': 'Қорғаныш полиуретан қабатын жағу және қалпына келтіру — тозған жабдықты ауыстырудың орнына.',
      'dir.c4t': 'Пластик және 3D-басып шығару',
      'dir.c4x': 'Пластик бөлшектер мен корпустарды 3D-принтерде басып шығарамыз: прототип, шағын серия, сатылымда жоқ бөлшектің орнына.',
      'prod.kicker': '01 · Тапсырыспен өндіру',
      'prod.h2': 'Сіздің сызбаларыңыз бен үлгілеріңіз бойынша полиуретан бұйымдары',
      'prod.lead': '300-ден астам атау — манжеттен бастап сорғының жұмыс дөңгелегіне дейін. Сызбаны, эскизді немесе үлгінің өзін жұмысқа аламыз; ең аз тапсырыс көлемі — 1 дана.',
      'prod.g1': 'Полиуретан електері', 'prod.g2': 'Өнеркәсіптік катоктар', 'prod.g3': 'Арнайы техника дөңгелектері',
      'prod.g4': 'Сорғылардың жұмыс дөңгелектері', 'prod.g5': 'Сорғының «ұлу» корпустары', 'prod.g6': 'Қырғыштар',
      'prod.g7': 'Ойықты брус', 'prod.g8': 'Гидроциклондар мен келте құбырлар',
      'prod.also': 'Сондай-ақ дайындаймыз:',
      'prod.g.ind': 'Өнеркәсіп үшін', 'prod.g.auto': 'Полиуретан автокомпоненттері', 'prod.g.any': 'Және бейстандарт бұйымдар',
      'prod.ctaTxt': 'Сызбаны немесе үлгінің фотосын жіберіңіз — дайындау құнын есептеп береміз.',
      'prod.ctaBtn': 'WhatsApp арқылы жіберу',
      'fut.kicker': '02 · Футерлеу', 'fut.h2': 'Жабдықты полиуретанмен футерлеу',
      'fut.lead': 'Жинақтау, бөлу-сұрыптау, қайта тиеу және бункер жабдығын абразивтік тозу мен агрессивті орталардан қорғаймыз.',
      'fut.s1': 'есе ұзақ — футерленген жабдықтың қызмет мерзімі',
      'fut.s2': 'есе сирек жөндеу — кемінде',
      'fut.b1t': 'Жөндеу шығыны аз',
      'fut.b1x': 'Футерленбеген болат жабдықпен және резеңке футерлеумен салыстырғанда үнемді.',
      'fut.b2t': 'Соққы жүктемесіне төзімді',
      'fut.b2x': 'Полиуретан серпімді әрі үзілу мен кесілуге берік — зақымдану толық жойылғанға дейін азаяды.',
      'fut.b3t': 'Жабыспайды және қатпайды',
      'fut.b3x': 'Тегіс, кеуексіз бет пен төмен ілінісу коэффициенті — материал жабыспайды және қатып қалмайды.',
      'fut.b4t': 'Шуы аз',
      'fut.b4x': 'Полиуретан қабаты жабдықтың шуын айтарлықтай төмендетеді.',
      'fut.p1': 'Футерленген бункер', 'fut.p2': 'Футерленген келте құбыр',
      'fut.p3': 'Іші футерленген құбыр', 'fut.p4': 'Футерлеу плиталары',
      'gum.kicker': '03 · Гуммирлеу', 'gum.h2': 'Роликтер мен біліктерді полиуретанмен гуммирлеу',
      'gum.lead': 'Қорғаныш қабатын жағу және қалпына келтіру — тозған жабдықты жөндеудің немесе ауыстырудың экономикалық тұрғыдан тиімді баламасы: шығын аз, тұрып қалу қысқа, пайдалану мерзімі бірнеше есе ұзақ. Қабатты бірнеше рет жаңартуға болады.',
      'gum.b1t': 'Біртекті серпімді қабат',
      'gum.b1x': 'Қабаттың бүкіл қалыңдығы бойынша жоғары тозуға төзімділік пен кесілуге беріктік.',
      'gum.b2t': 'Жоғары адгезия',
      'gum.b2x': 'Қабат біліктің металл бетімен берік ілінеді.',
      'gum.b3t': 'Ішкі қызуы аз',
      'gum.b3x': 'Жұмыс кезінде қабаттың ішкі жылу бөлінуі төмен.',
      'gum.b4t': 'Айнымалы жүктемеге төзімді',
      'gum.b4x': 'Жоғары динамикалық және таңбасы айнымалы жүктемелерге шыдайды.',
      'ind.kicker': 'Салалар', 'ind.h2': 'Қолданылатын салалар',
      'ind.lead': 'Полиуретан резеңке мен болат төтеп бере алмайтын жерде жұмыс істейді: абразив, соққы, агрессивті орталар.',
      'ind.1': 'мұнай-газ өндіру', 'ind.2': 'тау-кен өндіру', 'ind.3': 'металлургия', 'ind.4': 'химия өнеркәсібі',
      'ind.5': 'құрылыс', 'ind.6': 'электртехника', 'ind.7': 'тамақ өнеркәсібі', 'ind.8': 'ауыл шаруашылығы',
      'ind.9': 'автомобиль саласы', 'ind.10': 'медицина', 'ind.11': 'тоқыма өнеркәсібі', 'ind.12': 'полиграфия',
      'ind.13': 'металл өңдеу',
      'how.kicker': 'Тапсырыс беру', 'how.h2': 'Сызбадан жөнелтуге дейін',
      'how.s1t': 'Өтінім',
      'how.s1x': 'Қоңырау шалыңыз немесе WhatsApp арқылы жазыңыз: тапсырманы сипаттап, сызбаны, эскизді немесе үлгінің фотосын қоса беріңіз.',
      'how.s2t': 'Пысықтау',
      'how.s2x': 'Құрылымын, материалын, құнын және мерзімін келісеміз. Төлем шарттары икемді.',
      'how.s3t': 'Өндіру',
      'how.s3x': 'Ақтөбедегі өз өндірісімізде дайындаймыз — сериялап немесе 1 данадан, мерзімі 1 күннен басталады.',
      'how.s4t': 'Жеткізу',
      'how.s4x': 'Қазақстанның кез келген өңіріне, сондай-ақ Ресей мен ТМД елдеріне жөнелтеміз.',
      'adv.kicker': 'Неліктен KAZPOLIMER-LTD',
      'adv.h2': 'Өнеркәсіп кәсіпорындары сенім артатын өндіріс',
      'adv.a1t': 'Өз өндірісіміз', 'adv.a1x': 'Ақтөбедегі толық өндірістік цикл.',
      'adv.a2t': '1 күннен дайындау', 'adv.a2x': 'Өз алаңымыз — мердігер кезегінсіз.',
      'adv.a3t': 'Икемді төлем шарттары', 'adv.a3x': 'Шарттарды тапсырма мен көлемге қарай келісеміз.',
      'adv.a4t': 'Өнім сапасы жоғары', 'adv.a4x': 'Өнім «Қазақстанда жасалған» белгісімен шығады.',
      'adv.a5t': 'Қазақстан, Ресей, ТМД', 'adv.a5x': 'Қазақстанның кез келген өңіріне, Ресейге және ТМД елдеріне жөнелтеміз.',
      'adv.a6t': 'Ең аз тапсырыс — 1 дана', 'adv.a6x': 'Жеке дана да, сериялық тапсырыс та қабылдаймыз.',
      'adv.a7t': 'Меншікті тауар белгісі', 'adv.a7x': 'KAZPOLIMER-LTD логотипі мен атауы — тіркелген тауар белгісі.',
      'adv.rate': '2ГИС каталогындағы рейтинг · 36 пікір',
      'adv.badge': 'Өнім Қазақстанда өндіріледі',
      'cl.kicker': 'Клиенттер', 'cl.h2': 'Өніміміздің артықшылықтарын бағалағандар',
      'cl.lead': 'ҚазМұнайГаз, ERG, Қазхром, Қазцинк, Казфосфат, KAZ Minerals, KMK Munai және Қазақстанның басқа да өнеркәсіп кәсіпорындары.',
      'cl.more': 'Тапсырыс берушілер қатарында тағы:',
      'cl.x1': '«Восход Хром» ЖШС', 'cl.x2': '«ДИНА» ЖШС', 'cl.x3': '«АНВАР»', 'cl.x4': '«ШЕБЕР»',
      'p3.kicker': '04 · Пластик және 3D-басып шығару',
      'p3.h2': 'Пластик бұйымдар және 3D-принтерде басып шығару',
      'p3.lead': 'Полиуретаннан бөлек, бізде пластик бұйымдарды 3D-принтерде жасайтын меншікті өндіріс бар. Бөлшектерді, корпустарды және құю қалыптарын сіздің моделіңіз, сызбаңыз немесе үлгіңіз бойынша басып шығарамыз — прототип, шағын серия немесе сатылымда енді жоқ бір ғана бөлшек.',
      'p3.b1t': 'Сатылымда жоқ бөлшек',
      'p3.b1x': 'Өндірістен шыққан немесе сирек кездесетін пластик бөлшекті үлгі не өлшем бойынша басып шығарамыз.',
      'p3.b2t': 'Құюдың алдындағы прототип',
      'p3.b2x': 'Полиуретан құю қалыбын жасамас бұрын геометрия мен отырғызу орындарын пластик үлгіде тексереміз.',
      'p3.b3t': 'Күрделі геометрия — қалыпсыз',
      'p3.b3x': 'Ішкі арналар, жұқа қырлар, стандартты емес пішіндер — басып шығаруға пресс-қалып қажет емес.',
      'p3.b4t': 'Жеке тапсырыс және шағын серия',
      'p3.b4x': '1 данадан, мерзімі — өлшемі мен принтердің жүктемесіне қарай 1 күннен.',
      'p3.ctaTxt': 'Моделін, сызбасын немесе бөлшектің фотосын жіберіңіз — басып шығару құнын есептейміз.',
      'p3.cta': 'WhatsApp арқылы талқылау',
      'doc.kicker': 'Құжаттар', 'doc.h2': 'Қазақстандық тауар өндірушілер тізілімінде — ресми түрде',
      'doc.lead': 'Өніміміздің 18 атауы отандық тауар өндірушілердің мемлекеттік тізіліміне енгізілген, ішкі құндылық үлесі — 86,12%. Тізілім бұйымдардың қазақстандық шығу тегін растайды — жергілікті қамту талабы бар сатып алуларда бұл маңызды.',
      'doc.st1': 'тізілімге енгізілген өнім атауы',
      'doc.st2': 'ішкі құндылық үлесі (ІҚҮ)',
      'doc.st3': '«Атамекен» палатасының алғыс хаты',
      'doc.d1a': 'Тізілімнен үзіндіні ашу', 'doc.d1p': '2 бет',
      'doc.d1m': 'БСН 151040025562 · 02.08.2026 берілген үзінді',
      'doc.d1t': 'Қазақстандық тауар өндірушілер тізілімінен үзінді',
      'doc.d1x': 'Тізілімге манжеттер, біліктер, өнеркәсіптік катоктар, тісті дөңгелектер, пластиналар, тіреу бөліктері, сальниктер, иілгіш қосылыстар, брус, келте құбырлар, електер, конвейер роликтері, сайлентблоктар және дөңгелектер енгізілген — әрқайсысы бойынша жарияланған өндірістік қуатымен.',
      'doc.d2a': '«Атамекен» алғыс хатын ашу',
      'doc.d2m': 'Ақтөбе облысы · 2022 жыл',
      'doc.d2t': '«Атамекен» кәсіпкерлер палатасының алғыс хаты',
      'doc.d2x': 'Ақтөбе облысы кәсіпкерлер палатасының алғыс хаты — «Қазақстанның үздік тауары» өңірлік көрме-байқауына белсенді қатысқаны үшін. Палата директоры Д. Бекбауова қол қойған.',
      'doc.view': 'Қарау', 'doc.pdf': 'PDF жүктеу',
      'lbx.close': 'Жабу', 'lbx.prev': 'Алдыңғы бет', 'lbx.next': 'Келесі бет',
      'ct.kicker': 'Байланыс', 'ct.h2': 'Мәселеңізді талқылайық',
      'ct.phone': 'Телефон', 'ct.addr': 'Мекенжайлар',
      'ct.addr1': 'Ақтөбе, Сәңкібай батыр даңғылы, 14Б — өндіріс',
      'ct.addr2': 'Астана, Ақсай көшесі, 9/10',
      'ct.hours': 'Жұмыс кестесі',
      'ct.hours1': 'Дс–Жм 09:00–18:00 · Сб 09:00–13:00',
      'ct.hours2': 'Жексенбі — демалыс',
      'ct.gis': 'Біз 2ГИС каталогында: 5,0 · 36 пікір',
      'fm.t': 'Өтінім қалдырыңыз',
      'fm.sub': 'Хабарлама бізге WhatsApp арқылы келеді — жұмыс уақытында жауап береміз.',
      'fm.name': 'Есіміңіз', 'fm.nameP': 'Сізге қалай жүгінейік',
      'fm.phone': 'Телефон', 'fm.msg': 'Тапсырма',
      'fm.msgP': 'Мысалы: бункерді футерлеу, білікті гуммирлеу, сызба бойынша бұйым…',
      'fm.send': 'WhatsApp арқылы жіберу',
      'fm.thanks': 'Рақмет! Хабарлама дайын — WhatsApp көрші қойындыда ашылады. Ашылмаса, бізге тікелей жазыңыз: +7 707 287 13 13.',
      'ft.org': '«KAZPOLIMER-LTD» ЖШС · полиуретан бұйымдары · Ақтөбе — Астана',
      'ft.tm': 'KAZPOLIMER-LTD логотипі мен атауы — тіркелген тауар белгісі.',
      'ft.c': '© 2012–',
      'wa.greet': 'Сәлеметсіз бе! kazpolimer-ltd.kz сайтынан өтінім.',
      'wa.name': 'Есімі', 'wa.phone': 'Телефоны', 'wa.task': 'Тапсырмасы'
    },
    en: {
      'meta.title': 'KAZPOLIMER-LTD — polyurethane products in Aktobe | lining, roll covering, 3D printing',
      'meta.desc': 'Custom polyurethane parts from drawings and samples, from 1 piece and from 1 day: equipment lining, roller and shaft covering, bushings and automotive parts, plastic 3D printing. Aktobe, since 2012. Shipping across Kazakhstan, to Russia and the CIS.',
      'skip': 'Skip to content',
      'brandAria': 'KAZPOLIMER-LTD — go to homepage',
      'navAria': 'Main sections',
      'langAria': 'Site language',
      'burgerAria': 'Open menu',
      'mobNavAria': 'Mobile menu',
      'nav.izdeliya': 'Products', 'nav.futerovka': 'Lining', 'nav.gummirovanie': 'Roll covering',
      'nav.zakaz': 'How to order', 'nav.klienty': 'Clients', 'nav.kontakty': 'Contacts',
      'cta.call': 'Call us', 'cta.wa': 'Message on WhatsApp', 'more': 'Learn more',
      'mob.note': 'Aktobe · 14B Sankibai Batyr Ave · Mon–Fri 09:00–18:00, Sat 09:00–13:00',
      'hero.over': 'KAZPOLIMER-LTD LLP · Aktobe · in business since 2012',
      'hero.h1': 'Polyurethane products for the industry of Kazakhstan',
      'hero.lead': 'We manufacture to your drawings and samples from 1 piece and in as little as 1 day, line equipment with polyurethane, cover rollers and shafts, and 3D-print plastic parts. Our own plant in Aktobe, shipping across Kazakhstan, to Russia and the CIS.',
      'fact.f1': 'in business since', 'fact.f2': 'product names',
      'fact.f3v': '1 pc.', 'fact.f3': 'minimum order',
      'fact.f4v': 'from 1 day', 'fact.f4': 'production lead time',
      'hero.c1': 'polyurethane coating', 'hero.c2': 'steel core',
      'mq.1': 'support pads', 'mq.2': 'oil seals', 'mq.3': 'cuffs', 'mq.4': 'screens',
      'mq.5': 'flexible couplings', 'mq.6': 'shafts', 'mq.7': 'industrial rollers',
      'mq.8': 'wheels for special vehicles', 'mq.9': 'gears', 'mq.10': 'plates',
      'mq.11': 'bars', 'mq.12': 'pipe fittings', 'mq.13': 'scrapers', 'mq.14': 'custom parts',
      'mq.15': 'suspension bushings', 'mq.16': 'screen decks', 'mq.17': 'impellers',
      'mq.18': 'vibration mounts', 'mq.19': 'plastic 3D printing',
      'nm.prokl': 'gaskets', 'nm.porshen': 'pistons', 'nm.freza': 'cutters',
      'nm.bashmak': 'paver screed shoes', 'nm.shar': 'ball joints',
      'nm.motor': 'engine mounts', 'nm.sergi': 'spring shackles',
      'nm.tyagi': 'trailing arm bushings', 'nm.stab': 'stabiliser bar bushings',
      'dir.kicker': 'Services', 'dir.h2': 'Four lines of work',
      'dir.lead': 'A full cycle at our own plant: from casting a part to your drawing and 3D-printing a plastic component to restoring a worn coating.',
      'dir.c1t': 'Custom-made products',
      'dir.c1x': 'Series and non-standard polyurethane parts to your drawings and samples — from 1 piece.',
      'dir.c2t': 'Polyurethane lining',
      'dir.c2x': 'Protection of storage, sorting, transfer and hopper equipment against abrasive wear.',
      'dir.c3t': 'Roller and shaft covering',
      'dir.c3x': 'Applying and restoring a protective polyurethane layer — instead of replacing worn equipment.',
      'dir.c4t': 'Plastic and 3D printing',
      'dir.c4x': 'We 3D-print plastic parts and housings: a prototype, a small batch, or a replacement for a part no longer sold.',
      'prod.kicker': '01 · Custom manufacturing',
      'prod.h2': 'Polyurethane products to your drawings and samples',
      'prod.lead': 'More than 300 product names — from a cuff to a pump impeller. We accept a drawing, a sketch or a physical sample; the minimum order is 1 piece.',
      'prod.g1': 'Polyurethane screens', 'prod.g2': 'Industrial rollers', 'prod.g3': 'Wheels for special vehicles',
      'prod.g4': 'Pump impellers', 'prod.g5': 'Pump volutes', 'prod.g6': 'Scrapers',
      'prod.g7': 'Grooved bars', 'prod.g8': 'Hydrocyclones and pipe fittings',
      'prod.also': 'We also make:',
      'prod.g.ind': 'For industry', 'prod.g.auto': 'Polyurethane automotive parts', 'prod.g.any': 'And custom work',
      'prod.ctaTxt': 'Send a drawing or a photo of the sample — we will quote the job.',
      'prod.ctaBtn': 'Send via WhatsApp',
      'fut.kicker': '02 · Lining', 'fut.h2': 'Polyurethane lining of equipment',
      'fut.lead': 'We protect storage, separation, sorting, transfer and hopper equipment from abrasive wear and aggressive media.',
      'fut.s1': 'longer service life of lined equipment',
      'fut.s2': 'fewer repairs — at the very least',
      'fut.b1t': 'Lower repair costs',
      'fut.b1x': 'Savings compared with unlined steel equipment and rubber lining.',
      'fut.b2t': 'Withstands impact loads',
      'fut.b2x': 'Polyurethane is elastic and resistant to tearing and cutting — damage is reduced, often eliminated entirely.',
      'fut.b3t': 'No sticking or freezing on',
      'fut.b3x': 'A smooth non-porous surface with a low friction coefficient — material does not stick or freeze to it.',
      'fut.b4t': 'Runs quieter',
      'fut.b4x': 'A polyurethane layer noticeably reduces equipment noise.',
      'fut.p1': 'Lined hopper', 'fut.p2': 'Lined pipe fitting',
      'fut.p3': 'Pipe with internal lining', 'fut.p4': 'Lining plates',
      'gum.kicker': '03 · Roll covering', 'gum.h2': 'Polyurethane covering of rollers and shafts',
      'gum.lead': 'Applying and restoring the protective layer is a cost-effective alternative to repairing or replacing worn equipment: lower cost, shorter downtime, several times longer service life. The coating can be renewed repeatedly.',
      'gum.b1t': 'Uniform elastic coating',
      'gum.b1x': 'High wear and cut resistance throughout the full thickness of the layer.',
      'gum.b2t': 'Strong adhesion',
      'gum.b2x': 'A reliable bond between the coating and the metal surface of the shaft.',
      'gum.b3t': 'Low internal heat build-up',
      'gum.b3x': 'Low internal heat generation while the coating is in service.',
      'gum.b4t': 'Handles alternating loads',
      'gum.b4x': 'Withstands high dynamic and alternating loads.',
      'p3.kicker': '04 · Plastic and 3D printing',
      'p3.h2': 'Plastic products and 3D printing',
      'p3.lead': 'Besides polyurethane, we run our own production of plastic items on a 3D printer. We print parts, housings and tooling from your model, drawing or sample — a prototype, a small batch, or a single part that is no longer sold anywhere.',
      'p3.b1t': 'A part you cannot buy',
      'p3.b1x': 'A discontinued or rare plastic part — we print it from your sample or measurements.',
      'p3.b2t': 'Prototype before casting',
      'p3.b2x': 'We check the geometry and the fit on a plastic sample before making polyurethane tooling.',
      'p3.b3t': 'Complex geometry, no tooling',
      'p3.b3x': 'Internal channels, thin ribs, unusual shapes — printing needs no mould.',
      'p3.b4t': 'Single item or small batch',
      'p3.b4x': 'From 1 piece, in as little as 1 day depending on size and printer load.',
      'p3.ctaTxt': 'Send a model, a drawing or a photo of the part — we will quote the print.',
      'p3.cta': 'Discuss printing on WhatsApp',
      'ind.kicker': 'Industries', 'ind.h2': 'Where it is used',
      'ind.lead': 'Polyurethane works where rubber and steel give up: abrasion, impact, aggressive media.',
      'ind.1': 'oil and gas', 'ind.2': 'mining', 'ind.3': 'metallurgy', 'ind.4': 'chemicals',
      'ind.5': 'construction', 'ind.6': 'electrical engineering', 'ind.7': 'food industry', 'ind.8': 'agriculture',
      'ind.9': 'automotive', 'ind.10': 'medicine', 'ind.11': 'textiles', 'ind.12': 'printing industry',
      'ind.13': 'metalworking',
      'how.kicker': 'How to order', 'how.h2': 'From drawing to shipment',
      'how.s1t': 'Request',
      'how.s1x': 'Call us or write on WhatsApp: describe the task and attach a drawing, a sketch or a photo of the sample.',
      'how.s2t': 'Engineering',
      'how.s2x': 'We agree on the design, the material, the price and the lead time. Payment terms are flexible.',
      'how.s3t': 'Production',
      'how.s3x': 'We manufacture at our own plant in Aktobe — in series or from 1 piece, in as little as 1 day.',
      'how.s4t': 'Delivery',
      'how.s4x': 'We ship to any region of Kazakhstan, as well as to Russia and the CIS countries.',
      'adv.kicker': 'Why KAZPOLIMER-LTD',
      'adv.h2': 'A manufacturer industrial companies rely on',
      'adv.a1t': 'Our own plant', 'adv.a1x': 'A full production cycle in Aktobe.',
      'adv.a2t': 'Production from 1 day', 'adv.a2x': 'Our own facility — no waiting in subcontractor queues.',
      'adv.a3t': 'Flexible payment terms', 'adv.a3x': 'Terms are agreed to suit the job and the volume.',
      'adv.a4t': 'High product quality', 'adv.a4x': 'Products carry the “Made in Kazakhstan” mark.',
      'adv.a5t': 'Kazakhstan, Russia, CIS', 'adv.a5x': 'We ship to any region of Kazakhstan, to Russia and the CIS.',
      'adv.a6t': 'Minimum order — 1 pc.', 'adv.a6x': 'We take both single items and series orders.',
      'adv.a7t': 'Our own trademark', 'adv.a7x': 'The KAZPOLIMER-LTD logo and name are a registered trademark.',
      'adv.rate': 'rating in the 2GIS directory · 36 reviews',
      'adv.badge': 'Products are made in Kazakhstan',
      'cl.kicker': 'Clients', 'cl.h2': 'Companies that value our products',
      'cl.lead': 'KazMunayGas, ERG, Kazchrome, Kazzinc, Kazphosphate, KAZ Minerals, KMK Munai and other industrial companies of Kazakhstan.',
      'cl.more': 'Our clients also include:',
      'cl.x1': 'Voskhod Chrome LLP', 'cl.x2': 'DINA LLP', 'cl.x3': 'ANVAR', 'cl.x4': 'SHEBER',
      'doc.kicker': 'Documents', 'doc.h2': 'Officially in the register of Kazakhstani manufacturers',
      'doc.lead': '18 of our product names are entered in the state register of domestic manufacturers, with a local content value share of 86.12%. The register confirms the Kazakhstani origin of our products — which matters in tenders with local content requirements.',
      'doc.st1': 'product names in the register',
      'doc.st2': 'local content value share',
      'doc.st3': 'letter of appreciation from the Atameken chamber',
      'doc.d1a': 'Open the register extract', 'doc.d1p': '2 pages',
      'doc.d1m': 'BIN 151040025562 · extract of 02.08.2026',
      'doc.d1t': 'Extract from the register of Kazakhstani manufacturers',
      'doc.d1x': 'The register lists cuffs, shafts, rollers, gears, plates, support pads, oil seals, flexible couplings, bars, pipe fittings, screens, conveyor rollers, suspension bushings and wheels — each with a declared annual output.',
      'doc.d2a': 'Open the Atameken letter of appreciation',
      'doc.d2m': 'Aktobe region · 2022',
      'doc.d2t': 'Letter of appreciation from the Atameken Chamber of Entrepreneurs',
      'doc.d2x': 'A letter of appreciation from the Chamber of Entrepreneurs of the Aktobe region — for active participation in the regional exhibition and contest “Qazaqstannyn uzdik tauary” (“The Best Product of Kazakhstan”). Signed by the chamber director D. Bekbauova.',
      'doc.view': 'View', 'doc.pdf': 'Download PDF',
      'lbx.close': 'Close', 'lbx.prev': 'Previous page', 'lbx.next': 'Next page',
      'ct.kicker': 'Contacts', 'ct.h2': 'Let us discuss your task',
      'ct.phone': 'Phone', 'ct.addr': 'Addresses',
      'ct.addr1': 'Aktobe, 14B Sankibai Batyr Ave — production site',
      'ct.addr2': 'Astana, 9/10 Aksai St',
      'ct.hours': 'Hours',
      'ct.hours1': 'Mon–Fri 09:00–18:00 · Sat 09:00–13:00',
      'ct.hours2': 'Sunday — closed',
      'ct.gis': 'We are on 2GIS: 5.0 · 36 reviews',
      'fm.t': 'Leave a request',
      'fm.sub': 'The message reaches us on WhatsApp — we reply during working hours.',
      'fm.name': 'Your name', 'fm.nameP': 'How should we address you',
      'fm.phone': 'Phone', 'fm.msg': 'Your task',
      'fm.msgP': 'For example: hopper lining, shaft covering, a part to a drawing…',
      'fm.send': 'Send via WhatsApp',
      'fm.thanks': 'Thank you! The message is ready — WhatsApp will open in a new tab. If it does not, write to us directly: +7 707 287 13 13.',
      'ft.org': 'KAZPOLIMER-LTD LLP · polyurethane products · Aktobe — Astana',
      'ft.tm': 'The KAZPOLIMER-LTD logo and name are a registered trademark.',
      'ft.c': '© 2012–',
      'wa.greet': 'Hello! A request from the kazpolimer-ltd.kz website.',
      'wa.name': 'Name', 'wa.phone': 'Phone', 'wa.task': 'Task'
    }
  };

  var LANG_KEY = 'kp-lang';
  var curLang = 'ru';

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'ru';
    curLang = lang;
    var dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (dict[k] !== undefined) el.setAttribute('placeholder', dict[k]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (dict[k] !== undefined) el.setAttribute('aria-label', dict[k]);
    });
    document.documentElement.setAttribute('lang', lang);
    document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.desc']);
    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (saved && saved !== 'ru') applyLang(saved);

  /* ═══════════ Шапка: тень при скролле ═══════════ */
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ═══════════ Мобильное меню ═══════════ */
  var burger = document.getElementById('burger');
  var mobmenu = document.getElementById('mobmenu');

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    mobmenu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  }
  burger.addEventListener('click', function () {
    setMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  mobmenu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobmenu.hidden) setMenu(false);
  });

  /* ═══════════ Reveal-анимации ═══════════ */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.rv, .draw');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* лёгкий каскад для сеток */
  document.querySelectorAll('.dir-grid, .prod-grid, .adv-grid, .steps, .cl-grid, .chips-lg, .doc-stats, .doc-grid').forEach(function (grid) {
    Array.prototype.forEach.call(grid.children, function (child, i) {
      child.style.transitionDelay = (Math.min(i, 8) * 60) + 'ms';
    });
  });

  /* ═══════════ Счётчик 300+ ═══════════ */
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && !reduced) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        var el = en.target, target = parseInt(el.getAttribute('data-count'), 10);
        var t0 = null;
        function tick(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / 1200, 1);
          var e = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(target * e));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ═══════════ Форма → WhatsApp (без бэкенда) ═══════════ */
  var WA_NUMBER = '77072871313';
  var form = document.getElementById('zayavka');
  var thanks = document.getElementById('fmThanks');

  function onLeadSubmit(e) {
    e.preventDefault();
    var dict = I18N[curLang];
    var name = form.elements.name.value.trim();
    var phone = form.elements.phone.value.trim();
    var msg = form.elements.message.value.trim();
    if (!msg) { form.elements.message.focus(); return; }
    var lines = [dict['wa.greet']];
    if (name) lines.push(dict['wa.name'] + ': ' + name);
    if (phone) lines.push(dict['wa.phone'] + ': ' + phone);
    lines.push(dict['wa.task'] + ': ' + msg);
    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank', 'noopener');
    thanks.hidden = false;
    /* Здесь Opus повесит gtag-конверсию отправки формы */
  }
  form.addEventListener('submit', onLeadSubmit);

  /* ═══════════ Делегированные клики tel / WhatsApp ═══════════ */
  function onContactClick(e) {
    var a = e.target.closest('a[href^="tel:"], a[href*="wa.me"]');
    if (!a) return;
    /* Здесь Opus повесит gtag-конверсии звонка и перехода в WhatsApp */
  }
  document.addEventListener('click', onContactClick);

  /* ═══════════ Просмотр документов (лайтбокс) ═══════════ */
  var DOCS = {
    reestr: {
      cap: 'doc.d1t',
      imgs: ['assets/docs/reestr-1.webp', 'assets/docs/reestr-2.webp']
    },
    atameken: {
      cap: 'doc.d2t',
      imgs: ['assets/docs/atameken.webp']
    }
  };

  var lbx = document.getElementById('lbx');
  if (lbx) {
    var lbxImg = document.getElementById('lbxImg');
    var lbxCap = document.getElementById('lbxCap');
    var lbxNum = document.getElementById('lbxNum');
    var lbxPrev = document.getElementById('lbxPrev');
    var lbxNext = document.getElementById('lbxNext');
    var lbxClose = document.getElementById('lbxClose');
    var lbxDoc = null, lbxI = 0, lbxOpener = null;

    function lbxRender() {
      var d = DOCS[lbxDoc];
      if (!d) return;
      var multi = d.imgs.length > 1;
      lbxImg.src = d.imgs[lbxI];
      lbxImg.alt = I18N[curLang][d.cap] || '';
      lbxCap.textContent = I18N[curLang][d.cap] || '';
      lbxNum.textContent = multi ? (lbxI + 1) + ' / ' + d.imgs.length : '';
      lbxPrev.hidden = !multi;
      lbxNext.hidden = !multi;
    }

    function lbxOpen(name, opener) {
      if (!DOCS[name]) return;
      lbxDoc = name; lbxI = 0; lbxOpener = opener || null;
      lbxRender();
      lbx.hidden = false;
      document.body.classList.add('lbx-open');
      lbxClose.focus();
    }

    function lbxHide() {
      lbx.hidden = true;
      lbxImg.src = '';
      document.body.classList.remove('lbx-open');
      if (lbxOpener) { lbxOpener.focus(); lbxOpener = null; }
    }

    function lbxStep(delta) {
      var d = DOCS[lbxDoc];
      if (!d || d.imgs.length < 2) return;
      lbxI = (lbxI + delta + d.imgs.length) % d.imgs.length;
      lbxRender();
    }

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-doc]');
      if (trigger) { lbxOpen(trigger.getAttribute('data-doc'), trigger); return; }
      if (!lbx.hidden && e.target === lbx) lbxHide();
    });
    lbxClose.addEventListener('click', lbxHide);
    lbxPrev.addEventListener('click', function () { lbxStep(-1); });
    lbxNext.addEventListener('click', function () { lbxStep(1); });
    window.addEventListener('keydown', function (e) {
      if (lbx.hidden) return;
      if (e.key === 'Escape') lbxHide();
      else if (e.key === 'ArrowLeft') lbxStep(-1);
      else if (e.key === 'ArrowRight') lbxStep(1);
    });
  }

  /* ═══════════ Год в футере ═══════════ */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
