# nguyen-miniapp

## Mô tả

Đây là một ứng dụng Todo đơn giản được xây dựng với Next.js 15, React 19, Prisma ORM và sử dụng SQLite làm database. Ứng dụng cho phép bạn thêm, xem danh sách và quản lý các công việc (todo) một cách trực quan.

## Tính năng

- Thêm công việc mới (todo)
- Hiển thị danh sách todo (mới nhất lên đầu)
- Đánh dấu trạng thái hoàn thành (completed) cho từng todo
- Tự động reload danh sách khi có todo mới
- Giao diện hiện đại, responsive

## Công nghệ sử dụng

- [Next.js 15](https://nextjs.org/) (App Router, API Route)
- [React 19](https://react.dev/)
- [Prisma ORM](https://www.prisma.io/) (với SQLite)
- [Tailwind CSS](https://tailwindcss.com/) (nếu có)
- TypeScript

## Cấu trúc thư mục chính

- `app/` — Chứa các file page, layout, API route
- `components/` — Các component React như TodoForm, TodoList
- `lib/prisma.ts` — Khởi tạo Prisma Client
- `prisma/schema.prisma` — Định nghĩa schema cho database SQLite
- `public/` — Chứa các file tĩnh (icon, svg, ...)
- `.env` — Biến môi trường, cấu hình đường dẫn database

## Khởi động dự án

```bash
# Cài đặt dependencies
npm install

# Tạo database và migrate schema
npx prisma migrate dev --name init

# Khởi động server phát triển
npm run dev
```

## Scripts

- `npm run dev` — Chạy app ở chế độ phát triển
- `npm run build` — Build app
- `npm run start` — Chạy app ở chế độ production

## Tác giả

- TruongNguyenVo
