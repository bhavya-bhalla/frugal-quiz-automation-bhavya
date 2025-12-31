import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;

public class QuizAutomation {

    public static void main(String[] args) throws Exception {

        System.setProperty("webdriver.chrome.driver","C:\\Users\\Pc\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();

        System.out.println("---------- TEST STARTED ----------");

        String quizURL = "file:///C:/Users/Pc/Documents/FrugalTesting_SE_BhavyaBhalla/quiz-app/index.html";
        driver.get(quizURL);
        System.out.println("[INFO] Opened URL: " + quizURL);

        String expectedTitle = "Quiz Application";
        String actualTitle = driver.getTitle();
        System.out.println("[INFO] Page Title Detected: " + actualTitle);

        if(actualTitle.equals(expectedTitle)) {
            System.out.println("[PASS] Landing Page Verification Successful");
        } else {
            System.out.println("[FAIL] Landing Page Title Mismatch (Expected: " + expectedTitle + ")");
        }

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.elementToBeClickable(By.tagName("button"))).click();
        System.out.println("[ACTION] Clicked Start Quiz");

        for(int i = 0; i < 5; i++){
            System.out.println("[INFO] Answering Question #" + (i+1));
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#options li")));
            List<WebElement> options = driver.findElements(By.cssSelector("#options li input"));
            if(!options.isEmpty()) {
                options.get(0).click();
                System.out.println("[ACTION] Selected Option 1");
            } else {
                System.out.println("[WARNING] No answer options found on question!");
            }
            driver.findElement(By.id("nextBtn")).click();
            System.out.println("[ACTION] Clicked Next");
        }

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("summary")));
        String scoreText = driver.findElement(By.id("summary")).getText();
        System.out.println("[INFO] RESULT TEXT: " + scoreText);

        if(scoreText.contains("/")) {
            System.out.println("[PASS] Result Page Verified Successfully");
        } else {
            System.out.println("[FAIL] Result Page Verification Failed");
        }

        System.out.println("---------- TEST COMPLETED ----------");

        Thread.sleep(1000);
        driver.quit();
    }
}
