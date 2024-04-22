# iWeather

Merhabalar! React Staj 2024 Ödevi olan iWeatherApp uygulamamı eksikleri olsa da tamamlamış bulunmaktayım. Sırasıyla uygulamamın nasıl çalıştığı hakkında video ve görseller ile sizi destekleyeceğim ve uygulamayı sizin de çalıştırabilmeniz için adım adım size anlatacağım.

### Projenin Canlı Sürümü Şu An Expoda Kare Kod Okutarak Kullanabilmeniz için Aşağıdaki Bağlantıyı Ziyaret Edin

**[UYGULAMAYI CANLI TEST ET](https://expo.dev/accounts/kaanxcode/projects/iweatherapp)** (Expo Hesabınız Olmalıdır)

## Proje Amacı ve Ek Açıklamalar

- Proje Mustafa Kaan Sevinç tarafından Özcan Zafer AYAN önderliğinde yönetilen React 2024 Stajı için yapılmıştır.
- Projeye taskına ulaşmak için [buraya tıklayın](https://github.com/React-Staj-2024/staj-2024-assesment).
- Proje, bir hava durumu mobil uygulamasıdır ve temel gereksinimleri karşılamaktadır.
- Projede kullanılan teknolojiler ve yararlanılan kaynaklar için bu sayfanın sonuna gidiniz.
- Benim hakkımda detaylı bilgi ve bana ulaşmak için en alta gidiniz.

**Uygulamamızın Kullanım Videosunu İzledikten sonra okumaya devam edebilirsiniz** (Resme Tıklayarak Videoya Gidebilirisiniz)

<a href="https://www.youtube.com/shorts/7A8Ft2ZiYLk" target="_blank"><img src="https://i.hizliresim.com/5er01y3.jpg" alt="Tıkla Videoya git" width="360" height="768"></a>

- Videoyu İzlediyseniz Uygulamamın Nasıl Çalıştığını Anlatabilirim

1. Uygulamayı Açıyoruz ve Bizi Ana sayfa Karşılıyor. Bu sayfada istediğimizin şehirin ismini yazarak o şehre ait hava durumu bilgilerini elde edebiliriz.

- Arama Yaptıktan Sonra bizi 3 ana Bölüm Karşılıyor. En üst Bölümde İl ve tarih bilgilerimiz, anlık hava durumu açıklamamız ve ikonlarımız yer alıyor.
  İkinci bölümde anlık ek datalarımız yer alırken son bölümde ilerleyen günlerin hava durumu bilgileri yer alıyor, kaydırarak diğer günleri görebiliriz.

2. **My Location** Butonunu Kullanarak Bulunduğumuz yere ait koordinatlar sayesinde bulunduğumuz ilin hava durumu bilgisini alabiliyoruz.
3. My Location butonuna bastıktan sonra bulunduğumuz yere ait veriler dışında bulunduğumuz ülkenin en büyük 3 şehrinin hava durumu bilgisine erişebiliriz, sağa doğru kaydırarak ulaşabiliriz.

**Uygulamanın Ana yapısı Bu şekilde**

## Kurulum

Öncelikle Github, OpenWeather ve Expo Hesabımız Olmalı

1. Github'dan Kodları çekmek için Bilgisayarınızda bir Klasör açın, daha sonra klasörün olduğu yerde cmd komut istemcinizi çalıştırın ve aşağıdaki kodu yapıştırın

```bash
git clone https://github.com/kaanxcode/iweatherapp.git
```

Kodu yapıştırdıktan sonra bilgisayarınıza dosyalar kopyalanmış olacak, şimdi kodlarınızı vscode ile açabilirsiniz.

2. Bağımlılıkları ve node_modules klasörünü yükleme. Öncelikle vscode da veya cmd ile terminalinizi açın

```bash
npm install
```

yaparak bağımlılıkları indirin daha sonra

```bash
npm install -g expo-cli
```

komutunu kullanarak expo'yu kurabilirsiniz.

4. Ana dizinde **.env** adında bir klasör oluşturun ve içine OpenWeatherApi'den aldığınız API keyini içine şu şekilde yapıştırın:

   `EXPO_PUBLIC_OPEN_WEATHER_KEY=APIKEY`

   daha sonra dosyayı kaydedin.

5. Projeyi başlatmak için `npm start ` demeniz yeterlidir proje ayağa kalkacaktır.
   Expo Go yükleyerek Anlık geliştrme Yapabilirsiniz.

**Kurulumun Genel Aşamaları Bu şekildedir.** Bir Sorunla Karşılaşırsanız Benimle Linkedin üzerinden iletişime geçebilirsiniz.

### Kullanılan Teknolojiler ve Paketler

- React, React Native, Expo

- Açık Kaynak Apiler için OpenWeatherApi kullanılmıştır

**Bağımlılıklar**

```json
"dependencies": {
    "@expo-google-fonts/roboto": "^0.2.3",
    "@expo-google-fonts/roboto-condensed": "^0.2.3",
    "@react-native/metro-config": "^0.75.0-main",
    "@react-navigation/material-top-tabs": "^6.6.13",
    "@react-navigation/native": "^6.1.17",
    "@react-navigation/native-stack": "^6.9.26",
    "@reduxjs/toolkit": "^2.2.3",
    "@types/react": "^18.2.73",
    "axios": "^1.6.8",
    "expo": "^50.0.14",
    "expo-font": "^11.10.3",
    "expo-localization": "^14.8.3",
    "expo-location": "^16.5.5",
    "expo-splash-screen": "^0.26.4",
    "expo-status-bar": "^1.11.1",
    "lottie-react-native": "^6

.7.2",
    "react": "^18.2.0",
    "react-native": "^0.73.6",
    "react-native-pager-view": "^6.2.3",
    "react-native-safe-area-context": "^4.8.2",
    "react-native-screens": "^3.29.0",
    "react-native-svg-transformer": "^1.3.0",
    "react-native-tab-view": "^3.5.2",
    "react-redux": "^9.1.0",
    "typescript": "^5.3.0",
    "expo-updates": "^0.24.12"
  },
```

### Notlar

- Projede eksikler var. Zaman yeterli olmasına rağmen çalıştığım ve okul vizelerim olduğu için çok zaman ayıramadım ve TypeScript entegrasyonu ve card arka planın zamana göre değişimini yapamadım.
- Mac bilgisayarım olmadığı için sadece Android üzerinden yaptım, iOS cihazlarda UI eksikleri olabilir.
- Linkedin adresim: [KaanxCode](https://www.linkedin.com/in/kaanxcode/)
