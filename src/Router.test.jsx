import  {describe,it ,expect,beforeEach} from 'vitest';
import { render,screen,cleanup } from '@testing-library/react';
import { Router } from './Router';
import { getCurrentPath } from './utils';
import { vi } from 'vitest';

vi.mock('./utils.js',()=>   ({
    getCurrentPath: vi.fn()
}))

describe('Router',()=>{
    beforeEach(()=>{
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems',()=>{
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no rutes match',()=>{
        render(<Router routes={[]} defaultComponent={()=> <h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches',()=>{
        getCurrentPath.mockReturnValue('/about')

        const routes = [
            {
                path:'/',
                Component:()=> <h1>Home</h1>
            },
            {
                path:'/about',
                Component:()=> <h1>About</h1>
            }]
        
        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })
})
 