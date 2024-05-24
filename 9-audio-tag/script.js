const sounds = [
  'Sailing',
  'Insane',
  'The Other Side Of Paradise',
  'No Light, No Light',
  'Achilles Come Down',
  'Happy Face',
]

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0
  })
}
