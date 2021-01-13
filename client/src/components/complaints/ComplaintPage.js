import * as React from 'react';
import { useState } from 'react'
import '../../styles/complaints/ComplaintPage.css'
import Complaint from './Complaint';
import NavbarAdmin from '../navbar/NavbarAdmin'

const data = [
  {
    name: "Parking slot",
    keywords: [
      "parking",
      "neighbor"
    ],
    content: "Someone parked on my parking slot and didn't leave a phone number",
    solved: false
  },
  {
    name: "Parking slot",
    keywords: [
      "parking"
    ],
    content: "Someone parked on my parking slot and didn't leave a phone number",
    solved: false
  },
  {
    name: "Noisy neighbors",
    keywords: [
      "neighbor"
    ],
    content: "Neighbors make a lot of noise in the evening",
    solved: false
  },
  {
    name: "Noisy animals",
    keywords: [
      "neighbor",
      "animals"
    ],
    content: "Neighbors animals are very noisy",
    solved: false
  },
  {
    name: "Noisy animals",
    keywords: [
      "animals"
    ],
    content: "Noisy animals outside",
    solved: false
  },
]

function search(query, setQuery, triggerRender, setTriggerRender, setComplaints) {
  console.log(query);
  setQuery("")

  let newData = data.filter(complaint => {
    console.log(complaint.keywords, complaint.keywords.includes(query))
    return complaint.keywords.includes(query)
  });
  console.log(newData);

  setComplaints(
    newData.length === 0 ? data : newData
  )
  setTriggerRender(-triggerRender)
}

const ComplaintPage = () => {

  const [query, setQuery] = useState("");
  const [triggerRender, setTriggerRender] = useState(1);
  const [complaints, setComplaints] = useState(data)

  return (
    <div>
      <NavbarAdmin />
      <div className="container">
        <div className="content">
          <form onSubmit={e => { search(query, setQuery, triggerRender, setTriggerRender, setComplaints); e.preventDefault() }}>
            <input type="text" placeholder="Search.." name="search" value={query} onChange={e => setQuery(e.target.value)} />
            <button type="submit"><i class="material-icons">search</i></button>
          </form>

          <div className="complaints-container">
            {complaints.map(complaint => {
              return (
                <Complaint data={complaint} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComplaintPage;