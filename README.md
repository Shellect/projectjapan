# My exam site work

#### Для запуска проект последовательно выполнить:

- Создать ключ шифрования. Для этого выполнить в терминале или командной строке `openssl rand -base64 32` 

  Открыть файл `.env` и добавить/заменить

```
SESSION_SECRET=<тут вставить сгенерированный ключ>
```

- Установить все зависимости: `npm i`
- Убедиться, что база данных запущена. Настройки подключения смотреть/править в файле `.env`. 

  Если на компьютере не установлена СУБД, поднять контейнер: `docker compose up`  

- Инициализировать клиент *Призмы*: `prisma generate` 

- Применить миграции к базе данных: `prisma migrate deploy`