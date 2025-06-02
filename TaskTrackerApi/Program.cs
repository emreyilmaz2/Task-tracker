using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using TaskTrackerApi.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Task Tracker API",
        Version = "v1"
    });
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactClient",
        builder =>
        {
            builder.WithOrigins(
                "http://localhost:5173",
                "https://task-tracker-eta-bay.vercel.app/",
                "https://task-tracker-git-feature-0181f9-emre-yilmazs-projects-93dea153.vercel.app/"
                ) // Vite'ın portu
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactClient", builder =>
    {
        builder.WithOrigins(
            "http://localhost:5173",
            "https://task-tracker.vercel.app",
            "https://task-tracker-git-feature-0181f9-emre-yilmazs-projects-93dea153.vercel.app"
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});












builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowReactClient");
app.UseStaticFiles();
app.UseAuthorization();
app.MapControllers();


using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    context.Database.Migrate();
}


app.Run();
