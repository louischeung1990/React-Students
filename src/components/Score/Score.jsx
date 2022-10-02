import "./Score.css"

export default function Score({scores}) {
    let highScore = 0;
    for (let score of scores) {
        if (score.score > highScore) {
            highScore = score.score
        }
    }

    return (
        <div className="Score">
            Results:
            <table>
                <tr>
                    <th>Date</th>
                    <th>Score</th>
                </tr>
                {scores.map((item) => (

                    <tr>
                        <td>{item.date}</td>
                        <td className={`${item.score === highScore ? 'highScore' : ''}`}>
                            {item.score}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}