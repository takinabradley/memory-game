export default function shuffleArray(array) {
  const unusedIndexes = []
  for (let i = 0; i < array.length; i++) {
    unusedIndexes.push(i)
  }

  const shuffledArray = []
  while (shuffledArray.length < array.length) {
    const randomNum = Math.floor(Math.random() * (unusedIndexes.length))
    const randomIndex = unusedIndexes.splice(randomNum, 1)[0]
    shuffledArray.push(array[randomIndex])
  }
  return shuffledArray
}