# About
This is an implementation of an automated QA test with Cypress for the Kenya EMR Portal

# launching the application
```bash 
npm install

npx cypress open
```

# creating a test report

```bash
npx cypress run --reporter mochawesome \
  --reporter-options reportDir="cypress/results",overwrite=false,html=false,json=true

npx mochawesome-merge "cypress/results/*.json" > mochawesome.json

npx marge mochawesome.json


```

The results will be saved in mochaawesome-report/mochaawesome.html



