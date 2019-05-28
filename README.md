# Arkademy Final Assignment

# Overview

Anda di minta membuat aplikasi web untuk mengelola inventory dengan wireframe seperti berikut :

#### 1. Home

![1. Home](https://paper-attachments.dropbox.com/s_40FC9DA56CF2503230614B785B4F9101DB7F5A94D0974445CC2B1BA585439B42_1559024577979_Listing.png)


#### 2. Login

![2. Login](https://paper-attachments.dropbox.com/s_40FC9DA56CF2503230614B785B4F9101DB7F5A94D0974445CC2B1BA585439B42_1559024626478_login.png)


#### 3. Manage
![3. Manage](https://paper-attachments.dropbox.com/s_40FC9DA56CF2503230614B785B4F9101DB7F5A94D0974445CC2B1BA585439B42_1559024665811_Manage+1.png)



dan scema database seperti berikut :

**1. Tabel Items**

| Field       | Type     |                              |
| ----------- | -------- | ---------------------------- |
| id          | INT      | auto increament, Primary Key |
| productName | VARCHAR  |                              |
| price       | INT      |                              |
| category    | VARCHAR  |                              |
| stock       | INT      |                              |
| createdAt   | DATETIME | auto updated                 |


**2. Tabel Users**

| Field    | Type    |                              |
| -------- | ------- | ---------------------------- |
| id       | INT     | auto increament, Primary Key |
| email    | VARCHAR |                              |
| password | VARCHAR |                              |


**Adapun fitur dari aplikasi ini adalah :**

1. User non-login dapat mengakses halaman `home` dan `login`
2. User non-login tidak boleh mengakses halaman `manage`
3. User login dapat mengakses semua halaman dan melakukan penambahan item, perubahan item dan penghapusan item pada halaman `manage`
4. Warna background pada item `stock`  di halaman `manage` akan otomatis berubah sesuai aturan berikut :
        - Merah : Jika stok = 0 
        - Kuning : Jika stok <=10
        - Hijau : Jika stok >10



# Soal
1. Buat frontend dengan CSS framework pilihan anda sesuai dengan wireframe di atas didalam folder `/frontend`
2. Buat REST API yang terhubung dengan database untuk login dan CRUD inventory di dalam folder `/backend` 
3. Integrasi frontend dan backend untuk memenuhi fitur aplikasi yang sudah di jabarkan di atas


