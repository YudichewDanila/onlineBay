import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import Header from "./Header";
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
    it('renders a Header', function () {
            render(<Header />);
            expect(screen.getByText('Каталог')).toBeInTheDocument();
            expect(screen.getByText('Популярные разделы')).toBeInTheDocument();
            expect(screen.getByText('Новости магазина')).toBeInTheDocument();
            expect(screen.getByText('Акции и скидки')).toBeInTheDocument();
            expect(screen.getByText('О компании')).toBeInTheDocument();
            expect(screen.getByTestId('dopMeny').classList.contains('mainNavBurMobyle')).toEqual(false);
            fireEvent.click(screen.getByTestId('mobileButtonMeny'));
            expect(screen.getByTestId('dopMeny').classList.contains('mainNavBurMobyle')).toEqual(true);
        });
  });
