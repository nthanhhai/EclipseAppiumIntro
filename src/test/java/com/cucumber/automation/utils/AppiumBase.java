    package com.cucumber.automation.utils;
   
    import io.appium.java_client.android.AndroidDriver;
     
    import java.io.File;
    import java.net.MalformedURLException;
    import java.net.URL;
    import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
    import org.openqa.selenium.support.ui.WebDriverWait;
    
    public class AppiumBase {

        public static WebDriver driver;
        public static WebDriverWait wait;
     
        public void createDriver() throws MalformedURLException, InterruptedException {
	     
	        //relative path to apk file
	        //final File classpathRoot = new File(System.getProperty("user.dir"));
	        //final File appDir = new File(classpathRoot, "src/test/resources/apps/");
	        //final File app = new File(appDir, "ApiDemos-debug.apk");
	     
	        //setting up desired capability
	        DesiredCapabilities caps = new DesiredCapabilities();
	        caps.setCapability("browserName", "");
	        caps.setCapability("platform", "ANDROID");
	        caps.setCapability("platformVersion", "5.0");
	        caps.setCapability("deviceName", "ANDROID");
	        //caps.setCapability("app", app.getAbsolutePath());
	        caps.setCapability("appPackage", "com.android.calculator2");
	        //capabilities.setCapability("appPackage", "com.google.android.calculator");

	        // This is Launcher activity of your app (you can get it from apk info app)
	        caps.setCapability("appActivity","com.android.calculator2.Calculator");
	        
	        //initializing driver object
	        driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), caps);
	        
		    //initializing implicit wait
		    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	        //initializing explicit wait object
	        wait = new WebDriverWait(driver, 10);
        }
     
        public void tearDown(){
	    	//quit the driver
	    	driver.quit();
       	}
   }
