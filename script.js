function testPromise() {
  const b = document.getElementById('btn');
  b.disabled = true;

  const myPromise = fetch('https://randomuser.me/api', {
    method: 'POST'
  });

  myPromise.then(response => {
      response.json()
    })
    .then(result => {
      console.info('JSON!!', result.results[0].email)
    })
    .catch(err => console.error('Mi Error!!!', err))
    .finally(() =>  b.disabled = false);
}

function test2() {
  console.info('Hlaaaa!', Date.now());
}
