# form-api

Serviço que recebe o formulário do site e envia o lead por e-mail usando o **Resend**, com o domínio `tonyspaintingmv.com` autenticado (DKIM/SPF já configurados no DNS).

Sem banco de dados e sem CRM: o registro do lead é o e-mail que chega na caixa configurada.

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/health` | Retorna `{ ok: true, configured: boolean }` |
| `POST` | `/lead` | Recebe o formulário e envia o e-mail |

Campos aceitos (JSON): `Name`, `Phone`, `Email`, `Service`, `Message`, `Source`, `Campaign`. Campos com `_honey` ou `honeypot` são tratados como robô e descartados.

## Variáveis de ambiente

| Variável | Obrigatória | Padrão |
|---|---|---|
| `RESEND_API_KEY` | **sim** | — |
| `LEAD_TO` | não | `tonyspainting11@gmail.com` (aceita lista separada por vírgula) |
| `LEAD_FROM` | não | `Tony's Painting & Remodeling <leads@tonyspaintingmv.com>` |
| `ALLOWED_ORIGINS` | não | `https://tonyspaintingmv.com,https://www.tonyspaintingmv.com,http://localhost:4173,http://localhost:8080` |
| `PORT` | não | `3000` |

O `LEAD_FROM` precisa usar um domínio verificado no Resend. O DNS já tem `resend._domainkey` e o CNAME `send`, então `leads@tonyspaintingmv.com` deve funcionar.

## Rodar local

```bash
cd form-api
RESEND_API_KEY=re_xxx node server.mjs
curl http://localhost:3000/health
```

## Deploy no Coolify

1. **+ New → Application** no mesmo repositório `tonyspainting/Tonys-Painting`.
2. **Base Directory**: `/form-api`
3. **Build Pack**: Dockerfile e **Dockerfile Location**: `/Dockerfile`
   (o caminho é relativo ao Base Directory; colocar `/form-api/Dockerfile` gera `form-api/form-api` e quebra o build)
4. **Ports Exposes**: `3000`
5. **Domains**: `https://api.tonyspaintingmv.com`
6. **Environment Variables**:
   ```
   RESEND_API_KEY=re_...
   LEAD_TO=tonyspainting11@gmail.com
   LEAD_FROM=Tony's Painting & Remodeling <leads@tonyspaintingmv.com>
   ```
7. **Deploy**.

### DNS

Crie o registro para o subdomínio:

```
CNAME  api  tonyspaintingmv.com
```

O Traefik/Coolify emite o certificado depois que o DNS propagar.

## Ligar o site ao serviço

No app principal (o site), adicione a variável **de build** e faça o deploy:

```
VITE_FORM_ENDPOINT=https://api.tonyspaintingmv.com/lead
```

Sem essa variável, o site continua usando o FormSubmit (fallback em `src/lib/submitLead.ts`).

## Teste depois do deploy

```bash
curl -i https://api.tonyspaintingmv.com/health

curl -i -X POST https://api.tonyspaintingmv.com/lead \
  -H "Content-Type: application/json" \
  -H "Origin: https://tonyspaintingmv.com" \
  -d '{"Name":"Teste","Phone":"5080000000","Email":"teste@example.com","Service":"Interior Painting","Message":"Teste de configuracao"}'
```

O e-mail deve chegar em `tonyspainting11@gmail.com` com `reply-to` do cliente.

## Observações

- **Rate limit**: 5 envios por IP a cada 10 minutos (memória do processo).
- **Origem**: apenas as origens em `ALLOWED_ORIGINS` recebem CORS.
- Se o Resend responder erro, a API devolve `502` e o formulário mostra "Something went wrong" — nenhum lead é perdido em silêncio.
