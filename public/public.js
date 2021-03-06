"use strict";

// let data = {
//     "structuralSteel": [
//       {
//         "url": "http://docs.cntd.ru/document/1200157342",
//         "doc": "ГОСТ Р 57837-2017",
//         "name": "ГОСТ Р 57837-2017 Двутавры стальные горячекатаные с параллельными гранями полок. Технические условия (с Поправкой, с Изменением N 1)",
//         "status": "Действующий",
//         "adoptionDate": "24 октября 2017",
//         "effectiveDate": "01 мая 2018",
//         "revisionDate": "15 мая 2020"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200019824",
//         "doc": "ГОСТ 8240-97",
//         "name": "ГОСТ 8240-97 Швеллеры стальные горячекатаные. Сортамент (с Изменением N 1)",
//         "status": "Действующий",
//         "adoptionDate": "05 апреля 2001",
//         "effectiveDate": "01 января 2002",
//         "revisionDate": "14 ноября 2011"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200001025",
//         "doc": "ГОСТ 8509-93",
//         "name": "ГОСТ 8509-93 Уголки стальные горячекатаные равнополочные. Сортамент",
//         "status": "Действующий",
//         "adoptionDate": "20 февраля 1996",
//         "effectiveDate": "01 января 1997",
//         "revisionDate": "01 августа 2012"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200001023",
//         "doc": "ГОСТ 8510-86",
//         "name": "ГОСТ 8510-86 Уголки стальные горячекатаные неравнополочные. Сортамент (с Изменением N 1)",
//         "status": "Действующий",
//         "adoptionDate": "15 октября 1986",
//         "effectiveDate": "01 июля 1987",
//         "revisionDate": "01 октября 2012"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200036308",
//         "doc": "ГОСТ 30245-2003",
//         "name": "ГОСТ 30245-2003 Профили стальные гнутые замкнутые сварные квадратные и прямоугольные для строительных конструкций. Технические условия",
//         "status": "Действующий",
//         "adoptionDate": "30 июня 2003",
//         "effectiveDate": "01 октября 2003",
//         "revisionDate": "01 января 2008"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200109847",
//         "doc": "ГОСТ 30245-2012",
//         "name": "ГОСТ 30245-2012 Профили стальные гнутые замкнутые сварные квадратные и прямоугольные для строительных конструкций. Технические условия (с Поправкой)",
//         "adoptionDate": "06 марта 2014",
//         "effectiveDate": "01 января 2019",
//         "revisionDate": "01 апреля 2017"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200133726",
//         "doc": "ГОСТ 19903-2015",
//         "name": "ГОСТ 19903-2015 Прокат листовой горячекатаный. Сортамент",
//         "status": "Действующий",
//         "adoptionDate": "07 апреля 2016",
//         "effectiveDate": "01 сентября 2016"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200004412",
//         "doc": "ГОСТ 19904-90",
//         "name": "ГОСТ 19904-90 Прокат листовой холоднокатаный. Сортамент",
//         "status": "Действующий",
//         "adoptionDate": "28 марта 1990",
//         "effectiveDate": "01 января 1991",
//         "revisionDate": "01 октября 2012"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200068758",
//         "doc": "ГОСТ 103-2006",
//         "name": "ГОСТ 103-2006 Прокат сортовой стальной горячекатаный полосовой. Сортамент",
//         "status": "Действующий",
//         "adoptionDate": "18 декабря 2008",
//         "effectiveDate": "01 июля 2009",
//         "revisionDate": "01 октября 2012"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200052960",
//         "doc": "ТУ 36.26.11-5-89",
//         "name": "ТУ 36.26.11-5-89 Листы стальные просечно-вытяжные",
//         "adoptionDate": "13 сентября 1989"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200066543",
//         "doc": "ГОСТ 2590-2006",
//         "name": "ГОСТ 2590-2006 Прокат сортовой стальной горячекатаный круглый. Сортамент",
//         "status": "Действующий",
//         "adoptionDate": "29 июля 2008",
//         "effectiveDate": "01 июля 2009",
//         "revisionDate": "01 октября 2012"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200001876",
//         "doc": "ГОСТ 5781-82",
//         "name": "ГОСТ 5781-82  Сталь горячекатаная для армирования железобетонных конструкций. Технические условия (с Изменениями N 1, 2, 3, 4, 5)",
//         "status": "Действующий",
//         "adoptionDate": "17 декабря 1982",
//         "effectiveDate": "01 июля 1983",
//         "revisionDate": "01 сентября 2009"
//       },
//       {
//         "url": "http://docs.cntd.ru/document/1200045273",
//         "doc": "ГОСТ Р 52544-2006",
//         "name": "ГОСТ Р 52544-2006 Прокат арматурный свариваемый периодического профиля классов А500С и В500С для армирования железобетонных конструкций. Технические условия",
//         "status": "Действующий\n\t\t\t\t\tДокумент отменен в части",
//         "adoptionDate": "17 мая 2006",
//         "effectiveDate": "01 января 2007"
//       }
//     ]
//   }


async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function render() {
    let counter = 1;
    let data = await getData("../data.json");

    let tableBody = document.body.querySelector('.table.table-striped tbody');

    for(let item of data.structuralSteel) {
        let elem = document.createElement('tr');
        elem.innerHTML = `
            <th scope="row">${counter}</th>
            <td>${item.doc}</td>
            <td><a href="${item.url}" target="_blank">${item.name}</a></td>
            <td>${item.status || ""}</td>
            <td>${item.adoptionDate || ""}</td>
            <td>${item.effectiveDate || ""}</td>
            <td>${item.revisionDate || ""}</td>
        `;

        tableBody.append(elem);
        counter++
    }
    
}

render();