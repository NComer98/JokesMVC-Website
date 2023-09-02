namespace JokesWebAppMVC.Models
{
    public class Joke
    {
        public int id { get; set; }
        public string jokeSetUp { get; set; }
        public string jokePunchline { get; set; }
        public string jokeUsername { get; set; }
        public Joke()
        {
            
        }
    }
}
