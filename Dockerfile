# syntax=docker/dockerfile:1

# ---------- build ----------
# Node 22+: o @supabase/supabase-js exige >=22 e a prerenderizacao instancia o client no SSR.
FROM node:22-alpine AS build
WORKDIR /app

# O endpoint do formulário é opcional. Sem ele, o site usa o FormSubmit que
# entrega em tonyspainting11@gmail.com.
ARG VITE_FORM_ENDPOINT
ENV VITE_FORM_ENDPOINT=$VITE_FORM_ENDPOINT

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

# ---------- runtime ----------
FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
