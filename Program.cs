using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// ✅ Controller desteği
builder.Services.AddControllers();

// ✅ Swagger/OpenAPI ayarı
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Task Tracker API",
        Version = "v1"
    });
});

var app = builder.Build();

// ✅ Geliştirme ortamında Swagger UI göster
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Opsiyonel: Https yönlendirmeyi şimdilik kapatabilirsin
// app.UseHttpsRedirection();

app.UseAuthorization();

// ✅ Controller'ları map'le
app.MapControllers();

app.Run();