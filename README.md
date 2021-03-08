# Character Creator
React frontend web app and nodejs/express backend api that together serve as a crude tabletop gaming character creator. User enters a name and birthdate and selects a class via the web app, which sends this data to the API and displays the response. The API returns a jumbled up "fantasy" version of the provided name, plus a character alignment based on the given birthdate, and a range of character stats with buffs or debuffs based on the chosen class.

## Requirements
[Node](nodejs.org) version 12 or higher.
## Installation
From the root project directory, `npm install:all`. Alternatively, `cd` into into each directory with a `package.json` and `npm install`.
## Test
From the root directory, `npm test` to run all defined unit tests for the API and the UI (frontend). To test each in isolation, `cd` into the relevant directory and `npm test`.
## Run
From the root directory, `npm start` to run both the API and the UI locally. By default, the API is configured to run at `http://localhost:8000`, the UI is configured to run at `http://localhost:3000` and the UI is configured to proxy API requests to `http://localhost:8000`.

***

# Take-home assignment
Given the above described application, the candidate will produce an infrastructure-as-code document or documents such that the application can be deployed and run on an enterprise cloud platform such as AWS, GCP, or Azure (AWS preferred). No modification or enhancement of the base application is required.

## Requirements
The IaC document should be written in a well-known and well-documented format, such as [AWS CloudFormation](https://aws.amazon.com/cloudformation/), [Terraform](https://www.terraform.io/), or [Serverless Framework](https://www.serverless.com/). This readme should be edited, or a new readme should be provided, that gives clear instructions for deploying the application to the given platform using the produced IaC document or documents.

## Suggested Enhancements
The following are not requirements, but suggestions should the candidate quickly accomplish the requirements given above and wish to add further enhancements.

- Build and Deploy process - via a script that can be run locally, a CI/CD orchestration document (e.g. a `buildspec.yml` file for AWS CodeBuild), or even just a detailed documentation checklist, produce an artifact for building and deploying the application that includes the running of all provided unit tests, and any additional tests created.

- Integration and/or end-to-end tests - add a test suite (not unit tests) for testing the application. Instructions should be provided for running the test suite. If a build process is given, integrate the test suite into this.
