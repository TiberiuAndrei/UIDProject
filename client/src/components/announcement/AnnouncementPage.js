import * as React from 'react';
import Announcement from './Announcemet'
import '../../styles/announcement/AnnouncementPage.css'
import NavbarAdmin from '../navbar/NavbarAdmin'
import NavbarOwner from '../navbar/NavbarOwner'

const data = [
    {
        date: "04.01.2021",
        text: "Isulation",
        messages: [
            { sender: "Ion Ionescu", content: "Ok" },
            { sender: "Adina Fratile", content: "I agree" },
            { sender: "ME", content: "When will it start?" },
            { sender: "George Fratila", content: "Next month" },
            { sender: "Cristina Catelina", content: "Great" },
            { sender: "Rebeca Gheorghescu", content: "Will the entrance be free" },
            { sender: "Bogdan Nicolae", content: "Which color will it be?" },
            { sender: "Daniel Stoica", content: "Don't know yet" },
        ]
    },
    {
        date: "04.01.2021",
        text: "Discution about interphone problems",
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
        date: "03.01.2021",
        text: "Parking spots",
        messages: [
            { sender: "Utilizator 1", content: "Acesta este primul mesaj" },
            { sender: "Utilizator 2", content: "Acesta este al doilea mesaj" },
            { sender: "Utilizator 3", content: "Acesta este al treilea mesaj" },
            { sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri" },
        ]
    },
    {
        date: "02.01.2021",
        text: "Discution about house animals",
        messages: [
        ]
    }
]

const AnnouncementPage = (props) => {
    return (
        <div>

            {props.match.params.user === "admin" ? <NavbarAdmin /> : <NavbarOwner />}

            <div className="announcements-container">
                {data.map(info => {
                    return (
                        <div>
                            <Announcement data={info} />
                        </div>
                    );
                })}
            </div>
        </div>
        //<CloseAnnouncement/>
    );
}

export default AnnouncementPage;