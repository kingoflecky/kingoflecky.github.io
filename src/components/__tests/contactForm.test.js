import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

import ContactForm from "../contactForm";

describe("form fields", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain submit button", () => {
    render(<ContactForm />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it("should not display success message when form not sent", () => {
    render(<ContactForm />);
    expect(screen.queryByText('Your message has sent.')).not.toBeInTheDocument();
  });

});
