using System.Diagnostics;
using System.Threading;

namespace StartChromeDriver
{
    class Program
    {
        static void Main(string[] args)
        {
            const string ChromeDriverPath = @"ChromeDriver\chromedriver.exe";
            var processStartInfo = new ProcessStartInfo(ChromeDriverPath, "--port=9515")
            {
                UseShellExecute = false,
                LoadUserProfile = true
            };
            var theProcess = Process.Start(processStartInfo);

            Thread.Sleep(Timeout.Infinite);
        }
    }
}
