# 📝 TaskTracker API

TaskTracker, basit bir görev takip uygulamasıdır. Bu proje, modern yazılım geliştirme süreçlerini göstermek için CI/CD pipeline entegrasyonu ile birlikte tasarlanmıştır.

---

## 🚀 Özellikler

- ASP.NET Core ile geliştirilen RESTful API
- Görev (task) oluşturma ve listeleme
- Swagger UI ile test edilebilir uç noktalar
- Modern CI/CD: GitHub Actions + Azure Web App
- Deployment dashboard (`/dashboard.html`)

---

## ⚙️ Kullanılan Teknolojiler

| Katman       | Teknoloji        |
|--------------|------------------|
| Backend      | ASP.NET Core 8.0 |
| Test         | xUnit            |
| CI/CD        | GitHub Actions   |
| Deployment   | Azure Web App    |

---

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
dotnet restore

# Uygulamayı derle
dotnet build

# Testleri çalıştır
dotnet test

# Yayın için
dotnet publish -c Release

Canlı Demo : https://tasktracker-awdjd3b9d3ezayb4.switzerlandnorth-01.azurewebsites.net/index.html
