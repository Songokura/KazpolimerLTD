/* KAZPOLIMER-LTD — лэндинг. Чистая статика, без зависимостей. */
(function () {
  'use strict';

  /* ═══════════ I18N ═══════════ */
  var I18N = {
    ru: {
      'meta.title': 'KAZPOLIMER-LTD — изделия из полиуретана в Актобе | футеровка, гуммирование, 3D-печать',
      'meta.desc': 'Увеличиваем ресурс промышленного оборудования: полиуретановые изделия по чертежам и образцам от 1 шт. и от 1 дня, футеровка оборудования, гуммирование роликов и валов, сайлентблоки и автокомпоненты, 3D-печать пластиком. Актобе, с 2012 года. Отгрузка по Казахстану, в Россию и СНГ.',
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
      'hero.h1': 'Полиуретан, который увеличивает ресурс промышленного оборудования',
      'hero.lead': 'Мы не продаём просто полиуретан — мы продлеваем срок службы узлов, которые изнашиваются первыми: изготавливаем изделия по чертежам и образцам от 1 штуки и от 1 дня, футеруем оборудование, гуммируем ролики и валы, печатаем детали из пластика на 3D-принтере. Собственное производство в Актобе, отгрузка по Казахстану, в Россию и страны СНГ.',
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
      'nm.fliper': 'флиперы', 'nm.gcikl': 'гидроциклоны', 'nm.gc': 'манжеты гидроцилиндров',
      'nm.koltso': 'уплотнительные кольца', 'nm.amort': 'амортизаторы', 'nm.listy': 'листы для облицовки',
      'dir.kicker': 'Направления', 'dir.h2': 'Четыре направления работы',
      'dir.lead': 'Полный цикл на собственном производстве, и все четыре направления решают одну задачу — чтобы узел проработал дольше: от литья изделия по чертежу и 3D-печати пластиковой детали до восстановления изношенного покрытия.',
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
      'prod.lead': 'Более 300 наименований — от манжеты до рабочего колеса насоса. Полиуретановая деталь переживает стальную и резиновую в разы, а мы подбираем твёрдость под вашу нагрузку. Возьмём в работу чертёж, эскиз или физический образец; минимальный объём заказа — 1 штука.',
      'prod.g1': 'Полиуретановые сита', 'prod.g2': 'Промышленные катки', 'prod.g3': 'Колёса для спецтехники',
      'prod.g4': 'Рабочие колёса насосов', 'prod.g5': 'Улитки насосов', 'prod.g6': 'Скребки',
      'prod.g7': 'Брус с пазами', 'prod.g8': 'Гидроциклоны и патрубки',
      'prod.also': 'Также изготавливаем:',
      'prod.g.ind': 'Для промышленности', 'prod.g.auto': 'Автокомпоненты из полиуретана', 'prod.g.any': 'И нестандарт',
      'prod.ctaTxt': 'Пришлите чертёж или фото образца — посчитаем изготовление.',
      'prod.ctaBtn': 'Отправить в WhatsApp',
      'fut.kicker': '02 · Футеровка', 'fut.h2': 'Полиуретановая футеровка оборудования',
      'fut.lead': 'Защищаем от абразивного износа и агрессивных сред накопительное, разделительно-сортировочное, пересыпное и бункерное оборудование: футерованный узел служит в 4–5 раз дольше и требует ремонта минимум втрое реже.',
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
      'ind.lead': 'Полиуретан работает там, где резина и сталь сдаются: абразив, удары, агрессивные среды. Везде, где идёт этот износ, мы увеличиваем ресурс оборудования.',
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
      'adv.a7t': 'Собственный товарный знак', 'adv.a7x': 'Логотип и название KAZPOLIMER-LTD — наш товарный знак: заявка №135179 в Казпатенте, классы МКТУ 07, 17, 19.',
      'adv.rate': 'рейтинг в каталоге 2ГИС · 36 отзывов',
      'adv.badge': 'Продукция производится в Казахстане',
      'cl.kicker': 'Клиенты', 'cl.h2': 'Достоинства нашей продукции оценили',
      'cl.lead': 'КазМунайГаз, ERG, Казхром, Казцинк, Казфосфат, KAZ Minerals, KMK Munai и другие промышленные предприятия Казахстана.',
      'cl.more': 'Также среди заказчиков:',
      'ig.aria': 'Instagram KAZPOLIMER-LTD',
      'ig.more': 'Больше фото наших работ — в Instagram @kazpolimer.kz',
      'ig.ct': 'Фото готовых изделий и работ с производства',
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
      'doc.kicker': 'Знак и документы', 'doc.h2': 'Собственный товарный знак и место в реестре товаропроизводителей',
      'doc.lead': 'У компании собственный товарный знак: по заявке №135179 Казпатент вынес заключение экспертизы о регистрации знака в трёх классах МКТУ. Плюс 18 наименований продукции в государственном реестре отечественных товаропроизводителей с долей внутристрановой ценности 86,12% — это важно при закупках с требованием местного содержания.',
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
      'cr.kicker': 'Принцип', 'cr.l1': 'Мы не продаём просто полиуретан.',
      'cr.l2': 'Мы увеличиваем ресурс промышленного оборудования.',
      'cr.x': 'За каждой деталью стоит не материал, а простой линии, аварийная остановка и стоимость замены узла. Поэтому мы считаем не килограммы полиуретана, а то, сколько оборудование проработает после нашей работы — и делаем так, чтобы этот срок был кратно больше.',
      'cr.p1n': '×4–5', 'cr.p1x': 'во столько раз дольше служит оборудование с полиуретановой футеровкой по сравнению с нефутерованным',
      'cr.p2n': 'Вместо замены', 'cr.p2x': 'изношенный вал или ролик восстанавливаем гуммированием — покрытие можно обновлять неоднократно',
      'cr.p3n': 'От 1 дня', 'cr.p3x': 'деталь, из-за которой стоит линия, изготовим от 1 штуки — это короче, чем ждать поставку',
      'doc.d3a': 'Открыть заключение Казпатента по товарному знаку', 'doc.d3p': '2 страницы',
      'doc.d3m': 'Казпатент · заявка №135179 от 11.10.2024',
      'doc.d3t': 'Товарный знак KAZPOLIMER-LTD',
      'doc.d3x': 'Комбинированный знак — фирменный ромб из полиуретановых нитей и название KAZPOLIMER-LTD — охраняется в этом графическом исполнении. Национальный институт интеллектуальной собственности (Казпатент) вынес заключение экспертизы о регистрации знака в трёх классах МКТУ.',
      'doc.cls': 'Классы МКТУ',
      'doc.c07': '07 — валы, катки, колёса для спецтехники, манжеты, сальники, шестерни и мягкие соединения из полиуретана',
      'doc.c17': '17 — бруски, манжеты, патрубки, пластины, сальники и сита из полиуретана',
      'doc.c19': '19 — полиуретановые опорные части',
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
      'fm.thanks': 'Спасибо! Сообщение сформировано — WhatsApp откроется в соседней вкладке. Если не открылся, напишите нам напрямую: +7 777 800 07 89.',
      'ft.org': 'ТОО «KAZPOLIMER-LTD» · изделия из полиуретана · Актобе — Астана',
      'ft.tm': 'Логотип и название KAZPOLIMER-LTD — товарный знак ТОО «KAZPOLIMER-LTD» (Казпатент, заявка №135179).',
      'ft.c': '© 2012–',
      'wa.greet': 'Здравствуйте! Заявка с сайта kazpolimer-ltd.kz.',
      'wa.name': 'Имя', 'wa.phone': 'Телефон', 'wa.task': 'Задача'
    },
    en: {
      'meta.title': 'KAZPOLIMER-LTD — polyurethane products in Aktobe | lining, roll covering, 3D printing',
      'meta.desc': 'We extend the service life of industrial equipment: polyurethane parts to drawings and samples from 1 piece and from 1 day, equipment lining, roller and shaft covering, bushings and automotive parts, plastic 3D printing. Aktobe, since 2012. Shipping across Kazakhstan, to Russia and the CIS.',
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
      'hero.h1': 'Polyurethane that extends the service life of industrial equipment',
      'hero.lead': 'We do not simply sell polyurethane — we extend the life of the parts that wear out first: we manufacture to your drawings and samples from 1 piece and in as little as 1 day, line equipment with polyurethane, cover rollers and shafts, and 3D-print plastic parts. Our own plant in Aktobe, shipping across Kazakhstan, to Russia and the CIS.',
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
      'nm.fliper': 'flipper strips', 'nm.gcikl': 'hydrocyclones', 'nm.gc': 'hydraulic cylinder seals',
      'nm.koltso': 'sealing rings', 'nm.amort': 'dampers', 'nm.listy': 'lining sheets',
      'dir.kicker': 'Services', 'dir.h2': 'Four lines of work',
      'dir.lead': 'A full cycle at our own plant, and all four services solve one task — to keep the unit running longer: from casting a part to your drawing and 3D-printing a plastic component to restoring a worn coating.',
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
      'prod.lead': 'More than 300 product names — from a cuff to a pump impeller. A polyurethane part outlasts a steel or rubber one many times over, and we select the hardness for your load. We accept a drawing, a sketch or a physical sample; the minimum order is 1 piece.',
      'prod.g1': 'Polyurethane screens', 'prod.g2': 'Industrial rollers', 'prod.g3': 'Wheels for special vehicles',
      'prod.g4': 'Pump impellers', 'prod.g5': 'Pump volutes', 'prod.g6': 'Scrapers',
      'prod.g7': 'Grooved bars', 'prod.g8': 'Hydrocyclones and pipe fittings',
      'prod.also': 'We also make:',
      'prod.g.ind': 'For industry', 'prod.g.auto': 'Polyurethane automotive parts', 'prod.g.any': 'And custom work',
      'prod.ctaTxt': 'Send a drawing or a photo of the sample — we will quote the job.',
      'prod.ctaBtn': 'Send via WhatsApp',
      'fut.kicker': '02 · Lining', 'fut.h2': 'Polyurethane lining of equipment',
      'fut.lead': 'We protect storage, separation, sorting, transfer and hopper equipment from abrasive wear and aggressive media: a lined unit lasts 4–5 times longer and needs repair at least three times less often.',
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
      'ind.lead': 'Polyurethane works where rubber and steel give up: abrasion, impact, aggressive media. Wherever that wear occurs, we extend the life of the equipment.',
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
      'adv.a7t': 'Our own trademark', 'adv.a7x': 'The KAZPOLIMER-LTD logo and name are our trademark: application No. 135179 with Kazpatent, Nice classes 07, 17, 19.',
      'adv.rate': 'rating in the 2GIS directory · 36 reviews',
      'adv.badge': 'Products are made in Kazakhstan',
      'cl.kicker': 'Clients', 'cl.h2': 'Companies that value our products',
      'cl.lead': 'KazMunayGas, ERG, Kazchrome, Kazzinc, Kazphosphate, KAZ Minerals, KMK Munai and other industrial companies of Kazakhstan.',
      'cl.more': 'Our clients also include:',
      'ig.aria': 'KAZPOLIMER-LTD on Instagram',
      'ig.more': 'More photos of our work — on Instagram @kazpolimer.kz',
      'ig.ct': 'Photos of finished parts and work from the shop floor',
      'cl.x1': 'Voskhod Chrome LLP', 'cl.x2': 'DINA LLP', 'cl.x3': 'ANVAR', 'cl.x4': 'SHEBER',
      'doc.kicker': 'Trademark and documents', 'doc.h2': 'Our own trademark and a place in the register of manufacturers',
      'doc.lead': 'The company has its own trademark: on application No. 135179 Kazpatent issued an examination decision to register the mark in three Nice classes. In addition, 18 of our product names are entered in the state register of domestic manufacturers with a local content value share of 86.12% — which matters in tenders with local content requirements.',
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
      'cr.kicker': 'Our principle', 'cr.l1': 'We do not simply sell polyurethane.',
      'cr.l2': 'We extend the service life of industrial equipment.',
      'cr.x': 'Behind every part there is not a material but line downtime, an emergency stop and the cost of replacing a unit. That is why we count not kilograms of polyurethane but how long the equipment keeps running after our work — and we make that period several times longer.',
      'cr.p1n': '×4–5', 'cr.p1x': 'how many times longer equipment with polyurethane lining lasts compared with unlined equipment',
      'cr.p2n': 'Instead of replacing', 'cr.p2x': 'a worn shaft or roller is restored by polyurethane covering — the coating can be renewed again and again',
      'cr.p3n': 'From 1 day', 'cr.p3x': 'the part that keeps the line idle is made from 1 piece — faster than waiting for a delivery',
      'doc.d3a': 'Open the Kazpatent trademark decision', 'doc.d3p': '2 pages',
      'doc.d3m': 'Kazpatent · application No. 135179 of 11.10.2024',
      'doc.d3t': 'The KAZPOLIMER-LTD trademark',
      'doc.d3x': 'The combined mark — the company rhombus woven from polyurethane threads together with the KAZPOLIMER-LTD name — is protected in this graphic form. The National Institute of Intellectual Property (Kazpatent) issued an examination decision to register the mark in three Nice classes.',
      'doc.cls': 'Nice classes',
      'doc.c07': '07 — polyurethane shafts, rollers, wheels for special machinery, cuffs, oil seals, gears and flexible couplings',
      'doc.c17': '17 — polyurethane bars, cuffs, pipe fittings, plates, oil seals and screens',
      'doc.c19': '19 — polyurethane support pads',
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
      'fm.thanks': 'Thank you! The message is ready — WhatsApp will open in a new tab. If it does not, write to us directly: +7 777 800 07 89.',
      'ft.org': 'KAZPOLIMER-LTD LLP · polyurethane products · Aktobe — Astana',
      'ft.tm': 'The KAZPOLIMER-LTD logo and name are a trademark of KAZPOLIMER-LTD LLP (Kazpatent, application No. 135179).',
      'ft.c': '© 2012–',
      'wa.greet': 'Hello! A request from the kazpolimer-ltd.kz website.',
      'wa.name': 'Name', 'wa.phone': 'Phone', 'wa.task': 'Task'
    }
  };

  var LANG_KEY = 'kp-lang';
  var curLang = 'ru';

  /* Казахский словарь - отдельным файлом assets/lang/kk.js, подгружается по запросу */
  var SCRIPT_V = (function () {
    var s = document.currentScript && document.currentScript.src;
    var m = s && s.match(/[?&]v=([^&]+)/);
    return m ? m[1] : '';
  })();
  var kkLoading = null;
  function loadKk() {
    if (I18N.kk) return Promise.resolve();
    if (kkLoading) return kkLoading;
    kkLoading = new Promise(function (resolve, reject) {
      var sc = document.createElement('script');
      sc.src = 'assets/lang/kk.js' + (SCRIPT_V ? '?v=' + SCRIPT_V : '');
      sc.onload = function () { if (window.SITE_KK) I18N.kk = window.SITE_KK; resolve(); };
      sc.onerror = function () { kkLoading = null; reject(); };
      document.head.appendChild(sc);
    });
    return kkLoading;
  }
  function setLang(lang) {
    if (lang === 'kk' && !I18N.kk) {
      loadKk().then(function () { applyLang('kk'); }, function () {});
      return;
    }
    applyLang(lang);
  }

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
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  var saved = null;
  var urlLang = (location.search.match(/[?&]lang=(ru|kk|en)\b/) || [])[1];
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (urlLang) saved = urlLang;
  if (saved && saved !== 'ru') setLang(saved);

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

  /* ═══════════ Конверсии Google Ads ═══════════ */
  function fireConv(key) {
    if (typeof gtag_report_conversion !== 'function' || !window.AW_CONV) return;
    var sendTo = window.AW_CONV[key];
    if (sendTo) gtag_report_conversion(undefined, sendTo);
  }

  /* ═══════════ Форма → WhatsApp (без бэкенда) ═══════════ */
  var WA_NUMBER = '77778000789';
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
    fireConv('form');
    window.open(url, '_blank', 'noopener');
    thanks.hidden = false;
  }
  form.addEventListener('submit', onLeadSubmit);

  /* ═══════════ Делегированные клики tel / WhatsApp ═══════════ */
  function onContactClick(e) {
    var a = e.target.closest('a[href^="tel:"], a[href*="wa.me"]');
    if (!a) return;
    /* tel: открывает набор номера, wa.me — соседнюю вкладку: страница не выгружается,
       поэтому переход не перехватываем, а просто отправляем конверсию. */
    fireConv(a.getAttribute('href').indexOf('tel:') === 0 ? 'phone' : 'wa');
  }
  document.addEventListener('click', onContactClick);

  /* ═══════════ Просмотр документов (лайтбокс) ═══════════ */
  var DOCS = {
    znak: {
      cap: 'doc.d3t',
      imgs: ['assets/docs/znak-1.webp', 'assets/docs/znak-2.webp']
    },
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
