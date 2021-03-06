import element from 'vdux/element'
import moment from 'moment'
const sf = require('sheetify')
const prefix = sf('./event.css')

import ActiveButton from './activeButton'

function rsvp(status, id) {
 return {
   type: 'RSVP',
   status,
   id
 } 
}

const Event = {

  render({props}){
    const event = props.event
    const time = moment(event.dateTime).calendar()
    return (
      <div class={[prefix, 'section']}>  
        <div class='details row'>  
          <div class='pic four columns'>  
            <img src={event.imageUrl} />
          </div>  
          <div class='info eight columns'>  
            <h3>{event.title}</h3>
            <h4>{time}</h4>
            <h4>{event.location}</h4>
            <h4>{event.createdBy}</h4>
          </div>  
        </div>  
        <div class='respond-buttons row'>  
          <div class='four columns'>
            <ActiveButton click={() => rsvp(1, event.id)} text='GOING' active={event.status == 1} /> 
          </div>
          <div class='four columns'>
            <ActiveButton click={() => rsvp(0, event.id)} text='MAYBE' active={event.status == 0} /> 
          </div>
          <div class='four columns'>
            <ActiveButton click={() => rsvp(-1, event.id)} text="CAN'T GO" active={event.status == -1} /> 
          </div>
        </div>  
      </div>  
    )
  }

}

export default Event
