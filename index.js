const {Builder,By,Key,util} = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');
async function example()
{
	let driver = await new Builder().forBrowser("firefox").build();
	try {
	
	await firefox.get("http://google.com");
	await driver.findElement(By.name("q").sendKeys("Selenium",Key.RETURN));
	}
	catch {
		console.log("erro")
	}
	finally {
		await driver.quit();
	}
}
example();