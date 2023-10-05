using Microsoft.EntityFrameworkCore;

namespace MyProject.Data
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
            Users = Set<User>();
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Users"); // Set the table name
                entity.HasKey(e => e.Id); // Set the primary key
                entity.Property(e => e.Username).IsRequired(); // Set a required property
                entity.Property(e => e.Password).IsRequired(); // Set a required property
                entity.Property(e => e.EmailAddress).IsRequired(); // Set a required property
                entity.Property(e => e.FirstName).IsRequired(); // Set a required property
                entity.Property(e => e.LastName).IsRequired(); // Set a required property
            });
        }
    }
}