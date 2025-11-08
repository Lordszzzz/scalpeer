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
  await page.fill('input[name="username"]', 'sury.agency');

    await page.waitForTimeout(2000);
    await page.waitForSelector('input[name="password"]');

    await page.waitForTimeout(2000);
    await page.fill('input[name="password"]', `#Sury123`);

    console.log("Click Button")

    await page.waitForTimeout(2000);
    await page.click('button[type="submit"]')

    await page.waitForTimeout(5000);
    const users = new Set();
     
  const Posts = [
    "/p/Cs1jg7XRoVc/",
"/p/Cs1l9nXRfdT/",
"/p/Cs1nDA7PdmF/",
"/p/Cs1ngzoJ90M/",
"/p/Cs1pqkvx5gL/",
"/p/Cs1qBhlR5T9/",
"/p/Cs1qQfXukgl/",
"/p/Cs1qTDExPXM/",
"/p/Cs1j7DmpbrB/",
"/p/Cs1dquMxYpB/",
"/p/Cs1dUVkxsPD/",
"/p/Cs1dMgDR7_u/",
"/p/Cs1pL7Durb9/",
"/p/Cs1ovokgCes/",
"/p/Cs1pHkoxDgS/",
"/p/Cs1pHL5xLBS/",
"/p/Cs1o_XsOJts/",
"/p/Cs1pDgFR40r/",
"/p/Cs1pCdevrOt/",
"/p/Cs1o4NNxC_J/",
"/p/Cs1olY6NNkU/",
"/p/Cs1olyavvjE/",
"/p/Cs1olAbRlam/",
"/p/Cs1ojkdREQq/",
"/p/Cs1ofzBurl4/",
"/p/Cs1oc8_RW6y/",
"/p/Cs1ocr0uvB1/",
"/p/Cs1oaKSxKzs/",
"/p/Cs1oXAUx1kT/",
"/p/Cs1oRSMuPsS/",
"/p/Cs1oOEFRUVz/",
"/p/Cs1oLE4p34p/",
"/p/Cs1oI2GpGBq/",
"/p/Cs1oI1SPTEf/",
"/p/Cs1oGkFxoj1/",
"/p/Cs1mxU8Agnh/",
"/p/Cs1oB4DJrJ1/",
"/p/Cs1n-NOx8vs/",
"/p/Cs1nz7ypWLj/",
"/p/Cs1nx6pP-Qb/",
"/p/Cs1ntlORLK_/",
"/p/Cs1nmxpPxSl/",
"/p/Cs1nTpygd02/",
"/p/Cs1nj2rJWvB/",
"/p/Cs1nje9OGAW/",
"/p/Cs1neunRXzC/",
"/p/Cs1nbmBvmc7/",
"/p/Cs1nYwQOEDC/",
"/p/Cs1nX2fxWTu/",
"/p/Cs1nUmivpKN/",
"/p/Cs1m48kMxnJ/",
"/p/Cs1m9Q_J0qf/",
"/p/Cs1nMJ2P544/",
"/p/Cs1nLuQtSYt/",
"/p/Cs1nFmkOz55/",
"/p/Cs1mGstAIDS/",
"/p/Cs1mx15OcPR/",
"/p/Cs1mvu_JDI9/",
"/p/Cs1mlsspfR6/",
"/p/Cs1mocaOe6O/",
"/p/Cs1mkwfJgvo/",
"/p/Cs1mj9zPZdG/",
"/p/Cs1lG6xADFK/",
"/p/Cs1mWLlNVgk/",
"/p/Cs1mioGujZ0/",
"/p/Cs1mfTlRXm_/",
"/p/Cs1mdYuxDjc/",
"/p/Cs1mdJmRZ3C/",
"/p/Cs1mbESuh40/",
"/p/Cs1mRbLpRIp/",
"/p/Cs1mP6GxJlR/",
"/p/Cs1mPm3JVWN/",
"/p/Cs1l4HSs_Xp/",
"/p/Cs1mMj1xaoU/",
"/p/Cs1mMbDpt83/",
"/p/Cs1lozdKTAD/",
"/p/Cs1mIIux2r1/",
"/p/Cs1le4HLnHu/",
"/p/Cs1l7Put8zQ/",
"/p/Cs1mDP9JnsV/",
"/p/Cs1l1repOXB/",
"/p/Cs1lYW2I0u1/",
"/p/Cs1l9crpQgk/",
"/p/Cs1l8-0xINO/",
"/p/Cs1l6oZpo3m/",
"/p/Cs1lCekP8Fe/",
"/p/Cs1l1zxxHPq/",
"/p/Cs1l00gx2RB/",
"/p/Cs1lz1NuCiO/",
"/p/Cs1lyxTpvdW/",
"/p/Cs1lyhnx9L0/",
"/p/Cs1lx9pRy9n/",
"/p/Cs1lj6mtyFc/",
"/p/Cs1ljw1Rzs7/",
"/p/Cs1ldS2pgdF/",
"/p/Cs1lR4MRJWt/",
"/p/Cs1lQ4wRsd3/",
"/p/Cs1lLIcxvyM/",
"/p/Cs1lK2LxdtI/",
"/p/Cs1lJ2ivl_J/",
"/p/Cs1lGaIuNvQ/",
"/p/Cs1k9kppK8f/",
"/p/Cs1kv6ZJ0ny/",
"/p/Cs1k7GvxBt7/",
"/p/Cs1k6jlJvSr/",
"/p/Cs1k5-ApdR9/",
"/p/Cs1k5ItJjiV/",
"/p/Cs1k2BepopX/",
"/p/Cs1kzQQxS4D/",
"/p/Cs1kyKEumPc/",
"/p/Cs1kkWcAVTk/",
"/p/Cs1kIDhJP5c/",
"/p/Cs1ku5wxVPp/",
"/p/Cs1ktF6JXI2/",
"/p/Cs1kqOsunE8/",
"/p/Cs1kl1GpobV/",
"/p/Cs1kkyIusBf/",
"/p/Cs1kilpxt44/",
"/p/Cs1kg3_p6au/",
"/p/Cs1kfNUAFaS/",
"/p/Cs1kcNjucSj/",
"/p/Cs1j65Gphr3/",
"/p/Cs1kZa1u7O0/",
"/p/Cs1kZTFOjD0/",
"/p/Cs1kYS2JJ8k/",
"/p/Cs1kV4QO4Q0/",
"/p/Cs1kUZ0JLOy/",
  ]

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
