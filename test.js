
describe('renvoi_monnaie_map', function () {
    it('elle doit retourner la monnaie', function () {
        var testmp= [];
        testmp.push(2,4);
        testmp.push(1,5);


       expect(testmp).toEqual(renvoi_monnaie_map(7.10,remplir_caisse(3,5,2,5,2,10)));

    });
});
