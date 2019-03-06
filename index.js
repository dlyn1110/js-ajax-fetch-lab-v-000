// const rootURL = 'https://api.github.com/'
//
// function getToken() {
//   //change to your token to run in browser, but set
//   //back to '' before committing so all tests pass
//   return '';
// }
//
// function forkRepo() {
//   const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
//   //use fetch to fork it!
// }
//
// function showResults(json) {
//   //use this function to display the results from forking via the API
// }
//
// function createIssue() {
//   //use this function to create an issue based on the values input in index.html
// }
//
// function getIssues() {
//   //once an issue is submitted, fetch all open issues to see the issues you are creating
// }


const baseURL = 'https://api.github.com';


function getToken() {
  return '';
}

function forkRepo() {
  debugger
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href="${json.html_url}" target="_blank">${json.html_url}`
}

function createIssue() {
  const postIssue = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  const username = ''

  fetch(`${baseURL}/repos/${username}/js-ajax-fetch-lab/issues`, {
    method: 'POST',
    body: JSON.stringify(postIssue),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues())
}

function getIssues() {
  const username = ''
  fetch(`${baseURL}/repos/${username}/js-ajax-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(json => console.log(json))
}
