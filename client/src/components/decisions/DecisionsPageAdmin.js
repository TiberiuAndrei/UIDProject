import * as React from 'react';
import Decision from './Decision'
import '../../styles/decisions/DecisionsPageAdmin.css'

const data = [
  {
    title: "Izolarea blocului",
    details: [
      "detail 1"
    ],
    dislike: 3,
    like: 7
  },
  {
    title: "Locuri de parcare",
    details: [
      "detail 1",
      "detail 2",
      "detail 3",
      "detail 4",
    ],
    dislike: 50,
    like: 50
  },
  {
    title: "esxdrcufyvgbb",
    details: [
      "detail 1",
      "detail 2",
      "detail 3"
    ],
    dislike: 100,
    like: 0
  },
  {
    title: "Wifi public",
    details: [
      "detail 1",
      "detail 2"
    ],
    dislike: 10,
    like: 72
  },
]

const DecisionsPageAdmin = () => {
  return (
    <div className="container">
      <div className="green-container">
        <div className="content">
          <div className="decisions-title">Decisions</div>
          <div className="white-container">
            <div className="decisions-container">
              {data.map(info => {
                return (
                  <div>
                    <Decision data={info} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="decisions-footer">
            <div className="button-decisions-admin">
              Add New Decision
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DecisionsPageAdmin;