document.getElementById('btn').addEventListener('click', async function () {
  // Retrieve values from input fields
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value, 10);

  // Validate delay input
  if (isNaN(delay) || delay < 0) {
    alert('Please enter a valid delay in milliseconds.');
    return;
  }

  // Async function to handle delay
  async function showTextWithDelay(text, delay) {
    return new Promise(resolve => setTimeout(() => {
      document.getElementById('output').textContent = text;
      resolve();
    }, delay));
  }

  // Call the async function
  await showTextWithDelay(text, delay);
});

