import * as React from 'react';
import Decision from './Decision'
import NavbarOwner from '../navbar/NavbarOwner'
import '../../styles/decisions/DecisionsPage.css'

const data = [
  {
    title: "Isolation",
    details: [
      "- vote until 13 May"
    ],
    dislike: 3,
    like: 7
  },
  {
    title: "Parking spots",
    details: [
      "- 10 new parking spot"
    ],
    dislike: 50,
    like: 50
  },
  {
    title: "Public wifi",
    details: [
      "- router 4 floor",
      "- router 2 floor"
    ],
    dislike: 10,
    like: 72
  },
]

const DecisionsPageOwner = () => {
  return (
    <div>
      <NavbarOwner />
      <div className="container">
        <div className="green-container">
          <div className="content">
            <div className="decisions-title">Decisions</div>
            <div className="white-container-owner">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default DecisionsPageOwner;