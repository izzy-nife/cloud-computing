import React from 'react'
import Title from './title'
import { Tours } from './data'
const tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />
      
      <div className="section-center featured-center">
        {Tours.map((tour) =>{
          const {id,title,location,duration,cost,date,image,info} = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">date</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                {info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from $ {cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default tours