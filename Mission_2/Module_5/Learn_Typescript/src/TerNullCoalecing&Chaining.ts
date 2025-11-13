// ?: ternary operator: decision making
// ?: nullish coalescing operator
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
    // if(age >= 23) {
    //     console.log('You are eligible')
    // }else {
    //     console.log('you are not eligible')
    // }

    // ternary operator using
    const result = age >= 21 ? 'You are eligible' : 'You are not eligible !';
    console.log(result)
}

// biyerJonnoEligible(25)


const userTheme = null;

const selectedThem = userTheme ?? 'Light Theme';

console.log(selectedThem)  