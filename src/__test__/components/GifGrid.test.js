const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
const React = require("react");
const { useFetchGifs } = require("../../hooks/useFetchGifs");
jest.mock("../../hooks/useFetchGifs");
import "@testing-library/jest-dom";

describe("Pruebas de GifGrid", () => {
  const categoria = "OnePunch";

  test("muestra correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={categoria} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se carga", () => {
    const gifs = [
      {
        id: "abc",
        title: "Cualquier cosa",
        url: "http://localhost/cualquier/cosa.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={categoria} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
