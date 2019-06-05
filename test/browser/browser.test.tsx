import React from 'react';
import { IfBrowser } from '../../src';
import { renderToStaticMarkup } from 'react-dom/server';
describe('IfBrowser', () => {
    it('renders children if window exists', async () => {
        const Inner = () => (
            <p data-testid="inner">
                Hello World
            </p>
        );
        const markup = renderToStaticMarkup(
            <div data-testid="ib">
                <IfBrowser>
                    <Inner />
                </IfBrowser>
            </div>
        );
        
        expect(markup).toContain('Hello World');
    });
});
