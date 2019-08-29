$("body").append('Test');

var url = window.location.href;
console.log('####href: ', url);

//check if it works by dp
//check if url has 10 digit code
const pathname = window.location.pathname;
const split = pathname.split('/');
console.log('split length ####### ', split.length, 'split 0 ', split[1]);
if (split.length > 2) {
  const title = $('#title').text().trim();
  console.log('################title: ', title);
  let price,
  i = 0,
  foundPrice = false,
  onSale = false,
  select;

  const priceSelector = ['#priceblock_dealprice', '#priceblock_ourprice', '#price > table > tbody > tr:nth-child(1) > td.a-span12.a-color-secondary.a-size-base > span.priceBlockStrikePriceString.a-text-strike'];

  while (foundPrice === false) {
     select = $(priceSelector[i]).text();

  if (select) {
    console.log('#########in select: ', select);
       price = select.split('$')[1];
       foundPrice = true;
      if (i === 0) {
      onSale = true;
     }
} else if (i > 2) {
  foundPrice = true;
  price = 'Sorry. No price recorded';
}
    i++;
   }
   console.log('######price ', price);

  const desc = [];

$('#feature-bullets > ul > li > span').each((i, el) => {
    const bullet = $(el).text().trim()
    if ((bullet.substr(0, 19) === "Make sure this fits") === false) {
      desc.push(bullet.substr(0, 75));
    }
  });

  const subStr = url.split('?')[0];
  const id = subStr.substr(subStr.length - 10, subStr.length - 1);

  const image = $('#landingImage').attr('src');
  console.log('#############image src', image);
  const result = {
    name: $('#title').text().trim(),
    description: desc,
    price,
    onSale,
    imageUrl: image,
    url,
    id,
  }

  console.log('########result', result);
}


// let price,
// i = 0,
// foundPrice = false,
// onSale = false,
// select;
//
// const priceSelector = ['#priceblock_dealprice', '#priceblock_ourprice', '#price > table > tbody > tr:nth-child(1) > td.a-span12.a-color-secondary.a-size-base > span.priceBlockStrikePriceString.a-text-strike'];
//
// while (foundPrice === false) {
//   select = $(priceSelector[i]).text();
//
//   if (select) {
//     price = select.split('$')[1];
//     foundPrice = true;
//     if (i === 0) {
//       onSale = true;
//     }
//   }
//   i++;
// }
//
// const desc = [];
//
// $('#feature-bullets > ul > li > span').each((i, el) => {
//   const bullet = $(el).text().trim()
//   if ((bullet.substr(0, 19) === "Make sure this fits") === false) {
//     desc.push(bullet.substr(0, 75));
//   }
// })
//
// const image = $('#landingImage');
// const result = {
//   name: $('#title span').text().trim(),
//   description: desc,
//   price,
//   onSale,
//   imageUrl: Object.keys(JSON.parse(image[0].attribs['data-a-dynamic-image']))[0],
//   url,
//   id: 0,
//});
//
// console.log(result);
