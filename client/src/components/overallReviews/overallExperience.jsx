import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import starbar from '../ratingBars/starbar.jsx';

function OverallExperience({ currentProduct }) {
  const experienceTypes = ['Play Experience', 'Level of Difficulty', 'Value for Money'];
  const experienceID = ['PlayExperience', 'LevelofDifficulty', 'ValueforMoney'];
  const experienceRatings = [currentProduct.play_experience_avg,
    currentProduct.difficulty_level_avg, currentProduct.money_value_avg];

  // Styling
  const Experience = styled.div`
    border-left: 1px solid rgb(224, 224, 224);
    padding-left: 20px;
  `;

  const ExpRating = styled.span`
    margin: 10px;
  `;

  return (
    <Experience>
      <div>Overall Experience</div>
      {experienceRatings.map((experienceRating, i) => {
        if (experienceRating !== null) {
          return (
            <div key={experienceTypes[i]}>
              <div>{experienceTypes[i]}</div>
              <div>
                {starbar(experienceRating)}
                <ExpRating id={experienceID[i]}>{experienceRating}</ExpRating>
              </div>
            </div>
          );
        }
      })}
    </Experience>
  );
}

export default OverallExperience;
