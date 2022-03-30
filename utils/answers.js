export const calculateScoreAndSortDesc = (answers) => {
    const answersWithScore = answers.map((answer) => ({
        ...answer,
        score: answer.Votes.reduce((acc, answer) => acc + (answer.upvoted ? 1 : -1), 0)
    }));

    return answersWithScore.sort((a, b) => (a.score < b.score ? 1 : -1));
};