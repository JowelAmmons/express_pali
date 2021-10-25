document.querySelector('button').addEventListener('click', () => {
  const palindrome = document.querySelector('input').value
  let user = `${palindrome}`
  let checkForPal = user.toLowerCase() === user.toLowerCase().split('').reverse().join('') ? 'Is a Palindrome' : 'Not a Palindrome '
    document.querySelector('#answer').innerText = `${checkForPal}`
  }
  );  