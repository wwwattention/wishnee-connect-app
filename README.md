# WISHNEE.CONNECT

Современное веб-приложение для WISHNEE.CONNECT с 3D-визуализацией и анимированным интерфейсом.

## Технологии

- Next.js - React фреймворк для SSR
- Material UI - библиотека компонентов
- Three.js и React Three Fiber - 3D-визуализация
- Framer Motion - анимации
- Docker - контейнеризация

## Запуск проекта с Docker

1. Клонируйте репозиторий:
```bash
git clone https://github.com/wwwattention/wishnee-connect-app.git
cd wishnee-connect-app
```

2. Соберите и запустите контейнер:
```bash
docker-compose up
```

3. Откройте http://localhost:3000 в браузере

## Запуск без Docker

```bash
# Клонируйте репозиторий
git clone https://github.com/wwwattention/wishnee-connect-app.git
cd wishnee-connect-app

# Установите зависимости
npm install

# Запустите в режиме разработки
npm run dev

# Соберите для продакшена
npm run build
npm start
```

## Структура проекта

- `/src` - исходный код
  - `/components` - React компоненты
  - `/pages` - страницы Next.js
  - `/theme` - настройки темы Material UI
  - `/utils` - вспомогательные функции

## 3D Модели

В проекте используются простые 3D модели, созданные с помощью Three.js. В продакшн-версии их можно заменить на более сложные GLTF/GLB модели с помощью useGLTF из @react-three/drei.

## Особенности проекта

- Реактивный дизайн, адаптированный для всех устройств
- Трехмерные анимированные элементы
- Взаимодействие с 3D-объектами
- Плавные анимации интерфейса
- Material Design с кастомной темой
- Оптимизированная производительность