import { shallow } from "enzyme";
import React from "react";
import GifExpertApp from "../GifExportApp";

describe("Pruebas del componente <GifExpertApp />", () => {
  test("que haga macht con el componente <GifExpertApp />", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de traer las categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
