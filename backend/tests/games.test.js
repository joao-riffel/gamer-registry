const request = require("supertest");
const app = require("../app"); 

describe("Testes da API Gamer Registry", () => {

  let gameId; 


  test("GET /games deve retornar status 200", async () => {
    const response = await request(app).get("/games");

    expect(response.statusCode).toBe(200);
  });

  test("GET /games deve retornar um array", async () => {
    const response = await request(app).get("/games");

    expect(Array.isArray(response.body)).toBe(true);
  });


  test("POST /games deve criar um jogo válido", async () => {
    const response = await request(app)
      .post("/games")
      .send({
        name: "God of War",
        genre: "Ação"
      });

    expect(response.statusCode).toBe(200); 
    expect(response.body).toHaveProperty("id");

    gameId = response.body.id; 
  });

  test("POST /games com body vazio deve retornar 400", async () => {
    const response = await request(app)
      .post("/games")
      .send({});

    expect(response.statusCode).toBe(400);
  });

  test("GET /games/:id deve buscar jogo por ID", async () => {
   
    const create = await request(app)
      .post("/games")
      .send({
        name: "FIFA",
        genre: "Esporte"
      });

    const id = create.body.id;

    const response = await request(app).get(`/games/${id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(id);
  });

 

  test("Fluxo completo: criar, buscar, deletar e validar remoção", async () => {

    const create = await request(app)
      .post("/games")
      .send({
        name: "The Witcher",
        genre: "RPG"
      });

    expect(create.statusCode).toBe(200);
    const id = create.body.id;

    const get = await request(app).get(`/games/${id}`);
    expect(get.statusCode).toBe(200);

    const del = await request(app).delete(`/games/${id}`);
    expect(del.statusCode).toBe(200);

    const getAfterDelete = await request(app).get(`/games/${id}`);
    expect(getAfterDelete.statusCode).toBe(404);
  });

});
