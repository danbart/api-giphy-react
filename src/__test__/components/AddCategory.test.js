const React = require("react");
import "@testing-library/jest-dom";
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe("Pruebas en <AddCategpru />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de testo", () => {
    const input = wrapper.find("input");
    const value = "hola mundo";

    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("No debe postear la información de submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja del texto", () => {
    const input = wrapper.find("input");
    const value = "hola mundo";

    input.simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
