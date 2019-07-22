import { toggleNavbar } from './NavBar'


// Chris
describe('expect collapsed to be opposite', () => {
    test('true should change to false and vice-versa', () => {
        expect(toggleNavbar()).toEqual(!collapse)
    });
})