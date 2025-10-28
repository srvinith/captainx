import Accordion from 'react-bootstrap/Accordion';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './CustomAccordion.css';
import langData from '../locales/langData.json';

function CustomAccordion({ language }) {
  const [activeKey, setActiveKey] = useState("0"); // single item, default open first
  const [currentImage, setCurrentImage] = useState(null);

  const data = langData[language].home.accordion;
  const text = langData[language].home;

  // handle single open (toggle logic)
  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  // update image when accordion changes
  useEffect(() => {
    const index = parseInt(activeKey);
    if (!isNaN(index)) {
      setCurrentImage(data[index]?.image || null);
    }
  }, [activeKey, data]);

  return (
   <div className="container">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-md-6 ">
            <h6 className="sec-top-titl block-view">{text.keyValueTop}</h6>
            <h2
              className="sec-title block-view"
              dangerouslySetInnerHTML={{ __html: text.keyValueTitle }}
            />
            <p className="sec-p block-view">{text.keyValueDesc}</p>

            {/* IMAGE AREA */}
            <center>
              <div className="anim-img">
                {currentImage && (
                  <img
                    key={currentImage}
                    src={currentImage}
                    alt="accordion"
                    className=" fade-image"
                  />
                )}
              </div>
            </center>
          </div>

          <div className="col-md-1"></div>

          {/* RIGHT ACCORDION */}
          <div className="col-md-5 ">
            <Accordion activeKey={activeKey} className="gradient-border-left">
              {data.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="custom-accordion-item block-view"
                >
                  <Accordion.Header
                    onClick={() => handleToggle(index.toString())}
                    className="custom-accordion-header"
                  >
                    <p>{item.title}</p>
                    <p className="accordion-icon">
                      <FaPlus
                        className={`icon ${activeKey === index.toString() ? 'rotate' : ''}`}
                      />
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="custom-accordion-body">
                    {item.desc}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
  );
}

export default CustomAccordion;
