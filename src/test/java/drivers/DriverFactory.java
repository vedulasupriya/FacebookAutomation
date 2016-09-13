package drivers;

/**
 * Created by Supriya on 9/9/2016.
 */
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverFactory {
    protected static WebDriver driver;
    public void createWebDriver(){
        final FirefoxProfile firefoxProfile = new FirefoxProfile();
        firefoxProfile.setPreference("xpinstall.signatures.required", false);
        driver = new FirefoxDriver(firefoxProfile);
        driver.manage().window().maximize();

    }
}
