import { render, screen } from "@testing-library/react";
import Main from "./Main";
// const intersectionObserverMock = () => ({
//   observe: (ele) => null,
// });
// window.IntersectionObserver = jest
//   .fn()
//   .mockImplementation(intersectionObserverMock);
window.test("renders home page, i am jason", () => {
  render(<Main ignore={true} />);
  const linkElement = screen.getByText(/Hi, I'm/i);
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});
