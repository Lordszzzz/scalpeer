import {firefox} from 'playwright'
import fs from 'fs'
import * as dotenv from 'dotenv' 
dotenv.config()




const getPosts = async () => {

    const hashtag = "concessionarias"

    const browser = await firefox.launch({headless:false});
    browser.isConnected();
    const context = await browser.newContext({
    /*userAgent: faker.internet.userAgent(),
    /* proxy: {
      server: 'http://proxy.example.com:8080',
      username: 'myUsername',
      password: 'myPassword'
    } */
    });
    const page = await context.newPage();
    
    //Login instagram
    await page.goto('https://instagram.com');
    console.log("starting")
    await page.waitForTimeout(2000);
    //await page.click('[class="_a9-- _a9_0"]')
    await page.waitForTimeout(2000);
    await page.waitForSelector('input[name="username"]');
    console.log("Login")

    await page.waitForTimeout(2000);
    await page.fill('input[name="username"]','Labooimports@gmail.com');

    await page.waitForTimeout(2000);
    await page.waitForSelector('input[name="password"]');

    await page.waitForTimeout(2000);
    await page.fill('input[name="password"]', `#Laboo123`);

    console.log("Click Button")

    await page.waitForTimeout(2000);
    await page.click('button[type="submit"]')

    await page.waitForTimeout(10000); 
 
    await page.goto(`https://www.instagram.com/explore/tags/${hashtag}/`)
    await page.waitForTimeout(5000); 

    const links = []
    const feeds = new Set();
   //scroll 
    for (let i = 0; i < 60; i++) {
            await page.evaluate(() => {
                window.scrollTo(90, document.body.scrollHeight);
            });
            await page.waitForTimeout(6000);
            await page.evaluate(() => {
                window.scrollBy(0, -10);
            });
            console.log(`${i} - scrolling`)

            await page.waitForSelector('div[class="_ac7v  _al3n"]')
            const link = await page.$$('div[class="_ac7v  _al3n"]')
            for (let j = 0; j < link.length; j++) {
                let text = await link[j].evaluate(el => el.innerHTML);
                links.push(text)
                }
          }   
            links.forEach(item => {
                item.replace(/href="(.*?)"/g, (match, href) => {
                    feeds.add(href);
                });
            });
  
        const now = new Date();
        const dateTimeStr = now.toISOString().slice(0, 19).replace(/[-T:]/g, '-');
        const jsonString = JSON.stringify(Array.from(feeds))
        await fs.promises.writeFile(`./posts/post-${dateTimeStr}--${hashtag}--20.json`, jsonString);
        console.log(feeds)
}

getPosts()

