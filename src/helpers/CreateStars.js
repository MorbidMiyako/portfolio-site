export default function CreateStars(numOfStars) {
    const stars = []
    for (let i = 0; i < numOfStars; i++) {
        const newStar = {
            pxSize: Math.random()
        }
        stars.push(newStar)
    }
    return stars
}
