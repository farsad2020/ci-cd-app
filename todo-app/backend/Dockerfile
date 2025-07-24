# مرحله 1: ساخت
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .

# مرحله 2: اجرای نهایی (ایمیج سبک)
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["node", "app.js"]
