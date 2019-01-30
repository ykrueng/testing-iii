# Testing III

In this project, you will demonstrate proficiency by writing unit tests for an existing React application. Your tests should verify the behaviour listed in the _Minimum Viable Product_ section.

Some of the topics covered were:

- Testing a React application.
- Using the `react-testing-library` testing framework.
- Writing unit tests for React components.

## Instructions

**Read these requirements carefully. Understand exactly what is expected _before_ starting.**

You are allowed, and encouraged, to collaborate with your peers while working on this assignment. Remember to follow the _twenty-minute rule_ and post questions to your cohort's help channel before seeking support from your PM and Instructor.

## Commits

Please push your code often and use descriptive commit messages, this helps you and your project manager.

## Project Description

In this project, you will **write unit tests** for an existing React appliation that controls a gate and shows two leds that portrait the status of the gate.

The requirements are listed under the _Minimum Viable Product_ section below.

## Project Set Up

Follow these steps to setup your git _fork_ and _branch_.

- [x] Fork this repository.
- [x] Use GitHub's website to add your project manager as collaborator on **your fork**.
- [x] **Clone your forked version** of the repository (**Not Lambda's**!).
- [x] Create a new branch: `git checkout -b <firstName-lastName>`.
- [x] Commit changes to your `<firstName-lastName>` branch.
- [x] Push often to your branch: `git push origin <firstName-lastName>`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge the `<firstName-lastName>` branch into the master branch on your fork. **Please don't merge your own pull request**
- [ ] Use GitHub's webiste to add your project manager as a reviewer on the pull-request.
- [ ] Your project manager will count the project as complete by merging the branch back into the master branch of your forked repository.

## Minimum Viable Product

After a set of interviews with the potential users of the solution, we gathered the following information about the desired functionality. Not all the information provided by our clients is relevant to the design of the solution, but it's included to help understand the requirements.

Your job is to write unit tests to ensure that the application behaves as expected.

The expected/assumed behavior of the application is listed below.

### Gate

- defaults to `unlocked` and `open`
- cannot be closed or opened if it is locked

### Dashboard

- shows the controls and display

### Display Component

- displays if gate is open/closed and if it is locked/unlocked
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if othewise
- when `locked` or `closed` use the `red-led` class
- when `unlocked` or `open` use the `green-led` class

### Controls Component

- provide buttons to toggle the `closed` and `locked` states.
- buttons' text changes to reflect the state the door will be in if clicked
- the closed toggle button is disabled if the gate is closed
- the locked toggle button is disabled if the gate is open

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- Work on [this repository for extra practice testing a legacy React application](https://github.com/LambdaSchool/React-Testing).
