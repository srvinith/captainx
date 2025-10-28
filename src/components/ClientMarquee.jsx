import cl1 from '../assets/images/client-1.svg'
import cl2 from '../assets/images/client-2.svg'
import cl3 from '../assets/images/client3.svg'
import cl4 from '../assets/images/client-4.svg'
import cl5 from '../assets/images/client-5.svg'
import langData from '../locales/langData.json'

const ClientMarquee = ({language}) => {

  const product =langData[language].products;
    

  return (
     <div className="scond-prouduct-part">
          <center>  <h5 className='second-cen-text py-3'>{product.morequee}</h5></center>
          <div className="marquee">
            <div className="marquee-content mb-3">
              <img src={cl1} alt="cl" />
              <img src={cl2} alt="cl" />
              <img src={cl3} alt="cl" />
              <img src={cl4} alt="cl" />
              <img src={cl5} alt="cl" />
              {/* Duplicate for continuous effect */}
              <img src={cl1} alt="cl" />
              <img src={cl2} alt="cl" />
              <img src={cl3} alt="cl" />
              <img src={cl4} alt="cl" />
              <img src={cl5} alt="cl" />
            </div>
          </div>
        </div>
  )
}

export default ClientMarquee