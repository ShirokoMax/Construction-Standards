const { firefox } = require('playwright');
const fs = require('fs');

let start = Date.now();

let startData;
const finalData = {};
finalData.structuralSteel = [];


(async () => {

  fs.readFile('start.json', (err, data) => {
    if (err) throw err;
    startData = JSON.parse(data);
    console.log(startData);
  });


  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  
  for(let item of startData.structuralSteel){
  let url = item.url;
  await page.goto(`${url}`);

  // const name = await page.$eval('h1', i => i.textContent);
  const name = await page.$eval('xpath=//html/body >> css=table.status >> "Название документа:"', 
  i => i.nextElementSibling.textContent.trim())
  .catch((error) => {
    console.log(error);
  });
  
  const docNumber = await page.$eval('xpath=//html/body >> css=table.status >> "Номер документа:"', 
  i => i.nextElementSibling.textContent.trim())
  .catch((error) => {
    console.log(error);
  });

  const docType = await page.$eval('xpath=//html/body >> css=table.status >> "Вид документа:"', 
  i => i.nextElementSibling.textContent.trim())
  .catch((error) => {
    console.log(error);
  });

  const status = await page.$eval('xpath=//html/body >> css=table.status >> "Статус:"', 
  status => status.nextElementSibling.textContent.trim())
  .catch((error) => {
    console.log(error);
  });
  
  const adoptionDate = await page.$eval('xpath=//html/body >> css=table.status >> "Дата принятия:"', 
  i => i.nextElementSibling.textContent.trim())
  .catch((error) => {
    console.log(error);
  });
  
  const effectiveDate = await page.$eval('xpath=//html/body >> css=table.status >> "Дата начала действия:"', 
  i => i.nextElementSibling.textContent.trim())
  .catch((error) => {
    console.log(error);
  });
  
  const revisionDate = await page.$eval('xpath=//html/body >> css=table.status >> "Дата редакции:"', 
  i => i.nextElementSibling.textContent.trim())
  .catch((error) => {
    console.log(error);
  });

  const doc = `${docType} ${docNumber}`;

  finalData.structuralSteel.push({
      url,
      doc,
      name,
      status,
      adoptionDate,
      effectiveDate,
      revisionDate
  });
  

  console.log(`
  doc: ${doc}
  name: ${name}
  status: ${status}
  adoptionDate: ${adoptionDate}
  effectiveDate: ${effectiveDate}
  revisionDate: ${revisionDate}
  `);


}

  fs.writeFile('data.json', JSON.stringify(finalData, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

  await browser.close();
  console.log('Time: ', Date.now() - start, ' ms');
})();
