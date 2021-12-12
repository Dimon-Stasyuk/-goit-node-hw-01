# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/0ZMLDxlRmFjxshu3bBStppOLjlgSXt

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/pKiTIWFeb4qLfbaQsXIQamrXAV0S93

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/JOx6Tkqq7FvXrvpeN30rzLo9kY6ISL

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/PaYDEOFkA39TtXTsrpwYgwZB1Vy8FR
