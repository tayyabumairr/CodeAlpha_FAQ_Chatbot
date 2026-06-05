let faqDatabase = [];

async function loadFAQs() {

    try {

        const response =
            await fetch("data/faqs.json");

        faqDatabase =
            await response.json();

        document.getElementById(
            "faqCount"
        ).textContent =
            faqDatabase.length;

    }
    catch(error){

        console.error(
            "FAQ Load Error",
            error
        );

    }

}

function getBestAnswer(question){

    let bestScore = 0;
    let bestMatch = null;

    faqDatabase.forEach(faq=>{

        const score =
            calculateSimilarity(
                question,
                faq.question
            );

        if(score > bestScore){

            bestScore = score;
            bestMatch = faq;

        }

    });

    if(!bestMatch){

        return {
            answer:
            "Sorry, I could not find a matching answer.",
            confidence:0,
            category:"Unknown"
        };

    }

    return {

        answer:
        bestMatch.answer,

        confidence:
        Math.round(
            bestScore * 100
        ),

        category:
        bestMatch.category

    };

}