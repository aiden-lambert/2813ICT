namespace MyProject.Data
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        // Add additional properties as needed
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}