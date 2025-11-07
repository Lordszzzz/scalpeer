const { firefox } = require('playwright');
const fs = require('fs');

//Mozilla/5.0 (Linux; Android 10; Mobile; rv:102.0) Gecko/102.0 Firefox/102.0
(async () => {
    try {
        const browser = await firefox.launch({ 
            headless: false,
            slowMo: 300
        });
        
        const context = await browser.newContext({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });

        const page = await context.newPage();

        await page.waitForTimeout(5000);

        await page.goto('https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9199bf20-a13f-4107-85dc-02114787ef48&scope=https%3A%2F%2Foutlook.office.com%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Foutlook.live.com%2Fmail%2F&client-request-id=e776ce1a-54e4-2dca-6011-70e0a6f344ac&response_mode=fragment&client_info=1&prompt=select_account&nonce=019a5ab0-56a2-7f33-83fd-77c4960035a7&state=eyJpZCI6IjAxOWE1YWIwLTU2YTEtNzllNi05NThhLWZjY2JkZTBlNWM0YSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7CaHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8_Y3VsdHVyZT1lbi11cyZjb3VudHJ5PXVz&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=msal.js.browser&x-client-VER=4.14.0&response_type=code&code_challenge=JarYDlaRks43BPqyUNgp-QoMyyaqRZePBna1QDa6-T8&code_challenge_method=S256&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c&fl=dob,flname,wld');

        await page.waitForTimeout(300000);

        const email = await page.waitForSelector('[]');

        await page.fill(email, '');

        const pass = await page.waitForSelector('[]');

        await page.fill(pass, '');

        const html = await page.content();
        fs.writeFileSync('output.csv', html, 'utf8');

        console.log("HTML salvo em output.html");

    } catch (error) {
        console.error("Erro ao capturar a página:", error);
    }
})();
