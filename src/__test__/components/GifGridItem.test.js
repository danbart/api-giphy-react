import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { GifGridItem } from "../../components/GifGridItem";

const title = "un titulo";
const url = "https://localhost/";

const wrapper = shallow(<GifGridItem title={title} url={url} />);

it("Renderizar correctamente", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("Debe de tener un parrafo con el titulo", () => {
  const p = wrapper.find("p");
  expect(p.text().trim()).toBe(title);
});

it("Debe de tener la imagen igual al url y alt de los props", () => {
  const img = wrapper.find("img");
  expect(img.prop("src")).toBe(url);
  expect(img.prop("alt")).toBe(title);
});

it("Debe de tener la clase animate__fadeIn", () => {
  const div = wrapper.find("div");
  expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
});
