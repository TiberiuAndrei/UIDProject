import * as React from 'react';
import Announcement from './Announcemet'
import '../../styles/announcement/AnnouncementPage.css'

const data = [
                {date: "04.01.2021",
                text: "Primul text care sa ocupe doua randuri",
                messages: [
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                        ]},
                {date: "03.01.2021",
                text: "Al doilea text care sa ocupe doua randuri",
                messages: [
                    {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                    {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                    {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                    {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                ]},
                {date: "02.01.2021",
                text: "Al treilea text care sa ocupe doua randuri",
                messages: [
                ]},
                {date: "04.01.2021",
                text: "Primul text care sa ocupe doua randuri",
                messages: [
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                        ]},
                {date: "03.01.2021",
                text: "Al doilea text care sa ocupe doua randuri",
                messages: [
                    {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                    {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                    {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                    {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                ]},
                {date: "02.01.2021",
                text: "Al treilea text care sa ocupe doua randuri",
                messages: [
                ]},
                {date: "04.01.2021",
                text: "Primul text care sa ocupe doua randuri",
                messages: [
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                        ]},
                {date: "03.01.2021",
                text: "Al doilea text care sa ocupe doua randuri",
                messages: [
                    {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                    {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                    {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                    {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                ]},
                {date: "02.01.2021",
                text: "Al treilea text care sa ocupe doua randuri",
                messages: [
                ]},
                {date: "04.01.2021",
                text: "Primul text care sa ocupe doua randuri",
                messages: [
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                            {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                            {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                            {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                            {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                        ]},
                {date: "03.01.2021",
                text: "Al doilea text care sa ocupe doua randuri",
                messages: [
                    {sender: "Utilizator 1", content: "Acesta este primul mesaj"},
                    {sender: "Utilizator 2", content: "Acesta este al doilea mesaj"},
                    {sender: "Utilizator 3", content: "Acesta este al treilea mesaj"},
                    {sender: "Utilizator 4", content: "Acesta este un mesaj mai lung decat cele precendente pentru a testa mai multe cazuri"},
                ]},
                {date: "02.01.2021",
                text: "Al treilea text care sa ocupe doua randuri",
                messages: [
                ]},
                
            ]

const AnnouncementPage = () => {
    return (
        <div className = "announcements-container">
            {data.map(info => {
                return(
                    <div>
                        <Announcement data = {info}/>
                    </div>
                );
            })}
        </div>
        //<CloseAnnouncement/>
    );
}

export default AnnouncementPage;