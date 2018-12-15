import React from 'react';
import {mount} from 'enzyme';
import TButton from './tilebuttons';
import ImageLoader from 'react-loading-image';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test_Image from '../../assets/placeholder.png';

configure({ adapter: new Adapter() });

describe('Tile Button', () => {
    it('should not include image when imgsource is not passed into  property',() =>{
       const wrapper = mount(<TButton/>)
       expect(wrapper.find(ImageLoader).length).toBe(0);
    });

    it('should include image when imgsource is passed into  property',() =>{
        const wrapper = mount(<TButton imgsource="assets/test.jpg"/>)
        expect(wrapper.find(ImageLoader).length).toBe(1);
     });

     it('should Find error if imgsource is wrong',() =>{
        const wrapper = mount(<TButton imgsource="assets/test.jpg"/>)
        setTimeout(() => {
             expect(wrapper.find(".errorImgLoad").length).toBe(1);
        }, 500);
     });

     it('should Not find Error if imgsource is correct',() =>{
        const wrapper = mount(<TButton imgsource={Test_Image}/>)
        expect(wrapper.find(".errorImgLoad").length).toBe(0);
     });

});