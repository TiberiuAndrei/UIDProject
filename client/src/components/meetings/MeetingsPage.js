import * as React from 'react';
import '../../styles/meetings/MeetingsPage.css'
import MeetingHeader from './MeetingHeader';

const data = [
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
  {
    name: "Ionescu Marius's Door Repairing",
    hour: "13:00 PM",
    messages: [
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
      { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
      { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
      { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
      { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
    ]
  },
]

const MeetingsPage = () => {

  return (
    <div className="container">
      <div className="green-container">
        <div className="content">
          <div className="meetings-title">Meetings</div>
          <div className="white-container">
            <div className="meetings-container">
              {data.map(meeting => {
                return (
                  <MeetingHeader data={meeting} />
                )
              })}
            </div>
          </div>
          <div className="meetings-footer">
            <div className="button-add-meeting">
              Add New Meeting
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingsPage;