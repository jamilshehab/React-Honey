  import React from "react";
  import isotopeimg from '../images/grid/h5.jpg'
  import isotopeimg1 from '../images/grid/h6.jpg'
  import isotopeimg2 from '../images/grid/h7.jpg'
  import isotopeimg3 from '../images/grid/h8.jpg'
  import isotopeimg4 from '../images/grid/h9.jpg'
  import isotopeimg5 from '../images/grid/h10.jpg'
  import isotopeimg6 from '../images/grid/h11.jpg'
  import isotopeimg7 from '../images/grid/h12.jpg'
  import Isotope from 'isotope-layout';
import { Col, Row } from "react-bootstrap";
  const IsotopeMaysonary = () => {
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')
    // initialize an Isotope object with configs
    React.useEffect(() => {
      isotope.current = new Isotope('#container', {
        itemSelector: '.item',
        layoutMode: 'masonry',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
    // handling filter key change
    React.useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])
    const handleFilterKeyChange = key => () => setFilterKey(key)
    return (
         <div>
        <div className='text-center isotope-navigate justify-content-center'>
            <button onClick={handleFilterKeyChange('*')}>All</button>
            <button onClick={handleFilterKeyChange('honey')}>Honey</button>
            <button onClick={handleFilterKeyChange('naturalhoney')}>Natural Honey</button>
            <button onClick={handleFilterKeyChange('yellowhoney')}>Yellow Honey</button>
            <button onClick={handleFilterKeyChange('honeycomb')}>Honey Comb</button>
        </div>  
        <div id="container" className="mt-4 mb-4">
                <div className="item category-1 honey"><img src={isotopeimg} className='zoom-image-1'/></div>
                <div className="item category-1 honey"><img src={isotopeimg1} className='zoom-image-1'/></div>
                <div className="item category-2 honey"><img src={isotopeimg2} className='zoom-image-1'/></div>
                <div className="item category-3 yellowhoney"><img src={isotopeimg3} className='zoom-image-1'/></div>
                <div className="item category-4 naturalhoney"><img src={isotopeimg4} className='zoom-image-1'/></div>
                <div className="item category-5 naturalhoney"><img src={isotopeimg5} className='zoom-image-1'/></div>
                <div className="item category-6 honeycomb"><img src={isotopeimg6} className='zoom-image-1'/></div>             
                <div className="item category-7 yellowhoney"><img src={isotopeimg7} className='zoom-image-1'/></div>
          </div>
        </div>
    );
 };
 export default IsotopeMaysonary;