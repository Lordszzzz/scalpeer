import {firefox} from 'playwright'
import fs from 'fs'
import * as dotenv from 'dotenv' 
dotenv.config()


const getUsers = async () => {

     // start a browser and connect to it  
    const browser = await firefox.launch({headless:false});
    browser.isConnected();

    //create a new context with a new user agent and proxy server 
   
    const context = await browser.newContext({
    /* userAgent: faker.internet.userAgent(),
    proxy: {
      server: 'http://proxy.example.com:8080',
      username: 'myUsername',
      password: 'myPassword'
    } */
  }); 

  function randomTimeMillis() {
    const lowerLimitSeconds = 30;
    const upperLimitSeconds = 6 * 60;
    const lowerLimitMillis = lowerLimitSeconds * 1000;
    const upperLimitMillis = upperLimitSeconds * 1000;
    
    return Math.floor(Math.random() * (upperLimitMillis - lowerLimitMillis + 1)) + lowerLimitMillis;
  }
  
  // Exemplo de uso
  

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
  await page.fill('input[name="username"]', 'Labooimports@gmail.com');

    await page.waitForTimeout(2000);
    await page.waitForSelector('input[name="password"]');

    await page.waitForTimeout(2000);
    await page.fill('input[name="password"]', `#Laboo123`);

    console.log("Click Button")

    await page.waitForTimeout(2000);
    await page.click('button[type="submit"]')

    await page.waitForTimeout(5000);
    const users = new Set();
     
  const Posts = ["/p/CsBvIphOjN3/",
  "/p/CuHY_N7uaRV/",
  "/p/CtZJQRfvMA6/",
  "/p/Ctgwxf0pcnG/",
  "/p/Ct_8rXzuhE6/",
  "/p/CsRGcGXuTFs/",
  "/p/CtGrsHltBrQ/",
  "/p/CtesIo_u9QZ/",
  "/p/CtjVmHeNSOi/",
  "/p/CuMqHJFufH2/",
  "/p/CuKtjwAP7wY/",
  "/p/CuKh-Z9Ov1s/",
  "/p/CuKFCweO1Jz/",
  "/p/CuKE8dBuB53/",
  "/p/CuJ2wFuOvF4/",
  "/p/CuJykw2st1R/",
  "/p/CuJncomOy0e/",
  "/p/CuIomY9OglT/",
  "/p/CuIoa4kuM4l/",
  "/p/CuIlmTcu6no/",
  "/p/CuIlfTrOzgi/",
  "/p/CuIUfjqROzl/",
  "/p/CuIRFtVRP3l/",
  "/p/CuILJkhgQA8/",
  "/p/CuMRJdYOxZR/",
  "/p/CuJsVD7OY1k/",
  "/p/CuIE_I8raYR/",
  "/p/CuH72lruMOB/",
  "/p/CuH4oxguR4R/",
  "/p/CuH4hV9O_v5/",
  "/p/CuH3NcOOGx-/",
  "/p/CuEs46oOAtq/",
  "/p/CuErolqO6m2/",
  "/p/CuErfoVuiBi/",
  "/p/CuEqUZnuHaG/",
  "/p/CuEqMSFO3CP/",
  "/p/CuEo5McOZQg/",
  "/p/CuEoyBOuHqI/",
  "/p/CuEofi8OTpx/",
  "/p/CuEdyggtJ2q/",
  "/p/CuDxAi9u2uF/",
  "/p/CuDwzTlu6kM/",
  "/p/CuDvG9SuoCa/",
  "/p/CuDu6QpuZtE/",
  "/p/CuDtvwiOnSG/",
  "/p/CuDtqgtu8fm/",
  "/p/CuDsDZ0uS0e/",
  "/p/CuDr8czu_3W/",
  "/p/CuDq4OlOZJy/",
  "/p/CuDqsxpu_Wl/",
  "/p/CuDprrAOMst/",
  "/p/CuDpmNvO_hN/",
  "/p/CuDoiZuucWl/",
  "/p/CuDocFkub15/",
  "/p/CuDmGUiOt1O/",
  "/p/CuDmATuOdlZ/",
  "/p/CuDkWBKuhMk/",
  "/p/CuDkPZUOkbL/",
  "/p/CuDjDyWu73H/",
  "/p/CuDi8ioOb7Z/",
  "/p/CuDhs5FOMjV/",
  "/p/CuDhjMVuLlD/",
  "/p/CuDgqq4u05r/",
  "/p/CuDfMqmOUgY/",
  "/p/CuDfA_NuLMb/",
  "/p/CuDc8vdOyuM/",
  "/p/CuDcZUbO5Fa/",
  "/p/CuDICj6vAg0/",
  "/p/CuC3XFURTE_/",
  "/p/CuC3cesNbd9/",
  "/p/CuC28WlOkIp/",
  "/p/CuCwhMgOiU9/",
  "/p/CuCoxTWuWBJ/",
  "/p/CuCjxU-rsI7/",
  "/p/CuCjtPuIW3M/",
  "/p/CuCXH4zNTbD/",
  "/p/CuCRp0eN2ab/",
  "/p/CuCQQTVP3Hx/",
  "/p/CuCPrepM4AS/",
  "/p/CuCPHDJJD5a/",
  "/p/CuCFdVON4EX/",
  "/p/Ct68-jxLWRN/",
  "/p/Ct6Se56O760/",
  "/p/Ct436DuuVjn/",
  "/p/Ct40ZrfvRvM/",
  "/p/Ct4gLrQMdBH/",
  "/p/Ct4fbstMJNS/",
  "/p/Ct31FcXo-D6/",
  "/p/Ct30BFnO7YY/",
  "/p/Ct3l1HZt6kN/",
  "/p/Ct2rVb-ulgc/",
  "/p/Ct2qYbrO5iY/",
  "/p/Ct2jkCcokvu/",
  "/p/Ct2e__KLItY/",
  "/p/Ct18vwXOH1Z/",
  "/p/Ct16kKUMoD1/",
  "/p/Ct1eALVtZ4n/",
  "/p/Ct1c8ZuMyK_/",
  "/p/Ct1csBbMUJ4/",
  "/p/Consp3xPgSK/",
  "/p/ClJcKUWu5vC/",
  "/p/CuIQOzoLH9T/",
  "/p/CuAh3uKrPXW/",
  "/p/Ct1caw2MZVS/",
  "/p/Ct1PNzJuas_/",
  "/p/Ct1Mufng98D/",
  "/p/Ct1JcyWsZmr/",
  "/p/Ct1A7m6N2U5/",
  "/p/Ctz8d2FM-0L/",
  "/p/Ctz7hFMsDMI/",
  "/p/Ctz6lCKM0VJ/",
  "/p/Ctz5lKus1ff/",
  "/p/Ctzs-rvxwx_/",
  "/p/CtzouMDPVOE/",
  "/p/CtzoM0SRjal/",
  "/p/CtzkmfIJK0M/",
  "/p/CtzUfN6OE28/",
  "/p/CtzOfvXN0R6/",
  "/p/CtycFbTMmU8/",
  "/p/CtxUm03r1eP/",
  "/p/CtxF2h8vMxF/",
  "/p/CtxFR_Zvqk4/",
  "/p/CtxEemSvmnk/",
  "/p/Ctw4OrIpb0T/",
  "/p/Ctw4F3lJAmj/",
  "/p/Ctw4KRYJYbq/",
  "/p/Ctwv5K3OWCB/",
  "/p/CtwslvMtDmu/",
  "/p/CtwUaryt5Jt/",
  "/p/CtwOsI0PlzQ/",
  "/p/CtwOHgvpmjP/",
  "/p/CtwNjp1JDdd/",
  "/p/CtwNuJ2vAle/",
  "/p/CtwGY5CO3UP/",
  "/p/CtwFHYmODv7/",
  "/p/Ctv3k3nOAk5/",
  "/p/Ctu8m7_NEJ-/",
  "/p/Ctu5F_eOtcP/",
  "/p/CtugImHxJQe/",
  "/p/CtuS9rLOUIf/",
  "/p/CtuRJK8udzS/",
  "/p/CtuQ21VLnlD/",
  "/p/CtuMiG2POAO/",
  "/p/Ctt-QutuSxb/",
  "/p/Cttpgjvtv1h/",
  "/p/Cttlxpot1gW/",
  "/p/CttYSLfsKvO/",
  "/p/CttbMIespk6/",
  "/p/CtrpnnVxPov/",
  "/p/Csob4iqt-CZ/"]
    let i = 0
    
    const element = []
         for (const post of Posts){
            await page.goto(`https://instagram.com${post}`)
            //const randomTime = randomTimeMillis();
            await page.waitForTimeout(6000);
            //await page.waitForTimeout(randomTime);
            const user = await page.waitForSelector('[class="x78zum5"]')
            let text = await user.evaluate(el => el.innerHTML)
            i++
            console.log(`${i} - ${post} profile: ${text}`)
            element.push(text)
         }

           element.forEach(item => {
                item.replace(/href="(.*?)"/g, (match, href) => {
                    users.add(href);
                });
            });
         
         console.log(users)
        //hashtag
        const hashtag ="lojadetenis"
        const now = new Date();
        const dateTimeStr = now.toISOString().slice(0, 19).replace(/[-T:]/g, '-');
        const jsonString = JSON.stringify(Array.from(users))
        await fs.promises.writeFile(`./users/Usernames-${dateTimeStr}--${hashtag}--.json`, jsonString);
        console.log(users)
     
}

getUsers()
