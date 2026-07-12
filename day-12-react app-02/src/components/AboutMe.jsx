const About = () => {
    
    const aboutData =[
    { 
      title: "Mission",
      image: "https://cdn.pixabay.com/photo/2016/09/27/09/33/hands-1697900_1280.jpg"
    }, {
      title: "Vision",
      image: "https://cdn.pixabay.com/photo/2016/09/27/09/33/hands-1697900_1280.jpg"
    }, {
      title: "Culture",
      image: "https://cdn.pixabay.com/photo/2016/09/27/09/33/hands-1697900_1280.jpg"
    }
  ]
  console.log(aboutData)
  return(
    <>
      <div className="container bg-info">
        <div className="row">
            {
              aboutData.map((val,i) => {
                return <div className="col-4" key={i}>
                  <div className="card">
                    <div className="card-header">
                      <img src={val.image} alt="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      {val.title}
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-info"> Read More </button>
                    </div>
                </div>
              </div>
              })
            }
          </div>
        </div>
    </>
  )
}

// {{
//   aboutData((val, index)=>{
//     return <h1 key={index}> {val.title}</h1>
//   })
//   }}


export default About;