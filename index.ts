import { conjunction, disjunction, frege, implication, Implication, negation, printTruthTable, Proof, TruthTable } from "fregejs";

console.log(`

    Manipulate logical formulas:
    
`)

// A formula object.
let formula: Implication = { operation: 'Implication', left: 'P', right: 'Q' };
formula = implication('P', 'Q');

//A formula string.
let formulaString = '(P -> Q)';

// You can parse both of them.

formula = frege.parse.toFormulaObject(formulaString);
formulaString = frege.parse.toFormulaString(formula);

console.log("Formula Object: ",formula);
console.log("Formula String: ",formulaString);

console.log(`

    Create and Print Truth Tables:

`)

const table: TruthTable = frege.generateTruthTable('(!P | (!Q | P)) <-> (A->(B->A)');
printTruthTable(table);

console.log(`

    Verify a proof:

`)

const proof: Proof = {
    1: { id: 1, type: 'Premise', expression: implication(disjunction('A', 'B'), 'Q') },
    2: { id: 2, type: 'Premise', expression: negation('Q') },
    3: { id: 3, type: 'Knowledge', expression: negation((disjunction('A', 'B'))), from: [[1,2], 'Modus Tollens'] },
    4: { id: 4, type: 'Knowledge', expression: conjunction(negation('A'), negation('B')), from: [[3], 'De Morgan'] },
    5: { id: 5, type: 'Conclusion', expression: negation('A'), from: [[4], 'Conjunction Elimination'] }
}

frege.checkProof(proof);

/**
 * For more, check the documentation: https://github.com/etec-sa/fregejs
 */