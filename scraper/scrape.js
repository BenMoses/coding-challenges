const { execSync } = require("child_process");
const buffer = require("buffer");

const getAllStores = () => {
  return execSync(`
curl 'https://www.faire.com/api/v2/search/brands?page=1&page_size=40&container_name=marketplace_maker_grid&filter_keys=category%3ATop+Sellers&is_initial_request=true' \
  -H 'authority: www.faire.com' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en;q=0.9' \
  -H 'cache-control: no-cache' \
  -H 'cookie: _cfuvid=T_i.PmTc5OSWYdP3tAAFzuzPu8NA.V3uWrdby_gsMjA-1701872073166-0-604800000; _cq_duid=1.1701872073.nWFgP6vu1Rzrv8hg; _cq_suid=1.1701872073.GLYzadYpFKdjteR7; _hjFirstSeen=1; _hjIncludedInSessionSample_3000850=0; _hjSession_3000850=eyJpZCI6IjhkYmUzZDlmLWJlNjUtNDgyYy05OTNkLWQ4ZWYzZjM0NWU1OCIsImNyZWF0ZWQiOjE3MDE4NzIwNzQ2ODgsImluU2FtcGxlIjpmYWxzZSwic2Vzc2lvbml6ZXJCZXRhRW5hYmxlZCI6dHJ1ZX0=; _hjAbsoluteSessionInProgress=0; builderSessionId=de5c8ff409e94639883cc89d1df076cd; OptanonAlertBoxClosed=2023-12-06T14:14:50.949Z; _hjSessionUser_3000850=eyJpZCI6IjRhMmNlNTk2LTEzYmYtNTlkOC1hODliLTc3YzYyZjA1MTI4NyIsImNyZWF0ZWQiOjE3MDE4NzIwNzQ2ODYsImV4aXN0aW5nIjp0cnVlfQ==; __cf_bm=yaZUifAg2__k8KWlhJaxx2JWsU7wPetbqMk7LCtFewA-1701873178-0-AXqsWWlxQLsh/45sP9/Jxdzb/VAYb3iUjbJU4RIsRCgICMPgELrbrSyHN6hLGU6sg0G10kfLMm0ufwyhlEzE7Ho=; indigofair_session=eyJhbGciOiJQUzI1NiIsInYiOjEsInR5cCI6IkpXVCJ9.eyJzIjoibmNjMGFtamI3YWQ3Mjg3eWJtbTliajhwYzR2MGNvcjQ1c2xlN242MzVxYnV4MzUxazUyMmdwaXdndm02MWhydGVxajFtdzgxcG5iNHQ5cmFlZ3VmbjNpMDZzaDV0ZnYzNWpsZSIsImQiOjE3MDE4NzM0ODEsInYiOjE3MDE4NzIwNzJ9.S728yDAmdGSflll8QZcMVcc4XeNafmcKM_FyhbcuOOc7OerlXdf86k-tO29rmvQTRPvvSW_fFbWgovvVQmTCUiWYsyGKB21vllsOO_50UmNiqji5ZMYd-TVX2m3rayh6eZY1gBRQQbN6ra43R3Yn9kqTHuA2ZhTQJLXzXvGPDSfzpvzlki-ur7DNMB-7CIVf8kI7YOpNz_nbTUgMU6bIZ776TFR9DFIjj3DwryVuhbgbjawaiTOsRkLFTKhoTuY4N_xl_EUpRFGsYzYBafuk9vd5nQVyzGT-gYX26vrA3IQZTNr0lC3q-uPc3fQroFi_EGA5KTdtCVUU_1S9MByZFg; OptanonConsent=isGpcEnabled=0&datestamp=Wed+Dec+06+2023+14%3A39%3A21+GMT%2B0000+(Greenwich+Mean+Time)&version=6.17.0&isIABGlobal=false&hosts=&consentId=20740bb4-e0af-42f4-a091-03a358a13b76&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A0%2CC0002%3A0%2CC0004%3A0&geolocation=GB%3BENG&AwaitingReconsent=false; _dd_s=rum=0&expire=1701874460949' \
  -H 'dpr: 2' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.faire.com/en-gb/category/Top%20Sellers' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'x-accept-currency: GBP' \
  -H 'x-faire-timezone: Europe/London' \
  -H 'x-if-app-identifier: web-retailer' \
  -H 'x-if-client-release: d2fd63dd:4e5b6d03:0' \
  -H 'x-is-apparel: false' \
  --compressed
`);
};

const getAllProducts = (brandId) => {
  return execSync(`
curl 'https://www.faire.com/api/v2/products/search/brand-lean-product-tiles' \
  -H 'authority: www.faire.com' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en;q=0.9' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'cookie: _cfuvid=T_i.PmTc5OSWYdP3tAAFzuzPu8NA.V3uWrdby_gsMjA-1701872073166-0-604800000; _cq_duid=1.1701872073.nWFgP6vu1Rzrv8hg; _cq_suid=1.1701872073.GLYzadYpFKdjteR7; _hjFirstSeen=1; _hjIncludedInSessionSample_3000850=0; _hjSession_3000850=eyJpZCI6IjhkYmUzZDlmLWJlNjUtNDgyYy05OTNkLWQ4ZWYzZjM0NWU1OCIsImNyZWF0ZWQiOjE3MDE4NzIwNzQ2ODgsImluU2FtcGxlIjpmYWxzZSwic2Vzc2lvbml6ZXJCZXRhRW5hYmxlZCI6dHJ1ZX0=; _hjAbsoluteSessionInProgress=0; builderSessionId=de5c8ff409e94639883cc89d1df076cd; OptanonAlertBoxClosed=2023-12-06T14:14:50.949Z; _hjSessionUser_3000850=eyJpZCI6IjRhMmNlNTk2LTEzYmYtNTlkOC1hODliLTc3YzYyZjA1MTI4NyIsImNyZWF0ZWQiOjE3MDE4NzIwNzQ2ODYsImV4aXN0aW5nIjp0cnVlfQ==; indigofair_session=eyJhbGciOiJQUzI1NiIsInYiOjEsInR5cCI6IkpXVCJ9.eyJzIjoibmNjMGFtamI3YWQ3Mjg3eWJtbTliajhwYzR2MGNvcjQ1c2xlN242MzVxYnV4MzUxazUyMmdwaXdndm02MWhydGVxajFtdzgxcG5iNHQ5cmFlZ3VmbjNpMDZzaDV0ZnYzNWpsZSIsImQiOjE3MDE4NzMwOTMsInYiOjE3MDE4NzIwNzJ9.OKOuIoSTAfb3P7mQCnz7ksKE3zrz9ibtcd4_4PCg3n2Ne8pzQZJKNwvkZbFvYCQkmlLl45RSSVZABwbIQQ-UvvL2bB4dEEzcwbjp4tuhwbYTvR-YSOa_Ed-6FtUBOeC_U-UY7qPyQySuvYKiKFTCiq-7Ymin71WigjmDeL_Zfo-OfZIgAbIW9AGdOJybV3QSCEn5uonHC4yfDo83CcJT-4fFGgr-m4iNH6bmLyPrOvyyv6kDB9Ye6GGZmjTmCPt5WYocCWgcPwCsog5vIGxCoW0Ng73WyEBwHcltwDmomo161SOzD89HjnunKrRZDa32VdCF9odnOjiOBuH6Pmkzsw; __cf_bm=yaZUifAg2__k8KWlhJaxx2JWsU7wPetbqMk7LCtFewA-1701873178-0-AXqsWWlxQLsh/45sP9/Jxdzb/VAYb3iUjbJU4RIsRCgICMPgELrbrSyHN6hLGU6sg0G10kfLMm0ufwyhlEzE7Ho=; OptanonConsent=isGpcEnabled=0&datestamp=Wed+Dec+06+2023+14%3A34%3A54+GMT%2B0000+(Greenwich+Mean+Time)&version=6.17.0&isIABGlobal=false&hosts=&consentId=20740bb4-e0af-42f4-a091-03a358a13b76&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A0%2CC0002%3A0%2CC0004%3A0&geolocation=GB%3BENG&AwaitingReconsent=false; _dd_s=rum=0&expire=1701874208293' \
  -H 'dpr: 2' \
  -H 'origin: https://www.faire.com' \
  -H 'pragma: no-cache' \
  -H 'referer: https://www.faire.com/en-gb/brand/${brandId}' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'x-faire-timezone: UTC' \
  -H 'x-if-app-identifier: web-retailer' \
  -H 'x-if-client-release: 7edc1130ff131cc1f9231c0c07a819c9cd04893f:faire.com/static/css/retailer.306b2500:0' \
  -H 'x-is-apparel: false' \
  --data-raw '{"filter_keys":[],"range_filters":[],"brand_token":"${brandId}","page_size":8,"sort_by":"FEATURED"}' \
  --compressed
`);
};

const response = JSON.parse(buffer.Buffer.from(getAllStores()).toString());
let allProducts = [];
// for now just loop the first 2
[response.brands[0], response.brands[1]].forEach((brand) => {
  const response = JSON.parse(
    buffer.Buffer.from(getAllProducts(brand.token)).toString()
  );

  allProducts.push(response.product_tiles.map((i) => i.product));
});

// Filter based on if they're new
allProducts = allProducts.filter((product) => product.is_new);

// Filter based on if they're high rating
allProducts = allProducts.filter(
  (product) => product.avg_brand_review_rating > 4
);

// console.log(JSON.stringify(allProducts, null, 2));

const URLS = allProducts.flat().map(({ brand_token, token }) => {
  return `https://www.faire.com/en-gb/brand/${brand_token}?brand=${brand_token}&product=${token}&refB=${brand_token}&signUp=product`;
});

console.log(URLS);
