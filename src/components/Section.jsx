import SectionItem from './SectionItem';
import { productsArr } from '../Data/ItemData';
const Section = () => {
    return <div className=' mt-3 row d-flex justify-content-center align-items-center'>
        <h2 className='text-center'>Music</h2>
        {
            productsArr.map((product)=>{
               return <SectionItem product={product}/>
            })
        }
    </div>
}

export default Section;