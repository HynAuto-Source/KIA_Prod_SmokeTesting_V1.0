package runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
				
		features = "./src/test/java/feature/ProdSmokeTesting.feature",
		
		
		glue = {"stepDefinitions"},
		plugin = {"pretty", "html:test-output","json:json_output/prodsmkcum.json", "junit:xml_output/prodsmkcum.xml",
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}, 
			
		monochrome = true
		//dryRun = false
		//strict = true//
		)


public class ProdSmokeTestingTestRunner {
	
	 @AfterClass
	 public static void writeExtentReport() {
	 Reporter.loadXMLConfig(new File("D:/TechR-Source/AutomationTesting/workspace/KIA_Cucumber/properties/extent-config.xml"));
	 
	 Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
     Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
     Reporter.setSystemInfo("Machine", "Windows 7" + "64 Bit");
     Reporter.setSystemInfo("Selenium", "2.53.1");
     Reporter.setSystemInfo("Maven", "3.6.3");
     Reporter.setSystemInfo("Java Version", "1.8.0_231");
	  
	 }
	
}