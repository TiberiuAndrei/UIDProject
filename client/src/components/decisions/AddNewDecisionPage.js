import * as React from 'react';
import { useState } from 'react'
import '../../styles/decisions/AddNewDecisionPage.css'

const AddNewDecisionPage = () => {

  return (
    <div className="container">
      <div className="green-container">
        <div className="content">
          <div className="title">
            <h2>Add new decision</h2>
          </div>

          <div>
            <form id="form">
              <label for="summary">Summary</label>
              <input type="text" id="summary" placeholder="Ex. Public wifi" />
              <label for="details">Details</label>
              <textarea form="form" rows="20" placeholder="Enter details..."></textarea>
              <div className="decision-footer">
                <button type="submit" className="button">
                  Add decision
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewDecisionPage;