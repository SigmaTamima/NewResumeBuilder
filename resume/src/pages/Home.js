import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import templateimage from '../resources/templates/templateimage.png'
import templateimage2 from '../resources/templates/templateimage2.jpg'
import { useNavigate } from "react-router-dom";
import "../resources/templates.css";
function Home() {
  const navigate = useNavigate();
  const template=[
    {
      title: "Simple Resume",
      image: templateimage,
    },
    {
      title: "Highlighted Sections Resume",
      image:templateimage2,
    },
  

  ]
  return (
<DefaultLayout>
      <div className="row home">
        {template.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="200"
                  alt=""
                  style={{ width: "100%", }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  )
}

export default Home