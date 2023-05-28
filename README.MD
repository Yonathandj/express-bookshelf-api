Informasi
- Express Bookshelf API adalah operasi CRUD sederhana yang digunakan untuk menangani create, read, update, dan delete buku pada lemari buku digital.
- Pada pemrograman ini saya hanya berfokus pada back-end saja. Lebih lanjut tentang request dari client saya serahkan pada Postman.
- Pada POST Request, data yang diharapkan dikirim oleh user adalah
{
 id: string, // Kelola oleh server
 title: string, // User
 createdAt: string, // Kelola oleh server
 updatedAt: string, // Kelola oleh server
 tags: array of string, // User
 body: string, // User
}

POST Request membutuhkan title, tags, dan body sebuah buku yang dikirim oleh client/user.

- Sebelumnya saya sudah pernah membuat CRUD yang mirip seperti ini. Namun, saya lakukan pada teknologi back-end yang berbeda yaitu menggunakan HAPI/HTTP-API sebagai servernya. 
- Pada pemrograman kali ini saya menggunakan teknologi
 - Express JS
 - Nanoid
 - MongoDB / database lain (Akan saya kembangkan terus setelah saya mempelajarinya hehe).

 - Devdependencies : Nodemon, EsLint.