import React from 'react'

function Suggestions() {
    const ListVideo=[
        {
            src:"https://www.youtube.com/embed/e6MxJbYyB5E",
            name:"“Sia - Unstoppable"
        },
        {
            src:"https://www.youtube.com/embed/EjWAdKWEVUE",
            name:"“Radiohead - Creep (Acoustic Cover)"

        },
        {
            src:"https://www.youtube.com/embed/UyaZmFGyuMg",
            name:"“Jonathan Roy - Keeping Me Alive"

        },
        {
            src:"https://www.youtube.com/embed/NxUkJpdgZLA",
            name:"“Sia - UnstoppStand By Me - Ben E. Kingable"
        }
    ]
    return (
        <div style={{marginLeft:"20px", marginTop:"30px"}}>
       <div>
           {ListVideo.map(el=>(
            <div>
               <iframe width="200" height="150" src={el.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <h5 style={{marginTop:"2px"}}>{el.name}</h5> 
            </div>
               )
      
           )}
       </div>
        </div>
    )
}

export default Suggestions
