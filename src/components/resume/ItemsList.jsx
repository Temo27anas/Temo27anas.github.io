import React from "react";
import "./itemsList.css"



const ResumeItem = ({ start_date, end_date, location, main, sub, description_list, logo}) => {
  return (
    <>
      
        
        <li className="mb-10 ltr:ml-6 rtl:mr-6" >
          <div className="bullet" />
          
          <div className="resume-item-header">
            <div className="resume-item-content">
              <h6 className="date" title="Date">
                <time>  {start_date} </time>
                <time> {" "} - {end_date} </time>
              </h6>

              <h6
                className= "location mb-4 text-sm font-normal leading-none text-gray-400"
                title="Location">
                {location}
             </h6>

              <h5
                className="text-lg font-semibold text-gray-900"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                }}
              >
                <a
                  href=""
                  target="_blank"
                  style={{
                    transitionDuration: "0.15s",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {main} </a>
              </h5>
              <p
                className="text-base font-normal text-gray-500"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  fontWeight: 400,
                }}
              >
                <a
                  href=""
                  target="_blank"
                  style={{
                    transitionDuration: "0.15s",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                > {sub} </a>
              </p>
            </div>
            {logo && (
              <div className="resume-item-logo">
                <img src={logo} alt={main} />
              </div>
            )}
          </div>

         {/* Description in bullet points */}

         <div className="description">
              <p>
                <ul>
                    {
                        description_list.map((description, index) => {
                          return(
                          <li className="mb-2">
                        <span className="text-gray-700">- </span>
                              {description}
                          </li>)
                            
                        })
                    }
                
                </ul>
                
              </p>
            </div>
        

        </li>
    </>
  );
}





const ResumeItemsList = ({dataList}) => {
    return (
        <ol className="relative ltr:border-l rtl:border-r border-accent-600">
            {dataList.map((item, index) => {
                return (
                    <ResumeItem
                        key={index}
                        start_date={item.start_date}
                        end_date={item.end_date}
                        location={item.location}
                        main={item.main}
                        sub={item.sub}
                        description_list={item.description_list}
                        logo={item.logo}
                    />
                );
            })}
        </ol>
    );
    }


export default ResumeItemsList;