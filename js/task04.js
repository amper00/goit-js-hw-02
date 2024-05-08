function getShippingCost(country)
{

    switch (country)
    {

        const costChina = 100;
        const costChile = 250;
        const costAustralia = 170;
        const costJamaica = 120;
        case China:
            return `Shipping to ${country} will cost ${costChina}credits`;
          break;
        case Chile:
        return `Shipping to ${country} will cost  ${costChile} credits`;
          break;
        case Australia:
            return `Shipping to ${country} will cost  ${costAustralia} credits`;
            break;
        case Jamaica:
                return `Shipping to ${country} will cost  ${costJamaica} credits`;
                break;
      
        default:
          return "Sorry, there is no delivery to your country";
      }
    
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Jamaica"));