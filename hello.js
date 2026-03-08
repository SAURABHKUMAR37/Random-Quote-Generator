const quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "Everything you’ve ever wanted is on the other side of fear. - George Addair",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Little things make big days.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Your limitation—it’s only your imagination.",
  "Sometimes later becomes never. Do it now.",
  "Don’t wait for opportunity. Create it.",
  "Great things take time, so be patient."
];

const button=document.querySelector('button');
const quote=document.querySelector('h1');
button.addEventListener('click',()=>
{
    const index=Math.floor(Math.random()*20);
    quote.textContent=quotes[index];
})