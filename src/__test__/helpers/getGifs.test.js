const { getGifs } = require("../../helpers/getGifs");

describe("pruebas con getgifs  fecht", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("one Punch");
    expect(gifs.length).toBe(10);
  });
  test("debe de traer 0 elementos", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
