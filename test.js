/*
function remplir_caisse(p2,p1,p50c,p20c,p10c){
    var mp_de_monnaies=[];
    mp_de_monnaies.push({piece:2,nb:p2});
    mp_de_monnaies.push({piece:1,nb:p1});
    mp_de_monnaies.push({piece:0.5,nb:p50c});
    mp_de_monnaies.push({piece:0.2,nb:p20c});
    mp_de_monnaies.push({piece:0.1,nb:p10c});
    console.log(mp_de_monnaies);
    return mp_de_monnaies;
}
*/
describe('renvoi_monnaie_map', function () {
    it('elle doit retourner la monnaie', function () {
        var testmp= [];
        testmp.push(2,4);
        testmp.push(1,5);


       expect(testmp).toEqual(renvoi_monnaie_map(7.10,remplir_caisse(3,5,2,5,2,10)));

    });
});