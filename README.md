# API REST Filmes e Estilos

Esta aplicação é um projeto NestJS que implementa um CRUD completo para as entidades `filmes` e `estilos`.

## Como rodar

```bash
npm install
npm run start
```

A aplicação será iniciada em:

```
http://localhost:3000
```

## Endpoints

### Filmes

- `POST /filmes`
- `GET /filmes`
- `GET /filmes/:id`
- `GET /filmes?nome=valor`
- `PUT /filmes/:id`
- `DELETE /filmes/:id`

### Estilos

- `POST /estilos`
- `GET /estilos`
- `GET /estilos/:id`
- `GET /estilos?nome=valor`
- `PUT /estilos/:id`
- `DELETE /estilos/:id`

## Exemplo de JSON

### Criar estilo

```json
{
  "nome": "Ação"
}
```

### Criar filme

```json
{
  "estilo": 1,
  "nome": "Matrix",
  "ano": "1999",
  "duracao": "136 min",
  "foto": "https://exemplo.com/matrix.jpg",
  "sinopse": "Um hacker descobre que a realidade é uma simulação.",
  "video": "https://exemplo.com/matrix-trailer.mp4"
}
```

## Banco de dados

A aplicação usa SQLite por padrão, com o arquivo `database.sqlite` no diretório raiz.

## Observações

- Campos obrigatórios são validados e retornam erro 400.
- Respostas são retornadas em JSON.
- Erros internos retornam status 500.
- `GET /filmes` traz o estilo associado ao filme.
