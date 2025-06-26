async function testTaskAPI() {
  const response = await fetch('http://localhost:5000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Test Task',
      description: 'This came from node script',
      userEmail: 'test@example.com',
    }),
  });

  const data = await response.json();
  console.log('Response:', data);
}

testTaskAPI().catch(console.error);
