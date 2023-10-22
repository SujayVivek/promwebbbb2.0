import React from 'react'
import './Timeline.css';

function Timeline() {
  return (
    <div>
            <h2>Timeline of exciting events for this Prom-Nite</h2>
<div className="timeline"> 
  <div className="timeline__event  animated fadeInUp delay-1s timeline__event--type1">
    <div className="timeline__event__icon ">
      <i className="lni-cake"></i>

    </div>
    <div className="timeline__event__date">
      Nov 4th 5:00pm
    </div>
    <div className="timeline__event__content ">
      <div className="timeline__event__title">
        Party
      </div>
      <div className="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>
  <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div className="timeline__event__icon">
      <i className="lni-burger"></i>

    </div>
    <div className="timeline__event__date">
      Nov 4th 7:00pm
    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
        Dance
      </div>
      <div className="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>
  <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div className="timeline__event__icon">
      <i className="lni-slim"></i>

    </div>
    <div className="timeline__event__date">
      Nov 4th 8:00pm
    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
        Dinner
      </div>
      <div className="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>

    </div>
  </div>
  <div className="timeline__event animated fadeInUp timeline__event--type1">
    <div className="timeline__event__icon">
      <i className="lni-cake"></i>

    </div>
    <div className="timeline__event__date">
      Nov 4th 10:00pm
    </div>
    <div className="timeline__event__content">
      <div className="timeline__event__title">
        The End
      </div>
      <div className="timeline__event__description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!</p>
      </div>
    </div>
  </div>

</div>



    </div>
  )
}

export default Timeline