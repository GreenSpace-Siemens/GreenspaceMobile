<div align="center">
    <h2>Greenspace</h2>
</div>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#available-recommendation-systems">Available Recommendation Systems</a></li>
    <li><a href="#machine-learning-task">Machine Learning Task</a></li>
    <li><a href="#machine-learning-models-and-libraries">Machine Learning Models and Libraries</a></li>    
    <li><a href="#tools-and-packages">Tools and Packages</a></li>
    <li><a href="#project-structure-guide">Project Structure Guide</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

# Getting Started

## Prerequisites

nodejs:

https://nodejs.org/en/

npm:

    npm install npm@latest -g

Install dependencies:

    npm install

## Android

1.  Install Android Studio
2.  Import the `\android` folder in the root directory of the React Native project.
3.  Create Virtual Device and run the emulator.
4.  Start metro Bundler

        npm start

5.  Detect and Run Android emulator

        npm run android

## IOS

# Available Recommendation Systems

1. SVD++
2. [Alternating Least Squares (ALS)](https://towardsdatascience.com/prototyping-a-recommender-system-step-by-step-part-2-alternating-least-square-als-matrix-4a76c58714a1)
3. [Bayesian Personalized Ranking (BPR)](https://towardsdatascience.com/recommender-system-using-bayesian-personalized-ranking-d30e98bba0b9)
4. [Factorization Machine](<https://towardsdatascience.com/factorization-machines-for-item-recommendation-with-implicit-feedback-data-5655a7c749db#:~:text=Factorization%20Machines%20(FM)%20are%20generic,regression%2C%20classification%2C%20and%20ranking.>)
5. [Lambda Mart](https://www.educative.io/edpresso/what-is-lambdamart)
6. [Restricted Boltzmann Machines (RBM)](https://en.wikipedia.org/wiki/Restricted_Boltzmann_machine)

# Machine Learning Task

## Problem

Hiring managers and recruiters are having a hard time vetting job applications and resumes from common job listing boards and networking sites. This prevents the recruiters from narrowing down the list of applicants and finding the best applicant(s). The existing ATS Resume scanners out today have loopholes and can be cheated by job applicants which.

## Task

Given groups of data:

-   Job Seeker with skills, interests, and experience
-   Job Posting that requires a set of skills and experience

Cluster the Job Seekers and Job Posting on the same N-dimensional space and use similary scores to match a Job Seeker to a Job Posting.

## Optimization

Modify the model where it finds clusters based on weighted skills.

Job Seeker:

-   Take assessments on different skills to obtain a weighted score.

$S = Skill$

$A_S = correct / attempt$

$T_S = Attempts_S / Total Number of Attempts$

$W_S = A_S * T_S$

Job Poster:

-   Use sliding scales to measure the importance of the skill and the time of usage of the skill to get a weighted score of the same formula.

$S = Skill$

$I_S = Importance$

$T_S = Time$

$W_S = I_S * T_S$

Will need $W_S$ to modify the way model clusters the datapoints.

## Stretch Goals

1. Come up or find a better formula for the weights $W_S$
2. Apply years of experience to clustering model.

# Machine Learning Models and Libraries

## Library

**Primary:** [TensorFlow for React Native](https://js.tensorflow.org/api_react_native/0.8.0/#asyncStorageIO.)

**Secondary:** [NodeJS TensorFlow library](https://js.tensorflow.org/api_node/3.12.0/)

## Potential Model Characteristics

1. Unsupervised Learning
2. Recommender Systems
3. [Clustering](https://towardsdatascience.com/dating-algorithms-using-machine-learning-and-ai-814b68ecd75e)

4. Learning to Rank

    - Can rank companies based on culture, work life, diversity & inclusion, and salary.

5. Deep Learning

# Tools and Packages

-   [Firebase](https://firebase.google.com/)
-   [React Navigation](https://reactnavigation.org/)

# Project Structure Guide

-   [Project Structure Guide](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)

# License

Distributed under the MIT License. See `LICENSE` for more information.
