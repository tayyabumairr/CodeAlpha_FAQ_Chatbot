function preprocess(text){

    return text
        .toLowerCase()
        .replace(/[^\w\s]/g,"")
        .trim();

}

function calculateSimilarity(user,faq){

    const userWords =
        preprocess(user).split(" ");

    const faqWords =
        preprocess(faq).split(" ");

    const matches =
        userWords.filter(
            word => faqWords.includes(word)
        );

    return matches.length /
           Math.max(
                userWords.length,
                faqWords.length
           );

}